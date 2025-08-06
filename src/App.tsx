import "./App.css";
import { lines } from "./data/lines";
import { timePhrases } from "./data/time";
import Footer from "./components/Footer";

function updateFavicon() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const favicon = document.getElementById("favicon") as HTMLLinkElement;

  if (favicon) {
    favicon.href = isDark ? "/favicon-dark.ico" : "/favicon-light.ico";
  }
}

// Initial set
updateFavicon();

// Listen for changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateFavicon);

function App() {
  return (
    <>
      <div className="bg-[#101010] text-white min-h-screen flex flex-col text-center items-center justify-center px-10">
        <p className="-mt-[10vh] text-3xl md:text-4xl mb-4 animate-fade-in">
          {getApproximateTimePhrase()}
        </p>
        <p className="text-xs md:text-sm animate-fade-in">{describeTime()}</p>
      </div>
      <Footer />
    </>
  );
}

function pickRandom(arr: string[]): string {
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

function getApproximateTimePhrase() {
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

  const phrase = pickRandom(timePhrases[phraseIndex]);
  return (
    <span className="font-thin">
      It's {phrase} <span className="underline font-black">{targetHour}</span>.
    </span>
  );
}

function describeTime() {
  return pickRandom(lines);
}

export default App;
