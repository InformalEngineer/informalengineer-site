# informalengineer-site (WS-2)

The site of Informal Engineer: a company shaped like a lab. Part of the Digital
Presence Program; the full document set (00-master-plan, 02-PRD, 03-TRD,
04-migration, 05-content-engine) lives in the `InformalEngineer/ops` repo.
This file is the working summary.

## STYLE: non-negotiable

**Every public-facing word (guides, Lab Notes, kit pages, page copy, newsletter)
MUST follow [styleguide_mesh_v3.md](./styleguide_mesh_v3.md) in this repo.**
Read it before writing or editing any content. Hard rules most often violated:

- Zero em-dashes. No semicolons. No "it's not X, it's Y".
- No delve/unpack/leverage/seamless/game-changer/journey, no perfect triads,
  no rhetorical-question openers, no summary endings, no performed enthusiasm.
- First person, comma-connected sentences, parenthetical asides, simple words.
- Named versions always ("Ubuntu 22.04 LTS", never "Linux"). Real numbers with
  units. Honest failure modes are mandatory, not optional.
- Guide titles are outcomes with numbers ("Build a 48TB NAS for $300 with used
  SAS drives"). Lab Note titles are process timestamps. No unearned superlatives.

## What this site is (02-PRD summary)

**Brand promise: everything tested, numbers included.** Real engineering rigor
applied to informal territory (used SAS drives, $200 servers, self-hosted AI).
Every artifact carries at least one measurement, table, or bill of materials.
Mesh appears as founder/author; the brand is built to outgrow the person.
Story lives on meshrahman.com; procedure lives here (routing rule D7).

**IA:** `/` · `/guides` + `/guides/[slug]` (filter: Homelab · Self-hosted AI ·
Networking · Tools) · `/notes` + `/notes/[slug]` (status badges: TESTING /
WORKS / ABANDONED / SHIPPED) · `/kits` + `/kits/[slug]` · `/northstack`
(landing + waitlist only, the product has its own workspace) · `/research` ·
`/about` (editorial standards, the Tteck dedication verbatim and permanent) ·
`/newsletter`.

**Launch gates (F1-F10):** value prop above the fold; Lab Notes system (≤400
words, RSS); guides system (sticky ToC, Tested-on block, changelog, difficulty
+ time, copy-button code blocks); 3 guides + 5 Lab Notes live; SAS NAS kit
page; Northstack landing + waitlist (email + desired app); newsletter live;
**full-content RSS, global + per-section** (this audience lives in readers,
truncation is reputational damage); 301 targets in place before the redirect flip.

**Hard non-goals (do not build, do not suggest):** consultancy/services (D6),
cart/checkout, accounts, comments, paid tiers, IE-branded social content ops,
holding inventory (until the data-locked trigger in 02-PRD §7 fires: one kit
≥50 outbound clicks/month for two consecutive months AND ≥30% margin).

**Compliance gates:** affiliate disclosure on every kit page, every time.
Nothing DRT/employer-specific ever.

## Architecture (03-TRD)

- **Astro + MDX + content collections, static output.** Zero-JS-by-default;
  MDX islands only where a guide genuinely needs interactivity (calculators).
- **Schema drives everything.** Frontmatter types for guides/notes/kits live in
  `src/content.config.ts`. Status badges, tested-on blocks, changelogs, and
  BOMs are schema, not convention. Change schemas deliberately; content that
  fails validation should fail the build.
- Deploys via Cloudflare Pages: PR → preview URL → merge to `main` →
  production. `main` is protected; all changes via PR, even solo.
- The site must NEVER depend on the homelab being up (newsletter/analytics/
  telemetry are enhancements with graceful degradation).
- Conventional commits: `feat:`, `fix:`, `content:`, `chore:`. Content uses
  `content:` so the git log doubles as an editorial log.
- Secrets in Cloudflare Pages env vars / GitHub Actions secrets, never in repo.
- SEO (02-PRD §8): one guide = one query cluster; `Article`+`HowTo`+`FAQPage`
  schema per guide; `Product`/`ItemList` on kits; llms.txt + llms-full.txt;
  AI crawlers allowed; stable URLs, visible dates, named author, changelogs.

## Build order (03-TRD §10)

Collections schema FIRST (done) → deploy pipeline → notes section → guides →
kits → Northstack page → calculators. Phase gates are binary ("deployed to
production?"); nothing in phase N+1 starts before phase N is live.

## Process rules (00-master-plan)

- Rule 1: new ideas become Lab Notes here or essays on meshrahman.com. Never
  new brands, domains, or site sections.
- Rule 3: a Lab Note is ≤400 words, ≥1 real number, ≤30 minutes.
- Rule 4: build sessions start with "what's the next unchecked item in the
  phase plan?". Approach changes need a decision-log amendment in
  00-master-plan (ops repo) first.

---

## Astro development notes

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
