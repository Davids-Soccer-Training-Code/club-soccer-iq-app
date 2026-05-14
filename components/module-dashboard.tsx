"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronDown, Circle } from "lucide-react";

import type { LearningModule } from "@/lib/modules";
import {
  getModuleSectionLessons,
  isModuleSectionUnlocked,
  moduleCompletionPercent,
} from "@/lib/modules";

type CompletionStatus = {
  moduleSlug: string;
  lessonSlug: string;
};

type ModuleDashboardProps = {
  completions: CompletionStatus[];
  modules: LearningModule[];
};

export function ModuleDashboard({ completions, modules }: ModuleDashboardProps) {
  return (
    <div className="module-grid">
      {modules.map((learningModule) => {
        const completedLessons = new Set(
          completions
            .filter((completion) => completion.moduleSlug === learningModule.slug)
            .map((completion) => completion.lessonSlug),
        );
        const percent = moduleCompletionPercent(learningModule, completedLessons);
        const sections = getModuleSectionLessons(learningModule);

        const toggleId = `module-toggle-${learningModule.slug}`;

        return (
          <article className="module-card-panel" key={learningModule.slug}>
            <input className="module-toggle-input" id={toggleId} type="checkbox" />
            <label className="module-card module-card-toggle" htmlFor={toggleId}>
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
                    <span className="block h-full rounded-full bg-green-700" style={{ width: `${percent}%` }} />
                  </span>
                </span>
              </span>
              <span className="module-expand-row">
                <ChevronDown aria-hidden="true" className="module-expand-icon" />
                <span className="show-topics">Show topics</span>
                <span className="hide-topics">Hide topics</span>
              </span>
            </label>

            <div className="submodule-list">
              {sections.length > 0
                ? sections.map((section, index) => {
                    const sectionToggleId = `section-toggle-${learningModule.slug}-${section.slug}`;
                    const completeCount = section.lessons.filter((lesson) => completedLessons.has(lesson.slug)).length;
                    const isUnlocked = isModuleSectionUnlocked(learningModule, section.slug, completedLessons);

                    return (
                      <div className="section-dropdown" key={section.slug}>
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
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })
                : learningModule.lessons.map((lesson, index) => {
                    const isComplete = completedLessons.has(lesson.slug);

                    return (
                      <Link
                        className="submodule-row"
                        href={`/modules/${learningModule.slug}/${lesson.slug}`}
                        key={lesson.slug}
                      >
                        <span className="submodule-number">{String(index + 1).padStart(2, "0")}</span>
                        <span>
                          <strong>{lesson.title}</strong>
                          <small>{lesson.summary}</small>
                        </span>
                        <span className={isComplete ? "submodule-status complete" : "submodule-status"}>
                          {isComplete ? (
                            <CheckCircle2 aria-hidden="true" size={18} />
                          ) : (
                            <Circle aria-hidden="true" size={18} />
                          )}
                          {isComplete ? "Read" : "Open"}
                        </span>
                      </Link>
                    );
                  })}
            </div>
          </article>
        );
      })}
    </div>
  );
}
