import type { ReactNode } from "react";

export function Cell({
  index,
  source,
  children,
}: {
  index: number | string;
  source: string;
  children?: ReactNode;
}) {
  return (
    <section className="mb-8">
      <div className="flex gap-3 sm:gap-4">
        <div className="hidden w-14 shrink-0 pt-2.5 text-right font-mono text-xs text-nb-accent sm:block">
          [{index}]:
        </div>
        <pre className="flex-1 overflow-x-auto rounded-sm border border-nb-border bg-nb-cell px-4 py-2.5 font-mono text-[13px] leading-6 text-foreground">
          <code>{source}</code>
        </pre>
      </div>
      {children ? (
        <div className="mt-3 flex gap-3 sm:gap-4">
          <div className="hidden w-14 shrink-0 sm:block" />
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      ) : null}
    </section>
  );
}
