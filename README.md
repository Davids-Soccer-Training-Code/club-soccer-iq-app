# Coach David's Soccer Tactical App

A simple Next.js app for parent email-link sign-in and youth soccer tactical learning.

## Stack

- Next.js App Router
- NextAuth email magic links
- PostgreSQL through `pg`
- Plain SQL migrations in `migrations/`
- No Prisma and no ORM

## Setup

1. Copy `.env.example` to `.env` and fill in the values.
2. Create a Neon PostgreSQL database.
3. Run the migrations:

```bash
npm run migrate
```

4. Start the app:

```bash
npm run dev
```

## Email Links

Set these variables for real email delivery:

```bash
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_FROM="Coach David's Soccer Tactical App <no-reply@example.com>"
```

If SMTP is not configured, the sign-in link is printed in the `npm run dev` terminal.

## Main Routes

- `/signin` - parent email sign-in
- `/onboarding/player` - first-login player name
- `/quiz/positions` - open-text position questions
- `/quiz/tactics` - formations, thirds, channels, and player locations
- `/dashboard` - saved player profile and answers
