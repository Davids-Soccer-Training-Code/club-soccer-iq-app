"use client";

import { useState } from "react";

export function TrueFalseCard({
  statement,
  answer,
  explanation,
}: {
  statement: string;
  answer: boolean;
  explanation: string;
}) {
  const [chosen, setChosen] = useState<boolean | null>(null);
  const isCorrect = chosen === answer;

  return (
    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-black uppercase tracking-wide !text-slate-500">True or False?</p>
      <p className="mt-2 text-xl font-black leading-8 !text-slate-900">{statement}</p>
      {chosen === null ? (
        <div className="mt-4 flex gap-3">
          <button
            className="flex-1 rounded-lg border-2 border-slate-200 bg-white py-3 text-base font-black text-slate-700 transition-colors hover:border-green-600 hover:bg-green-50 hover:text-green-800"
            onClick={() => setChosen(true)}
            type="button"
          >
            True
          </button>
          <button
            className="flex-1 rounded-lg border-2 border-slate-200 bg-white py-3 text-base font-black text-slate-700 transition-colors hover:border-green-600 hover:bg-green-50 hover:text-green-800"
            onClick={() => setChosen(false)}
            type="button"
          >
            False
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <div
            className={`rounded-lg border p-4 ${isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
          >
            <p className={`text-sm font-black ${isCorrect ? "!text-green-700" : "!text-red-700"}`}>
              {isCorrect ? "Correct!" : `Not quite — the answer is ${answer ? "True" : "False"}.`}
            </p>
            <p className="mt-2 text-base leading-7 !text-slate-700">{explanation}</p>
          </div>
          <button
            className="mt-3 text-sm font-bold text-slate-500 underline"
            onClick={() => setChosen(null)}
            type="button"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
