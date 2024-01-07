import esbuild, { BuildOptions } from "esbuild";
import { copy } from "esbuild-plugin-copy";
import { clean } from "esbuild-plugin-clean";
import postcssPlugin from "@chialab/esbuild-plugin-postcss";

const options: BuildOptions = {
  entryPoints: {
    "./js/autofill": "./src/content_scripts/autofill.js",
    "./js/popup": "./src/App.tsx",
  },
  bundle: false,
  outdir: "./dist",
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
    postcssPlugin(),
  ],
};

esbuild
  .build(options)
  .then(() => console.log("Build success"))
  .catch(() => console.log("Build failed"));
