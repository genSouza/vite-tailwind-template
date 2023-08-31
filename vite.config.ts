import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
  build: {
    outDir: "dist", // Output directory for the build
    assetsDir: "assets", // Directory for static assets like images, fonts, etc.
    minify: "esbuild", // Minify only CSS files (you can also use 'esbuild' for minifying JS and CSS)
    rollupOptions: {
      output: {
        // Customize the naming of the output files
        assetFileNames: "assets/css/mui.css",
      },
    },
  },
  plugins: [ViteMinifyPlugin({})],
});
