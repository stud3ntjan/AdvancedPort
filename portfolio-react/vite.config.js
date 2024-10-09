import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

//base: '/<ADVANCEDPORT>/',
// "dev": "vite",
// "build": "cd src && vite build",
// "start": "node server/index.js",
