import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { markLessonComplete } from "@/app/actions";
import { FieldNumberPlacementGame } from "@/components/field-number-placement-game";
import { PositionSelector } from "@/components/position-selector";
import { TapTheZone } from "@/components/tap-the-zone";
import { TrueFalseCard } from "@/components/true-false-card";
import { WhatWouldYouDo } from "@/components/what-would-you-do";
import { authOptions } from "@/lib/auth/options";
import { getLessonCompletions, getPlayer, getResponses } from "@/lib/data";
import {
  getLearningModule,
  getLessonSection,
  getModuleLesson,
  isModuleSectionUnlocked,
  learningModules,
} from "@/lib/modules";

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

  if (!learningModule) {
    notFound();
  }

  if (!lesson) {
    const matchedSection = learningModule.sections?.some((section) => section.slug === lessonSlug);

    if (matchedSection) {
      redirect(`/modules/${learningModule.slug}`);
    }

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

  const completedLessonSlugs = new Set(
    completions
      .filter((completion) => completion.moduleSlug === learningModule.slug)
      .map((completion) => completion.lessonSlug),
  );
  const lessonSection = getLessonSection(learningModule, lesson.slug);

  if (
    lessonSection &&
    !isModuleSectionUnlocked(learningModule, lessonSection.slug, completedLessonSlugs)
  ) {
    redirect(`/modules/${learningModule.slug}`);
  }

  const isComplete = completions.some(
    (completion) => completion.moduleSlug === slug && completion.lessonSlug === lessonSlug,
  );
  const lessonParagraphs = lesson.body.split("\n\n");
  const imageAfterParagraph = lesson.imageAfterParagraph ?? 0;
  const lessonImage = lesson.imageSrc ? (
    <div
      className="relative mx-auto mt-5 w-full max-w-3xl overflow-hidden rounded-lg border border-green-100 bg-white"
      style={{ aspectRatio: lesson.imageAspectRatio ?? "16 / 9" }}
    >
      <Image
        alt=""
        className="object-contain"
        fill
        sizes="(max-width: 820px) 100vw, 768px"
        src={lesson.imageSrc}
      />
    </div>
  ) : null;

  return (
    <main className="page-shell grid gap-5">
      <Link className="back-link" href={`/modules/${learningModule.slug}`}>
        <ArrowLeft aria-hidden="true" size={18} />
        {learningModule.title}
      </Link>

      <article className="mx-auto w-full max-w-5xl rounded-lg border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/10 md:p-8">
        <p className="eyebrow">Topic details</p>
        <h1 className="max-w-4xl text-4xl font-black leading-none tracking-normal text-slate-900 md:text-6xl">
          {lesson.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{lesson.summary}</p>

        <div className="mx-auto mt-8 max-w-4xl rounded-lg border border-green-100 bg-green-50/70 p-5 md:p-7">
          <h2 className="text-3xl font-black tracking-normal text-slate-900">Details</h2>
          {lesson.callouts ? (
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {lesson.callouts.map((callout) => (
                <div className="rounded-lg border border-green-200 bg-white p-5" key={callout.title}>
                  <p className="m-0 text-sm font-black uppercase text-green-800">{callout.title}</p>
                  <p className="m-0 mt-2 text-xl font-black leading-8 text-slate-900">{callout.body}</p>
                </div>
              ))}
            </div>
          ) : null}
          <div className="mt-5 grid gap-5">
            {lessonParagraphs.map((paragraph, index) => {
              const isHeading = paragraph.length <= 56 && !/[.!?]$/.test(paragraph);

              return (
                <div key={`${paragraph}-${index}`}>
                  {isHeading ? (
                    <h3 className="text-2xl font-black tracking-normal text-slate-900">{paragraph}</h3>
                  ) : (
                    <p className="m-0 text-lg leading-8 text-slate-700">{paragraph}</p>
                  )}
                  {lessonImage && index + 1 === imageAfterParagraph ? lessonImage : null}
                </div>
              );
            })}
            {lessonImage && imageAfterParagraph <= 0 ? lessonImage : null}
            {lesson.bullets?.map((bulletGroup) => (
              <div className="rounded-lg border border-green-100 bg-white p-5" key={bulletGroup.title}>
                <h3 className="text-xl font-black tracking-normal text-slate-900">{bulletGroup.title}</h3>
                <ul className="mt-3 grid gap-2 pl-5 text-lg text-slate-700">
                  {bulletGroup.items.map((item) => (
                    <li className="leading-8" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {lesson.comparison ? (
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <p className="text-sm font-black uppercase tracking-wide text-red-700">
                    {lesson.comparison.left.label}
                  </p>
                  <ul className="mt-3 grid gap-1 pl-5 text-base text-slate-700">
                    {lesson.comparison.left.items.map((item) => (
                      <li className="leading-7" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <p className="text-sm font-black uppercase tracking-wide text-green-700">
                    {lesson.comparison.right.label}
                  </p>
                  <ul className="mt-3 grid gap-1 pl-5 text-base text-slate-700">
                    {lesson.comparison.right.items.map((item) => (
                      <li className="leading-7" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
          {lesson.table ? (
            <div className="mt-6 overflow-hidden rounded-lg border border-green-100 bg-white">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    {lesson.table.columns.map((column) => (
                      <th className="px-4 py-3 font-black" key={column} scope="col">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {lesson.table.rows.map((row) => (
                    <tr className="border-t border-green-100" key={row.join("-")}>
                      {row.map((cell, index) => (
                        <td className="px-4 py-3 text-slate-700" key={`${row[0]}-${index}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {lesson.funFact ? (
            <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-5">
              <p className="text-xs font-black uppercase tracking-wide !text-amber-700">
                ⚡ {lesson.funFact.title}
              </p>
              <p className="mt-2 text-base leading-7 !text-slate-800">{lesson.funFact.body}</p>
            </div>
          ) : null}
          {lesson.positionContent ? (
            <PositionSelector
              positions={lesson.positionContent.positions}
              prompt={lesson.positionContent.prompt}
            />
          ) : null}
          {lesson.coachSays ? (
            <div className="mt-5 rounded-lg bg-green-800 px-5 py-4">
              <p className="text-xs font-black uppercase tracking-wide !text-white opacity-70">Coach says</p>
              <p className="mt-2 text-lg leading-8 !text-white">&ldquo;{lesson.coachSays}&rdquo;</p>
            </div>
          ) : null}
          {lesson.practice === "field-number-placement" ? <FieldNumberPlacementGame /> : null}
          {typeof lesson.practice === "object" && lesson.practice.type === "tap-the-zone" ? (
            <TapTheZone
              answer={lesson.practice.answer}
              prompt={lesson.practice.prompt}
              zones={lesson.practice.zones}
            />
          ) : null}
          {typeof lesson.practice === "object" && lesson.practice.type === "what-would-you-do" ? (
            <WhatWouldYouDo choices={lesson.practice.choices} scenario={lesson.practice.scenario} />
          ) : null}
          {typeof lesson.practice === "object" && lesson.practice.type === "true-false" ? (
            <TrueFalseCard
              answer={lesson.practice.answer}
              explanation={lesson.practice.explanation}
              statement={lesson.practice.statement}
            />
          ) : null}
        </div>

        <form action={markLessonComplete} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input name="moduleSlug" type="hidden" value={learningModule.slug} />
          <input name="lessonSlug" type="hidden" value={lesson.slug} />
          <button
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-700 px-5 font-black text-white disabled:cursor-default disabled:bg-emerald-800"
            disabled={isComplete}
            type="submit"
          >
            <CheckCircle2 aria-hidden="true" size={20} />
            {isComplete ? "Details read" : "I have read all details"}
          </button>
          <span className="text-sm font-bold text-slate-500">
            {isComplete ? "This lesson is already checked off." : "This will update your module progress."}
          </span>
        </form>
      </article>
    </main>
  );
}
