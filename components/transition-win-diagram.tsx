"use client";

import { useState } from "react";

import { SoccerFieldSvg } from "@/components/soccer-field-svg";

type Step = "secure" | "safe" | "forward";

const US = { x: 50, y: 55 };
const PRESSER = { x: 50, y: 46 };
const SAFE_OPTION = { x: 30, y: 73 };
const FORWARD_OPTION = { x: 74, y: 30 };
const RETREATING_1 = { x: 40, y: 28 };
const RETREATING_2 = { x: 64, y: 24 };

const STEP_LABELS: Record<Step, string> = {
  secure: "Step 1: Secure the Ball First",
  safe: "Step 2: Do Not Give It Right Back",
  forward: "Step 3: Look to Go Forward",
};

export function TransitionWinDiagram({ defaultStep = "secure" }: { defaultStep?: Step }) {
  const [step, setStep] = useState<Step>(defaultStep);

  return (
    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-black uppercase tracking-wide !text-slate-500">{STEP_LABELS[step]}</p>
      <p className="mt-2 text-base leading-7 !text-slate-700">
        We just won the ball back in the middle third. Step through the three things that happen, in order, in the
        seconds right after.
      </p>

      <div className="mt-4">
        <SoccerFieldSvg>
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <marker id="winSafeArrow" markerHeight="6" markerWidth="6" orient="auto" refX="3" refY="3">
                <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" />
              </marker>
              <marker id="winRedArrow" markerHeight="6" markerWidth="6" orient="auto" refX="3" refY="3">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f87171" />
              </marker>
            </defs>

            {/* Step 1: shield/touch away from pressure */}
            {step === "secure" ? (
              <>
                <line markerEnd="url(#winSafeArrow)" stroke="#4ade80" strokeWidth="1" x1={US.x} x2={US.x - 8} y1={US.y} y2={US.y + 5} />
                <g stroke="#f87171" strokeWidth="1">
                  <line x1={PRESSER.x - 2} x2={PRESSER.x + 2} y1={PRESSER.y + 6} y2={PRESSER.y + 10} />
                  <line x1={PRESSER.x - 2} x2={PRESSER.x + 2} y1={PRESSER.y + 10} y2={PRESSER.y + 6} />
                </g>
              </>
            ) : null}

            {/* Step 2: safe pass back to CB, forward lanes shaded as risky */}
            {step === "safe" ? (
              <>
                <line markerEnd="url(#winSafeArrow)" stroke="#4ade80" strokeWidth="1" x1={US.x} x2={SAFE_OPTION.x} y1={US.y} y2={SAFE_OPTION.y} />
                <line stroke="#f87171" strokeDasharray="2.5 2" strokeWidth="1" x1={US.x} x2={PRESSER.x} y1={US.y} y2={PRESSER.y} opacity="0.5" />
                <g stroke="#f87171" strokeWidth="1">
                  <line x1={(US.x + PRESSER.x) / 2 - 2} x2={(US.x + PRESSER.x) / 2 + 2} y1={(US.y + PRESSER.y) / 2 - 2} y2={(US.y + PRESSER.y) / 2 + 2} />
                  <line x1={(US.x + PRESSER.x) / 2 - 2} x2={(US.x + PRESSER.x) / 2 + 2} y1={(US.y + PRESSER.y) / 2 + 2} y2={(US.y + PRESSER.y) / 2 - 2} />
                </g>
              </>
            ) : null}

            {/* Step 3: forward ball into space, opponents retreating disorganized */}
            {step === "forward" ? (
              <line markerEnd="url(#winSafeArrow)" stroke="#4ade80" strokeWidth="1.1" x1={US.x} x2={FORWARD_OPTION.x} y1={US.y} y2={FORWARD_OPTION.y} />
            ) : null}

            {/* Opponents */}
            <circle cx={PRESSER.x} cy={PRESSER.y} fill="#dc2626" r="2.6" stroke="#7f1d1d" strokeWidth="0.4" opacity={step === "secure" ? 1 : 0.4} />
            <circle cx={RETREATING_1.x} cy={RETREATING_1.y} fill="#dc2626" r="2.4" stroke="#7f1d1d" strokeWidth="0.4" opacity="0.5" />
            <circle cx={RETREATING_2.x} cy={RETREATING_2.y} fill="#dc2626" r="2.4" stroke="#7f1d1d" strokeWidth="0.4" opacity="0.5" />

            {/* Forward option (only relevant in step 3, faded otherwise) */}
            <g opacity={step === "forward" ? 1 : 0.35}>
              <circle cx={FORWARD_OPTION.x} cy={FORWARD_OPTION.y} fill="#16a34a" r="2.6" stroke="#052e16" strokeWidth="0.4" />
              <text fill="#ffffff" fontSize="2.2" fontWeight="700" textAnchor="middle" x={FORWARD_OPTION.x} y={FORWARD_OPTION.y + 4}>
                CM
              </text>
            </g>

            {/* Safe option (only relevant in step 2, faded otherwise) */}
            <g opacity={step === "safe" ? 1 : 0.35}>
              <circle cx={SAFE_OPTION.x} cy={SAFE_OPTION.y} fill="#16a34a" r="2.6" stroke="#052e16" strokeWidth="0.4" />
              <text fill="#ffffff" fontSize="2.2" fontWeight="700" textAnchor="middle" x={SAFE_OPTION.x} y={SAFE_OPTION.y + 4}>
                CB
              </text>
            </g>

            {/* Us with the ball */}
            <circle cx={US.x} cy={US.y} fill="#16a34a" r="2.8" stroke="#052e16" strokeWidth="0.4" />
            <text fill="#ffffff" fontSize="2.2" fontWeight="700" textAnchor="middle" x={US.x} y={US.y + 4.2}>
              CM
            </text>
            <circle cx={US.x + 3.5} cy={US.y - 1} fill="#fde68a" r="1.4" stroke="#92400e" strokeWidth="0.3" />
          </svg>
        </SoccerFieldSvg>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            step === "secure"
              ? "border-green-600 bg-green-50 text-green-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-green-300"
          }`}
          onClick={() => setStep("secure")}
          type="button"
        >
          1. Secure It
        </button>
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            step === "safe"
              ? "border-amber-500 bg-amber-50 text-amber-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-amber-300"
          }`}
          onClick={() => setStep("safe")}
          type="button"
        >
          2. Don&apos;t Give It Back
        </button>
        <button
          className={`rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            step === "forward"
              ? "border-blue-600 bg-blue-50 text-blue-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-blue-300"
          }`}
          onClick={() => setStep("forward")}
          type="button"
        >
          3. Go Forward
        </button>
      </div>

      <div
        className={`mt-4 rounded-lg border p-4 ${
          step === "secure"
            ? "border-green-200 bg-green-50"
            : step === "safe"
              ? "border-amber-200 bg-amber-50"
              : "border-blue-200 bg-blue-50"
        }`}
      >
        {step === "secure" ? (
          <p className="text-base leading-7 !text-green-800">
            <span className="font-black">Secure it —</span> our CM just won the ball with an opponent right there.
            First job: take a touch away from that pressure and get the ball under control. Nothing else matters
            until the ball is safe.
          </p>
        ) : step === "safe" ? (
          <p className="text-base leading-7 !text-amber-800">
            <span className="font-black">Don&apos;t give it right back —</span> the opponent who just lost the ball
            is still close, and a forced pass through them is asking to turn it straight over. Our CM plays it
            simple and safe back to the CB instead. Boring, but it keeps the ball.
          </p>
        ) : (
          <p className="text-base leading-7 !text-blue-800">
            <span className="font-black">Look to go forward —</span> with the ball secure and safe, our CM scans
            and sees the opponents are still scrambling to get back into shape. That CM in space is a free outlet —
            play it forward fast, before they recover.
          </p>
        )}
      </div>
    </div>
  );
}
