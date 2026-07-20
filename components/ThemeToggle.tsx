"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      className="px-3 py-1 border rounded"
    >
      Toggle {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
