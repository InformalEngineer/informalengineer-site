# 06 - DESIGN DIRECTION: Rendered Nostalgia
### The design language for meshrahman.com and informalengineer.com. Attach to every design-touching session alongside styleguide_mesh_v3.

**Source (Mesh, 2026-07-08, verbatim intent):** more rendered elements, like the
sites renowned for beautiful design. Born 1996, grew up without computers at
first, then dial-up. Pokémon, Zelda, Dragon Ball, One Piece. Limited resources,
scrappy and resourceful. Libraries and books. Twilight Zone. TVO Kids. The
sites should look and feel refined but keep cultural identity through Mesh.

---

## The law: refined first, nostalgia second

The base layer of every page must stand on its own as a refined editorial site,
the kind that gets cited on design showcases: strong type, generous space,
confident color, purposeful motion. Nostalgia enters as **rendered artifacts on
top of that base**, never as a theme. If you remove every nostalgic element,
the site is still beautiful. If you remove the refinement, delete the element.

The failure mode to avoid has a name: **Geocities cosplay**. Pixel fonts for
body text, autoplaying chiptune, gif wallpaper, "under construction" banners.
That is a costume. Mesh isn't performing the 90s, he's a builder who grew up in
them, and the sites are built the way he builds: precise work with era memory
in the details.

## Hard rules

1. **Everything is rendered in code.** SVG, CSS, small inline canvas. No stock
   art, no downloaded sprite sheets, no heavy image assets for decoration.
   Scrappy is the method AND the aesthetic (limited resources, made by hand).
2. **Evoke the era, never the IP.** No Pokémon sprites, no Triforce, no DBZ or
   One Piece artwork, names, or logos. Copyright aside, referencing the feeling
   is classier than quoting the property. Use: 4-shade LCD green, "save
   complete" moments, power-level counters, wanted-poster *layout* with real
   project numbers, episode-style chapter cards.
3. **Budget: one overt artifact per viewport.** Everything else whispers
   (microcopy, hover states, easter eggs). Restraint is what keeps it refined.
4. **Decoration never blocks reading.** `prefers-reduced-motion` respected on
   every animation, contrast stays WCAG AA, no layout shift, no autoplay audio.
5. **Static export constraints hold.** No runtime dependencies, no external
   fonts/scripts for decorative pieces, graceful without JavaScript.

## Motif library (shared vocabulary)

| Motif | Source memory | Rendered as |
|---|---|---|
| CRT signal | Twilight Zone on a tube TV | Subtle scanline/vignette overlays, phosphor glow on accent elements, mono channel-style labels |
| Dial-up | 56k, the handshake, waiting | Connection-status lines, honest page-weight readouts ("this page is 41 KB, ~6 s on 56k"), progress bars that mean something |
| LCD handheld | Game Boy era | 4-shade green mini-palette for widgets, seven-segment/LCD digits for numbers, "SAVING…" / "SAVE COMPLETE" microcopy, battery indicators |
| RPG save point | Zelda, Pokémon saves | Newsletter signup as an "item get"/save moment, section anchors as save points |
| Shonen scale | DBZ power levels, One Piece bounties | Counters that count up, project cards laid out like abstracted bounty posters with real dollar amounts |
| Library card | Date-due slips, card catalogs | Essay/guide metadata styled as checkout cards with stamped dates, catalog-card index styling |
| Broadcast | TVO Kids, Saturday morning | Friendly block-color hover states, sign-off microcopy in footers |

## Per-site application

**meshrahman.com** (story, dark base + #febe04): the warmer, more personal
deployment. Library checkout cards on essays, CRT-tinged hero, dial-up honesty
line in the footer, blinking cursor accents, chapter-card framing for About.
The gold accent already reads as treasure/triforce-adjacent, lean in quietly,
never literally.

**informalengineer.com** (procedure, the lab): the drier deployment, nostalgia
through instrumentation. LCD/seven-segment digits for stats and BOM totals,
Lab Note status badges styled like cartridge labels, tested-on blocks as spec
plates, terminal/BBS textures, page-weight readout as a lab measurement.

## Easter-egg tier (whisper)

404 pages themed as lost signal / edge of the map. Konami code on the home page
may do one small delightful thing. Title-attribute jokes. llms.txt keeps
personality. None of these are ever load-bearing.

## Process

Design decisions get one sitting each (Rule 4, 00-master-plan). Additions to
this language get logged here first, then built. When in doubt between two
treatments, ship the quieter one.
