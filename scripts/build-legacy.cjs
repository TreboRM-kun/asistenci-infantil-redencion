const fs = require("node:fs");
const path = require("node:path");
const babel = require("@babel/core");
const presetEnv = require("@babel/preset-env");

const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "app.js");
const result = babel.transformFileSync(sourcePath, {
  babelrc: false,
  configFile: false,
  sourceType: "script",
  presets: [[presetEnv, { targets: { android: "4.4" }, modules: false }]]
});

fs.writeFileSync(path.join(root, "app.legacy.js"), result.code + "\n");

const polyfillPaths = [
  require.resolve("core-js-bundle/minified.js"),
  require.resolve("regenerator-runtime/runtime.js"),
  require.resolve("whatwg-fetch/dist/fetch.umd.js")
];
const polyfills = polyfillPaths
  .map(filePath => fs.readFileSync(filePath, "utf8"))
  .join("\n;\n");

fs.writeFileSync(path.join(root, "legacy-polyfills.js"), polyfills.trimEnd() + "\n");
