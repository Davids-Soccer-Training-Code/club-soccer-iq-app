# Module Authoring Guide

## Important

**THIS IS A REFERENCE, NOT A TEMPLATE.**

Do not make every module look exactly the same. Use this guide to understand the reading level, tone, and teaching style. Each module should feel slightly different based on what the player is learning.

The goal is:

- Same kid-friendly teaching style.
- Same clear structure.
- Different layouts when the topic needs it.
- Different examples, images, tables, or bullet blocks depending on the lesson.

If every module looks identical, the app will feel boring and players will skim past it. Use the pieces that help the lesson.

Use this style for Coach David's Soccer Tactical App lessons. The audience is mostly 9-10 year old players, so every topic should be easy to skim, easy to say out loud, and easy to connect to the field.

## Core Rules

- Write for a 5th grade reading level.
- Use short titles that say the point.
- Keep paragraphs to 1-3 sentences.
- Use bold ideas through headings, callout boxes, and bullets.
- Explain one idea at a time.
- Give a concrete soccer example after every abstract idea.
- Use the player's point of view: "your position", "your teammate", "when you have the ball".
- Avoid long tactical jargon unless you explain it immediately.

## Lesson Shape

Each lesson should usually follow this order:

1. **Big title**
   The lesson name should be clear, like `The 11 Field Numbers`.

2. **One-sentence summary**
   Tell the player what they are about to learn.

3. **Callout boxes**
   Add 1-2 big takeaway boxes before the main reading.

4. **Short sections**
   Break the topic into small chunks with strong headings.

5. **Image in the middle**
   Put the image after the first important explanation, not before all the reading.

6. **Bullets**
   Use bullets for things players should remember.

7. **Example**
   Add examples like: "If your favorite position is center mid..."

8. **Table**
   Use a table when comparing numbers, positions, jobs, roles, or formations.

9. **Completion button**
   End with the normal read/complete button.

## Writing Pattern

Use this pattern for sections:

```md
Simple Section Title

One short paragraph that explains the idea.

Another short paragraph only if needed.
```

Good section titles:

- `Why We Start With 11v11`
- `Do Not Worry If It Feels New`
- `Our Example: The 4-3-3`
- `What to Remember First`

Avoid titles like:

- `Introduction`
- `Overview`
- `Advanced Tactical Framework`

## Callout Boxes

Use callouts for the main idea a skimming player must see.

Examples:

```ts
callouts: [
  {
    title: "Big idea",
    body: "Numbers help everyone know the job, not just the jersey.",
  },
  {
    title: "Start here",
    body: "Learn your favorite position first, then learn the numbers around you.",
  },
]
```

Callout rules:

- Title: 1-3 words.
- Body: one strong sentence.
- Make it useful without reading the whole page.

## Bullet Blocks

Use bullets for memory work, examples, and quick rules.

Examples:

```ts
bullets: [
  {
    title: "Example: start with your favorite position",
    items: [
      "If your favorite position is center mid, start with 6, 8, and 10.",
      "If your favorite position is left wing, start with 11.",
      "If your favorite position is striker, start with 9.",
    ],
  },
]
```

Bullet rules:

- 3-5 bullets is usually enough.
- Start with a player-friendly phrase.
- Keep each bullet short.
- Use examples from real positions.

## Images

Images should help the player understand the text.

Rules:

- Put images in the middle of the lesson after the first explanation.
- Keep images smaller than the full content width.
- Use a field image, diagram, or tactical board when possible.
- The text before the image should tell the player what to look for.

Example:

```ts
imageSrc: "/module-images/formations-number-positions.png",
imageAfterParagraph: 4,
```

## Tables

Use tables when players need to compare information.

Good table topics:

- Number, position, main job
- Formation, shape, purpose
- 7v7 role, 9v9 role, 11v11 role
- Attacking job, defending job, transition job

Example:

```ts
table: {
  columns: ["Number", "Position", "Main job"],
  rows: [
    ["6", "Defensive Midfielder", "Protect the middle and connect passes."],
    ["8", "Center Midfielder", "Help attack and defend."],
    ["10", "Attacking Midfielder", "Create chances."],
  ],
}
```

Table rules:

- Keep cell text short.
- Use simple job descriptions.
- Do not make huge tables unless the topic needs it.

## Tone

Use this tone:

- Clear
- Calm
- Coach-like
- Encouraging without being cheesy
- Simple enough for a young player to read alone

Good:

> You do not have to memorize every number today. Start with your favorite position.

Avoid:

> Players must internalize the complete tactical numbering framework before progressing.

## Checklist Before Adding A Lesson

- Does the lesson have one obvious big idea?
- Can a 9-10 year old understand the first paragraph?
- Are there headings every few sentences?
- Is there at least one example?
- Is there a bullet block or table if the player needs to remember several things?
- Is the image placed after text that explains what to look for?
- Is the lesson short enough to finish in a few minutes?
