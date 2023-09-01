import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            assets: path.resolve(__dirname, './src/assets'),
            context: path.resolve(__dirname, './src/context'),
            components: path.resolve(__dirname, './src/components'),
            constants: path.resolve(__dirname, './src/constant'),
            hooks: path.resolve(__dirname, './src/hooks'),
            pages: path.resolve(__dirname, './src/pages'),
            router: path.resolve(__dirname, './src/router'),
            schema: path.resolve(__dirname, './src/schema'),
            services: path.resolve(__dirname, './src/services'),
            store: path.resolve(__dirname, './src/store'),
            types: path.resolve(__dirname, './src/types'),
            utils: path.resolve(__dirname, './src/utils'),
        },
    },
});
