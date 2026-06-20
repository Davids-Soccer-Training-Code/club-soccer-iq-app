# Tactical Principles — Full Reference

A complete reference for everything inside our two tactical-principles modules in
[`lib/modules.ts`](lib/modules.ts). This is the source of truth to read before building
out the rest of **Module 5: Player Tactical Principles** (the Transitions, Ball Recovery,
and Restarts lessons for each position).

There are **two** tactical-principles modules:

| # | Module | Slug | State |
|---|--------|------|-------|
| 4 | **Team Tactical Principles** | `team-tactical-principles` | Fully written — 24 lessons + 16 videos |
| 5 | **Player Tactical Principles** | `player-tactical-principles` | Scaffolded only — 40 "Coming soon" placeholders |

The plan: each position's **Main Principles** lesson gets a video link; **Transitions**,
**Ball Recovery**, and **Restarts** need to be written, drawing the position-specific
detail out of the team principles documented below.

---

## Team facts that run through everything

These show up across nearly every lesson and the player lessons should stay consistent with them.

- **Formation: 3-4-1 → 2-5-1 in attack.** Three defenders, four midfielders, one striker. When we
  attack, the **6 (CDM) pushes up and a center back drops**, so the shape becomes a **2-5-1**. The coach
  explicitly favors the 2-5-1 because it counters an opponent's 3-4-1 — and it's *why we accept being
  numbers-down on defense* in attacking moments (a deliberate trade-off, not a mistake). This is a 9v9
  team (GK + 3 back + 4 mid + 1 forward). *(Confirmed across the kickoff and open-play videos.)*
- **The back three** = two outside center backs + a central center back. The central CB plays a
  **CDM-style role when we attack** and drops into the back line when we defend.
- **"Tactical reset" is a real tool, not a giveaway.** When we're building out and there's no good
  option, deliberately kicking the ball long up the field to reset our shape is fine and encouraged —
  it's distinct from a panic giveaway. The rule against giving it to the other team still holds.
- **Wingers are our only width.** In a 3-4-1 the LW and RW provide all the width in attack **and**
  must drop all the way back to defend — they are full members of the defense.
- **The three central midfielders** — CAM (10), CM (8), CDM (6) — are our strongest area, each a
  different role but all connected.
- **Numbers notation:** the **attacking number always comes first**. `2v1` = 2 attackers vs 1
  defender (attack is up). `1v2` = 1 attacker vs 2 defenders (defense is up).
- **The golden window:** the few seconds right after possession changes are the most important
  seconds in the game — for whoever just won it (attack a disorganized defense) and whoever just
  lost it (win it straight back before they get going).
- **Press as a unit — block one side, then shift across** *(a coach concept that isn't spelled out
  in the tactical videos, but matters):* when our first defender presses, they shape their pressure to
  **block off one side of the field** (usually cutting off the switch). The instant they do, the **whole
  team shifts across to the ball side** — we overload and compact that side, and the blocked-off side goes
  "dead" because the ball can't reach it. One player's angled run is the trigger; the team's shift is what
  turns it into a trap. Everyone has a shift: ball-side players step up and tighten, **the far-side winger
  tucks inside**, and the back line slides over. This is the team-wide version of the striker's "shape the
  press / block the switch" and extends the team lessons `first-defender-slows-them-down` and
  `cover-and-support-defending`.
- **Be in the channel with the ball** *(from the videos):* supporting players should move into the
  **same channel as the ball** so the pass to them is short and supportable, instead of forcing a long
  ball across the field. The clearest case is the **striker, who is not just an attacking-third player** —
  the 9 moves all over to support: dropping into midfield, coming into the ball-side channel to be a
  short outlet, holding it up to bring others in, then spinning off to attack again. A short pass to a
  player who came into the channel beats a hopeful long ball every time.
- **The one rule above all:** never give the ball straight to the other team. To feet, into space,
  through a gap, or safely away — there is always a better option than a panic giveaway.

### Position numbers (used in Module 5)

| Number | Position | Abbrev |
|--------|----------|--------|
| 1 | Goalkeeper | GK |
| 2 | Right Back | RB |
| 3 | Left Back | LB |
| 4 / 5 | Center Back | CB |
| 6 | Defensive Midfielder | CDM |
| 7 | Right Winger | RW |
| 8 | Center Midfielder | CM |
| 9 | Striker | ST |
| 10 | Attacking Midfielder | CAM |
| 11 | Left Winger | LW |

> ✅ **Resolved:** Module 5 originally listed **LB (3)** and **RB (2)**, which implied a back four and
> contradicted the 3-4-1. Those two position modules have been **dropped** — the 3-4-1 has no true
> full-backs, and the width is covered by the wingers (LW/RW). The numbers 2 and 3 remain in the table
> above only as standard position references.

---

# MODULE 4 — Team Tactical Principles

`slug: team-tactical-principles` · importance: **Build Next** · 24 lessons across **6 sections**.

> Note: the in-app section titles all start with "Module N…". Those are the *sub-modules within*
> the Team Tactical Principles module, not the top-level modules. Below they're labeled
> **Section 1–6** to avoid confusion.

Section ordering of lessons (from the `sections` array):

1. **Attacking Principles** — protect-support-attack, get-wide-stay-wide, look-to-go-forward, pass-to-feet-space-or-angles, create-2v1-and-3v1
2. **Defending Principles** — get-compact-stay-compact, prevent-going-forward, first-defender-slows-them-down, cover-and-support-defending, create-1v2-and-1v3
3. **Transition — When We Win** — secure-the-ball-first, do-not-give-it-right-back, transition-look-forward
4. **Transition — When We Lose** — expend-max-effort, closest-player-pressure, cover-and-support-transition
5. **Restart Scenarios** — goal-kicks, corners, throw-ins, free-kicks, kickoff *(all video)*
6. **Open Play Scenarios** — defending-third, middle-third, attacking-third *(content + video)*

Plus a 7th lesson group inside section 6's lessons array: **Ball Recovery and Loss Scenarios** —
clearances, second-balls, rebounds.

---

## Section 1 — Attacking Principles (when we have the ball)

### 1. Protect, Support, Attack — `protect-support-attack`
*Once we have the ball: protect it, support the player on it, attack with purpose.*
- **Protect:** scan before the ball arrives; good first touch away from pressure, never into an
  opponent; shield with your body; decide fast (dribble / control / break into space).
- **Support:** everyone off the ball moves into space to give an option — **never stand still**
  (standing still is easy to mark and gives no help). Constantly adjust to where ball + defenders are.
- **Attack with purpose:** get it moving with speed, clean touches, and shoot when the chance is there.
- Coach: "Protect it, support each other, then go score… when the chance is there — don't think twice, shoot."

### 2. Get Wide, Stay Wide — `get-wide-stay-wide`
*Use the width of the field to stretch the defense.*
- "Get wide" = move to the touchline and use the full width — mainly the wingers, but everyone's
  spacing depends on it.
- **Get wide AND get open** — wide but hidden behind a defender doesn't help; find a spot a teammate
  can see and reach.
- **Stay wide** — resist drifting central when the ball is on the far side; that shrinks the field and
  helps the defense. Hold your channel, trust the switch.
- **Why:** width stretches the defense, opening gaps centrally and between defenders. Stay connected so
  we can swing the ball side to side.

### 3. Look to Go Forward — `look-to-go-forward`
*Always check forward options first.*
- **Plan A — Forward:** first look is always forward (dribble, forward pass, or breakaway).
- **Plan B — Wide:** if forward's covered, switch to a wide, open teammate — often the quickest route back to forward.
- **Plan C — Back, only if safe:** backward to keep possession is fine if it's an easy, controlled pass to a teammate with time.
- **Pass into space, not just to feet** — lead a teammate's run so they attack at speed.
- **Never:** a pass to the other team.

### 4. Pass to Feet, Space, or Angles — `pass-to-feet-space-or-angles`
*Three kinds of passes and when to use each.*
- **To feet:** teammate open with time/space — simple, controlled; communicate (call out pressure, tell them to check to the ball).
- **To space:** teammate marked or about to run — play slightly ahead into space so they attack forward, not with back to goal.
- **On an angle (breaking lines):** thread through a gap in the defense — often from our four midfielders — for a teammate to run onto behind the line.
- **Tactical clearance:** in a tight 1v1 near our own goal, defensive third, no pass on — get it away to safety. A clearance beats a panic giveaway.

### 5. Create 2v1 and 3v1 Situations — `create-2v1-and-3v1`
*Use numbers-up to break down the defense.*
- Attacking number first: a CM driving at two CBs alone is a **1v2**; if CAM + ST join the run it becomes **3v2**, and can become **1v0** (breakaway).
- Support isn't one fixed player — CAM/ST (already high) or a nearby winger reads the moment and joins.
- Needs communication + real passing angles (not hidden behind a defender).
- **What not to do:** stand and watch a teammate try to beat two defenders alone. Numbers up happens on purpose.

---

## Section 2 — Defending Principles (when the other team has the ball)

### 6. Get Compact, Stay Compact — `get-compact-stay-compact`
*Shrink the field — the opposite of getting wide.*
- The back three (two outside CBs + central CB) pull together as a unit; no clean gap to run/pass through.
- Gaps between spread defenders are a "highway" to our goal; compactness closes them and buys midfielders time to recover.
- **Stay** compact, not just get compact — when one CB steps to challenge, the others shift and cover. Constant adjustment.

### 7. Prevent Them from Going Forward — `prevent-going-forward`
*Closest player presses; everyone else marks tight and stays ready.*
- The player nearest the ball closes it down so they can't turn/dribble/pass forward.
- Everyone else marks the player closest to them, stays on their toes, ready to intercept.
- Goal: force the ball **sideways or backward**. A team that can't go forward can't hurt us.

### 8. The First Defender Slows Them Down — `first-defender-slows-them-down`
*The closest defender delays — does not dive in.*
- **First defender** = closest player **between the ball and our goal**. A player behind the ball doesn't count — their job is to sprint back into the play.
- **Step up, don't dive** — a missed dive leaves nobody between attacker and goal. Stay on your feet, wait for a heavy touch/mistake, get your body in front.
- **Slow them down** to buy time for teammates to become 2nd/3rd defenders.
- **Only one player presses** at a time (two pressers = a free opponent).
- **Shape the pressure** — use body position to push the attacker to a chosen side while the team shifts to cover it.
- Doing this wrong breaks the whole shape; doing it right protects everyone behind you.

### 9. The Second and Third Defenders Cover and Support — `cover-and-support-defending`
*Defending is a team job — everyone else has a role.*
- "Second and third defender" = **everyone else**, not two specific players.
- **Cover** (closest group): block the passing lanes to your mark; stay ready to become the next first defender.
- **Support** (everyone else, usually the last line): slide across, be ready for anything that breaks through.
- Example — ball in left channel, middle third: LW is first defender; CAM/CM/left CB cover; CDM/right CB/RW support from the far side.
- The big rule: ask "who's closest, next closest, furthest?" — **everyone is active**.

### 10. Create 1v2 and 1v3 Situations — `create-1v2-and-1v3`
*The mirror of 2v1/3v1 — keep the attacker outnumbered.*
- Defending, the opponent has the attacking number: **1v2** = 1 attacker vs 2 of us (good); **1v3** even better.
- Achieved by everything above working together — compactness + first defender delay + cover/support means the ball arrives near goal as 1v2 or 1v3, not 1v1.
- 1v1 is a coin flip; 1v2/1v3 we should win almost every time if we stay organized and don't dive in.

---

## Section 3 — Transition Principles: When We Win the Ball

### 11. Secure the Ball First — `secure-the-ball-first`
*The instant we win it, the first job is to keep it — calm down before speeding up.*
- The change of possession is the most chaotic moment: our shape is scrambled, an opponent is right there.
- **Control before anything** — good first touch away from the nearest opponent, shield if pressured. Same skill as Protect/Support/Attack, just with no warning.
- Rushing a risky touch here loses the ball with our shape still in defensive positions — the most costly turnover. A clean touch buys the half-second to reset.
- Calm down **to** speed up — securing first is what lets us choose when to explode forward.

### 12. Do Not Give It Right Back — `do-not-give-it-right-back`
*The opponent who just lost it is still close — don't hand it straight back.*
- They're still in attacking shape, close, alert, hungry to win it back. A second turnover punishes our scrambled shape.
- Scan for the nearest opponents (the ones who just had it) before any pass; don't thread through them.
- **Boring on purpose:** a simple sideways/back pass to an unmarked teammate protects the advantage and buys organizing time.
- Composure wins transitions.

### 13. Look to Go Forward (transition) — `transition-look-forward`
*Once the ball is safe, the seconds after a turnover are the best chance all game to attack.*
- **The golden window:** the opponent was just attacking — their shape is stretched, defenders out of position, and they need seconds to recover.
- Same Plan A/B/C, just faster and with more acceptable risk because the reward is higher.
- Don't let the window close — once secure and safe (lessons 11 & 12), look up and go; don't keep it forever.
- This is where 2v1/3v1 numbers-up moments are easiest to find (a recovering defender can't also cover a lane).

---

## Section 4 — Transition Principles: When We Lose the Ball

### 14. Give Max Effort to Win It Back — `expend-max-effort`
*The first few seconds after losing it are the best chance to win it straight back.*
- Same golden window — now it belongs to **them**, and their attack isn't organized yet either.
- **Don't hang your head** — stopping, sulking, jogging back is a free gift. Whose fault it was doesn't matter.
- Whoever lost it is usually closest to the new attack and has the **most responsibility to sprint back first**.
- Think of a **5-second alarm**: full sprint to close space and recover; if not won back, settle into normal shape.

### 15. The Closest Player Applies Pressure — `closest-player-pressure`
*The nearest player becomes the first defender immediately.*
- Same job as the First Defender lesson — step up, don't dive, slow them, shape the pressure — just in transition chaos.
- **No time to wait** for the team to organize; someone must delay the attacker now.
- **Still only one presser** — swarming leaves opponents free and no cover if beaten.
- Speed matters more here because the team behind is still scrambling — less margin for error.

### 16. Everyone Else Covers and Supports — `cover-and-support-transition`
*While the closest presses, everyone else races to get compact and cover.*
- Same cover/support roles, faster reaction.
- **Get compact fast** — we were just in attacking shape (spread out, gaps everywhere); close it now.
- React fast enough and a moment that could be 2v1/3v1 **against** us becomes 1v2/1v3 **for** us within seconds.
- This is the payoff of all six transition lessons working together.

---

## Section 5 — Restart Scenarios (video lessons)

All five are short video lessons. Throw-Ins also has written `afterVideosBody` text on defending throw-ins.

| Lesson | Slug | Videos (title → YouTube ID) |
|--------|------|------------------------------|
| Goal Kicks | `restart-goal-kicks` | Our Goal Kicks → `8yyumq8I9HU` · Opponent Goal Kicks → `3v5zsOQeIHc` |
| Corners | `restart-corners` | Our Corners → `gYoBwWaZyjc` · Opponent Corners → `DpPW91-pOPs` |
| Throw-Ins | `restart-throw-ins` | Throw-Ins → `UeM_diD6anQ` |
| Free Kicks | `restart-free-kicks` | Our Free Kicks → `tIeaDUOa4gs` · Opponent Free Kicks → `5R96WUJQTUk` |
| Kickoff | `restart-kickoff` | Our Kickoffs → `vL0EWtghcqA` · Opponent Kickoffs → `zO7Kp4W6UxA` |

**Throw-Ins — written defending notes (`afterVideosBody`):** no video for defending throw-ins because
it's self-explanatory, but key points: (1) **don't let it go over your head** into the space behind —
know the thrower's target before release; (2) **back up enough** so you don't have to turn and run — a
step or two of cushion to see ball and mark, moving forward to meet the pass; (3) **win the 50/50 and
the second ball — be brave** — commit first, react first to flick-ons and knockdowns.

---

## Section 6 — Open Play Scenarios (content + video)

Each lesson splits the third into a **central channel** and **wide channels**, with a defending job
and an attacking job in each, plus a `videoIntro` ("find your own position first, build a picture, don't
try to memorize it all").

### Defending Third — `open-play-defending-third`
- **Defend central:** most dangerous space (points at our goal). Back three stay compact; CM drops in,
  sometimes CAM, to outnumber centrally (turn 1v1 into 1v2/1v3). One first defender presses but never
  dives. Force the ball sideways/backward.
- **Defend wide:** the winger on that side is the first defender and slows the wide attacker so there's
  **no breakaway** (a wide breakaway = dangerous cross/shot). Shape pressure to force inside to our
  center mids or down the line out of bounds. If a CB shifts wide, central CDM + other CB cover behind.
- **Attack central:** Protect, Support, Attack — calm first touch, never force a risky pass in front of
  our goal (most dangerous giveaway). Then Look to Go Forward; "safe" matters even more here.
- **Attack wide:** wingers get wide as the outlet to escape pressure; play up the line, or back inside to
  a center mid to switch. Safe beats risky; never hand it back in front of our goal.
- **Videos:** Defending in Our Defending Third → `EQSX8lAlXBk` · Attacking in Our Defending Third → `tfZWJjiYMoQ`

### Middle Third — `open-play-middle-third`
- **Our strongest area** — three central mids (CAM, CM, CDM).
- **Defend central:** first defender (often CAM) presses without diving; CM + CDM cover/support behind;
  CBs watch for long balls; striker stays high as outlet but can join the press if the ball is higher.
- **Defend wide:** wingers drop back between the middle and defending thirds and track the opponent's
  winger (follow a high winger). Don't let defenders get dragged out wide.
- **Attack central:** ~99% starts with CB into a central mid, or a winger dropping into a central pocket.
  Then angled, line-breaking passes for wingers/striker to run onto. Take the 1v1 (safer here) but never
  force a 1v2 — pass to an open teammate.
- **Attack wide:** get it down the line with speed for a cross, or play over the top for CAM/striker.
  **Big warning:** a winger losing it in the wide middle third hands them a counter — protect the ball.
- **Videos:** Defending in Our Middle Third → `OjT268Y245E` · Attacking in Our Middle Third → `KOhimYaRRYk`

### Attacking Third — `open-play-attacking-third`
- **Attack central:** our goal-scoring channel — the box and **Zone 14**. Connect passes for the best
  look but **shoot as much as possible**. Striker, CAM, CM fill the central channel; CDM stays between
  the middle and attacking thirds as counter-safety; far-side winger comes inside on a cross.
- **Attack wide:** almost always a cross. If a CM/CAM is the wide player, the winger takes their central
  spot. Reset to width when in doubt.
- **Defend (we just lost it):** the danger is a **counter-attack**. CDM + two CBs are the safety layer at
  all times; everyone sprints back, whoever lost it reacts first, closest presses (only one). Win it back
  fast and high if possible.
- **Defend wide:** the far corner is the best place to lose it (farthest from our goal, few options to
  play out) — press immediately, center mids rush to support; if they boot it clear, CDM/CB mop up.
- **Videos:** Defending in Our Attacking Third → `7S-Km9zra9s` · Attacking in Our Attacking Third → `FVwYPZm_KQ8`

---

## Section 6b — Ball Recovery and Loss Scenarios

(These live in the same lessons array; section title: "Module 6: Ball Recovery and Loss Scenarios".)

### Clearances — `clearances`
- **One habit above all: always know where the ball is going.** A clearance is the start of a new play.
- **When we clear (attacking):** bounces are good (= distance). Almost never clear on purpose — last
  resort; a tactical clearance beats a careless pass. Trust mids/forwards to win the air battle.
- **When they clear (defending):** we **don't** want the bounce — get to it on the **first or second
  bounce** before it skips past or over us. On a windy day, when in doubt drop back.
- **Winning it back:** track flight/roll/bounce early; battle in the air with timing and body; if you
  must clear defensively, body in front, controlled — **no belts**.

### Second Balls — `second-balls`
- A **second ball** = the loose ball that pops free after a 50/50 — a brand-new contest anyone can win.
- Most loose-ball situations are a **chain of 50/50s** (first → second → third → fourth). The team that
  keeps winning the small battles ends up with the ball.
- **Who wins it:** the same player going again, or a nearby alert teammate. It's a **team responsibility**.
- **Anticipate but don't abandon your space** — lean toward where it'll land with eyes/body, but only
  fully commit and leave your spot once you can see the second ball is actually there.
- **If you lose the first, go again** — losing the first challenge doesn't end the play.

### Rebounds — `rebounds`
- **Only three sources:** off a **block**, off the **post**, or off the **goalkeeper**.
- **Off a block:** usually stays close — win it if winnable; take a fast throw-in; be happy with a corner
  ("getting us something").
- **Off post/keeper:** **always follow your shot** — and everyone nearby too. Keepers spill a lot of
  saves; the rebound is often the easiest chance of the sequence (the striker's moment in the six-yard box).

---

# MODULE 5 — Player Tactical Principles (to be built)

`slug: player-tactical-principles` · importance: **Build Next** · 32 lessons across **8 position
sections** · **all 32 bodies are currently "Coming soon" placeholders.**

> LB (3) and RB (2) were dropped — the team plays a 3-4-1 with no true full-backs, so those positions
> don't exist in our system. The width is covered by the wingers (LW/RW).

Summary: *"Position-by-position principles for main play, transitions, ball recovery, and restarts."*

### Structure: 10 positions × 4 lessons each

Every position has the **same four lessons**, in this order:
1. **Main Principles** — core habits in open play *(→ will get a video link)*
2. **Transitions** — what the position does the moment possession changes
3. **Ball Recovery** — how the position helps win the ball back
4. **Restarts** — the position's role on restarts

### The 8 position sections (in app order)

| Section title | Position | Lesson slugs |
|---------------|----------|--------------|
| Module 1: GK (1) — Goalkeeper | GK | gk-main-principles, gk-transitions, gk-ball-recovery, gk-restarts |
| Module 2: CB (4/5) — Center Back | CB | cb-main-principles, cb-transitions, cb-ball-recovery, cb-restarts |
| Module 3: CM (8) — Center Midfielder | CM | cm-main-principles, cm-transitions, cm-ball-recovery, cm-restarts |
| Module 4: CAM (10) — Attacking Midfielder | CAM | cam-main-principles, cam-transitions, cam-ball-recovery, cam-restarts |
| Module 5: CDM (6) — Defensive Midfielder | CDM | cdm-main-principles, cdm-transitions, cdm-ball-recovery, cdm-restarts |
| Module 6: ST (9) — Striker | ST | st-main-principles, st-transitions, st-ball-recovery, st-restarts |
| Module 7: LW (11) — Left Winger | LW | lw-main-principles, lw-transitions, lw-ball-recovery, lw-restarts |
| Module 8: RW (7) — Right Winger | RW | rw-main-principles, rw-transitions, rw-ball-recovery, rw-restarts |

### How Module 5 maps onto Module 4 (what to pull from where, when writing)

- **Main Principles** → video link (per the plan). Likely also a short written intro per position.
- **Transitions** → draw from Section 3 (When We Win: secure → don't give it back → look forward) and
  Section 4 (When We Lose: max effort → closest presses → cover & support), told from that position's
  point of view. E.g. a winger losing it in the wide middle third (counter risk); the CDM/CBs as the
  counter-safety layer; whoever lost it sprints back first.
- **Ball Recovery** → draw from Section 2 (Defending Principles: compact, first defender, cover/support,
  1v2/1v3) and Section 6b (Clearances, Second Balls, Rebounds) for that position.
- **Restarts** → draw from Section 5 (Goal Kicks, Corners, Throw-Ins, Free Kicks, Kickoff) for that
  position's specific job — and these are where the position's role on each set piece gets concrete.

### Position videos (Main Principles)

Each position's **Main Principles** lesson now has a coach video attached (the two wingers share one).
Transcripts and a per-video cross-check live in [`video-transcripts/positions/`](video-transcripts/positions/).

| Position | Video title | YouTube ID | Captions |
|----------|-------------|------------|----------|
| GK (1) | Goalkeeper | `GI07BwuS9F0` | ✅ checked |
| CB (4/5) | Center Backs | `a7VtVQrwvpU` | ✅ checked |
| CM (8) | Center Mid | `VsoR_fI-xYQ` | ✅ checked |
| CAM (10) | Center Attacking Mid | `2bK36NbeGVg` | ✅ checked |
| CDM (6) | Center Defensive Mid | `0nPPJZuMXXU` | ✅ checked |
| ST (9) | Striker | `juQ7NB-GDEo` | ✅ checked |
| LW (11) / RW (7) | Wingers (Left and Right) | `zcTxMTwB4qk` | ✅ checked |

All 7 transcripts pulled and cross-checked against the written lessons (see
[`video-transcripts/positions/README.md`](video-transcripts/positions/README.md) for per-video notes).
Every position matched — several confirm the written concepts nearly verbatim (CM says "box to box,"
CDM says "2-5-1 ↔ 3-4-1" and "six always gets back," ST says "move into the channel with the ball,"
wingers say "always block the wide areas" and "always take throw-ins up the line"). The only change was
softening GK Transitions to match the video's "mostly hang back / own your box" emphasis.

---

# The videos — full list & notes

**15 videos total, all in Module 4.** Watch URL pattern: `https://www.youtube.com/watch?v=<ID>`.

| # | Lesson | Video title | YouTube ID | URL |
|---|--------|-------------|------------|-----|
| 1 | Goal Kicks | Our Goal Kicks | `8yyumq8I9HU` | https://www.youtube.com/watch?v=8yyumq8I9HU |
| 2 | Goal Kicks | Opponent Goal Kicks | `3v5zsOQeIHc` | https://www.youtube.com/watch?v=3v5zsOQeIHc |
| 3 | Corners | Our Corners | `gYoBwWaZyjc` | https://www.youtube.com/watch?v=gYoBwWaZyjc |
| 4 | Corners | Opponent Corners | `DpPW91-pOPs` | https://www.youtube.com/watch?v=DpPW91-pOPs |
| 5 | Throw-Ins | Throw-Ins | `UeM_diD6anQ` | https://www.youtube.com/watch?v=UeM_diD6anQ |
| 6 | Free Kicks | Our Free Kicks | `tIeaDUOa4gs` | https://www.youtube.com/watch?v=tIeaDUOa4gs |
| 7 | Free Kicks | Opponent Free Kicks | `5R96WUJQTUk` | https://www.youtube.com/watch?v=5R96WUJQTUk |
| 8 | Kickoff | Our Kickoffs | `vL0EWtghcqA` | https://www.youtube.com/watch?v=vL0EWtghcqA |
| 9 | Kickoff | Opponent Kickoffs | `zO7Kp4W6UxA` | https://www.youtube.com/watch?v=zO7Kp4W6UxA |
| 10 | Defending Third | Defending in Our Defending Third | `EQSX8lAlXBk` | https://www.youtube.com/watch?v=EQSX8lAlXBk |
| 11 | Defending Third | Attacking in Our Defending Third | `tfZWJjiYMoQ` | https://www.youtube.com/watch?v=tfZWJjiYMoQ |
| 12 | Middle Third | Defending in Our Middle Third | `OjT268Y245E` | https://www.youtube.com/watch?v=OjT268Y245E |
| 13 | Middle Third | Attacking in Our Middle Third | `KOhimYaRRYk` | https://www.youtube.com/watch?v=KOhimYaRRYk |
| 14 | Attacking Third | Defending in Our Attacking Third | `7S-Km9zra9s` | https://www.youtube.com/watch?v=7S-Km9zra9s |
| 15 | Attacking Third | Attacking in Our Attacking Third | `FVwYPZm_KQ8` | https://www.youtube.com/watch?v=FVwYPZm_KQ8 |

> **How these summaries were made:** the videos are unlisted but have **English auto-generated captions**
> (the coach narrates each one). The transcripts were pulled **locally with `yt-dlp`** — no MCP server and
> no third-party transcript service, so the unlisted video IDs never left the machine. Full cleaned
> transcripts are saved in [`video-transcripts/`](video-transcripts/). To regenerate:
> `yt-dlp --skip-download --write-auto-subs --sub-lang en --sub-format vtt -o '%(id)s.%(ext)s' <url>`.

## Per-video summaries (from the transcripts)

### Restarts

**1. Our Goal Kicks** (`8yyumq8I9HU`) — We're *attacking* in our own third: get wide, look forward, find
feet or space. The GK almost always plays short to a center back (5 or 4), rarely the 6. Expect an
immediate press. Build through the ball-side winger; the rotations open the next man (when the 9 presses
it leaves the 6 to drop in; angled pass to the 11; the 10 pressing opens the 8 — up and back). We're
**always numbers-up on a goal kick** (two CBs sit back), so someone is always open — don't panic when you
win it. If we've gotten too tight and nobody's open, a **tactical reset** (just play it up to the 9/10) is
fine. **Never** play the square pass across our own goal — it invites their 9/10 to steal it and forces the
whole team to rotate. For now: winger's feet, or space for the 6, or up.

**2. Opponent Goal Kicks** (`3v5zsOQeIHc`) — We're *defending* in our attacking third: get compact, stop the
forward ball, win it back fast and try to score quick. Their GK usually plays short. **The trap:** as they
look for their winger, our 7 steps to block that angle; the instant the ball is played, the 9 presses to
force a decision/mistake. **Shape the press** — the 9 angles the run so they can't switch to the far CB
(funnel one direction). The 11 blocks the wide angle, the 10 covers their 6 (no central ball). Squeeze
until their only out is a long ball — then win the aerial 50/50 on the first or second bounce.

**3. Our Corners** (`gYoBwWaZyjc`) — Simple set play, only **three moving runners**. The 8 takes it; the
other two mids hold near. A stack of three runs on the taker's hand-drop: **first → middle of the box,
second → near post, third → far post.** Aim to ricochet it in off ourselves; the 11 sits for a shot if it
runs through. CBs stay back. (Later: a short option with the 7.) Expected to be run with perfection.

**4. Opponent Corners** (`DpPW91-pOPs`) — Chaotic (~13 in the box). Keep it dead simple: **find a player and
mark them.** The ball-side winger kills any short corner. CBs (4/5) come a step **off the goal line** to stay
compact and defend the central area (no need to stand on the posts at this age). Everyone marks (9, 10, 8,
6, 7, 11) and overloads our own box. When it comes in, **get it OUT fast** — don't pass it out, play it up
for the wingers/striker. Confidence: don't let it bounce (or only once before clearing).

**5. Throw-Ins** (`UeM_diD6anQ`) — **The ball-side winger takes it** (left = 11) and you **throw it fast and
UP the line** — don't wait to organize, catch them out. Movement frees the throw (a 7 pulling out frees the
9 for a long throw → 1v1/1v2 at goal). **Never throw backward.** In the attacking third, **treat a throw like
a corner** — into the box, flood with 8/9/10, 6 drops as cover. Defending/own end: always up, never back.
(Matches the written `afterVideosBody`: don't let it over your head, back up so you don't turn and run,
win the 50/50 and second ball.)

**6. Our Free Kicks** (`tIeaDUOa4gs`) — One template for every free kick: **three defenders stay back**, the
**8 takes it almost always**, wingers + 10 + 9 push high. The 8 decides — short to the 6 to dribble out,
long to the 11, or very long to the 9. Play it up, play it smart, don't give it away. In the attacking third
it can be decisive (8 or 9 takes it; 10 always in the box; 5/4 come up; ~4v4 cover so wingers can recover).

**7. Opponent Free Kicks** (`5R96WUJQTUk`) — Dangerous near our box (they can just shoot). Build a wall from
the center mids (8/10/6) — two or three (if two, the 6 drops to defend; if three, 6 in the wall). 5/4 defend
behind; 11/7 tuck in. GK ready for a ball to/just over the body — a low or chest ball is **just hands, get
them in front**; nothing to do about a top-corner strike. **The only thing that matters is the central space
in front of goal** — if a ball goes there, step and press immediately. Far from goal: mark up, leave no one
unmarked, be brave and first to the ball.

**8. Our Kickoffs** (`vL0EWtghcqA`) — Formation **3-4-1**. We copy the pros: striker plays it **short
backward**, then we hit it **first-time long into the opponent's corner** (the one time we kick it on purpose
— aim for the corner flag). Reason: a team is most vulnerable static at the start. Pick a side beforehand
(11 wide that side, 10 shifts over, 7 stays wide opposite as insurance, 8 up, everyone creeps up). Runners
are already moving on the call; the ball drops into that channel for 9/8/7 to win it in their defensive third.

**9. Opponent Kickoffs** (`zO7Kp4W6UxA`) — Difference: the **10 is up on the line too**, ready to press. Match
their wide players (cut in if they're inside, get wide if they're wide, keep them off the line). The instant
they play, **press as fast as possible** to force a mistake and win it high. If they go long, defend and drop
back; if they keep it short/wide, the wingers come win it. Same immediate-pressure idea as opponent goal kicks.

### Open Play

**10. Defending in Our Defending Third** (`EQSX8lAlXBk`) — Field = 9 zones (3 thirds × 3 channels). **Central:**
ball near our goal → 4 (right) and 5 (left) stay **tight together** (don't get pulled wide and leave a gap);
6 sits, 8 can be first defender — **press then cover, press then cover**, deny the shooting lane. Wingers stay
home to cut the wide space and **don't move until the ball is played wide**; 10 higher, 9 high for a counter.
**Wide:** the ball-side winger defends the wide attacker; 6/7/8 collapse in and the same-side CB (5) covers
behind so a beaten winger doesn't cost us (keep ~4v4 centrally). **If a winger is beaten and stuck upfield,**
the same-side CB steps out to press the wide runner while 6/8/10 recover — the lesson: a winger who doesn't
track back forces us to pull a defender out, which hurts us.

**11. Attacking in Our Defending Third** (`tfZWJjiYMoQ`) — Mostly **counterattacks**: win it, get up the field
fast. When a winger wins it, the **striker drops into the ball-side channel** (so a through ball is short)
while 7 and 10 sprint up for a cross. Central area (crowded): **keep the ball safe first**; build out if we
can (CB→10 with a winger playing a through ball, or 4→8 to carry and find wide). No option → **don't boot it;
play a long ball / tactical reset** and reset shape. Big idea: keep it safe, get wide fast (wingers get wide
and stay wide), look forward.

**12. Defending in Our Middle Third** (`OjT268Y245E`) — **Central:** striker usually beaten and behind the
play; the **10 is the presser** (lives near zone 14); 11/7 mark the opposite wide players, often **in front**
to intercept; 8 and 6 are cover/support; 4/5 tight to their striker, sometimes **stacked/staggered** so a 1v1
doesn't become a 1v2 (esp. vs two strikers). **Press–support–support:** let them go back/sideways, never
forward; a forward turn = a 2v3 problem. **Do not dive in** (a miss makes it 3v3 → 5v5 with wingers). **Never
be numbers-even on defense.** **Wide:** if outnumbered wide, same-side CB (4) slides over, 5 drops to cover,
6 helps the wide space, 7 comes in so 11 recovers, 9 stays ball-side for a counter. Man-mark every option,
let the opponent decide, then win it. Mirror it on both sides.

**13. Attacking in Our Middle Third** (`KOhimYaRRYk`) — **Red flag = wingers not wide.** Get wide and **stay
wide** (especially if their wingers don't) to open channels. **Central:** 9 in the ball-side channel; a 2v2
becomes a **3v2 if the 6 joins** (the 6 plays an attacking role here — **3-4-1 → 2-5-1** — but always gets
back). Connect with good touch/control/communication ("ticky-taka"), then up/out/through. Three center mids
are our strongest suit; a 2-5-1 directly counters a 3-4-1. **Wide:** CM → 11; 8 supports, 9 central, 10
underneath, **6 covers behind in case the 11 loses it**, 7 tucks in. Take the 1v1 down the line or play
through; avoid risky switches (no leg strength yet). Hunt **line-breaking through balls**, especially when
their defense is high — weighted so a teammate runs onto it; don't just boot it.

**14. Defending in Our Attacking Third** (`7S-Km9zra9s`) — We just lost it where we could've scored. **Two
jobs: win it back fast + stop the counter** (their break to our defending third in ~5s). When the 9 loses it:
7/11 are tight, the 9 isn't back yet, 4/5 adjust for a ball to their 9; midfield presses (8 presses, 6 covers,
7/11 begin the drag back). **We're often numbers-down here** (the 2-5-1 reality) — that's fine; don't do
anything dumb, intercept if they go wide. The 9 recovers and may win it back; if they panic and play back,
our 6/8 can **hit a first-time shot from zone 14**. Losing it in the **far corner** is workable — even a beaten
winger leaves a 3v1/3v3 as the 6 (and hopefully 8) recover; usually they just boot it out. Wingers need
corner-to-corner stamina.

**15. Attacking in Our Attacking Third** (`FVwYPZm_KQ8`) — Usually **numbers-down** (more defenders than
attackers) — part of the game. **Central:** when the 8 is on the ball under pressure, 10 supports, 9 in the
ball-side channel, 7/11 wide ready to go 1v1 — the **best ball is often wide to a 1v1** for a cross or a go at
goal. But if a through ball or a pass into a 1v1 on goal is on, **don't panic — take them on and SHOOT.
Shoot as much as you can** (deep defense = more space for pass-pass-cross-goal). **Wide:** same as the middle
third — take them on, cross, or go for goal; wingers: "go in, cross, go in, strike." Don't gift it to the
other team (a loose ball becomes a 3v2/3v3 counter; the 6 helps cover). Bottom line in the attacking third:
**look for goal.**

---

# Data shape reference (for building lessons)

Each lesson is an object in a module's `lessons` array. Fields a lesson can use
(see the `LearningModule` type at the top of [`lib/modules.ts`](lib/modules.ts:1)):

- `slug`, `title`, `summary`, `body` (required)
- `imageSrc`, `imageAspectRatio`, `imageAfterParagraph`
- `callouts: { title, body }[]`
- `bullets: { title, items[] }[]`
- `table: { columns[], rows[][] }`
- `coachSays` (string)
- `funFact: { title, body }`
- `videos: { title, youtubeId }[]`, `videoIntro`, `afterVideosBody`
- `diagram` (one of a fixed set of keys, e.g. `get-wide-stay-wide`, `first-defender`, `transition-win-secure`, …)
- `positionContent`, `comparison`, `practice` (true-false / what-would-you-do / tap-the-zone / field-number-placement)

`sections` group lessons into the in-app sub-modules via `lessonSlugs`. See
[`MODULE_AUTHORING_GUIDE.md`](MODULE_AUTHORING_GUIDE.md) for authoring conventions.
