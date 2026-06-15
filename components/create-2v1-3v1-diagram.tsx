"use client";

import { useState } from "react";

import { SoccerFieldSvg } from "@/components/soccer-field-svg";

type Step = "alone" | "support" | "breakaway";

type PlayerPos = { id: string; label: string; x: number; y: number };

const STEP_PLAYERS: Record<Step, PlayerPos[]> = {
  alone: [
    { id: "cm", label: "CM", x: 50, y: 55 },
    { id: "cam", label: "CAM", x: 30, y: 68 },
    { id: "st", label: "ST", x: 50, y: 22 },
  ],
  support: [
    { id: "cm", label: "CM", x: 50, y: 50 },
    { id: "cam", label: "CAM", x: 38, y: 42 },
    { id: "st", label: "ST", x: 64, y: 35 },
  ],
  breakaway: [
    { id: "cm", label: "CM", x: 50, y: 48 },
    { id: "cam", label: "CAM", x: 38, y: 35 },
    { id: "st", label: "ST", x: 70, y: 20 },
  ],
};

const STEP_OPPONENTS: Record<Step, { id: string; x: number; y: number }[]> = {
  alone: [
    { id: "opp-1", x: 42, y: 38 },
    { id: "opp-2", x: 60, y: 40 },
  ],
  support: [
    { id: "opp-1", x: 42, y: 38 },
    { id: "opp-2", x: 60, y: 40 },
  ],
  breakaway: [
    { id: "opp-1", x: 42, y: 52 },
    { id: "opp-2", x: 58, y: 54 },
    { id: "opp-gk", x: 50, y: 11 },
  ],
};

const STEP_LABELS: Record<Step, string> = {
  alone: "Step 1: Going It Alone (1v2)",
  support: "Step 2: Support Arrives (3v2)",
  breakaway: "Step 3: Numbers Up Becomes a Breakaway (1v0)",
};

export function Create2v1And3v1Diagram() {
  const [step, setStep] = useState<Step>("alone");
  const players = STEP_PLAYERS[step];
  const opponents = STEP_OPPONENTS[step];
  const cm = players.find((p) => p.id === "cm")!;
  const cam = players.find((p) => p.id === "cam")!;
  const st = players.find((p) => p.id === "st")!;

  return (
    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-black uppercase tracking-wide !text-slate-500">{STEP_LABELS[step]}</p>
      <p className="mt-2 text-base leading-7 !text-slate-700">
        Our CM has driven forward into space. Step through what happens when teammates support — and what happens
        when they don't. Remember: our number always goes first, so 1v2 means our CM is outnumbered two defenders to
        one.
      </p>

      <div className="mt-4">
        <SoccerFieldSvg>
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <marker id="overloadArrow" markerHeight="6" markerWidth="6" orient="auto" refX="3" refY="3">
                <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" />
              </marker>
            </defs>

            {/* Step 1: CM alone, no passing options shown, X marks near defenders */}
            {step === "alone" ? (
              <g stroke="#f87171" strokeWidth="1">
                <line x1={cm.x - 1.5} x2={cm.x + 1.5} y1={cm.y - 9} y2={cm.y - 6} />
                <line x1={cm.x - 1.5} x2={cm.x + 1.5} y1={cm.y - 6} y2={cm.y - 9} />
              </g>
            ) : null}

            {/* Step 2: passing lanes from CM to CAM and ST around the defenders */}
            {step === "support" ? (
              <>
                <line markerEnd="url(#overloadArrow)" stroke="#4ade80" strokeWidth="0.9" x1={cm.x} x2={cam.x} y1={cm.y} y2={cam.y} />
                <line markerEnd="url(#overloadArrow)" stroke="#4ade80" strokeWidth="0.9" x1={cm.x} x2={st.x} y1={cm.y} y2={st.y} />
              </>
            ) : null}

            {/* Step 3: through ball from CM to ST breaking in behind */}
            {step === "breakaway" ? (
              <line markerEnd="url(#overloadArrow)" stroke="#4ade80" strokeWidth="1" x1={cm.x} x2={st.x} y1={cm.y} y2={st.y} />
            ) : null}

            {/* Opponents */}
            {opponents.map((opp) => (
              <g key={opp.id}>
                <circle cx={opp.x} cy={opp.y} fill="#dc2626" r="2.6" stroke="#7f1d1d" strokeWidth="0.4" />
                {opp.id === "opp-gk" ? (
                  <text fill="#ffffff" fontSize="2.2" fontWeight="700" textAnchor="middle" x={opp.x} y={opp.y + 4}>
                    GK
                  </text>
                ) : null}
              </g>
            ))}

            {/* Our players */}
            {players.map((player) => (
              <g key={player.id}>
                <circle cx={player.x} cy={player.y} fill="#16a34a" r="2.8" stroke="#052e16" strokeWidth="0.4" />
                <text fill="#ffffff" fontSize="2.4" fontWeight="700" textAnchor="middle" x={player.x} y={player.y + 4.2}>
                  {player.label}
                </text>
              </g>
            ))}

            {/* Ball */}
            <circle
              cx={step === "breakaway" ? st.x : cm.x}
              cy={(step === "breakaway" ? st.y : cm.y) - 4}
              fill="#fde68a"
              r="1.4"
              stroke="#92400e"
              strokeWidth="0.3"
            />
          </svg>
        </SoccerFieldSvg>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            step === "alone"
              ? "border-red-500 bg-red-50 text-red-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-red-300"
          }`}
          onClick={() => setStep("alone")}
          type="button"
        >
          1. Going It Alone
        </button>
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            step === "support"
              ? "border-green-600 bg-green-50 text-green-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-green-300"
          }`}
          onClick={() => setStep("support")}
          type="button"
        >
          2. Support Arrives
        </button>
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            step === "breakaway"
              ? "border-blue-600 bg-blue-50 text-blue-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-blue-300"
          }`}
          onClick={() => setStep("breakaway")}
          type="button"
        >
          3. The Breakaway
        </button>
      </div>

      <div
        className={`mt-4 rounded-lg border p-4 ${
          step === "alone"
            ? "border-red-200 bg-red-50"
            : step === "support"
              ? "border-green-200 bg-green-50"
              : "border-blue-200 bg-blue-50"
        }`}
      >
        {step === "alone" ? (
          <p className="text-base leading-7 !text-red-800">
            <span className="font-black">1v2 —</span> our CM has driven forward but is facing two defenders alone.
            Our CAM and ST are too far away to help. If our CM tries to beat both defenders by themselves, the odds
            are against us. We need numbers up.
          </p>
        ) : step === "support" ? (
          <p className="text-base leading-7 !text-green-800">
            <span className="font-black">3v2 —</span> our CAM and ST have recognized the moment and moved to support.
            Now it's three of us against their two defenders. Our CM has two passing angles — to the CAM or to the
            ST — and the defenders cannot cover both.
          </p>
        ) : (
          <p className="text-base leading-7 !text-blue-800">
            <span className="font-black">1v0 —</span> with the defenders dragged out of position by our overload, our
            CM finds the angle through to our ST, who breaks in behind with only the goalkeeper to beat. That's what
            turning 1v2 into 3v2 can lead to — a clean breakaway on goal.
          </p>
        )}
      </div>
    </div>
  );
}
