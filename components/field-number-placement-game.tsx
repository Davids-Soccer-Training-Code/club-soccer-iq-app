"use client";

import { useMemo, useState } from "react";

type FieldSpot = {
  number: number;
  label: string;
  x: number;
  y: number;
};

type Point = {
  x: number;
  y: number;
};

const fieldSpots: FieldSpot[] = [
  { number: 1, label: "Goalkeeper", x: 50, y: 89 },
  { number: 2, label: "Right Back", x: 88, y: 67 },
  { number: 3, label: "Left Back", x: 12, y: 64 },
  { number: 4, label: "Right Center Back", x: 64, y: 75 },
  { number: 5, label: "Left Center Back", x: 36, y: 75 },
  { number: 6, label: "Defensive Midfielder", x: 52, y: 59 },
  { number: 7, label: "Right Winger", x: 81, y: 37 },
  { number: 8, label: "Center Midfielder", x: 42, y: 48 },
  { number: 9, label: "Striker", x: 49, y: 20 },
  { number: 10, label: "Attacking Midfielder", x: 58, y: 40 },
  { number: 11, label: "Left Winger", x: 13, y: 38 },
];

const tolerance = 9;

function getClickPoint(event: React.MouseEvent<HTMLButtonElement>): Point {
  const rect = event.currentTarget.getBoundingClientRect();

  return {
    x: ((event.clientX - rect.left) / rect.width) * 100,
    y: ((event.clientY - rect.top) / rect.height) * 100,
  };
}

function getDistance(point: Point, spot: FieldSpot) {
  return Math.hypot(point.x - spot.x, point.y - spot.y);
}

function isCorrect(point: Point | undefined, spot: FieldSpot) {
  return point ? getDistance(point, spot) <= tolerance : false;
}

function FieldBoard({
  children,
  onPlace,
}: {
  children: React.ReactNode;
  onPlace: (point: Point) => void;
}) {
  return (
    <button
      aria-label="Dark soccer field. Click where the number belongs."
      className="relative block w-full overflow-hidden rounded-lg border border-green-200 bg-[#07120c] text-left shadow-inner"
      onClick={(event) => onPlace(getClickPoint(event))}
      style={{ aspectRatio: "1166 / 1126" }}
      type="button"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#07140c_0_8.2%,#0b1f12_8.2%_16.4%)]" />
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-white/65"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <rect fill="none" height="90" stroke="currentColor" strokeWidth="0.8" width="90" x="5" y="5" />
        <line stroke="currentColor" strokeWidth="0.7" x1="5" x2="95" y1="50" y2="50" />
        <circle cx="50" cy="50" fill="none" r="9" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="50" cy="50" fill="currentColor" r="0.6" />
        <rect fill="none" height="18" stroke="currentColor" strokeWidth="0.7" width="50" x="25" y="5" />
        <rect fill="none" height="8" stroke="currentColor" strokeWidth="0.7" width="24" x="38" y="5" />
        <path d="M 42 23 A 9 9 0 0 0 58 23" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="50" cy="17" fill="currentColor" r="0.6" />
        <rect fill="none" height="18" stroke="currentColor" strokeWidth="0.7" width="50" x="25" y="77" />
        <rect fill="none" height="8" stroke="currentColor" strokeWidth="0.7" width="24" x="38" y="87" />
        <path d="M 42 77 A 9 9 0 0 1 58 77" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="50" cy="83" fill="currentColor" r="0.6" />
      </svg>
      <div aria-hidden="true" className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0">{children}</div>
    </button>
  );
}

function Marker({
  point,
  children,
  tone = "red",
}: {
  point: Point;
  children: React.ReactNode;
  tone?: "red" | "green";
}) {
  const colorClass = tone === "green" ? "bg-green-500 ring-green-100" : "bg-red-600 ring-red-100";

  return (
    <span
      className={`absolute grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-lg font-black text-white ring-4 ${colorClass}`}
      style={{ left: `${point.x}%`, top: `${point.y}%` }}
    >
      {children}
    </span>
  );
}

export function FieldNumberPlacementGame() {
  const [singleNumber, setSingleNumber] = useState(1);
  const [singleGuess, setSingleGuess] = useState<Point>();
  const [singleMessage, setSingleMessage] = useState("Pick a number, then click where it belongs.");
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [allGuesses, setAllGuesses] = useState<Record<number, Point>>({});
  const [allMessage, setAllMessage] = useState("Pick a number, then click where it belongs.");

  const singleSpot = fieldSpots.find((spot) => spot.number === singleNumber) ?? fieldSpots[0];
  const placedCount = Object.keys(allGuesses).length;
  const selectedSpot = fieldSpots.find((spot) => spot.number === selectedNumber) ?? fieldSpots[0];
  const allScore = useMemo(
    () => fieldSpots.filter((spot) => isCorrect(allGuesses[spot.number], spot)).length,
    [allGuesses],
  );

  function checkSingleGuess() {
    if (!singleGuess) {
      setSingleMessage("Place the number on the field first.");
      return;
    }

    setSingleMessage(
      isCorrect(singleGuess, singleSpot)
        ? `Correct. ${singleSpot.number} is in the right spot.`
        : `Try again. Move ${singleSpot.number} and check again.`,
    );
  }

  function resetSingleGuess() {
    setSingleGuess(undefined);
    setSingleMessage("Pick a number, then click where it belongs.");
  }

  function checkAllGuesses() {
    setAllMessage(
      allScore === fieldSpots.length
        ? "Perfect. All 11 numbers are in the right spots."
        : `${allScore}/11 are in the right spot. Move the ones you are unsure about and check again.`,
    );
  }

  return (
    <section className="mt-8 rounded-lg border border-green-200 bg-white p-5 md:p-6">
      <p className="m-0 text-sm font-black uppercase text-green-800">Practice game</p>
      <h2 className="mt-2 text-3xl font-black tracking-normal text-slate-900">Place the Numbers</h2>
      <p className="mt-2 text-xl font-bold leading-8 text-slate-700">
        Pick a number. Place it where you think it goes. Then check it.
      </p>

      <div className="mt-6 grid gap-5">
        <div className="rounded-lg border border-green-100 bg-green-50 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="m-0 text-2xl font-black tracking-normal text-slate-900">
                Where does the number go?
              </h3>
              <p className="m-0 mt-1 text-base font-bold text-slate-600">
                Selected: <span className="text-2xl text-red-600">{singleNumber}</span>
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {fieldSpots.map((spot) => (
              <button
                className={`grid h-12 w-12 place-items-center rounded-full border-2 text-xl font-black ${
                  singleNumber === spot.number
                    ? "border-slate-900 bg-red-600 text-white"
                    : "border-slate-200 bg-white text-slate-800"
                }`}
                key={spot.number}
                onClick={() => {
                  setSingleNumber(spot.number);
                  setSingleGuess(undefined);
                  setSingleMessage("Click where that number belongs.");
                }}
                type="button"
              >
                {spot.number}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <FieldBoard onPlace={setSingleGuess}>
              {singleGuess ? <Marker point={singleGuess}>{singleNumber}</Marker> : null}
            </FieldBoard>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              className="min-h-11 rounded-lg bg-green-700 px-4 font-black text-white"
              onClick={checkSingleGuess}
              type="button"
            >
              Check
            </button>
            <button
              className="min-h-11 rounded-lg border border-green-700 bg-white px-4 font-black text-green-800"
              onClick={resetSingleGuess}
              type="button"
            >
              Clear
            </button>
          </div>
          <p className="mt-3 text-base font-bold leading-7 text-slate-700">{singleMessage}</p>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-green-100 bg-green-50 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="m-0 text-2xl font-black tracking-normal text-slate-900">
              Place All 11 Numbers
            </h3>
            <p className="m-0 mt-1 text-base font-bold text-slate-600">
              Selected: {selectedNumber} - {selectedSpot.label}
            </p>
          </div>
          <span className="rounded-lg bg-white px-3 py-2 text-sm font-black text-green-800">
            {placedCount}/11 placed
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {fieldSpots.map((spot) => (
            <button
              className={`grid h-11 w-11 place-items-center rounded-full border-2 text-lg font-black ${
                selectedNumber === spot.number
                  ? "border-slate-900 bg-red-600 text-white"
                  : allGuesses[spot.number]
                    ? "border-green-600 bg-white text-green-800"
                    : "border-slate-200 bg-white text-slate-800"
              }`}
              key={spot.number}
              onClick={() => setSelectedNumber(spot.number)}
              type="button"
            >
              {spot.number}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <FieldBoard
            onPlace={(point) => {
              setAllGuesses((current) => ({ ...current, [selectedNumber]: point }));
              setAllMessage(`Placed ${selectedNumber}. Pick another number or check all.`);
            }}
          >
            {fieldSpots.map((spot) => {
              const point = allGuesses[spot.number];

              return point ? (
                <Marker key={spot.number} point={point} tone={isCorrect(point, spot) ? "green" : "red"}>
                  {spot.number}
                </Marker>
              ) : null;
            })}
          </FieldBoard>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            className="min-h-11 rounded-lg bg-green-700 px-4 font-black text-white"
            onClick={checkAllGuesses}
            type="button"
          >
            Check all
          </button>
          <button
            className="min-h-11 rounded-lg border border-green-700 bg-white px-4 font-black text-green-800"
            onClick={() => {
              setAllGuesses({});
              setAllMessage("Pick a number, then click where it belongs.");
            }}
            type="button"
          >
            Reset game
          </button>
        </div>
        <p className="mt-3 text-base font-bold leading-7 text-slate-700">{allMessage}</p>
      </div>
    </section>
  );
}
