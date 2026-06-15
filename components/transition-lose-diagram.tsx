"use client";

import { useState } from "react";

import { SoccerFieldSvg } from "@/components/soccer-field-svg";

type Step = "effort" | "press" | "cover";

const OPPONENT = { x: 50, y: 47 };
const OPPONENT_2 = { x: 68, y: 38 };

const US_GHOST = { x: 50, y: 32 };
const US_RECOVER: Record<Step, { x: number; y: number }> = {
  effort: { x: 50, y: 42 },
  press: { x: 50, y: 42 },
  cover: { x: 50, y: 42 },
};

const CDM: Record<Step, { x: number; y: number }> = {
  effort: { x: 62, y: 58 },
  press: { x: 55, y: 51 },
  cover: { x: 55, y: 51 },
};

const CBS: Record<Step, { id: string; x: number; y: number }[]> = {
  effort: [
    { id: "lcb", x: 28, y: 80 },
    { id: "rcb", x: 72, y: 80 },
  ],
  press: [
    { id: "lcb", x: 32, y: 76 },
    { id: "rcb", x: 68, y: 76 },
  ],
  cover: [
    { id: "lcb", x: 40, y: 70 },
    { id: "rcb", x: 62, y: 70 },
  ],
};

const STEP_LABELS: Record<Step, string> = {
  effort: "Step 1: Give Max Effort to Win It Back",
  press: "Step 2: The Closest Player Applies Pressure",
  cover: "Step 3: Everyone Else Covers and Supports",
};

export function TransitionLoseDiagram({ defaultStep = "effort" }: { defaultStep?: Step }) {
  const [step, setStep] = useState<Step>(defaultStep);
  const cdm = CDM[step];
  const us = US_RECOVER[step];
  const cbs = CBS[step];

  return (
    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-black uppercase tracking-wide !text-slate-500">{STEP_LABELS[step]}</p>
      <p className="mt-2 text-base leading-7 !text-slate-700">
        We just lost the ball in the middle third. Step through the three things that need to happen, all at once,
        in the seconds right after.
      </p>

      <div className="mt-4">
        <SoccerFieldSvg>
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <marker id="loseSprintArrow" markerHeight="6" markerWidth="6" orient="auto" refX="3" refY="3">
                <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" />
              </marker>
              <marker id="losePressArrow" markerHeight="6" markerWidth="6" orient="auto" refX="3" refY="3">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
              </marker>
            </defs>

            {/* Step 1: sprint back arrow + faded ghost of standing still */}
            {step === "effort" ? (
              <>
                <circle cx={US_GHOST.x} cy={US_GHOST.y} fill="none" r="2.6" stroke="#94a3b8" strokeDasharray="1.5 1.5" strokeWidth="0.6" />
                <line markerEnd="url(#loseSprintArrow)" stroke="#4ade80" strokeWidth="1.1" x1={US_GHOST.x} x2={us.x} y1={US_GHOST.y + 3} y2={us.y - 3} />
              </>
            ) : null}

            {/* Step 2: CDM steps up to press the ball */}
            {step === "press" ? (
              <line markerEnd="url(#losePressArrow)" stroke="#f59e0b" strokeWidth="1.1" x1={CDM.effort.x} x2={cdm.x} y1={CDM.effort.y} y2={cdm.y} strokeDasharray="2.5 2" />
            ) : null}

            {/* Step 3: CBs shift compact + green wall shading */}
            {step === "cover" ? (
              <line stroke="#16a34a" strokeWidth="3.5" x1={cbs[0].x} x2={cbs[1].x} y1={(cbs[0].y + cbs[1].y) / 2} y2={(cbs[0].y + cbs[1].y) / 2} opacity="0.18" />
            ) : null}

            {/* Opponents */}
            <circle cx={OPPONENT.x} cy={OPPONENT.y} fill="#dc2626" r="2.8" stroke="#7f1d1d" strokeWidth="0.4" />
            <circle cx={OPPONENT.x} cy={OPPONENT.y - 4} fill="#fde68a" r="1.4" stroke="#92400e" strokeWidth="0.3" />
            <circle cx={OPPONENT_2.x} cy={OPPONENT_2.y} fill="#dc2626" r="2.4" stroke="#7f1d1d" strokeWidth="0.4" opacity="0.6" />

            {/* Our CBs */}
            {cbs.map((cb) => (
              <g key={cb.id}>
                <circle cx={cb.x} cy={cb.y} fill="#16a34a" r="2.6" stroke="#052e16" strokeWidth="0.4" opacity={step === "cover" ? 1 : 0.55} />
                <text fill="#ffffff" fontSize="2.1" fontWeight="700" textAnchor="middle" x={cb.x} y={cb.y + 3.9}>
                  CB
                </text>
              </g>
            ))}

            {/* Our CDM (closest defender) */}
            <g>
              <circle cx={cdm.x} cy={cdm.y} fill="#16a34a" r="2.8" stroke="#052e16" strokeWidth="0.4" opacity={step === "effort" ? 0.55 : 1} />
              <text fill="#ffffff" fontSize="2.1" fontWeight="700" textAnchor="middle" x={cdm.x} y={cdm.y + 4}>
                CDM
              </text>
            </g>

            {/* The player who lost the ball, recovering */}
            <g>
              <circle cx={us.x} cy={us.y} fill="#16a34a" r="2.8" stroke="#052e16" strokeWidth="0.4" />
              <text fill="#ffffff" fontSize="2.1" fontWeight="700" textAnchor="middle" x={us.x} y={us.y + 4}>
                CM
              </text>
            </g>
          </svg>
        </SoccerFieldSvg>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            step === "effort"
              ? "border-green-600 bg-green-50 text-green-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-green-300"
          }`}
          onClick={() => setStep("effort")}
          type="button"
        >
          1. Max Effort
        </button>
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            step === "press"
              ? "border-amber-500 bg-amber-50 text-amber-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-amber-300"
          }`}
          onClick={() => setStep("press")}
          type="button"
        >
          2. Closest Player Presses
        </button>
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            step === "cover"
              ? "border-blue-600 bg-blue-50 text-blue-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-blue-300"
          }`}
          onClick={() => setStep("cover")}
          type="button"
        >
          3. Everyone Covers
        </button>
      </div>

      <div
        className={`mt-4 rounded-lg border p-4 ${
          step === "effort"
            ? "border-green-200 bg-green-50"
            : step === "press"
              ? "border-amber-200 bg-amber-50"
              : "border-blue-200 bg-blue-50"
        }`}
      >
        {step === "effort" ? (
          <p className="text-base leading-7 !text-green-800">
            <span className="font-black">Max effort —</span> our CM just lost the ball while pushed forward. The
            dotted circle shows what happens if they jog back annoyed — nothing. Instead, they sprint back into the
            play immediately. The first few seconds after losing the ball are the best chance to win it straight
            back.
          </p>
        ) : step === "press" ? (
          <p className="text-base leading-7 !text-amber-800">
            <span className="font-black">Closest player presses —</span> our CDM is now the player closest to the
            ball who is between it and our goal — that makes them the first defender, instantly. No waiting around.
            Step up, don&apos;t dive in, and slow the attacker down just like always.
          </p>
        ) : (
          <p className="text-base leading-7 !text-blue-800">
            <span className="font-black">Everyone else covers and supports —</span> while the CDM presses, our CBs
            shift in and get compact fast. The team was just spread out attacking, so this has to happen quickly.
            React fast enough and that lone opponent with the ball is suddenly facing 1v2 or 1v3.
          </p>
        )}
      </div>
    </div>
  );
}
