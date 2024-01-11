import postcssPlugin from "@chialab/esbuild-plugin-postcss";
import autoPrefixer from "autoprefixer";
import esbuild, { BuildOptions } from "esbuild";
import { clean } from "esbuild-plugin-clean";
import { copy } from "esbuild-plugin-copy";
import { Plugin } from "postcss";
import tailwindcss from "tailwindcss";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

const options: BuildOptions = {
  entryPoints: ["./src/popup/App", "./src/content_scripts/autofill"],
  bundle: true,
  sourcemap: true,
  metafile: true,
  outdir: "dist/",
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
    htmlPlugin({
      files: [
        {
          filename: "popup/index.html",
          entryPoints: ["src/popup/App.tsx"],
          htmlTemplate: htmlTemplate,
        },
      ],
    }),
  ],
};

esbuild
  .build(options)
  .then(() => console.log("Build success"))
  .catch(() => console.log("Build failed"));
