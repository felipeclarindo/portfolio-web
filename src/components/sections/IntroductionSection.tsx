"use client";

import React from "react";

export default function IntroductionSection() {
  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center text-center px-6 bg-transparent">
      <div className="font-mono text-green-400">
        <h1 className="text-3xl md:text-5xl mb-4">{">_ Hello, World!"}</h1>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl">
          I&apos;m{" "}
          <span className="text-green-500 font-bold">Felipe Clarindo</span>, a
          full stack developer passionate about turning code into impactful
          digital experiences. Explore my journey through algorithms and design.
        </p>
      </div>

      {/* Botão de chamada para ação */}
      <button className="mt-10 px-6 py-2 border border-green-400 text-green-300 font-mono hover:bg-green-600 hover:text-black transition-all duration-300">
        ↓ See My Work
      </button>
    </section>
  );
}
