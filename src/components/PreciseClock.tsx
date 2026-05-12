import { useEffect, useState } from "react";

export default function PreciseClock() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 500);
    return () => clearInterval(id);
  });

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  return (
    <>
      <img
        src="/favicon-dark.ico"
        className="opacity-10 absolute scale-200 animate-rotate-acw animate-fade-in"
      />
      <div className="font-mono flex gap-5 justify-center items-center text-3xl md:text-5xl font-thin">
        <span className="text-6xl md:text-8xl">[</span>
        <span className="text-5xl md:text-7xl font-black leading-none">
          {hours}
        </span>
        :
        <span className="text-5xl md:text-7xl font-black leading-none">
          {minutes}
        </span>
        :
        <span className="text-5xl md:text-7xl font-black leading-none">
          {seconds}
        </span>
        <span className="text-6xl md:text-8xl">]</span>
      </div>
    </>
  );
}
