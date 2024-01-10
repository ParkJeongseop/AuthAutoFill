import postcssPlugin from "@chialab/esbuild-plugin-postcss";
import autoPrefixer from "autoprefixer";
import esbuild, { BuildOptions } from "esbuild";
import { clean } from "esbuild-plugin-clean";
import { copy } from "esbuild-plugin-copy";
import * as fs from "fs";
import { Plugin } from "postcss";
import tailwindcss from "tailwindcss";

const contentScripts = fs.readdirSync("./src/content_scripts");
const endPoints = contentScripts.reduce((pre, cur) => {
  pre[`./content_scripts/${cur.split(".")[0]}`] = `./src/content_scripts/${cur}`;
  return pre;
}, {} as any);

const options: BuildOptions = {
  entryPoints: {
    // "./content_scripts/oldAutofill": "./src/content_scripts/oldAutofill.js",
    "./content_scripts/autofill": "./src/content_scripts/autofill.ts",
    "./popup/index": "./src/popup/App.tsx",
  },
  bundle: true,
  sourcemap: true,
  outdir: "./dist",
  jsx: "automatic",
  loader: {
    ".css": "css",
  },
  plugins: [
    clean({
      patterns: ["./dist/*"],
    }),
    copy({
      resolveFrom: "cwd",
      assets: [
        {
          from: "./public/**",
          to: "./dist",
        },
      ],
    }),
    postcssPlugin({
      plugins: [autoPrefixer(), tailwindcss() as Plugin],
    }),
  ],
};

esbuild
  .build(options)
  .then(() => console.log("Build success"))
  .catch(() => console.log("Build failed"));
