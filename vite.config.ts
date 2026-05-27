import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [svgr({ svgrOptions: { icon: true } }), react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/styles" as *;
        @use "@/assets/styles/mixins" as *;
        `,
      },
    },
  },
});
