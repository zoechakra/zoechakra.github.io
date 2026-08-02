import type { ReactNode } from "react";

export function ToolbarButton({
  label,
  onClick,
  hover = false,
  children,
}: {
  label: string;
  onClick?: () => void;
  hover?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-sm text-nb-toolbar-icon${
        hover ? " transition-colors hover:bg-nb-hover" : ""
      }`}
    >

      {children}
    </button>
  );
}
