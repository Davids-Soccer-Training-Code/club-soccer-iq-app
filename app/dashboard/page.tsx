import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { ModuleDashboard } from "@/components/module-dashboard";
import { SignOutButton } from "@/components/sign-out-button";
import { authOptions } from "@/lib/auth/options";
import { getLessonCompletions, getPlayer, getResponses } from "@/lib/data";
import { learningModules } from "@/lib/modules";

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
          <p className="eyebrow">Coach David&apos;s tactical app</p>
          <h1>{player.playerName}</h1>
          <p>{session.user?.email}</p>
        </div>
        <SignOutButton />
      </header>

      <section className="module-section">
        <div className="section-heading">
          <p className="eyebrow">Learning modules</p>
          <h2>Build your tactical game</h2>
        </div>
        <ModuleDashboard
          completions={completions.map((completion) => ({
            moduleSlug: completion.moduleSlug,
            lessonSlug: completion.lessonSlug,
          }))}
          modules={learningModules}
        />
      </section>
    </main>
  );
}
