---
title: "Rebuilt the whole web presence: 2 sites, 5 repos, $0 a month"
date: 2026-07-07
status: SHIPPED
nextStep: "Newsletter platform decision, then the re-introduction email to the old list."
tags: [meta, infrastructure]
draft: false
---

The old setup was one Ghost blog on a DigitalOcean droplet doing everything
badly at once. The new setup is two static sites: stories at
[meshrahman.com](https://meshrahman.com), procedures here.

Numbers from the rebuild:

- 2 sites, built from markdown in git, deployed to Cloudflare Pages on merge
- 5 repos in the new org (sites, redirect worker, telemetry service, ops)
- 20 redirect rules covering every URL the old site ever published, running
  in log-only mode until every destination checks out (a validation script
  asserts 301 to 200 on all of them before the flip)
- 8 essays and 2 guides migrated to their new homes so far
- $0 per month hosting, down from a ~$12 droplet (the droplet retires after
  a quarantine period, snapshots verified first)

The part nobody tells you: the actual build was the fast part. The slow part
was the redirect map, because "no link dies" is a one-line principle and a
multi-day audit. (Worth it. Some of those URLs have been collecting search
traffic since 2022.)
