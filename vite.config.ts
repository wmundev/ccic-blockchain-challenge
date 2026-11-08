import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // Material UI v4's deep imports default to Babel CommonJS wrappers.
      // Use its shipped ES modules for Vite 8's native ESM interop.
      {
        find: /^@material-ui\/(core|icons|lab)(\/.*)?$/,
        replacement: "@material-ui/$1/esm$2",
      },
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
