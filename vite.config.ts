import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import mrMiniapp from '@mr/vite-plugin-miniapp';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), mrMiniapp()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: true
    }
});
