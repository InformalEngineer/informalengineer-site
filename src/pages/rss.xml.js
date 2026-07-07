import rss from '@astrojs/rss';
import { feedItems } from '../lib/feeds.js';

export async function GET(context) {
  return rss({
    title: 'Informal Engineer',
    description:
      'Engineered guides and lab notes for people who build their own infrastructure. Everything tested, numbers included.',
    site: context.site,
    items: await feedItems(),
  });
}
