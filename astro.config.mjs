import tailwindcss from "@tailwindcss/vite";
import vue from '@astrojs/vue';
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
  },
});
