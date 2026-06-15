"use client";

import { useState } from "react";

import { SoccerFieldSvg } from "@/components/soccer-field-svg";

type Mode = "spread" | "compact";

const GK = { x: 50, y: 94 };

const CB_POSITIONS: Record<Mode, { id: string; label: string; x: number; y: number }[]> = {
  spread: [
    { id: "cb-l", label: "CB", x: 15, y: 82 },
    { id: "cb-c", label: "CB", x: 50, y: 85 },
    { id: "cb-r", label: "CB", x: 85, y: 82 },
  ],
  compact: [
    { id: "cb-l", label: "CB", x: 36, y: 80 },
    { id: "cb-c", label: "CB", x: 50, y: 77 },
    { id: "cb-r", label: "CB", x: 64, y: 80 },
  ],
};

const OPPONENT_WITH_BALL = { x: 42, y: 55 };
const OPPONENT_2 = { x: 60, y: 50 };

export function GetCompactStayCompactDiagram() {
  const [mode, setMode] = useState<Mode>("spread");
  const cbs = CB_POSITIONS[mode];
  const cbLeft = cbs[0];
  const cbCenter = cbs[1];

  const gapX = (cbLeft.x + cbCenter.x) / 2;
  const gapY = (cbLeft.y + cbCenter.y) / 2;

  return (
    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-black uppercase tracking-wide !text-slate-500">Our Back Three Defending</p>
      <p className="mt-2 text-base leading-7 !text-slate-700">
        Just like getting wide stretches the field when we attack, getting compact shrinks it when we defend. Tap a
        button to see what happens to the gaps between our back three.
      </p>

      <div className="mt-4">
        <SoccerFieldSvg>
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <marker id="compactArrow" markerHeight="6" markerWidth="6" orient="auto" refX="3" refY="3">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f87171" />
              </marker>
            </defs>

            {/* Gap lane the opponent can run into when spread out */}
            {mode === "spread" ? (
              <line
                markerEnd="url(#compactArrow)"
                stroke="#f87171"
                strokeDasharray="2.5 2"
                strokeWidth="1.1"
                x1={OPPONENT_WITH_BALL.x}
                x2={gapX}
                y1={OPPONENT_WITH_BALL.y}
                y2={gapY}
              />
            ) : (
              <g stroke="#f87171" strokeWidth="1">
                <line x1={gapX - 2} x2={gapX + 2} y1={gapY - 2} y2={gapY + 2} />
                <line x1={gapX - 2} x2={gapX + 2} y1={gapY + 2} y2={gapY - 2} />
              </g>
            )}

            {/* Wall shading between the CBs when compact */}
            {mode === "compact" ? (
              <line stroke="#16a34a" strokeWidth="3.5" x1={cbs[0].x} x2={cbs[2].x} y1={(cbs[0].y + cbs[2].y) / 2} y2={(cbs[0].y + cbs[2].y) / 2} opacity="0.18" />
            ) : null}

            {/* Opponents */}
            <circle cx={OPPONENT_WITH_BALL.x} cy={OPPONENT_WITH_BALL.y} fill="#dc2626" r="2.6" stroke="#7f1d1d" strokeWidth="0.4" />
            <circle cx={OPPONENT_2.x} cy={OPPONENT_2.y} fill="#dc2626" r="2.6" stroke="#7f1d1d" strokeWidth="0.4" />

            {/* Ball */}
            <circle cx={OPPONENT_WITH_BALL.x} cy={OPPONENT_WITH_BALL.y - 4} fill="#fde68a" r="1.4" stroke="#92400e" strokeWidth="0.3" />

            {/* GK */}
            <g>
              <circle cx={GK.x} cy={GK.y} fill="#16a34a" r="2.8" stroke="#052e16" strokeWidth="0.4" />
              <text fill="#ffffff" fontSize="2.4" fontWeight="700" textAnchor="middle" x={GK.x} y={GK.y + 4.2}>
                GK
              </text>
            </g>

            {/* Back three */}
            {cbs.map((cb) => (
              <g key={cb.id}>
                <circle cx={cb.x} cy={cb.y} fill="#16a34a" r="2.8" stroke="#052e16" strokeWidth="0.4" />
                <text fill="#ffffff" fontSize="2.4" fontWeight="700" textAnchor="middle" x={cb.x} y={cb.y + 4.2}>
                  {cb.label}
                </text>
              </g>
            ))}
          </svg>
        </SoccerFieldSvg>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          className={`flex-1 rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            mode === "spread"
              ? "border-red-500 bg-red-50 text-red-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-red-300"
          }`}
          onClick={() => setMode("spread")}
          type="button"
        >
          Spread Out
        </button>
        <button
          className={`flex-1 rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            mode === "compact"
              ? "border-green-600 bg-green-50 text-green-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-green-300"
          }`}
          onClick={() => setMode("compact")}
          type="button"
        >
          Compact
        </button>
      </div>

      <div
        className={`mt-4 rounded-lg border p-4 ${
          mode === "spread" ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"
        }`}
      >
        {mode === "spread" ? (
          <p className="text-base leading-7 !text-red-800">
            <span className="font-black">Not good —</span> our outside CBs are too far from the central CB. There's
            a clear gap, and the opponent with the ball can run or pass straight through it toward our goal.
          </p>
        ) : (
          <p className="text-base leading-7 !text-green-800">
            <span className="font-black">Yes —</span> our back three has tightened up. The gaps are closed, there's
            no clean lane through the middle, and the opponent has to look for another way — which gives our
            teammates time to get back and help.
          </p>
        )}
      </div>
    </div>
  );
}
