"use client";

import { CounterProps } from "@/types/ui";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({ from = 0, to }: Readonly<CounterProps>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 1.5,
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to]);

  return <span ref={ref}>{count}</span>;
}
