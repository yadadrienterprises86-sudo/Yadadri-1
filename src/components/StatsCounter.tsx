"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function StatsCounter({ value, suffix = "", duration = 2 }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.min(60, duration * 30);
    const increment = end / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      start = Math.floor(increment * frame);
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, (duration * 1000) / totalFrames);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
