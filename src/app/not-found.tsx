import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid-bg grid min-h-[60dvh] place-items-center px-4 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-ink">Error 404 · line stopped</p>
        <h1 className="mt-3 text-4xl font-semibold">This page isn&apos;t on the floor plan.</h1>
        <Link href="/" className="mt-6 inline-block rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-black">
          Back to home
        </Link>
      </div>
    </div>
  );
}
