import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
<<<<<<< HEAD
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
=======

export default defineConfig({
>>>>>>> cb4e315 (Login changes with dashboard)
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
=======
  plugins: [react()],
>>>>>>> cb4e315 (Login changes with dashboard)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
}));
=======
});
>>>>>>> cb4e315 (Login changes with dashboard)
