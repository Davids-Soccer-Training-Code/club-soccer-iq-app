"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { AnswerMap } from "@/lib/questions";

type Question = {
  id: string;
  label: string;
  hint: string;
};

type SaveStatus = "idle" | "saving" | "saved" | "error";

const AUTOSAVE_DELAY_MS = 1000;

export function QuizForm({
  questions,
  previousAnswers,
  draftAction,
  submitAction,
  submitLabel,
}: {
  questions: readonly Question[];
  previousAnswers: AnswerMap;
  draftAction: (answers: AnswerMap) => Promise<void>;
  submitAction: (formData: FormData) => void;
  submitLabel: string;
}) {
  const answersRef = useRef<AnswerMap>({ ...previousAnswers });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dirtyRef = useRef(false);
  const [status, setStatus] = useState<SaveStatus>("idle");

  const flush = useCallback(async () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (!dirtyRef.current) {
      return;
    }

    dirtyRef.current = false;
    setStatus("saving");

    try {
      await draftAction({ ...answersRef.current });
      setStatus("saved");
    } catch {
      // Keep the answer marked dirty so the next change (or blur) retries.
      dirtyRef.current = true;
      setStatus("error");
    }
  }, [draftAction]);

  const scheduleSave = useCallback(() => {
    setStatus("saving");

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      void flush();
    }, AUTOSAVE_DELAY_MS);
  }, [flush]);

  useEffect(() => {
    // Best-effort save when the tab is hidden (closed, backgrounded, navigated away).
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        void flush();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [flush]);

  return (
    <form
      className="quiz-form"
      action={submitAction}
      onSubmit={() => {
        // The form submit persists everything, so cancel any pending autosave.
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      }}
    >
      {questions.map((question, index) => (
        <label className="question-card" key={question.id} htmlFor={question.id}>
          <span className="question-number">{index + 1}</span>
          <span className="question-title">{question.label}</span>
          <span className="question-hint">{question.hint}</span>
          <textarea
            id={question.id}
            name={question.id}
            defaultValue={previousAnswers[question.id] ?? ""}
            placeholder="Your answer..."
            rows={6}
            onChange={(event) => {
              answersRef.current[question.id] = event.target.value;
              dirtyRef.current = true;
              scheduleSave();
            }}
            onBlur={() => {
              void flush();
            }}
          />
        </label>
      ))}

      <div className="sticky-submit">
        <span className="autosave-status" data-status={status} aria-live="polite">
          {status === "saving" && "Saving…"}
          {status === "saved" && "Progress saved"}
          {status === "error" && "Couldn't save — keep going, we'll retry"}
        </span>
        <button className="primary-button" type="submit">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
