import type { Mode } from "../types";
import CustomSelect from "./CustomSelect.tsx";

export default function Controls({
  mode,
  setMode,
  availableModes,
  visible,
  // onRegenerate,
  // onCopy,
  // onSpeak,
}: {
  mode: Mode;
  setMode: (m: Mode) => void;
  availableModes: Mode[];
  visible: boolean;
  // onRegenerate: () => void;
  // onCopy: () => void;
  // onSpeak: () => void;
}) {
  return (
    <div
      className={`absolute top-6 right-6 flex gap-2 z-50 transition-opacity duration-150 ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <CustomSelect
        value={mode}
        onChange={(v: string) => setMode(v as Mode)}
        options={availableModes.map((m) => ({
          value: m,
          label: m.replace(/-/g, " "),
        }))}
        forceClose={!visible}
      />
      {/*<button
        onClick={onRegenerate}
        className="bg-[#222] text-sm px-3 py-2 rounded-md"
      >
        Regenerate
      </button>
      <button
        onClick={onCopy}
        className="bg-[#222] text-sm px-3 py-2 rounded-md"
      >
        Copy
      </button>
      <button
        onClick={onSpeak}
        className="bg-[#222] text-sm px-3 py-2 rounded-md"
      >
        Speak
      </button>*/}
    </div>
  );
}
