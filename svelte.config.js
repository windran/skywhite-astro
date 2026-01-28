// svelte.config.js - YANG BENAR
import { vitePreprocess } from '@astrojs/svelte';

export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    enableSourcemap: true
  }
};