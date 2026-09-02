---
title: "Eight weeks of failure emails from a link checker that had never checked a link"
date: 2026-09-02
status: SHIPPED
nextStep: "Watch next Monday's scheduled run land green on both sites without me touching it."
tags: [meta, infrastructure, ci]
draft: false
---

Every Monday since the 13th of July, both sites emailed me to say the weekly
link check had failed. Eight Mondays, sixteen emails, and I ignored all of
them, which is the part of this note I would rather leave out.

The runs were dying in eight to nineteen seconds, and that should have been
the tell, because nothing that actually checks 122 URLs finishes that fast. lychee had removed
the `--exclude-mail` flag (mail is opt-in now, through `--include-mail`), so
the job fell over parsing its own arguments before it made a single request.
Sixteen emails about a typo in my own config.

Fixing the flag made things worse in the useful way. The check finally ran,
and the globs on meshrahman.com were pointing at `./src/**/*.md`, which
matches nothing at all, because the essays live in `./content`. Nine essays,
migrated back in July, never once checked.

So now lychee runs against the built site rather than the source, which is the
version readers actually get, and internal links resolve against the real
tree. Both sites are green: 826 link instances, 122 unique URLs, 0 errors.

What the first honest run turned up:

- 1 genuinely dead link, an old essay pointing at an Informal Engineer post
  that did not survive the Ghost migration
- 2 placeholder hostnames that the markdown renderer had quietly turned into
  real links, one of them a sentence of mine that ended in `www.` and became a
  link to `http://www/` (the parser was not wrong, exactly)
- 12 Dependabot pull requests stuck since July, because the deploy job runs on
  every PR and Dependabot does not get repository secrets, so wrangler failed
  every time with an empty token

That last one is its own small lesson about trusting a red checkmark you have
decided is someone else's problem. The dependency backlog cleared in one pass,
astro 7.0.6 to 7.2.10 and next 16.2.10 to 16.3.4.
