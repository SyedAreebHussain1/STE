import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// // // for port sharing
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: "0.0.0.0",
//     port: 5173, // optional, specify if you want a custom port
//   },
// });
