/*  eslint-env node */
import rollupConfigPkg from "@r37r0m0d3l/rollup-config-pkg";

import { default as core } from "@babel/core";
import typescript from "rollup-plugin-typescript2";

const config = rollupConfigPkg("index", "nestjsi-class-validator", {
  input: "./src/index.ts",
});

config.output[2].format = "cjs";
delete config.output[2].name;

config.plugins.push(
  typescript({
    rollupCommonJSResolveHack: true,
    clean: true,
  }),
);

config.plugins[0].extensions = [...core.DEFAULT_EXTENSIONS, ".ts", ".tsx"];

config.context = "null";
config.moduleContext = "null";

export default config;
