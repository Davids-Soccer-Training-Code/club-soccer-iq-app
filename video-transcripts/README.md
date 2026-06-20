# Video Transcripts

Cleaned English transcripts of the 15 tactical videos embedded in **Module 4: Team Tactical
Principles** (`lib/modules.ts`). They're the coach's own narration, pulled from the videos'
auto-generated captions.

These are working reference material — used to write per-video summaries in
[`../TACTICAL_PRINCIPLES_REFERENCE.md`](../TACTICAL_PRINCIPLES_REFERENCE.md) and to ground the
build-out of **Module 5: Player Tactical Principles**.

> Note: these are raw auto-caption transcripts, so expect speech-to-text artifacts (filler words,
> the occasional misheard word, no paragraph breaks). They capture the content, not polished prose.

## Files → video

| File | Lesson | YouTube ID |
|------|--------|------------|
| 01-our-goal-kicks | Goal Kicks (ours) | `8yyumq8I9HU` |
| 02-opponent-goal-kicks | Goal Kicks (opp) | `3v5zsOQeIHc` |
| 03-our-corners | Corners (ours) | `gYoBwWaZyjc` |
| 04-opponent-corners | Corners (opp) | `DpPW91-pOPs` |
| 05-throw-ins | Throw-Ins | `UeM_diD6anQ` |
| 06-our-free-kicks | Free Kicks (ours) | `tIeaDUOa4gs` |
| 07-opponent-free-kicks | Free Kicks (opp) | `5R96WUJQTUk` |
| 08-our-kickoffs | Kickoff (ours) | `vL0EWtghcqA` |
| 09-opponent-kickoffs | Kickoff (opp) | `zO7Kp4W6UxA` |
| 10-defending-in-our-defending-third | Defending Third (def) | `EQSX8lAlXBk` |
| 11-attacking-in-our-defending-third | Defending Third (atk) | `tfZWJjiYMoQ` |
| 12-defending-in-our-middle-third | Middle Third (def) | `OjT268Y245E` |
| 13-attacking-in-our-middle-third | Middle Third (atk) | `KOhimYaRRYk` |
| 14-defending-in-our-attacking-third | Attacking Third (def) | `7S-Km9zra9s` |
| 15-attacking-in-our-attacking-third | Attacking Third (atk) | `FVwYPZm_KQ8` |

## Regenerating

Requires [`yt-dlp`](https://github.com/yt-dlp/yt-dlp) (runs locally — nothing is sent to a
third-party transcript service):

```bash
yt-dlp --skip-download --write-auto-subs --sub-lang en --sub-format vtt \
  -o '%(id)s.%(ext)s' "https://www.youtube.com/watch?v=<ID>"
```

Then strip the VTT timestamps/markup and collapse the rolling-caption duplicates into plain text.
