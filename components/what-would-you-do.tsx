"use client";

import { useState } from "react";

type Choice = { label: string; response: string };

export function WhatWouldYouDo({
  scenario,
  choices,
}: {
  scenario: string;
  choices: Choice[];
}) {
  const [chosen, setChosen] = useState<number | null>(null);

  return (
    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-black uppercase tracking-wide !text-slate-500">What Would You Do?</p>
      <p className="mt-2 text-lg italic leading-8 !text-slate-800">{scenario}</p>
      {chosen === null ? (
        <div className="mt-4 grid gap-2">
          {choices.map((choice, i) => (
            <button
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-left text-base font-bold text-slate-800 transition-colors hover:border-green-300 hover:bg-green-50"
              key={i}
              onClick={() => setChosen(i)}
              type="button"
            >
              {choice.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <p className="text-sm font-bold !text-slate-500">You chose: {choices[chosen].label}</p>
          <div className="mt-3 rounded-lg bg-green-800 px-5 py-4">
            <p className="text-xs font-black uppercase tracking-wide !text-white opacity-70">Coach says</p>
            <p className="mt-2 text-base leading-7 !text-white">{choices[chosen].response}</p>
          </div>
          <button
            className="mt-3 text-sm font-bold text-slate-500 underline"
            onClick={() => setChosen(null)}
            type="button"
          >
            Try a different choice
          </button>
        </div>
      )}
    </div>
  );
}
