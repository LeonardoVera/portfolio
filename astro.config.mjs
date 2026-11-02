import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://leonardovera.netlify.app',
  output: 'static',
  integrations: [sitemap()],
});
