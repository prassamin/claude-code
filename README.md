# Claude Code (Reconstructed Local Build)

This repository contains a reconstructed and locally executable version of the **Claude Code CLI** source code. The initial `src/` directory was obtained from a leak/dump of the underlying codebase that powers Anthropic's Claude Code agentic CLI tool.

Because the original leak only contained the raw `src/` directory, this repository has been heavily reverse-engineered and patched to allow it to compile and run outside of Anthropic's internal monorepo environments.

## Prerequisites

- [Bun](https://bun.sh/) (JavaScript runtime and package manager)

## Running Locally

To install the dependencies and start the CLI in development/watch mode:

```bash
# 1. Install dependencies mapped in package.json
bun install

# 2. Run the main CLI entrypoint in watch mode
bun run dev
```

Alternatively, you can run the primary entrypoint directly:

```bash
bun run src/entrypoints/cli.tsx
```

## Disclaimer

This codebase is provided for educational and research purposes to understand the architecture of agentic code assistants. The core intelligent functionality inevitably relies on Anthropic's external LLMs and cloud infrastructure. Certain features (like internal Chrome MCP tools or Workflow execution) are stubbed and non-functional.
