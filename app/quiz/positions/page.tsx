import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { savePositionsQuiz } from "@/app/actions";
import { authOptions } from "@/lib/auth/options";
import { getPlayer, getResponses } from "@/lib/data";
import { positionQuestions } from "@/lib/questions";

export default async function PositionQuizPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    redirect("/signin");
  }

  const [player, responses] = await Promise.all([getPlayer(userId), getResponses(userId)]);

  if (!player) {
    redirect("/onboarding/player");
  }

  const previous = responses?.knowledgeAnswers ?? {};

  if (responses?.completedAt) {
    redirect("/dashboard");
  }

  return (
    <main className="page-shell quiz-shell">
      <section className="quiz-header">
        <p className="eyebrow">Step 1 of 2</p>
        <h1>{player.playerName}, explain each position.</h1>
        <p>
          Player: answer this yourself. Parents should not help. Write what you believe
          each position does, and give enough detail for your coach to understand your thinking.
        </p>
      </section>

      <form className="quiz-form" action={savePositionsQuiz}>
        {positionQuestions.map((question, index) => (
          <label className="question-card" key={question.id} htmlFor={question.id}>
            <span className="question-number">{index + 1}</span>
            <span className="question-title">{question.label}</span>
            <span className="question-hint">{question.hint}</span>
            <textarea
              id={question.id}
              name={question.id}
              defaultValue={previous[question.id] ?? ""}
              placeholder="Your answer..."
              rows={6}
            />
          </label>
        ))}

        <div className="sticky-submit">
          <button className="primary-button" type="submit">
            Save and go to field questions
          </button>
        </div>
      </form>
    </main>
  );
}
