import "./App.css";
import { lines } from "./data/lines";
import { pickRandom } from "./utils/helpers";
import Controls from "./components/Controls";
import ClockView from "./components/ClockView";
import type { Mode } from "./types";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";

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

export default function App() {
  const [mode, setMode] = useState<Mode>(
    () => pickRandom(availableModes.slice(1)) as Mode,
  );

  const [line, setLine] = useState<string>(() => pickRandom(lines));

  useEffect(() => {
    setLine(pickRandom(lines));
  }, [mode]);

  const [controlsVisible, setControlsVisible] = useState(false);
  const hideTimerRef = useRef<number | null>(null);
  useEffect(() => {
    function showControls() {
      setControlsVisible(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = window.setTimeout(
        () => setControlsVisible(false),
        1500,
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

  // function regenerate() {
  //   setLine(pickRandom(lines));
  // }

  // function copyTime() {
  //   navigator.clipboard?.writeText(`${mode} — ${line}`);
  // }

  // function speak() {
  //   if (typeof window !== "undefined" && "speechSynthesis" in window) {
  //     const s = new SpeechSynthesisUtterance(`${mode}. ${line}`);
  //     window.speechSynthesis.cancel();
  //     window.speechSynthesis.speak(s);
  //   }
  // }

  return (
    <div className="bg-[#101010] text-white min-h-screen flex flex-col text-center items-center justify-center">
      <div className="relative w-full h-screen">
        <Controls
          mode={mode}
          setMode={setMode}
          availableModes={availableModes}
          visible={controlsVisible}
          // onRegenerate={regenerate}
          // onCopy={copyTime}
          // onSpeak={speak}
        />

        <ClockView mode={mode} line={line} />
      </div>
      <Footer />
    </div>
  );
}
