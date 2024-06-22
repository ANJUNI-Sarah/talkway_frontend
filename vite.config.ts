
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const buildTime = new Date();

    process.env = {
        ...process.env,
        ...loadEnv(mode, path.resolve(__dirname, 'env')),
        VITE_VERSION_KEY: buildTime.toISOString(),
    };

    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
        plugins: [react()],
        base: process.env.VITE_APP_BASE_URL,
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    }
});
