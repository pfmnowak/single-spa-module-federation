import react from "@vitejs/plugin-react";
import { defineConfig, PluginOption } from "vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: "root",
      imo: "2.4.2",
    }) as PluginOption,
  ],
});
