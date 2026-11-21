import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer data-print-hide className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with Next.js
        </p>
        <p>
          Press <kbd className="rounded-sm border border-line px-1.5 py-0.5 text-fg">`</kbd> to open the terminal
        </p>
      </div>
    </footer>
  );
}
