# Position Videos (Module 5 — Player Tactical Principles)

One video per position, attached to each position's **Main Principles** lesson in `lib/modules.ts`.
The two wingers share a single video. These are the coach's narrated position overviews.

| Position | Lesson slug | Video title | YouTube ID | Transcript |
|----------|-------------|-------------|------------|------------|
| GK (1) | `gk-main-principles` | Goalkeeper | `GI07BwuS9F0` | gk-goalkeeper.txt |
| CB (4/5) | `cb-main-principles` | Center Backs | `a7VtVQrwvpU` | cb-center-backs.txt |
| CM (8) | `cm-main-principles` | Center Mid | `VsoR_fI-xYQ` | cm-center-mid.txt |
| CAM (10) | `cam-main-principles` | Center Attacking Mid | `2bK36NbeGVg` | cam-center-attacking-mid.txt |
| CDM (6) | `cdm-main-principles` | Center Defensive Mid | `0nPPJZuMXXU` | cdm-center-defensive-mid.txt |
| ST (9) | `st-main-principles` | Striker | `juQ7NB-GDEo` | st-striker.txt |
| LW (11) | `lw-main-principles` | Wingers (Left and Right) | `zcTxMTwB4qk` | wingers-left-and-right.txt |
| RW (7) | `rw-main-principles` | Wingers (Left and Right) | `zcTxMTwB4qk` | wingers-left-and-right.txt |

All 7 transcripts pulled (English auto-captions, local via yt-dlp). To re-pull:

```bash
yt-dlp --skip-download --write-auto-subs --sub-lang en --sub-format vtt \
  -o '%(id)s.%(ext)s' "https://www.youtube.com/watch?v=<ID>"
```

## Cross-check notes (vs. the written Transitions / Ball Recovery / Restarts lessons)

All 7 cross-checked. Every position matched — several confirm the written concepts nearly verbatim.

- **GK** — matched (goal kick short to the 4/5 not the 6 because a striker marks our 6; set the wall;
  own the box; win the 1v1 with your hands). The video stresses **mostly hang back / own your box**
  ("pushing up is very advanced"), so GK Transitions was softened to de-emphasize sweeping.
- **CB** — matched cleanly. Receive the goal kick and play wide/forward via movement; get compact the
  instant we lose it; push up to a high line in the attacking third to pin their 9; "be up a player."
- **CM** — matched cleanly. The coach says **"box to box"** verbatim (own the central channel, run end
  to end, defend *and* attack), and confirms the 8 is the **set-piece taker** (corners + free kicks).
  Bonus the video adds (Main Principles territory): the 8 scores **first-time from zone 14**.
- **CAM** — matched cleanly. Stays above the 8/6, drops as an outlet when we win it, lives in zone 14,
  both 9 and 10 attack crosses, drops to support the 9 defensively.
- **CDM** — matched cleanly, almost verbatim. **"2-5-1 ↔ 3-4-1"** hinge, **"six always gets back,"** fill
  the gap when a CB steps up, screen the central lane, push up only when we're safe and recover instantly.
- **ST** — matched cleanly, including **"move into the channel with the ball"** (the exact concept added
  later) and "for attackers, the right *channel* matters more than the right *third*." Stays high as the
  counter outlet, leads the high press, shoots / plays wide for a cross.
- **Wingers (LW/RW)** — matched cleanly. Own the wide channels, **"always block the wide areas"** on their
  goal kicks, **wingers always take throw-ins up the line (never back)**, far-side winger tucks into the
  box on a cross, stick to your man and stop the ball going wide when defending.
