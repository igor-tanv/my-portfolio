"use client";

import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const bubbleContainer = document.querySelector(".bubbles");
    if (!bubbleContainer) return;

    const bubbleCount = 50; // Number of bubbles

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Random size between 10px and 50px
      const size = Math.random() * 40 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Random duration between 5s and 15s
      const duration = Math.random() * 10 + 5;
      bubble.style.animationDuration = `${duration}s`;

      // Random horizontal drift
      const driftX = Math.random() * 100 - 50; // Between -50vw and 50vw
      bubble.style.setProperty("--driftX", `${driftX}vw`);

      // Random starting horizontal position
      bubble.style.left = `${Math.random() * 100}vw`;

      bubbleContainer.appendChild(bubble);
    }
  }, []);

  return (
    <section id="hero" className="hero relative">
      <div className="bubbles"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold">
          Hi, I'm <span className="text-yellow-300">Igor</span>.
        </h1>
        <p className="text-lg mt-4">
          Full Stack Software Engineer crafting seamless digital experiences.
        </p>
        <button className="hero-button">Learn More</button>
      </div>
    </section>
  );
}
