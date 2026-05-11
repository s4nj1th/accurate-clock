import { useEffect, useState } from "react";

export default function PreciseClock({
  tz,
  showSeconds,
}: {
  tz?: string;
  showSeconds?: boolean;
}) {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), showSeconds ? 1000 : 1000);
    return () => clearInterval(id);
  }, [showSeconds]);

  const opts: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    ...(showSeconds ? { second: "2-digit" } : {}),
    hour12: false,
    timeZone: tz,
  };

  return (
    <div className="md:text-6xl font-mono animate-fade-in text-5xl">
      {new Intl.DateTimeFormat(undefined, opts).format(now)}
    </div>
  );
}
