import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Circle } from "lucide-react";

import { authOptions } from "@/lib/auth/options";
import { getLessonCompletions, getPlayer, getResponses } from "@/lib/data";
import {
  getLearningModule,
  getModuleSectionLessons,
  isModuleSectionUnlocked,
  learningModules,
  moduleCompletionPercent,
} from "@/lib/modules";

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
  const sections = getModuleSectionLessons(learningModule);

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
                className="object-contain"
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
                <div className="h-full rounded-full bg-green-700" style={{ width: `${percent}%` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-3">
        {sections.length > 0
          ? sections.map((section, index) => {
              const completeCount = section.lessons.filter((lesson) => completedLessons.has(lesson.slug)).length;
              const sectionToggleId = `module-page-section-${section.slug}`;
              const isUnlocked = isModuleSectionUnlocked(learningModule, section.slug, completedLessons);

              return (
                <article
                  className="rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-900/5"
                  key={section.slug}
                >
                  <input
                    className="section-toggle-input"
                    disabled={!isUnlocked}
                    id={sectionToggleId}
                    type="checkbox"
                  />
                  <label className={isUnlocked ? "section-row" : "section-row locked"} htmlFor={sectionToggleId}>
                    <span className="submodule-number">{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <strong>{section.title}</strong>
                      <small>{section.summary}</small>
                    </span>
                    <span className={isUnlocked ? "submodule-status" : "submodule-status locked"}>
                      {isUnlocked ? (
                        <ChevronDown aria-hidden="true" className="section-expand-icon" size={18} />
                      ) : null}
                      {isUnlocked ? `${completeCount}/${section.lessons.length}` : "Locked"}
                    </span>
                  </label>
                  <div className="topic-list">
                    {section.lessons.map((lesson) => {
                      const isComplete = completedLessons.has(lesson.slug);

                      return (
                        <Link
                          className="topic-row"
                          href={`/modules/${learningModule.slug}/${lesson.slug}`}
                          key={lesson.slug}
                        >
                          <span className={isComplete ? "topic-status complete" : "topic-status"}>
                            {isComplete ? (
                              <CheckCircle2 aria-hidden="true" size={18} />
                            ) : (
                              <Circle aria-hidden="true" size={18} />
                            )}
                          </span>
                          <span>
                            <strong>{lesson.title}</strong>
                            <small>{lesson.summary}</small>
                          </span>
                          <ArrowRight
                            aria-hidden="true"
                            className="text-slate-400 transition group-hover:text-green-700"
                            size={20}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </article>
              );
            })
          : learningModule.lessons.map((lesson, index) => (
              <Link
                className="group grid gap-4 rounded-lg border border-slate-200 bg-white p-4 no-underline shadow-lg shadow-slate-900/5 transition hover:border-green-500 hover:shadow-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-green-200 md:grid-cols-[72px_minmax(0,1fr)_130px_24px] md:items-center"
                href={`/modules/${learningModule.slug}/${lesson.slug}`}
                key={lesson.slug}
              >
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-normal text-emerald-800">
                  {completedLessons.has(lesson.slug) ? (
                    <CheckCircle2 aria-hidden="true" className="text-emerald-700" size={20} />
                  ) : (
                    <Circle aria-hidden="true" className="text-slate-400" size={20} />
                  )}
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h2 className="text-xl font-black tracking-normal text-slate-900">{lesson.title}</h2>
                  <p className="m-0 mt-2 leading-7 text-slate-600">{lesson.summary}</p>
                </div>
                <span className="text-sm font-black uppercase tracking-normal text-slate-500">
                  {completedLessons.has(lesson.slug) ? "Read" : "Open details"}
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="text-slate-400 transition group-hover:text-green-700"
                  size={20}
                />
              </Link>
            ))}
      </section>
    </main>
  );
}
