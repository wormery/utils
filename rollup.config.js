import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/index.ts",
  output: {
    name: "utils",
    file: "lib/utils.js",
    format: "umd",
  },
  plugins: [typescript(), resolve()],
};
