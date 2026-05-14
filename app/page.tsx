import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BookOpen, ClipboardList, Goal, Sparkles } from "lucide-react";

import { authOptions } from "@/lib/auth/options";
import { SignInForm } from "@/components/sign-in-form";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session?.user?.id) {
    redirect("/dashboard");
  }

  return (
    <main className="page-shell home-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Soccer IQ learning center</p>
          <h1>Learn the game like a smart player.</h1>
          <p className="lede">
            A simple player learning center for soccer IQ, formations, field areas,
            rules, and team tactics. Players start with a baseline quiz, then keep
            learning through short modules.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/signin">
              Enter learning center
            </Link>
          </div>
        </div>

        <div className="pitch-card" aria-label="Soccer field diagram">
          <div className="mini-pitch">
            <span className="goal goal-left" />
            <span className="goal goal-right" />
            <span className="box box-left" />
            <span className="box box-right" />
            <span className="center-circle" />
            <span className="half-line" />
            <span className="player-dot keeper">GK</span>
            <span className="player-dot defender">CB</span>
            <span className="player-dot mid">CM</span>
            <span className="player-dot winger">LW</span>
            <span className="player-dot striker">ST</span>
          </div>
        </div>
      </section>

      <section className="home-grid" aria-label="How it works">
        <article>
          <ClipboardList aria-hidden="true" />
          <h2>Baseline quiz</h2>
          <p>Players answer in their own words first, so the coach can see their starting point.</p>
        </article>
        <article>
          <BookOpen aria-hidden="true" />
          <h2>Learning modules</h2>
          <p>Players can study formations, field zones, rules, and tactical principles.</p>
        </article>
        <article>
          <Goal aria-hidden="true" />
          <h2>Soccer IQ habits</h2>
          <p>The goal is a better understanding of where to be and what to notice.</p>
        </article>
      </section>

      <section className="signin-strip">
        <div>
          <p className="eyebrow">Ready</p>
          <h2>Send the player sign-in link</h2>
        </div>
        <SignInForm />
      </section>
    </main>
  );
}
