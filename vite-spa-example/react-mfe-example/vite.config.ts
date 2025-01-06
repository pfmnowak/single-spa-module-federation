import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: "mife",
      serverPort: 4101,
      spaEntryPoints: "src/spa.tsx",
    }),
  ],
  base: "http://localhost:4101",
});
