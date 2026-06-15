"use client";

import { useState } from "react";

import { SoccerFieldSvg } from "@/components/soccer-field-svg";

type Mode = "hiding" | "wide";

const OUR_PLAYERS: { id: string; label: string; x: number; y: number }[] = [
  { id: "gk", label: "GK", x: 50, y: 91 },
  { id: "cb-l", label: "CB", x: 30, y: 76 },
  { id: "cb-c", label: "CB", x: 50, y: 73 },
  { id: "cb-r", label: "CB", x: 70, y: 76 },
  { id: "lw", label: "LW", x: 12, y: 46 },
  { id: "cm-l", label: "CM", x: 39, y: 53 },
  { id: "cm-r", label: "CM", x: 61, y: 53 },
  { id: "st", label: "ST", x: 50, y: 21 },
];

const OPPONENTS = [
  { id: "opp-1", x: 76, y: 46 },
  { id: "opp-2", x: 80, y: 64 },
  { id: "opp-3", x: 56, y: 38 },
];

const RW_POSITION: Record<Mode, { x: number; y: number }> = {
  hiding: { x: 70, y: 47 },
  wide: { x: 92, y: 35 },
};

const BALL_HOLDER = { x: 61, y: 53 };

export function GetWideStayWideDiagram() {
  const [mode, setMode] = useState<Mode>("hiding");
  const rw = RW_POSITION[mode];

  return (
    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-black uppercase tracking-wide !text-slate-500">Our 3-4-1 in Possession</p>
      <p className="mt-2 text-base leading-7 !text-slate-700">
        Our right winger needs to get wide in the right channel. Tap a button to see the difference between
        hiding behind a defender and getting wide in a spot where the ball can actually reach them.
      </p>

      <div className="mt-4">
        <SoccerFieldSvg>
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* Passing lane from ball holder to RW */}
            {mode === "hiding" ? (
              <line
                stroke="#f87171"
                strokeDasharray="2.5 2"
                strokeWidth="0.8"
                x1={BALL_HOLDER.x}
                x2={rw.x}
                y1={BALL_HOLDER.y}
                y2={rw.y}
              />
            ) : (
              <line
                markerEnd="url(#arrowhead)"
                stroke="#4ade80"
                strokeWidth="0.9"
                x1={BALL_HOLDER.x}
                x2={rw.x}
                y1={BALL_HOLDER.y}
                y2={rw.y}
              />
            )}
            <defs>
              <marker id="arrowhead" markerHeight="6" markerWidth="6" orient="auto" refX="3" refY="3">
                <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" />
              </marker>
            </defs>

            {/* X mark when hiding */}
            {mode === "hiding" ? (
              <g stroke="#f87171" strokeWidth="1">
                <line x1={(BALL_HOLDER.x + rw.x) / 2 - 2} x2={(BALL_HOLDER.x + rw.x) / 2 + 2} y1={(BALL_HOLDER.y + rw.y) / 2 - 2} y2={(BALL_HOLDER.y + rw.y) / 2 + 2} />
                <line x1={(BALL_HOLDER.x + rw.x) / 2 - 2} x2={(BALL_HOLDER.x + rw.x) / 2 + 2} y1={(BALL_HOLDER.y + rw.y) / 2 + 2} y2={(BALL_HOLDER.y + rw.y) / 2 - 2} />
              </g>
            ) : null}

            {/* Opponents */}
            {OPPONENTS.map((opp) => (
              <circle cx={opp.x} cy={opp.y} fill="#dc2626" key={opp.id} r="2.6" stroke="#7f1d1d" strokeWidth="0.4" />
            ))}

            {/* Our players */}
            {OUR_PLAYERS.map((player) => (
              <g key={player.id}>
                <circle cx={player.x} cy={player.y} fill="#16a34a" r="2.8" stroke="#052e16" strokeWidth="0.4" />
                <text fill="#ffffff" fontSize="2.4" fontWeight="700" textAnchor="middle" x={player.x} y={player.y + 4.2}>
                  {player.label}
                </text>
              </g>
            ))}

            {/* Ball */}
            <circle cx={BALL_HOLDER.x} cy={BALL_HOLDER.y - 4} fill="#fde68a" r="1.4" stroke="#92400e" strokeWidth="0.3" />

            {/* RW */}
            <g>
              <circle
                cx={rw.x}
                cy={rw.y}
                fill={mode === "hiding" ? "#f59e0b" : "#16a34a"}
                r="2.8"
                stroke="#052e16"
                strokeWidth="0.4"
              />
              <text fill="#ffffff" fontSize="2.4" fontWeight="700" textAnchor="middle" x={rw.x} y={rw.y + 4.2}>
                RW
              </text>
            </g>
          </svg>
        </SoccerFieldSvg>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          className={`flex-1 rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            mode === "hiding"
              ? "border-amber-500 bg-amber-50 text-amber-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-amber-300"
          }`}
          onClick={() => setMode("hiding")}
          type="button"
        >
          Hiding Behind a Defender
        </button>
        <button
          className={`flex-1 rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            mode === "wide"
              ? "border-green-600 bg-green-50 text-green-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-green-300"
          }`}
          onClick={() => setMode("wide")}
          type="button"
        >
          Wide and Open
        </button>
      </div>

      <div
        className={`mt-4 rounded-lg border p-4 ${
          mode === "hiding" ? "border-amber-200 bg-amber-50" : "border-green-200 bg-green-50"
        }`}
      >
        {mode === "hiding" ? (
          <p className="text-base leading-7 !text-amber-800">
            <span className="font-black">Not yet —</span> the RW is technically near the touchline, but they are
            tucked in behind the opponent. Our CM cannot find a clean passing lane to them. Being wide only counts if
            a teammate can actually play you the ball.
          </p>
        ) : (
          <p className="text-base leading-7 !text-green-800">
            <span className="font-black">Yes —</span> the RW has moved into the open space on the touchline, in
            front of the defender's eyeline. Our CM has a clear, open passing lane. The defense now has to stretch to
            cover the width, which opens space centrally for our CM and ST.
          </p>
        )}
      </div>
    </div>
  );
}
