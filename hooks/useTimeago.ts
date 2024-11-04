import { useEffect, useState } from "react";

type RelativeTimeFormatUnit = "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second";

const DATE_UNITS: [unit: RelativeTimeFormatUnit, secondsInUnit: number][] = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiffs = (timestamp: any) => {
  const targetTime =
    typeof timestamp === "string" ? new Date(timestamp).getTime() : timestamp.getTime();
  const now = Date.now();
  const elapsed = (targetTime - now) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

export default function useTimeAgo(timestamp: Date) {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp);
      setTimeago(newTimeAgo);
    }, 10000);

    return () => clearInterval(interval);
  }, [timestamp]);

  const rtf = new Intl.RelativeTimeFormat("en", { style: "short" });

  if (timeago && isFinite(timeago.value)) {
    const { value, unit } = timeago;
    return rtf.format(value, unit);
  }

  return "";
}
