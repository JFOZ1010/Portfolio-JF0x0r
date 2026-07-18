"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-4 right-4 z-50 rounded-full p-2 bg-white/60 dark:bg-black/60 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 text-zinc-900 dark:text-white shadow-sm"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
