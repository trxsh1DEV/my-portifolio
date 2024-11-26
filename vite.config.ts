import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  // base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    // extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  // server: {
  //   port: 5174,
  // },
});