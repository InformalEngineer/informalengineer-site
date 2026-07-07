import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const md = new MarkdownIt();

// Full-content feeds (02-PRD F9): this audience lives in readers and
// truncation is reputational damage.
export function renderBody(body) {
  return sanitizeHtml(md.render(body || ''), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
  });
}

export async function feedItems() {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  const guides = await getCollection('guides', ({ data }) => !data.draft);
  const items = [
    ...notes.map((note) => ({
      title: `[${note.data.status}] ${note.data.title}`,
      pubDate: note.data.date,
      link: `/notes/${note.id}/`,
      content: renderBody(note.body) + `<p>Next step: ${note.data.nextStep}</p>`,
    })),
    ...guides.map((guide) => ({
      title: guide.data.title,
      pubDate: guide.data.publishDate,
      description: guide.data.summary,
      link: `/guides/${guide.id}/`,
      content: renderBody(guide.body),
    })),
  ];
  return items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
}
