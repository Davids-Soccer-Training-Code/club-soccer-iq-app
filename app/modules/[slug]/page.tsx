import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle } from "lucide-react";

import { authOptions } from "@/lib/auth/options";
import { getLessonCompletions, getPlayer, getResponses } from "@/lib/data";
import { getLearningModule, learningModules, moduleCompletionPercent } from "@/lib/modules";

export function generateStaticParams() {
  return learningModules.map((learningModule) => ({ slug: learningModule.slug }));
}

export default async function LearningModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const learningModule = getLearningModule(slug);

  if (!learningModule) {
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

  const completedLessons = new Set(
    completions
      .filter((completion) => completion.moduleSlug === learningModule.slug)
      .map((completion) => completion.lessonSlug),
  );
  const percent = moduleCompletionPercent(learningModule, completedLessons);

  return (
    <main className="page-shell grid gap-5">
      <Link className="back-link" href="/dashboard">
        <ArrowLeft aria-hidden="true" size={18} />
        Dashboard
      </Link>

      <section className="rounded-lg border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/10 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
          <div>
            <p className="eyebrow">Learning module</p>
            <h1 className="max-w-3xl text-4xl font-black leading-none tracking-normal text-slate-900 md:text-6xl">
              {learningModule.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{learningModule.summary}</p>
          </div>
          <div className="grid gap-3">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200">
              <Image
                alt=""
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                src={learningModule.imageSrc}
              />
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm font-black text-slate-700">
                <span>Complete</span>
                <span>{percent}%</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-blue-600" style={{ width: `${percent}%` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {learningModule.lessons.map((lesson) => (
          <Link
            className="group grid min-h-40 gap-3 rounded-lg border border-slate-200 bg-white p-5 no-underline shadow-lg shadow-slate-900/5 transition hover:border-blue-400 hover:shadow-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-200"
            href={`/modules/${learningModule.slug}/${lesson.slug}`}
            key={lesson.slug}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex items-center gap-2 text-sm font-black uppercase tracking-normal text-emerald-800">
                {completedLessons.has(lesson.slug) ? (
                  <CheckCircle2 aria-hidden="true" className="text-emerald-700" size={20} />
                ) : (
                  <Circle aria-hidden="true" className="text-slate-400" size={20} />
                )}
                {completedLessons.has(lesson.slug) ? "Completed" : "Lesson"}
              </span>
              <ArrowRight
                aria-hidden="true"
                className="text-slate-400 transition group-hover:text-blue-600"
                size={20}
              />
            </div>
            <h2 className="text-2xl font-black tracking-normal text-slate-900">{lesson.title}</h2>
            <p className="m-0 leading-7 text-slate-600">{lesson.summary}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
