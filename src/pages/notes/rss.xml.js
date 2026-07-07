import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { renderBody } from '../../lib/feeds.js';

export async function GET(context) {
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Informal Engineer · Lab Notes',
    description: 'Short dated notes from the bench. 400 words max, one real number minimum.',
    site: context.site,
    items: notes.map((note) => ({
      title: `[${note.data.status}] ${note.data.title}`,
      pubDate: note.data.date,
      link: `/notes/${note.id}/`,
      content: renderBody(note.body) + `<p>Next step: ${note.data.nextStep}</p>`,
    })),
  });
}
