import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Schema drives everything (03-TRD §10): status badges, tested-on blocks,
// changelogs, and BOMs are typed frontmatter, not convention. If a field is
// missing, the build fails, and that is the point.

// Lab Notes (02-PRD F2): dated, status badge, ≤400 words, ≥1 real number,
// ends with a plain "next step" line.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    status: z.enum(['TESTING', 'WORKS', 'ABANDONED', 'SHIPPED']),
    nextStep: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Guides (02-PRD F3, §6): answer-first summary, Tested-on block, BOM where
// physical, changelog, difficulty + time estimate, paired video, one primary
// search query per guide (§8: one guide = one query cluster).
const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(500), // the machine-quotable core, 2-3 sentences
    publishDate: z.coerce.date(),
    category: z.enum(['Homelab', 'Self-hosted AI', 'Networking', 'Tools']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    timeEstimate: z.string(), // e.g. "2 hours", honest, not aspirational
    primaryQuery: z.string(), // the search query this guide answers
    testedOn: z.object({
      hardware: z.array(z.string()),
      software: z.array(z.string()), // named versions ("Ubuntu 22.04 LTS")
      date: z.coerce.date(),
    }),
    bom: z
      .array(
        z.object({
          item: z.string(),
          qty: z.number().default(1),
          costCAD: z.number(),
          source: z.string(), // "Amazon.ca", "eBay", "ServerPartDeals"
          link: z.string().url().optional(),
        })
      )
      .optional(),
    changelog: z
      .array(
        z.object({
          date: z.coerce.date(),
          change: z.string(),
        })
      )
      .default([]),
    video: z.string().url().optional(), // paired video embed
    cta: z.enum(['newsletter', 'kit', 'northstack']).default('newsletter'),
    relatedKit: z.string().optional(), // slug in kits collection
    draft: z.boolean().default(false),
  }),
});

// Kits (02-PRD F6, §7): curated parts lists with test data, affiliate links,
// measured costs. Affiliate disclosure is rendered on every kit page.
const kits = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/kits' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    totalCostCAD: z.number(), // measured, not estimated
    parts: z.array(
      z.object({
        name: z.string(),
        qty: z.number().default(1),
        costCAD: z.number(),
        source: z.string(),
        link: z.string().url(), // outbound click tracking per SKU from day one
        note: z.string().optional(), // "this is the one that works in IT mode"
      })
    ),
    relatedGuide: z.string().optional(), // slug in guides collection
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, guides, kits };
