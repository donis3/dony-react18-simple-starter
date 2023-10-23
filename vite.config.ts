import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import open, { apps } from "open";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/dony-react18-simple-starter/",
	plugins: [react()],
	server: {
		open: await open("http://localhost:3000/", {
			app: {
				name: apps.chrome,
			},
		}),
		host: "0.0.0.0",
		port: 3000,
	},
});
