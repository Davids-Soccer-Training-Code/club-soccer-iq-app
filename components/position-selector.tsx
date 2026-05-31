"use client";

import { useState } from "react";

export type PositionData = {
  id: string;
  label: string;
  number: number;
  body: string;
  bullets?: string[];
};

const DISPLAY_ROWS: string[][] = [
  ["ST", "LW", "RW"],
  ["CAM", "CM", "CDM"],
  ["LB", "CB", "RB"],
  ["GK"],
];

export function PositionSelector({
  prompt,
  positions,
}: {
  prompt: string;
  positions: PositionData[];
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const byId = Object.fromEntries(positions.map((p) => [p.id, p]));
  const active = selected ? byId[selected] : null;

  return (
    <div className="mt-5 rounded-lg border border-green-100 bg-white p-5">
      <p className="text-xl font-black !text-slate-900">{prompt}</p>
      <p className="mt-1 text-sm !text-slate-500">Tap your position to see what this means for you.</p>

      <div className="mt-4 grid gap-2">
        {DISPLAY_ROWS.map((row, ri) => (
          <div className="flex justify-center gap-2" key={ri}>
            {row.map((id) => {
              const pos = byId[id];
              if (!pos) return null;
              const isActive = selected === id;
              return (
                <button
                  className={`flex min-w-[72px] flex-col items-center rounded-lg border-2 px-3 py-2 transition-all ${
                    isActive
                      ? "border-green-700 bg-green-700 text-white"
                      : "border-slate-200 bg-white text-slate-800 hover:border-green-300 hover:bg-green-50"
                  }`}
                  key={id}
                  onClick={() => setSelected(isActive ? null : id)}
                  type="button"
                >
                  <span className="text-xs font-black uppercase tracking-wide opacity-70">
                    {pos.label}
                  </span>
                  <span className="text-2xl font-black leading-none">{pos.number}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {active ? (
        <div className="mt-5 rounded-lg border border-green-100 bg-green-50 p-5">
          <p className="text-sm font-black uppercase tracking-wide !text-green-800">
            {active.label} ({active.number})
          </p>
          <p className="mt-2 text-base leading-7 !text-slate-800">{active.body}</p>
          {active.bullets ? (
            <ul className="mt-3 grid gap-1 pl-5 text-base !text-slate-700">
              {active.bullets.map((b) => (
                <li className="leading-7" key={b}>
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : (
        <div className="mt-5 rounded-lg border border-dashed border-slate-200 bg-slate-50 p-5 text-center text-sm text-slate-400">
          Tap a position above to see your specific role.
        </div>
      )}
    </div>
  );
}
