import {
  Plus,
  Scissors,
  Copy,
  Clipboard,
  Play,
  Square,
  RotateCw,
  FastForward,
  Sun,
  Moon,
} from "lucide-react";
import { ToolbarButton } from "./ToolbarButton";
import { useTheme } from "@/lib/theme";

function SaveIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4 3h13.2L21 6.8V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1Zm8 9.2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2ZM6.5 5.2v3.4h9V5.2h-9Z" />
    </svg>
  );
}

function goToNextSection() {
  const cells = Array.from(
    document.querySelectorAll<HTMLElement>("[data-nb-cell]"),
  );
  if (cells.length === 0) return;
  const threshold = 90;
  const next =
    cells.find((el) => el.getBoundingClientRect().top > threshold) ?? cells[0];
  next.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function NotebookChrome({ children }: { children: React.ReactNode }) {
  const { dark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-nb-surface text-foreground">
      <header className="sticky top-0 z-10 border-b border-nb-border bg-nb-chrome">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm font-bold tracking-tight">
              portfolio.ipynb
            </span>
            <span className="text-xs text-nb-muted">JupyterLab</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-nb-muted sm:inline">
              Python 3 (ipykernel)
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-nb-accent" />
            <ToolbarButton
              label={dark ? "Light theme" : "Dark theme"}
              onClick={toggle}
              hover
            >
              {dark ? (
                <Moon size={16} strokeWidth={1.5} />
              ) : (
                <Sun size={16} strokeWidth={1.5} />
              )}
            </ToolbarButton>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-nb-border px-3 py-1">
          <div className="flex items-center gap-1.5">
            <ToolbarButton label="Save notebook">
              <SaveIcon />
            </ToolbarButton>
            <ToolbarButton label="Insert cell">
              <Plus size={16} strokeWidth={1.5} />
            </ToolbarButton>
            <ToolbarButton label="Cut cell">
              <Scissors size={16} strokeWidth={1.5} />
            </ToolbarButton>
            <ToolbarButton label="Copy cell">
              <Copy size={16} strokeWidth={1.5} />
            </ToolbarButton>
            <ToolbarButton label="Paste cell">
              <Clipboard size={16} strokeWidth={1.5} />
            </ToolbarButton>
            <ToolbarButton label="Run cell">
              <Play size={16} strokeWidth={1} fill="currentColor" />
            </ToolbarButton>
            <ToolbarButton label="Interrupt kernel">
              <Square size={12} strokeWidth={1} fill="currentColor" />
            </ToolbarButton>
            <ToolbarButton label="Restart kernel">
              <RotateCw size={16} strokeWidth={1.5} />
            </ToolbarButton>
            <ToolbarButton label="Go to next section" onClick={goToNextSection}>
              <FastForward size={16} strokeWidth={1} fill="currentColor" />
            </ToolbarButton>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8">
        {children}
      </main>
    </div>
  );
}
