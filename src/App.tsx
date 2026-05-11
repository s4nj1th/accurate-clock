import "./App.css";
import { lines } from "./data/lines";
import {
  timePhrases,
  britishPhrases,
  developerFormat,
  academicPhrases,
  existentialPhrases,
  corporatePhrases,
  indianParentPhrases,
} from "./data/time";
import Footer from "./components/Footer";
import PreciseClock from "./components/PreciseClock";
import CustomSelect from "./components/CustomSelect";
import { useEffect, useMemo, useRef, useState } from "react";

export type Mode =
  | "fuzzy"
  | "precise"
  | "british"
  | "developer"
  | "academic"
  | "existential"
  | "corporate"
  | "indian-parent";

const availableModes: Mode[] = [
  "precise",
  "fuzzy",
  "british",
  "developer",
  "academic",
  "existential",
  "corporate",
  "indian-parent",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function intToText(num: number): string {
  const text = [
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
  ];
  return text[num % 12];
}

function buildApproxElement(mode: Mode) {
  const now = new Date();
  if (mode === "developer") {
    return <span className="font-mono">{developerFormat(now)}</span>;
  }
  if (mode === "british") return <span>{pickRandom(britishPhrases)}</span>;
  if (mode === "academic") return <span>{pickRandom(academicPhrases)}</span>;
  if (mode === "existential")
    return <span>{pickRandom(existentialPhrases)}</span>;
  if (mode === "corporate") return <span>{pickRandom(corporatePhrases)}</span>;
  if (mode === "indian-parent")
    return <span>{pickRandom(indianParentPhrases)}</span>;

  const hour = now.getHours();
  const minute = now.getMinutes();

  const hour12 = intToText(hour);
  const nextHour12 = intToText(hour + 1);

  let phraseIndex = 0;
  let targetHour = hour12;

  if (minute < 5) {
    phraseIndex = 0;
  } else if (minute < 15) {
    phraseIndex = 1;
  } else if (minute < 25) {
    phraseIndex = 2;
  } else if (minute < 35) {
    phraseIndex = 3;
  } else if (minute < 50) {
    phraseIndex = 4;
    targetHour = nextHour12;
  } else {
    phraseIndex = 5;
    targetHour = nextHour12;
  }

  const phrase = pickRandom(timePhrases[phraseIndex]);
  return (
    <span className="font-thin">
      It's {phrase} <span className="underline font-black">{targetHour}</span>.
    </span>
  );
}

export default function App() {
  // choose a random mode on every load
  const [mode, setMode] = useState<Mode>(
    () => pickRandom(availableModes.slice(1)) as Mode,
  );

  // witty line changes whenever mode changes
  const [line, setLine] = useState<string>(() => pickRandom(lines));
  useEffect(() => {
    setLine(pickRandom(lines));
  }, [mode]);

  // controls visibility (show on pointer movement, hide after inactivity)
  const [controlsVisible, setControlsVisible] = useState(false);
  const hideTimerRef = useRef<number | null>(null);
  useEffect(() => {
    function showControls() {
      setControlsVisible(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = window.setTimeout(
        () => setControlsVisible(false),
        1000,
      );
    }
    window.addEventListener("pointermove", showControls);
    function handlePointerLeave(e: PointerEvent) {
      if (e.relatedTarget === null) setControlsVisible(false);
    }
    window.addEventListener("pointerout", handlePointerLeave);
    return () => {
      window.removeEventListener("pointermove", showControls);
      window.removeEventListener("pointerout", handlePointerLeave);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const approxEl = useMemo(() => buildApproxElement(mode), [mode]);

  return (
    <div className="bg-[#101010] text-white min-h-screen flex flex-col text-center items-center justify-center max-w-screen">
      <div className="relative min-w-full min-h-screen max-w-3xl items-center justify-center">
        <div
          className={`absolute top-6 right-6 flex gap-2 transition-opacity duration-300 cursor-pointer ${controlsVisible ? "opacity-100 pointer-events-auto cursor-pointer" : "opacity-0 pointer-events-none"}`}
        >
          <CustomSelect
            value={mode}
            onChange={(v) => setMode(v as Mode)}
            options={availableModes.map((m) => ({
              value: m,
              label: m.replace(/-/g, " "),
            }))}
            forceClose={!controlsVisible}
            className="cursor-pointer"
          />
        </div>

        <main className="flex flex-col h-screen justify-center">
          {mode === "precise" ? (
            <PreciseClock showSeconds />
          ) : (
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl mb-4">{approxEl}</h1>
              <p className="text-xs md:text-sm text-gray-300">{line}</p>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
