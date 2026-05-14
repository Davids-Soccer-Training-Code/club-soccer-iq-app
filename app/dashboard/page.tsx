import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { SignOutButton } from "@/components/sign-out-button";
import { authOptions } from "@/lib/auth/options";
import { getLessonCompletions, getPlayer, getResponses } from "@/lib/data";
import { learningModules, moduleCompletionPercent } from "@/lib/modules";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    redirect("/signin");
  }

  const [player, responses, completions] = await Promise.all([
    getPlayer(userId),
    getResponses(userId),
    getLessonCompletions(userId),
  ]);

  if (!player) {
    redirect("/onboarding/player");
  }

  return (
    <main className="page-shell dashboard-shell">
      <header className="dashboard-top">
        <div>
          <p className="eyebrow">Player dashboard</p>
          <h1>{player.playerName}</h1>
          <p>{session.user?.email}</p>
        </div>
        <SignOutButton />
      </header>

      <section className="module-section">
        <div className="section-heading">
          <p className="eyebrow">Learning modules</p>
          <h2>Build your soccer IQ</h2>
        </div>
        <div className="module-grid">
          {learningModules.map((learningModule) => {
            const completedLessons = new Set(
              completions
                .filter((completion) => completion.moduleSlug === learningModule.slug)
                .map((completion) => completion.lessonSlug),
            );
            const percent = moduleCompletionPercent(learningModule, completedLessons);

            return (
              <Link className="module-card" href={`/modules/${learningModule.slug}`} key={learningModule.slug}>
                <span className="module-art">
                  <Image
                    alt=""
                    className="module-image"
                    fill
                    sizes="(max-width: 840px) 100vw, 520px"
                    src={learningModule.imageSrc}
                  />
                </span>
                <span>
                  <span className={`importance-tag importance-${learningModule.importanceTone}`}>
                    {learningModule.importance}
                  </span>
                  <strong>{learningModule.title}</strong>
                  <small>{learningModule.summary}</small>
                  <span className="mt-4 block">
                    <span className="mb-1 flex items-center justify-between text-xs font-bold text-slate-600">
                      <span>Progress</span>
                      <span>{percent}%</span>
                    </span>
                    <span className="block h-2 overflow-hidden rounded-full bg-slate-200">
                      <span
                        className="block h-full rounded-full bg-blue-600"
                        style={{ width: `${percent}%` }}
                      />
                    </span>
                  </span>
                </span>
                <ArrowRight aria-hidden="true" size={20} />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
