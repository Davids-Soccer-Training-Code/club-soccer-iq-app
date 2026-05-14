import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { UserRound } from "lucide-react";

import { savePlayerName } from "@/app/actions";
import { authOptions } from "@/lib/auth/options";
import { getPlayer, getResponses } from "@/lib/data";

export default async function PlayerOnboardingPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    redirect("/signin");
  }

  const [player, responses] = await Promise.all([getPlayer(userId), getResponses(userId)]);

  if (player && responses?.completedAt) {
    redirect("/dashboard");
  }

  if (player) {
    redirect("/quiz/positions");
  }

  return (
    <main className="page-shell centered-shell">
      <section className="auth-panel">
        <UserRound aria-hidden="true" size={38} />
        <p className="eyebrow">First step</p>
        <h1>What is the player&apos;s name?</h1>
        <p>
          Enter the player name. After this, the player should answer the soccer questions
          without help so the coach can see their starting point.
        </p>
        <form className="auth-form" action={savePlayerName}>
          <label htmlFor="playerName">Player name</label>
          <input
            id="playerName"
            name="playerName"
            type="text"
            placeholder="Player name"
            minLength={2}
            required
          />
          <button className="primary-button" type="submit">
            Continue to questions
          </button>
        </form>
      </section>
    </main>
  );
}
