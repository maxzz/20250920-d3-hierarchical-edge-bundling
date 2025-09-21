import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
        sourcemap: true
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    server: {
        port: 3000,
        open: true
    },
    plugins: [react()],
});
