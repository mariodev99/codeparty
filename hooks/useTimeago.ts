import { useEffect, useState } from "react";

const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiffs = (timestamp) => {
  // Convertir `timestamp` a milisegundos si es una cadena
  const targetTime = typeof timestamp === "string" ? new Date(timestamp).getTime() : timestamp.getTime();
  const now = Date.now();
  const elapsed = (targetTime - now) / 1000; // Diferencia en segundos

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

export default function useTimeAgo(timestamp) {
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