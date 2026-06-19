import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { saveTacticsDraftAnswers, saveTacticsQuiz } from "@/app/actions";
import { QuizForm } from "@/components/quiz-form";
import { authOptions } from "@/lib/auth/options";
import { getPlayer, getResponses } from "@/lib/data";
import { tacticsQuestions } from "@/lib/questions";

export default async function TacticsQuizPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    redirect("/signin");
  }

  const [player, responses] = await Promise.all([getPlayer(userId), getResponses(userId)]);

  if (!player) {
    redirect("/onboarding/player");
  }

  const previous = responses?.tacticsAnswers ?? {};

  if (responses?.completedAt) {
    redirect("/dashboard");
  }

  return (
    <main className="page-shell quiz-shell">
      <section className="quiz-header">
        <p className="eyebrow">Step 2 of 2</p>
        <h1>{player.playerName}, show how you see the field.</h1>
        <p>
          Player: answer this yourself. Parents should not help. Write what you think
          each soccer idea means, and give enough detail for your coach to understand your thinking.
        </p>
      </section>

      <section className="field-guide" aria-label="Soccer field areas">
        <div>
          <h2>Thirds</h2>
          <div className="field thirds-field" aria-hidden="true">
            <span className="pitch-line pitch-half" />
            <span className="pitch-line pitch-circle" />
            <span className="pitch-line pitch-box pitch-box-top" />
            <span className="pitch-line pitch-box pitch-box-bottom" />
            <span className="pitch-line pitch-goal pitch-goal-top" />
            <span className="pitch-line pitch-goal pitch-goal-bottom" />
            <span className="field-zone">Attacking third</span>
            <span className="field-zone">Middle third</span>
            <span className="field-zone">Defensive third</span>
          </div>
        </div>
        <div>
          <h2>Channels</h2>
          <div className="field channels-field" aria-hidden="true">
            <span className="pitch-line pitch-half" />
            <span className="pitch-line pitch-circle" />
            <span className="pitch-line pitch-box pitch-box-top" />
            <span className="pitch-line pitch-box pitch-box-bottom" />
            <span className="pitch-line pitch-goal pitch-goal-top" />
            <span className="pitch-line pitch-goal pitch-goal-bottom" />
            <span className="field-zone">Left channel</span>
            <span className="field-zone">Center channel</span>
            <span className="field-zone">Right channel</span>
          </div>
        </div>
      </section>

      <QuizForm
        questions={tacticsQuestions}
        previousAnswers={previous}
        draftAction={saveTacticsDraftAnswers}
        submitAction={saveTacticsQuiz}
        submitLabel="Finish and see dashboard"
      />
    </main>
  );
}
