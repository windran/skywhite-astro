import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [
    svelte({
      compilerOptions: {
        // Nonaktifkan TypeScript strict mode
        enableSourcemap: true,
      }
    })
  ]
});