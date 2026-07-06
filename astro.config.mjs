// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Static output (03-TRD §2): zero-JS-by-default content library.
// MDX islands carry in-guide calculators; nothing here requires a server.
export default defineConfig({
  site: 'https://informalengineer.com',
  integrations: [mdx()],
});
