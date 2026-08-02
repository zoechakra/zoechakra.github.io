import type { ReactNode } from "react";

export function ToolbarButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="inline-flex h-7 w-7 items-center justify-center rounded-sm text-nb-toolbar-icon transition-colors hover:bg-nb-hover"
    >
      {children}
    </button>
  );
}
