import {
  timePhrases,
  britishPhrases,
  developerFormat,
  academicPhrases,
  existentialPhrases,
  corporatePhrases,
  indianParentPhrases,
} from "../data/time";

import type { Mode } from "../types";
import { pickRandom, intToText } from "../utils/helpers";
import { useMemo } from "react";

export default function ApproxPhrase({ mode }: { mode: Mode }) {
  const now = new Date();

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

  const phrase = useMemo(() => {
    if (mode === "british") return pickRandom(britishPhrases);
    if (mode === "academic") return pickRandom(academicPhrases);
    if (mode === "existential") return pickRandom(existentialPhrases);
    if (mode === "corporate") return pickRandom(corporatePhrases);
    if (mode === "indian-parent") return pickRandom(indianParentPhrases);

    return pickRandom(timePhrases[phraseIndex]);
  }, [mode, phraseIndex]);

  if (mode === "developer") {
    return <span className="font-mono">{developerFormat(now)}</span>;
  } else if (mode === "fuzzy") {
    return (
      <span>
        It's {phrase} <span className="font-black underline">{targetHour}</span>
        .
      </span>
    );
  }

  return <span className="font-thin">{phrase}</span>;
}
