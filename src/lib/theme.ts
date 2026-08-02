import { useEffect, useState } from "react";

const KEY = "nb-theme";
const listeners = new Set<(dark: boolean) => void>();
let current = false;

function apply(dark: boolean) {
  current = dark;
  document.documentElement.classList.toggle("dark", dark);
  window.localStorage.setItem(KEY, dark ? "dark" : "light");
  listeners.forEach((fn) => fn(dark));
}

export function setTheme(dark: boolean) {
  apply(dark);
}

export function toggleTheme() {
  apply(!current);
}

export function isDark() {
  return current;
}

export function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(KEY);
    const initial =
      stored === "dark" ||
      (stored === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    apply(initial);
    listeners.add(setDark);
    return () => {
      listeners.delete(setDark);
    };
  }, []);

  return { dark, toggle: toggleTheme, setTheme };
}
