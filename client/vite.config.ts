import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: "../node_modules/.vite",
  envDir: "../",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
