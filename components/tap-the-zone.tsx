"use client";

import { useState } from "react";
import { SoccerFieldSvg } from "./soccer-field-svg";

type Zone = { id: string; label: string };

const THIRDS: Zone[] = [
  { id: "attacking", label: "Attacking Third" },
  { id: "middle", label: "Middle Third" },
  { id: "defending", label: "Defending Third" },
];

const CHANNELS: Zone[] = [
  { id: "left", label: "Left Channel" },
  { id: "center", label: "Center Channel" },
  { id: "right", label: "Right Channel" },
];

export function TapTheZone({
  prompt,
  zones,
  answer,
}: {
  prompt: string;
  zones: "thirds" | "channels";
  answer: string;
}) {
  const [tapped, setTapped] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const isHorizontal = zones === "thirds";
  const zoneList = isHorizontal ? THIRDS : CHANNELS;

  function handleTap(id: string) {
    if (solved) return;
    setTapped(id);
    setAttempts((a) => a + 1);
    if (id === answer) {
      setSolved(true);
    } else {
      setTimeout(() => setTapped(null), 700);
    }
  }

  return (
    <div className="mt-5 rounded-lg border border-green-100 bg-white p-5">
      <p className="text-xl font-black text-slate-900">{prompt}</p>
      <p className="mt-1 text-sm text-slate-500">Tap the correct zone on the field.</p>
      <div className="relative mt-4">
        <SoccerFieldSvg>
          {zoneList.map((zone, i) => {
            const isAnswer = zone.id === answer;
            const isTapped = tapped === zone.id;

            const style: React.CSSProperties = isHorizontal
              ? { position: "absolute", top: `${i * 33.33}%`, left: 0, right: 0, height: "33.34%" }
              : { position: "absolute", left: `${i * 33.33}%`, top: 0, bottom: 0, width: "33.34%" };

            let overlay = "border-2 border-white/10 hover:bg-white/15";
            if (solved && isAnswer) overlay = "border-2 border-green-400 bg-green-500/50";
            else if (isTapped && !isAnswer) overlay = "border-2 border-red-400 bg-red-500/40";

            return (
              <button
                aria-label={solved ? zone.label : `Zone ${i + 1}`}
                className={`absolute cursor-pointer transition-all ${overlay}`}
                key={zone.id}
                onClick={() => handleTap(zone.id)}
                style={style}
                type="button"
              >
                {solved && (
                  <span
                    className={`absolute inset-0 flex items-center justify-center text-sm font-black drop-shadow ${isAnswer ? "text-white" : "text-white/50"}`}
                  >
                    {zone.label}
                  </span>
                )}
              </button>
            );
          })}
        </SoccerFieldSvg>
      </div>
      <div className="mt-3 min-h-6 text-base font-bold">
        {solved ? (
          <span className="text-green-700">{attempts === 1 ? "First try — nice work!" : "Got it!"}</span>
        ) : tapped ? (
          <span className="text-red-600">Not quite — try again.</span>
        ) : null}
      </div>
    </div>
  );
}
