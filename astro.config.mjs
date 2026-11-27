// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.PAGES_ORIGIN || undefined,
  base: process.env.PAGES_BASE_PATH || '/',
  trailingSlash: 'always',
});
