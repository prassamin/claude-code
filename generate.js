const fs = require("fs");
try {
  const content = fs.readFileSync("src/entrypoints/sdk/coreSchemas.ts", "utf8");
  const lines = content.split("\n");
  const outLines = [
    "import * as z from 'zod';",
    "import * as schemas from './coreSchemas.js';",
  ];
  let count = 0;
  for (const l of lines) {
    if (l.startsWith("export const ") && l.includes("Schema ")) {
      const name = l.split("export const ")[1].split("Schema")[0];
      if (name && name.match(/^[A-Za-z0-9_]+$/)) {
        outLines.push(
          `export type ${name} = z.infer<typeof schemas.${name}Schema>;`,
        );
        count++;
      }
    }
  }
  fs.writeFileSync(
    "src/entrypoints/sdk/coreTypes.generated.ts",
    outLines.join("\n"),
  );
  console.log("Successfully generated " + count + " types");
  process.exit(0);
} catch (e) {
  console.error("Error:", e);
  process.exit(1);
}
