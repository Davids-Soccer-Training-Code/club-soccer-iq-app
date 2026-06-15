"use client";

import { useState } from "react";

import { SoccerFieldSvg } from "@/components/soccer-field-svg";

type Mode = "square" | "shaped";

const BALL_CARRIER = { x: 55, y: 45 };

const FIRST_DEFENDER: Record<Mode, { x: number; y: number }> = {
  square: { x: 55, y: 53 },
  shaped: { x: 45, y: 51 },
};

const RECOVERING: Record<Mode, { id: string; label: string; x: number; y: number }[]> = {
  square: [
    { id: "cb", label: "CB", x: 30, y: 78 },
    { id: "cm", label: "CM", x: 70, y: 78 },
  ],
  shaped: [
    { id: "cb", label: "CB", x: 38, y: 70 },
    { id: "cm", label: "CM", x: 62, y: 70 },
  ],
};

const LEFT_LANE_END = { x: 22, y: 65 };
const RIGHT_LANE_END = { x: 88, y: 65 };

function midpoint(a: { x: number; y: number }, b: { x: number; y: number }) {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function XMark({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g stroke={color} strokeWidth="1">
      <line x1={x - 2} x2={x + 2} y1={y - 2} y2={y + 2} />
      <line x1={x - 2} x2={x + 2} y1={y + 2} y2={y - 2} />
    </g>
  );
}

export function FirstDefenderDiagram() {
  const [mode, setMode] = useState<Mode>("square");
  const defender = FIRST_DEFENDER[mode];
  const recovering = RECOVERING[mode];
  const leftMid = midpoint(BALL_CARRIER, LEFT_LANE_END);

  return (
    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-black uppercase tracking-wide !text-slate-500">Our First Defender Steps Up</p>
      <p className="mt-2 text-base leading-7 !text-slate-700">
        The opponent has the ball and is facing our goal (toward the bottom of the field). Our defender standing
        there already blocks the straight path. Tap a button to see the difference between standing square and
        shaping the pressure.
      </p>

      <div className="mt-4">
        <SoccerFieldSvg>
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <marker id="laneArrowRed" markerHeight="6" markerWidth="6" orient="auto" refX="3" refY="3">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f87171" />
              </marker>
              <marker id="laneArrowGreen" markerHeight="6" markerWidth="6" orient="auto" refX="3" refY="3">
                <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" />
              </marker>
            </defs>

            {/* Left lane (inside, more dangerous) */}
            {mode === "square" ? (
              <line
                markerEnd="url(#laneArrowRed)"
                stroke="#f87171"
                strokeDasharray="2.5 2"
                strokeWidth="1"
                x1={BALL_CARRIER.x}
                x2={LEFT_LANE_END.x}
                y1={BALL_CARRIER.y}
                y2={LEFT_LANE_END.y}
              />
            ) : (
              <>
                <line
                  stroke="#f87171"
                  strokeDasharray="2.5 2"
                  strokeWidth="1"
                  x1={BALL_CARRIER.x}
                  x2={LEFT_LANE_END.x}
                  y1={BALL_CARRIER.y}
                  y2={LEFT_LANE_END.y}
                  opacity="0.35"
                />
                <XMark color="#f87171" x={leftMid.x} y={leftMid.y} />
              </>
            )}

            {/* Right lane (touchline, less dangerous) */}
            {mode === "square" ? (
              <line
                markerEnd="url(#laneArrowRed)"
                stroke="#f87171"
                strokeDasharray="2.5 2"
                strokeWidth="1"
                x1={BALL_CARRIER.x}
                x2={RIGHT_LANE_END.x}
                y1={BALL_CARRIER.y}
                y2={RIGHT_LANE_END.y}
              />
            ) : (
              <line
                markerEnd="url(#laneArrowGreen)"
                stroke="#4ade80"
                strokeWidth="1"
                x1={BALL_CARRIER.x}
                x2={RIGHT_LANE_END.x}
                y1={BALL_CARRIER.y}
                y2={RIGHT_LANE_END.y}
              />
            )}

            {/* Recovering teammates */}
            {recovering.map((p) => (
              <g key={p.id}>
                <circle cx={p.x} cy={p.y} fill="#16a34a" r="2.6" stroke="#052e16" strokeWidth="0.4" opacity="0.85" />
                <text fill="#ffffff" fontSize="2.2" fontWeight="700" textAnchor="middle" x={p.x} y={p.y + 4}>
                  {p.label}
                </text>
              </g>
            ))}

            {/* Opponent ball carrier */}
            <circle cx={BALL_CARRIER.x} cy={BALL_CARRIER.y} fill="#dc2626" r="2.8" stroke="#7f1d1d" strokeWidth="0.4" />
            <circle cx={BALL_CARRIER.x} cy={BALL_CARRIER.y - 4} fill="#fde68a" r="1.4" stroke="#92400e" strokeWidth="0.3" />

            {/* Our first defender */}
            <g>
              <circle cx={defender.x} cy={defender.y} fill="#16a34a" r="2.8" stroke="#052e16" strokeWidth="0.4" />
              <text fill="#ffffff" fontSize="2.2" fontWeight="700" textAnchor="middle" x={defender.x} y={defender.y + 4.2}>
                1st
              </text>
            </g>
          </svg>
        </SoccerFieldSvg>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          className={`flex-1 rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            mode === "square"
              ? "border-red-500 bg-red-50 text-red-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-red-300"
          }`}
          onClick={() => setMode("square")}
          type="button"
        >
          Square On
        </button>
        <button
          className={`flex-1 rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            mode === "shaped"
              ? "border-green-600 bg-green-50 text-green-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-green-300"
          }`}
          onClick={() => setMode("shaped")}
          type="button"
        >
          Shape the Pressure
        </button>
      </div>

      <div
        className={`mt-4 rounded-lg border p-4 ${
          mode === "square" ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"
        }`}
      >
        {mode === "square" ? (
          <p className="text-base leading-7 !text-red-800">
            <span className="font-black">Standing square —</span> our defender being there already blocks the
            straight path. But standing square on, with no angle, leaves both the left and right lanes open. The
            attacker can go either way.
          </p>
        ) : (
          <p className="text-base leading-7 !text-green-800">
            <span className="font-black">Shape the pressure —</span> our defender angles their body to close off the
            inside lane too. Now the straight path AND the inside lane are blocked — the attacker can only go one
            way, toward the touchline. That's exactly where we want them.
          </p>
        )}
      </div>
    </div>
  );
}
