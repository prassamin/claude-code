# Claude Code (Community Build)

This repository contains a reconstructed, locally executable build of the **Claude Code CLI**. It was rebuilt from a raw source codebase to serve as an educational reference for agentic CLI assistants.

Because the original snapshot lacked build scripts, root configuration files, and contained deep dependencies on Anthropic’s proprietary internal packages, this repository has been heavily reverse-engineered and patched so that it can cleanly bundle and run on any machine.

## ✨ What's Included & Patched

1. **Standalone Bundler**: I've included a custom `scripts/build.ts` script that cleanly transpiles and bundles the complex React/Ink CLI source down into a single portable ESM execution file (`dist/cli.mjs`).
2. **Reconstructed Types & Configs**: Includes a fully rebuilt `package.json`, `tsconfig.json`, and manually reverse-engineered Zod schemas to ensure type-safety.
3. **Stubbed Proprietary Integrations**: All missing internal dependencies (such as `@ant/claude-for-chrome-mcp`, `@ant/computer-use-mcp`, and `WorkflowTool`) have been gracefully stubbed out in `stubs/@ant/` so the repository compiles without error.
4. **Resolved Node Mappings**: Properly handles native C++ Addon proxies and OpenTelemetry overrides without crashing `Bun.build`.

## 🚀 Getting Started

This project relies on [Bun](https://bun.sh/) for ultra-fast dependency management and building.

### 1. Install Dependencies

```bash
bun install
```

### 2. Build the CLI

Statically bundle the TypeScript, React, and Ink code into a final distributable artifact:

```bash
bun run build
# Output: ✓ Built @anthropic-ai/claude-code v0.2.29 → dist/cli.mjs
```

### 3. Run Claude Code

Once built, you can start the CLI either through the developer scripts or directly via Node:

```bash
# Start directly (recommended)
npm start

# Or run the dev sequence (builds + runs)
bun run dev
```

## ⚠️ Disclaimer

This codebase is provided strictly for educational and research purposes to study the architecture of modern agentic coding assistants. The core intelligent functionality inevitably relies on Anthropic's external LLMs and cloud infrastructure, and by default, it expects to authenticate with Anthropic systems. Certain internal features (like internal Chrome MCP tools or Workflow execution) are stubbed and intentionally non-functional.
