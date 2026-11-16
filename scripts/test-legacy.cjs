const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const acorn = require("acorn");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "app.legacy.js");
const polyfillsPath = path.join(root, "legacy-polyfills.js");
const legacyApp = fs.readFileSync(appPath, "utf8");
const polyfills = fs.readFileSync(polyfillsPath, "utf8");

acorn.parse(legacyApp, { ecmaVersion: 5, sourceType: "script" });
acorn.parse(polyfills, { ecmaVersion: 5, sourceType: "script" });
assert.ok(polyfills.includes("regeneratorRuntime"), "async runtime polyfill missing");
assert.ok(polyfills.includes("fetch"), "fetch polyfill missing");
console.log("Legacy bundle parses as ES5 and includes required runtime polyfills.");
