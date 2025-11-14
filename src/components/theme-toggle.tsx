"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // On the server, render a static placeholder to prevent layout shift
  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-full border border-foreground/10" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-8 w-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/80 hover:bg-foreground/5 transition-colors"
    >
      <span className="relative h-4 w-4 flex items-center justify-center">
        <span
          className={`absolute transition-opacity duration-300 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        >
          ☾
        </span>
        <span
          className={`absolute transition-opacity duration-300 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
        >
          ☼
        </span>
      </span>
    </button>
  );
}