import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { renderBody } from '../../lib/feeds.js';

export async function GET(context) {
  const guides = (await getCollection('guides', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return rss({
    title: 'Informal Engineer · Guides',
    description: 'Tested procedures with bills of materials, named versions, and changelogs.',
    site: context.site,
    items: guides.map((guide) => ({
      title: guide.data.title,
      pubDate: guide.data.publishDate,
      description: guide.data.summary,
      link: `/guides/${guide.id}/`,
      content: renderBody(guide.body),
    })),
  });
}
