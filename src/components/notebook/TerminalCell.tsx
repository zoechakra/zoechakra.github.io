import { useEffect, useRef, useState } from "react";
import { complete, runCommand, suggest, WELCOME, type Line } from "@/lib/terminal-commands";
import { useTheme } from "@/lib/theme";

type Entry = { prompt?: string; lines: Line[] };

const toneClass: Record<string, string> = {
  accent: "text-nb-accent",
  muted: "text-nb-muted",
  error: "text-nb-error",
};

export function TerminalCell() {
  const [entries, setEntries] = useState<Entry[]>([{ lines: WELCOME }]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toggle, setTheme } = useTheme();
  const ghost = suggest(value);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries]);

  const submit = () => {
    const raw = value;
    const result = runCommand(raw);
    setValue("");
    if (raw.trim()) {
      setHistory((h) => [raw.trim(), ...h]);
      setCursor(-1);
    }
    if (result.clear) {
      setEntries([]);
    } else {
      setEntries((e) => [...e, { prompt: raw, lines: result.lines }]);
    }
    if (result.theme === "toggle") toggle();
    else if (result.theme) setTheme(result.theme === "dark");
    if (result.openUrl) {
      window.open(result.openUrl, "_blank", "noopener,noreferrer");
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length) {
        const next = Math.min(cursor + 1, history.length - 1);
        setCursor(next);
        setValue(history[next] ?? "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = cursor - 1;
      setCursor(next);
      setValue(next >= 0 ? (history[next] ?? "") : "");
    } else if (e.key === "Tab" || (e.key === "ArrowRight" && ghost)) {
      e.preventDefault();
      if (ghost) {
        setValue(value + ghost);
        return;
      }
      const { value: completed, matches } = complete(value);
      setValue(completed);
      if (matches.length) {
        setEntries((en) => [
          ...en,
          { prompt: value, lines: [{ text: matches.join("   "), tone: "muted" }] },
        ]);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setEntries([]);
    }
  };

  return (
    <div className="overflow-hidden rounded-md border border-nb-border bg-nb-term">
      <div className="flex items-center gap-2 border-b border-nb-border bg-nb-cell px-3 py-2">
        <span className="h-3 w-3 rounded-full bg-nb-dot-red" />
        <span className="h-3 w-3 rounded-full bg-nb-dot-yellow" />
        <span className="h-3 w-3 rounded-full bg-nb-dot-green" />
        <span className="ml-2 font-mono text-xs text-nb-muted">
          guest@portfolio — zsh
        </span>
      </div>

      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="h-80 cursor-text overflow-y-auto px-4 py-3 font-mono text-[13px] leading-6"
      >
        {entries.map((entry, i) => (
          <div key={i}>
            {entry.prompt !== undefined && (
              <div>
                <span className="text-nb-accent">guest@portfolio ~ %</span>{" "}
                <span className="text-foreground">{entry.prompt}</span>
              </div>
            )}
            {entry.lines.map((line, j) => {
              const tone = toneClass[line.tone ?? ""] ?? "text-foreground";
              if (line.label !== undefined) {
                return (
                  <div key={j} className={`flex items-start gap-2 ${tone}`}>
                    <span className="w-[13ch] shrink-0 break-words sm:w-[21ch]">
                      {line.label}
                    </span>
                    <span className="min-w-0 flex-1 break-words">{line.desc}</span>
                  </div>
                );
              }
              return (
                <div
                  key={j}
                  className={`whitespace-pre-wrap break-words pl-[2ch] -indent-[2ch] ${tone}`}
                >
                  {line.text || "\u00a0"}
                </div>
              );
            })}

          </div>
        ))}

        <div className="flex items-center">
          <span className="text-nb-accent">guest@portfolio ~ %</span>
          <div className="relative ml-2 flex-1">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 whitespace-pre font-mono text-[13px] leading-6"
            >
              <span className="invisible">{value}</span>
              <span className="text-nb-muted opacity-70">{ghost}</span>
            </div>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="Terminal input"
              spellCheck={false}
              autoComplete="off"
              className="relative w-full bg-transparent font-mono text-[13px] leading-6 text-foreground caret-nb-accent outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
