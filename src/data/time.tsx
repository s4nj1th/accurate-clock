export const timePhrases = [
  // index 0 → 00–04 minutes
  [
    "right on",
    "just struck",
    "exactly at",
    "precisely",
    "freshly turned",
    "around now",
    "soon™",
  ],

  // index 1 → 05–14 minutes
  [
    "barely past",
    "just after",
    "a breath past",
    "slightly beyond",
    "nudging past",
    "a little after",
    "early-ish",
  ],

  // index 2 → 15–24 minutes
  [
    "drifting past",
    "meandering beyond",
    "wandering through",
    "settling into",
    "well into",
    "quarter-ish past",
  ],

  // index 3 → 25–34 minutes
  [
    "about halfway through",
    "midway into",
    "30-ish into",
    "half past",
    "knee-deep in",
    "nearly half past",
  ],

  // index 4 → 35–49 minutes
  [
    "edging toward",
    "creeping up on",
    "closing in on",
    "getting close to",
    "nearing",
    "almost evening",
  ],

  // index 5 → 50–59 minutes
  ["on the verge of", "almost at", "just shy of", "basically", "functionally"],
];

export const britishPhrases = [
  "Half two",
  "Nearly tea time",
  "Bit late, innit",
  "About half two",
  "Tea time",
];

export const developerFormat = (date: Date) => {
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const deviation = Math.floor((date.getMinutes() * 73) % 60);
  return `~${hh}:${mm} ± ${deviation} min`;
};

export const academicPhrases = [
  "Submission deadline approaching",
  "You should probably finish that paper",
  "Turn in drafts before panic sets in",
];

export const existentialPhrases = [
  "Time is a construct",
  "This moment is a social agreement",
  "What even is 'now'",
];

export const corporatePhrases = [
  "Circle back in an hour",
  "Let's table this and sync later",
  "Action item: follow up",
];

export const indianParentPhrases = [
  "You're already late",
  "Why didn't you leave earlier?",
  "I told you to be on time",
];
