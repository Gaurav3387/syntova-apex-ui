import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // This forces Vite to only use the React instance in your immediate node_modules
    dedupe: ["react", "react-dom"],
  },
});
