"use client";

export type UiEvent = "open-chat" | "open-terminal";

export function emit(event: UiEvent, detail?: string) {
  window.dispatchEvent(new CustomEvent(event, { detail }));
}

export function toggleTheme() {
  const dark = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    /* storage unavailable — theme still applies for this visit */
  }
  return dark;
}
