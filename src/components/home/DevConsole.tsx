"use client";

import { useEffect, useState } from "react";

const lines = [
  "> whoami",
  "Felipe Clarindo",
  "Full Stack Engineer",
  "Age: 22 | Brazil",
  "",

  "> profile --summary",
  "Graduating in Systems Analysis & Development",
  "Focused on Web, Data and Automation",
  "4+ years building real-world applications",
  "",

  "> stack --primary",
  "Next.js · TypeScript · Tailwind CSS",
  "Node.js · Python · PostgreSQL",
  "Framer Motion · Supabase",
  "",

  "> philosophy",
  "Clean Code over hype",
  "UX-first mindset",
  "Performance is non-negotiable",
  "",

  "> availability",
  "Open to freelance and full-time opportunities",
  "",

  "> run portfolio",
  "✔ portfolio loaded successfully",
];

export default function DevConsole() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, lines[index]]);
      index++;

      if (index >= lines.length) {
        clearInterval(interval);
      }
    }, 220);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-14 w-full max-w-3xl">
      <div
        className="
          bg-black/80
          border border-green-500/40
          rounded-lg
          p-6
          font-mono text-sm text-green-400
          backdrop-blur-md
          shadow-lg
        "
      >
        {displayedLines.map((line, i) => (
          <p key={i} className="leading-relaxed">
            {line || <span>&nbsp;</span>}
          </p>
        ))}

        {/* Cursor */}
        <span className="inline-block mt-1 animate-pulse">▌</span>
      </div>
    </section>
  );
}
