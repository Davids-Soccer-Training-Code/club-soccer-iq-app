"use client";

import { useState } from "react";

import { SoccerFieldSvg } from "@/components/soccer-field-svg";

type Side = "left" | "right";

type RolePlayer = { id: string; label: string; x: number; y: number };

type SideSetup = {
  pressure: RolePlayer;
  cover: RolePlayer[];
  support: RolePlayer[];
  opponent: { x: number; y: number };
  st: { x: number; y: number };
  gk: { x: number; y: number };
};

const SETUPS: Record<Side, SideSetup> = {
  left: {
    pressure: { id: "lw", label: "LW", x: 18, y: 50 },
    cover: [
      { id: "cam", label: "CAM", x: 35, y: 38 },
      { id: "cm", label: "CM", x: 35, y: 55 },
      { id: "lcb", label: "LCB", x: 32, y: 75 },
    ],
    support: [
      { id: "cdm", label: "CDM", x: 55, y: 75 },
      { id: "rcb", label: "RCB", x: 78, y: 82 },
      { id: "rw", label: "RW", x: 85, y: 52 },
    ],
    opponent: { x: 14, y: 47 },
    st: { x: 50, y: 24 },
    gk: { x: 50, y: 93 },
  },
  right: {
    pressure: { id: "rw", label: "RW", x: 82, y: 50 },
    cover: [
      { id: "cam", label: "CAM", x: 65, y: 38 },
      { id: "cm", label: "CM", x: 65, y: 55 },
      { id: "rcb", label: "RCB", x: 68, y: 75 },
    ],
    support: [
      { id: "cdm", label: "CDM", x: 45, y: 75 },
      { id: "lcb", label: "LCB", x: 22, y: 82 },
      { id: "lw", label: "LW", x: 15, y: 52 },
    ],
    opponent: { x: 86, y: 47 },
    st: { x: 50, y: 24 },
    gk: { x: 50, y: 93 },
  },
};

export function CoverAndSupportDiagram() {
  const [side, setSide] = useState<Side>("left");
  const setup = SETUPS[side];

  return (
    <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-black uppercase tracking-wide !text-slate-500">
        Ball in the {side === "left" ? "Left" : "Right"} Channel, Middle Third
      </p>
      <p className="mt-2 text-base leading-7 !text-slate-700">
        Pressure (red) is the first defender. Cover (orange) blocks passing lanes and is ready for the next 1v1.
        Support (blue) is everyone else — the last line, sliding across to help. Tap the button to mirror it to the
        other side.
      </p>

      <div className="mt-4">
        <SoccerFieldSvg>
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* GK */}
            <g>
              <circle cx={setup.gk.x} cy={setup.gk.y} fill="#16a34a" r="2.6" stroke="#052e16" strokeWidth="0.4" opacity="0.8" />
              <text fill="#ffffff" fontSize="2.2" fontWeight="700" textAnchor="middle" x={setup.gk.x} y={setup.gk.y + 4}>
                GK
              </text>
            </g>

            {/* ST */}
            <g>
              <circle cx={setup.st.x} cy={setup.st.y} fill="#16a34a" r="2.6" stroke="#052e16" strokeWidth="0.4" opacity="0.6" />
              <text fill="#ffffff" fontSize="2.2" fontWeight="700" textAnchor="middle" x={setup.st.x} y={setup.st.y + 4}>
                ST
              </text>
            </g>

            {/* Support group */}
            {setup.support.map((p) => (
              <g key={p.id}>
                <circle cx={p.x} cy={p.y} fill="#3b82f6" r="2.8" stroke="#1e3a8a" strokeWidth="0.4" />
                <text fill="#ffffff" fontSize="2.2" fontWeight="700" textAnchor="middle" x={p.x} y={p.y + 4.2}>
                  {p.label}
                </text>
              </g>
            ))}

            {/* Cover group */}
            {setup.cover.map((p) => (
              <g key={p.id}>
                <circle cx={p.x} cy={p.y} fill="#f59e0b" r="2.8" stroke="#78350f" strokeWidth="0.4" />
                <text fill="#ffffff" fontSize="2.2" fontWeight="700" textAnchor="middle" x={p.x} y={p.y + 4.2}>
                  {p.label}
                </text>
              </g>
            ))}

            {/* Opponent with ball */}
            <circle cx={setup.opponent.x} cy={setup.opponent.y} fill="#dc2626" r="2.6" stroke="#7f1d1d" strokeWidth="0.4" />
            <circle cx={setup.opponent.x} cy={setup.opponent.y - 4} fill="#fde68a" r="1.4" stroke="#92400e" strokeWidth="0.3" />

            {/* Pressure (first defender) */}
            <g>
              <circle cx={setup.pressure.x} cy={setup.pressure.y} fill="#dc2626" r="2.8" stroke="#052e16" strokeWidth="0.4" />
              <text fill="#ffffff" fontSize="2.2" fontWeight="700" textAnchor="middle" x={setup.pressure.x} y={setup.pressure.y + 4.2}>
                {setup.pressure.label}
              </text>
            </g>
          </svg>
        </SoccerFieldSvg>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          className={`flex-1 rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            side === "left"
              ? "border-green-600 bg-green-50 text-green-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-green-300"
          }`}
          onClick={() => setSide("left")}
          type="button"
        >
          Ball on the Left
        </button>
        <button
          className={`flex-1 rounded-lg border-2 py-3 text-sm font-black transition-colors ${
            side === "right"
              ? "border-green-600 bg-green-50 text-green-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-green-300"
          }`}
          onClick={() => setSide("right")}
          type="button"
        >
          Ball on the Right
        </button>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-red-200 bg-red-50 p-3">
          <p className="text-xs font-black uppercase tracking-wide !text-red-700">Pressure (1st defender)</p>
          <p className="mt-1 text-sm leading-6 !text-red-800">
            {setup.pressure.label} steps up to the ball — slow them down, shape the pressure.
          </p>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p className="text-xs font-black uppercase tracking-wide !text-amber-700">Cover (2nd/3rd defenders)</p>
          <p className="mt-1 text-sm leading-6 !text-amber-800">
            {setup.cover.map((p) => p.label).join(", ")} block passing lanes and stay ready for the next 1v1 if the
            first defender is beaten.
          </p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
          <p className="text-xs font-black uppercase tracking-wide !text-blue-700">Support (everyone else)</p>
          <p className="mt-1 text-sm leading-6 !text-blue-800">
            {setup.support.map((p) => p.label).join(", ")} slide across as the last line, ready for anything that
            gets through.
          </p>
        </div>
      </div>
    </div>
  );
}
