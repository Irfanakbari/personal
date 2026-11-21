"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-black">
      Download PDF
    </button>
  );
}
