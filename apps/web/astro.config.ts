import node from '@astrojs/node';
import solidJs from '@astrojs/solid-js';
import {defineConfig} from 'astro/config';

export default defineConfig({
    integrations: [solidJs({})],
    output: 'static',
    adapter: node({
        mode: 'standalone',
    }),
    experimental: {
        svg: true,
    },
    // vite: {
    //     plugins: [tsconfigPaths({root: './'})],
    // },
});
