import { getServerSession } from "next-auth";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { markLessonComplete } from "@/app/actions";
import { authOptions } from "@/lib/auth/options";
import { getLessonCompletions, getPlayer, getResponses } from "@/lib/data";
import { getLearningModule, getModuleLesson, learningModules } from "@/lib/modules";

export function generateStaticParams() {
  return learningModules.flatMap((learningModule) =>
    learningModule.lessons.map((lesson) => ({
      slug: learningModule.slug,
      lessonSlug: lesson.slug,
    })),
  );
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lessonSlug: string }>;
}) {
  const { slug, lessonSlug } = await params;
  const learningModule = getLearningModule(slug);
  const lesson = getModuleLesson(slug, lessonSlug);

  if (!learningModule || !lesson) {
    notFound();
  }

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

  if (!responses?.completedAt) {
    redirect("/quiz/positions");
  }

  const isComplete = completions.some(
    (completion) => completion.moduleSlug === slug && completion.lessonSlug === lessonSlug,
  );

  return (
    <main className="page-shell grid gap-5">
      <Link className="back-link" href={`/modules/${learningModule.slug}`}>
        <ArrowLeft aria-hidden="true" size={18} />
        {learningModule.title}
      </Link>

      <article className="rounded-lg border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/10 md:p-8">
        <p className="eyebrow">Lesson</p>
        <h1 className="max-w-4xl text-4xl font-black leading-none tracking-normal text-slate-900 md:text-6xl">
          {lesson.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{lesson.summary}</p>

        <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5">
          <h2 className="text-2xl font-black tracking-normal text-slate-900">Content coming soon</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">{lesson.body}</p>
        </div>

        <form action={markLessonComplete} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input name="moduleSlug" type="hidden" value={learningModule.slug} />
          <input name="lessonSlug" type="hidden" value={lesson.slug} />
          <button
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 font-black text-white disabled:cursor-default disabled:bg-emerald-700"
            disabled={isComplete}
            type="submit"
          >
            <CheckCircle2 aria-hidden="true" size={20} />
            {isComplete ? "Completed" : "Mark complete"}
          </button>
          <span className="text-sm font-bold text-slate-500">
            {isComplete ? "This lesson is already checked off." : "This will update your module progress."}
          </span>
        </form>
      </article>
    </main>
  );
}
