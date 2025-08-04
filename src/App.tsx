import "./App.css";
import { lines } from "./data/lines";
import { timePhrases } from "./data/time";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#101010] text-white min-h-screen flex flex-col text-center items-center justify-center">
        <p className="text-4xl">{getApproximateTimePhrase()}</p>
        <p>{describeTime()}</p>
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
    "twelve",
  ];
  return text[(num % 12) - 1] || "zero";
}

function getApproximateTimePhrase() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const hour12 = intToText(hour);
  const nextHour12 = intToText(hour + 1);

  let phraseIndex = 0;
  let targetHour = hour12;

  if (minute < 10) {
    phraseIndex = 0;
  } else if (minute < 20) {
    phraseIndex = 1;
  } else if (minute < 35) {
    phraseIndex = 2;
  } else if (minute < 50) {
    phraseIndex = 3;
    targetHour = nextHour12;
  } else {
    phraseIndex = 4;
    targetHour = nextHour12;
  }

  const phrase = pickRandom(timePhrases[phraseIndex]);
  return (
    <div className="font-thin">
      {phrase} <span className="underline font-black">{targetHour}</span>
    </div>
  );
}

function describeTime() {
  return pickRandom(lines);
}

export default App;
