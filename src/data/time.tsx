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
    "dead on",
    "spot on",
    "newly arrived",
    "bang on time",
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
    "gently past",
    "only just beyond",
    "freshly after",
  ],

  // index 2 → 15–24 minutes
  [
    "drifting past",
    "meandering beyond",
    "wandering through",
    "settling into",
    "well into",
    "quarter-ish past",
    "comfortably past",
    "deep into",
    "past the quarter mark",
    "rolling through",
  ],

  // index 3 → 25–34 minutes
  [
    "about halfway through",
    "midway into",
    "30-ish into",
    "half past",
    "knee-deep in",
    "nearly half past",
    "smack in the middle",
    "balanced perfectly between",
    "hovering at halfway",
    "right in the thick of",
  ],

  // index 4 → 35–49 minutes
  [
    "edging toward",
    "creeping up on",
    "closing in on",
    "getting close to",
    "nearing",
    "almost evening",
    "leaning toward",
    "approaching steadily",
    "not far from",
    "within sight of",
  ],

  // index 5 → 50–59 minutes
  [
    "on the verge of",
    "almost at",
    "just shy of",
    "basically",
    "functionally",
    "seconds from",
    "practically",
    "knocking on the door of",
    "moments away from",
    "all but",
  ],
];

export const britishPhrases = [
  "Nearly tea time",
  "Bit late, innit",
  "Tea time",
  "Mind the clock",
  "Rather late now",
  "Time for a cuppa",
  "That's not cricket",
  "Running a tad behind",
];

export const academicPhrases = [
  "Submission deadline approaching",
  "You should probably finish that paper",
  "Turn in drafts before panic sets in",
  "Citation needed",
  "Your supervisor is disappointed",
  "Office hours are ending soon",
  "Grades wait for no one",
  "Academic panic intensifies",
];

export const existentialPhrases = [
  "Time is a construct",
  "This moment is a social agreement",
  "What even is 'now'",
  "The clock observes you too",
  "All moments are simultaneous somewhere",
  "Seconds are just organised entropy",
  "Reality updates every tick",
  "You are merely borrowing this minute",
];

export const corporatePhrases = [
  "Circle back in an hour",
  "Let's table this and sync later",
  "Action item: follow up",
  "Low-hanging fruit detected",
  "Please advise",
  "Take this offline",
  "Let's align on timelines",
  "Touch base shortly",
];

export const indianParentPhrases = [
  "You're already late",
  "Why didn't you leave earlier?",
  "I told you to be on time",
  "Beta, what were you doing?",
  "Traffic is not an excuse",
  "Leave 30 minutes earlier next time",
  "Everyone else has already reached",
  "I've been telling you since morning",
];

export const developerPhrases = [
  "Works on my machine",
  "Ship it",
  "Deploying anxiety...",
  "Just one more refactor",
  "npm install away from disaster",
  "Semicolon optional, stress mandatory",
  "LGTM",
  "Hotfix incoming",
];

export const developerFormat = (date: Date) => {
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const deviation = Math.floor((date.getMinutes() * 73) % 60);

  return `~${hh}:${mm} ± ${deviation} min`;
};

export const getTimeBucket = (minutes: number): number => {
  if (minutes <= 4) return 0;
  if (minutes <= 14) return 1;
  if (minutes <= 24) return 2;
  if (minutes <= 34) return 3;
  if (minutes <= 49) return 4;
  return 5;
};
