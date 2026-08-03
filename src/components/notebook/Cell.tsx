import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export function Cell({
  index,
  source,
  children,
}: {
  index: number | string;
  source: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <section id={`cell-${index}`} data-nb-cell className="mb-8 scroll-mt-28">
      <div className="flex gap-3 sm:gap-4">
        <div className="hidden w-14 shrink-0 items-start justify-end gap-1 pt-2.5 font-mono text-xs text-nb-accent sm:flex">
          {children ? (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Collapse cell output" : "Expand cell output"}
              aria-expanded={open}
              title={open ? "Collapse output" : "Expand output"}
              className="inline-flex h-5 w-5 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-nb-hover"
            >
              {open ? (
                <ChevronDown size={16} strokeWidth={2.25} />
              ) : (
                <ChevronRight size={16} strokeWidth={2.25} />
              )}
            </button>
          ) : null}
          <span>[{index}]:</span>
        </div>
        <pre className="flex-1 overflow-x-auto rounded-sm border border-nb-border bg-nb-cell px-4 py-2.5 font-mono text-[13px] leading-6 text-foreground">
          <code>{source}</code>
        </pre>
      </div>

      {children ? (
        <div className="mt-3 flex gap-3 sm:gap-4">
          <div className="hidden w-14 shrink-0 sm:block" />
          <div className="min-w-0 flex-1">
            {open ? (
              children
            ) : (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex w-full items-center gap-2 rounded-sm border border-dashed border-nb-border px-3 py-1.5 text-left font-mono text-xs text-nb-muted transition-colors hover:bg-nb-hover"
              >
                <ChevronRight size={14} strokeWidth={2.25} />
                output collapsed — click to expand
              </button>
            )}
          </div>
        </div>
      ) : null}

      {children ? (
        <div className="mt-2 sm:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="font-mono text-xs text-nb-muted underline"
          >
            {open ? "collapse output" : "expand output"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
