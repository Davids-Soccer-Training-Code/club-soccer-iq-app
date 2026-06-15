"use client";

import { useState } from "react";

import { SoccerFieldSvg } from "@/components/soccer-field-svg";

type Plan = "forward" | "wide" | "back";

const OUR_PLAYERS: { id: string; label: string; x: number; y: number }[] = [
  { id: "gk", label: "GK", x: 50, y: 91 },
  { id: "cb-l", label: "CB", x: 30, y: 76 },
  { id: "cb-c", label: "CB", x: 50, y: 73 },
  { id: "cb-r", label: "CB", x: 70, y: 76 },
  { id: "lw", label: "LW", x: 12, y: 46 },
  { id: "cm-l", label: "CM", x: 39, y: 53 },
  { id: "rw", label: "RW", x: 90, y: 35 },
  { id: "st", label: "ST", x: 50, y: 21 },
];

const BALL_HOLDER = { id: "cm", label: "CM", x: 61, y: 53 };

const OPPONENTS = [
  { id: "opp-1", x: 56, y: 42 },
  { id: "opp-2", x: 80, y: 64 },
  { id: "opp-3", x: 30, y: 58 },
];

const SPACE_AHEAD_OF_ST = { x: 38, y: 17 };

const PLAN_DETAILS: Record<
  Plan,
  { label: string; target: { x: number; y: number }; passLineEnd: { x: number; y: number } }
> = {
  forward: { label: "Plan A: Forward Into Space", target: SPACE_AHEAD_OF_ST, passLineEnd: SPACE_AHEAD_OF_ST },
  wide: { label: "Plan B: Switch Wide", target: { x: 90, y: 35 }, passLineEnd: { x: 90, y: 35 } },
  back: { label: "Plan C: Play It Back, Safe", target: { x: 70, y: 76 }, passLineEnd: { x: 70, y: 76 } },
};

export function LookToGoForwardDiagram() {
  const [plan, setPlan] = useState<Plan>("forward");
  const { passLineEnd } = PLAN_DETAILS[plan];

  return (
    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-black uppercase tracking-wide !text-slate-500">Our CM Has the Ball</p>
      <p className="mt-2 text-base leading-7 !text-slate-700">
        Our CM is on the ball in the middle third. Tap each plan to see where the pass goes and how our CM should
        weigh the options — forward first, wide second, back only if it's safe.
      </p>

      <div className="mt-4">
        <SoccerFieldSvg>
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <marker id="lookForwardArrow" markerHeight="6" markerWidth="6" orient="auto" refX="3" refY="3">
                <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" />
              </marker>
            </defs>

            {/* Pass line */}
            <line
              markerEnd="url(#lookForwardArrow)"
              stroke="#4ade80"
              strokeWidth="0.9"
              x1={BALL_HOLDER.x}
              x2={passLineEnd.x}
              y1={BALL_HOLDER.y}
              y2={passLineEnd.y}
            />

            {/* Plan A: ST run into space */}
            {plan === "forward" ? (
              <line
                markerEnd="url(#lookForwardArrow)"
                stroke="#16a34a"
                strokeDasharray="2 1.5"
                strokeWidth="0.7"
                x1={50}
                x2={SPACE_AHEAD_OF_ST.x}
                y1={21}
                y2={SPACE_AHEAD_OF_ST.y + 3}
              />
            ) : null}

            {/* Opponents */}
            {OPPONENTS.map((opp) => (
              <circle cx={opp.x} cy={opp.y} fill="#dc2626" key={opp.id} r="2.6" stroke="#7f1d1d" strokeWidth="0.4" />
            ))}

            {/* Space marker for Plan A */}
            {plan === "forward" ? (
              <circle
                cx={SPACE_AHEAD_OF_ST.x}
                cy={SPACE_AHEAD_OF_ST.y}
                fill="none"
                r="3.2"
                stroke="#4ade80"
                strokeDasharray="1.2 1"
                strokeWidth="0.6"
              />
            ) : null}

            {/* Our players */}
            {OUR_PLAYERS.map((player) => (
              <g key={player.id}>
                <circle cx={player.x} cy={player.y} fill="#16a34a" r="2.8" stroke="#052e16" strokeWidth="0.4" />
                <text fill="#ffffff" fontSize="2.4" fontWeight="700" textAnchor="middle" x={player.x} y={player.y + 4.2}>
                  {player.label}
                </text>
              </g>
            ))}

            {/* Ball holder */}
            <g>
              <circle cx={BALL_HOLDER.x} cy={BALL_HOLDER.y} fill="#16a34a" r="2.8" stroke="#052e16" strokeWidth="0.4" />
              <text fill="#ffffff" fontSize="2.4" fontWeight="700" textAnchor="middle" x={BALL_HOLDER.x} y={BALL_HOLDER.y + 4.2}>
                {BALL_HOLDER.label}
              </text>
            </g>

            {/* Ball */}
            <circle cx={BALL_HOLDER.x} cy={BALL_HOLDER.y - 4} fill="#fde68a" r="1.4" stroke="#92400e" strokeWidth="0.3" />
          </svg>
        </SoccerFieldSvg>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            plan === "forward"
              ? "border-green-600 bg-green-50 text-green-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-green-300"
          }`}
          onClick={() => setPlan("forward")}
          type="button"
        >
          Plan A: Forward
        </button>
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            plan === "wide"
              ? "border-blue-600 bg-blue-50 text-blue-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-blue-300"
          }`}
          onClick={() => setPlan("wide")}
          type="button"
        >
          Plan B: Wide
        </button>
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            plan === "back"
              ? "border-amber-500 bg-amber-50 text-amber-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-amber-300"
          }`}
          onClick={() => setPlan("back")}
          type="button"
        >
          Plan C: Back, Safe
        </button>
      </div>

      <div
        className={`mt-4 rounded-lg border p-4 ${
          plan === "forward"
            ? "border-green-200 bg-green-50"
            : plan === "wide"
              ? "border-blue-200 bg-blue-50"
              : "border-amber-200 bg-amber-50"
        }`}
      >
        {plan === "forward" ? (
          <p className="text-base leading-7 !text-green-800">
            <span className="font-black">Plan A —</span> our CM plays the ball into the open space ahead of our ST's
            run, beyond the opponent in the middle. The ST does not have to check to feet — they run onto the ball
            and attack the defense at speed. This is the first option our CM should look for.
          </p>
        ) : plan === "wide" ? (
          <p className="text-base leading-7 !text-blue-800">
            <span className="font-black">Plan B —</span> the forward lane is crowded, so our CM switches it wide to
            our RW, who is wide and open on the touchline. This is not giving up on going forward — it stretches the
            defense and can open a new forward option a moment later.
          </p>
        ) : (
          <p className="text-base leading-7 !text-amber-800">
            <span className="font-black">Plan C —</span> forward and wide are both covered, so our CM plays a simple,
            controlled pass back to our CB, who has no opponent near them. This keeps possession safely. It is only
            the right choice because the CB is unmarked and has time on the ball.
          </p>
        )}
      </div>
    </div>
  );
}
