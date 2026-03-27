"use client";

import { useEffect, useMemo, useState } from "react";

export function useCountdown(durationSeconds: number) {
  const initial = useMemo(() => Math.max(0, Math.floor(durationSeconds)), [durationSeconds]);
  const [secondsLeft, setSecondsLeft] = useState(initial);

  useEffect(() => {
    setSecondsLeft(initial);
    if (initial <= 0) return;

    const started = Date.now();
    const timer = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - started) / 1000);
      const next = Math.max(0, initial - elapsed);
      setSecondsLeft(next);
    }, 250);

    return () => window.clearInterval(timer);
  }, [initial]);

  const isExpired = secondsLeft <= 0;
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return { secondsLeft, minutes, seconds, isExpired };
}