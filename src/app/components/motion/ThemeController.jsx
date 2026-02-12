"use client";

import { useState, useEffect } from "react";

const themes = [
  { name: "light", label: "L", emoji: "☀️" },
  { name: "dark", label: "D", emoji: "🌙" },
  { name: "retro", label: "R", emoji: "📻" },
  { name: "cyberpunk", label: "C", emoji: "🤖" },
  { name: "valentine", label: "V", emoji: "💖" },
  { name: "aqua", label: "A", emoji: "🌊" },
];

const ThemeController = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-9999 pointer-events-auto">
      <div className="fab fab-end fab-bottom gap-3">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-lg touch-manipulation btn-circle bg-[#FD5956] shadow-lg hover:scale-110 transition"
        >
          🎨
        </button>

        {/* Floating Theme Buttons */}
        <div
          className={`flex flex-col gap-3 transition-all duration-300 ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-0 translate-y-5 pointer-events-none"
          }`}
        >
          {themes.map((t) => (
            <button
              key={t.name}
              className="btn btn-lg touch-manipulation btn-circle shadow-md"
              data-theme={t.name}
              aria-label={t.name}
              onClick={() => {
                document.documentElement.setAttribute("data-theme", t.name);
                localStorage.setItem("theme", t.name);
              }}
            >
              {t.emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeController;
