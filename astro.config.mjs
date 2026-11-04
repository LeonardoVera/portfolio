import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://leonardovera.dev',
  output: 'static',
  integrations: [sitemap()],
});
