import type { Mode } from "../types";
import PreciseClock from "./PreciseClock";
import ApproxPhrase from "./ApproxPhrase";
import WittyLine from "./WittyLine";

export default function ClockView({
  mode,
  line,
}: {
  mode: Mode;
  line: string;
}) {
  return (
    <main className="min-h-[60vh] h-screen flex flex-col items-center justify-center animate-fade-in">
      {mode === "precise" ? (
        <PreciseClock showSeconds />
      ) : (
        <div>
          <h1 className="text-3xl md:text-4xl mb-4">
            <ApproxPhrase mode={mode} />
          </h1>
          <WittyLine line={line} />
        </div>
      )}
    </main>
  );
}
