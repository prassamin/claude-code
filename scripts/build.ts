/**
 * OpenClaude build script — bundles the TypeScript source into a single
 * distributable JS file using Bun's bundler.
 *
 * Handles:
 * - bun:bundle feature() flags → all false (disables internal-only features)
 * - MACRO.* globals → inlined version/build-time constants
 * - src/ path aliases
 */

import pkg from "../package.json";

const version = pkg.version;
const name = pkg.name;
// Feature flags — all disabled for the open build.
// These gate Anthropic-internal features (voice, proactive, kairos, etc.)
const featureFlags: Record<string, boolean> = {
  VOICE_MODE: false,
  PROACTIVE: false,
  KAIROS: false,
  BRIDGE_MODE: false,
  DAEMON: false,
  AGENT_TRIGGERS: false,
  MONITOR_TOOL: false,
  ABLATION_BASELINE: false,
  DUMP_SYSTEM_PROMPT: false,
  CACHED_MICROCOMPACT: false,
  COORDINATOR_MODE: false,
  CONTEXT_COLLAPSE: false,
  COMMIT_ATTRIBUTION: false,
  TEAMMEM: false,
  UDS_INBOX: false,
  BG_SESSIONS: false,
  AWAY_SUMMARY: false,
  TRANSCRIPT_CLASSIFIER: false,
  WEB_BROWSER_TOOL: false,
  MESSAGE_ACTIONS: false,
  BUDDY: false,
  CHICAGO_MCP: false,
  COWORKER_TYPE_TELEMETRY: false,
};

const result = await Bun.build({
  entrypoints: ["./src/entrypoints/cli.tsx"],
  outdir: "./dist",
  target: "node",
  format: "esm",
  splitting: false,
  sourcemap: "external",
  minify: false,
  naming: "cli.mjs",
  banner: "#!/usr/bin/env node\n",
  define: {
    // MACRO.* build-time constants
    // Set version high enough to pass minimum version checks
    "MACRO.VERSION": JSON.stringify("99.0.0"),
    "MACRO.BUILD_TIME": JSON.stringify(new Date().toISOString()),
    "MACRO.ISSUES_EXPLAINER": JSON.stringify(
      "report the issue at https://github.com/anthropics/claude-code/issues",
    ),
  },
  plugins: [
    {
      name: "bun-bundle-shim",
      setup(build) {
        // Resolve `import { feature } from 'bun:bundle'` to a shim
        build.onResolve({ filter: /^bun:bundle$/ }, () => ({
          path: "bun:bundle",
          namespace: "bun-bundle-shim",
        }));
        build.onLoad({ filter: /.*/, namespace: "bun-bundle-shim" }, () => ({
          contents: `export function feature(name) { return false; }`,
          loader: "js",
        }));

        // Resolve react/compiler-runtime to the standalone package
        build.onResolve({ filter: /^react\/compiler-runtime$/ }, () => ({
          path: "react/compiler-runtime",
          namespace: "react-compiler-shim",
        }));
        build.onLoad(
          { filter: /.*/, namespace: "react-compiler-shim" },
          () => ({
            contents: `export function c(size) { return new Array(size).fill(Symbol.for('react.memo_cache_sentinel')); }`,
            loader: "js",
          }),
        );

        // NOTE: @opentelemetry/* kept as external deps (too many named exports to stub)

        // Resolve native addon and missing snapshot imports to stubs
        for (const mod of [
          "audio-capture-napi",
          "audio-capture.node",
          "image-processor-napi",
          "modifiers-napi",
          "url-handler-napi",
          "color-diff-napi",
          "sharp",
          "@anthropic-ai/mcpb",
          "@ant/claude-for-chrome-mcp",
          "@anthropic-ai/sandbox-runtime",
          "asciichart",
          "plist",
          "cacache",
          "fuse",
          "code-excerpt",
          "stack-utils",
        ]) {
          build.onResolve({ filter: new RegExp(`^${mod}$`) }, () => ({
            path: mod,
            namespace: "native-stub",
          }));
        }
        build.onLoad({ filter: /.*/, namespace: "native-stub" }, () => ({
          // Comprehensive stub that handles any named export via Proxy
          contents: `
const noop = () => null;
const noopClass = class {};
const handler = {
  get(_, prop) {
    if (prop === '__esModule') return true;
    if (prop === 'default') return new Proxy({}, handler);
    if (prop === 'ExportResultCode') return { SUCCESS: 0, FAILED: 1 };
    if (prop === 'resourceFromAttributes') return () => ({});
    if (prop === 'SandboxRuntimeConfigSchema') return { parse: () => ({}) };
    return noop;
  }
};
const stub = new Proxy(noop, handler);
export default stub;
export const __stub = true;
// Named exports for all known imports
export const SandboxViolationStore = null;
export const SandboxManager = new Proxy({}, { get: () => noop });
export const SandboxRuntimeConfigSchema = { parse: () => ({}) };
export const BROWSER_TOOLS = [];
export const getMcpConfigForManifest = noop;
export const ColorDiff = null;
export const ColorFile = null;
export const getSyntaxTheme = noop;
export const plot = noop;
export const createClaudeForChromeMcpServer = noop;
// OpenTelemetry exports
export const ExportResultCode = { SUCCESS: 0, FAILED: 1 };
export const resourceFromAttributes = noop;
export const Resource = noopClass;
export const SimpleSpanProcessor = noopClass;
export const BatchSpanProcessor = noopClass;
export const NodeTracerProvider = noopClass;
export const BasicTracerProvider = noopClass;
export const OTLPTraceExporter = noopClass;
export const OTLPLogExporter = noopClass;
export const OTLPMetricExporter = noopClass;
export const PrometheusExporter = noopClass;
export const LoggerProvider = noopClass;
export const SimpleLogRecordProcessor = noopClass;
export const BatchLogRecordProcessor = noopClass;
export const MeterProvider = noopClass;
export const PeriodicExportingMetricReader = noopClass;
export const trace = { getTracer: () => ({ startSpan: () => ({ end: noop, setAttribute: noop, setStatus: noop, recordException: noop }) }) };
export const context = { active: noop, with: (_, fn) => fn() };
export const SpanStatusCode = { OK: 0, ERROR: 1, UNSET: 2 };
export const ATTR_SERVICE_NAME = 'service.name';
export const ATTR_SERVICE_VERSION = 'service.version';
export const SEMRESATTRS_SERVICE_NAME = 'service.name';
export const SEMRESATTRS_SERVICE_VERSION = 'service.version';
export const AggregationTemporality = { CUMULATIVE: 0, DELTA: 1 };
export const DataPointType = { HISTOGRAM: 0, SUM: 1, GAUGE: 2 };
export const InstrumentType = { COUNTER: 0, HISTOGRAM: 1, UP_DOWN_COUNTER: 2 };
export const PushMetricExporter = noopClass;
export const SeverityNumber = {};
`,
          loader: "js",
        }));

        // Resolve .md and .txt file imports to empty string stubs
        build.onResolve({ filter: /\.(md|txt)$/ }, (args) => ({
          path: args.path,
          namespace: "text-stub",
        }));
        build.onLoad({ filter: /.*/, namespace: "text-stub" }, () => ({
          contents: `export default '';`,
          loader: "js",
        }));
      },
    },
  ],
  external: [
    // OpenTelemetry — too many named exports to stub, kept external
    "@opentelemetry/api",
    "@opentelemetry/api-logs",
    "@opentelemetry/core",
    "@opentelemetry/exporter-trace-otlp-grpc",
    "@opentelemetry/exporter-trace-otlp-http",
    "@opentelemetry/exporter-trace-otlp-proto",
    "@opentelemetry/exporter-logs-otlp-http",
    "@opentelemetry/exporter-logs-otlp-proto",
    "@opentelemetry/exporter-logs-otlp-grpc",
    "@opentelemetry/exporter-metrics-otlp-proto",
    "@opentelemetry/exporter-metrics-otlp-grpc",
    "@opentelemetry/exporter-metrics-otlp-http",
    "@opentelemetry/exporter-prometheus",
    "@opentelemetry/resources",
    "@opentelemetry/sdk-trace-base",
    "@opentelemetry/sdk-trace-node",
    "@opentelemetry/sdk-logs",
    "@opentelemetry/sdk-metrics",
    "@opentelemetry/semantic-conventions",
    // Cloud provider SDKs
    "@aws-sdk/client-bedrock",
    "@aws-sdk/client-bedrock-runtime",
    "@aws-sdk/client-sts",
    "@aws-sdk/credential-providers",
    "@azure/identity",
    "google-auth-library",
  ],
});

if (!result.success) {
  console.error("Build failed:");
  for (const log of result.logs) {
    console.error(log);
  }
  process.exit(1);
}

console.log(`✓ Built ${name} v${version} → dist/cli.mjs`);
