import {
  about,
  aboutFacts,
  contact,
  internships,
  profile,
  projects,
  resume,
} from "@/data/portfolio";

export type Line = {
  text: string;
  tone?: "accent" | "muted" | "error";
  /** Hanging indent (in monospace chars) so wrapped text aligns with the description column. */
  hang?: number;
};

const HELP: Line[] = [
  { text: "Available commands:", tone: "muted" },
  { text: "  help                show this message", hang: 22 },
  { text: "  about               who I am", hang: 22 },
  { text: "  internships         where I've worked", hang: 22 },
  { text: "  projects            what I've built", hang: 22 },
  { text: "  resume              link to my resume", hang: 22 },
  { text: "  contact             how to reach me", hang: 22 },
  { text: "  ls                  list notebook sections", hang: 22 },
  { text: "  whoami              current user", hang: 22 },
  { text: "  open <target>       open linkedin | github | email | resume", hang: 22 },
  { text: "  theme               toggle dark / light mode", hang: 22 },
  { text: "  clear               clear the screen", hang: 22 },
  { text: "" },
  { text: "Tab completes commands; ↑/↓ walks history.", tone: "muted" },
];


export const WELCOME: Line[] = [
  { text: `Last login: welcome to ${profile.name}'s portfolio.`, tone: "muted" },
  { text: "Type `help` to see what you can run.", tone: "muted" },
];

function aboutLines(): Line[] {
  return [
    ...about.map((p) => ({ text: p })),
    { text: "" },
    ...aboutFacts.map(([k, v]) => ({ text: `${k.padEnd(21)} ${v}`, hang: 22 })),
  ];
}

function internshipLines(): Line[] {
  return internships.map((i) => ({
    text: `${i.company} — ${i.team} · ${i.dates}`,
    hang: 2,
  }));
}

function projectLines(): Line[] {
  return projects.flatMap((p) => [
    { text: `${p.name}  (${p.dates})`, tone: "accent" as const },
    ...p.bullets.map((b) => ({ text: `  - ${b}`, hang: 4 })),
    { text: `  [${p.tags.join(", ")}]`, tone: "muted" as const, hang: 3 },
    { text: "" },
  ]);
}

function contactLines(): Line[] {
  return [
    { text: `Email:    ${contact.email}`, hang: 10 },
    { text: `LinkedIn: ${contact.linkedinLabel}`, hang: 10 },
    { text: `GitHub:   ${contact.githubLabel}`, hang: 10 },
  ];
}


export const COMMANDS = [
  "help",
  "about",
  "internships",
  "projects",
  "resume",
  "contact",
  "ls",
  "whoami",
  "open",
  "theme",
  "clear",
];

const ARGS: Record<string, string[]> = {
  open: ["linkedin", "github", "email", "resume"],
  theme: ["dark", "light"],
};

function commonPrefix(items: string[]): string {
  if (!items.length) return "";
  let prefix = items[0] ?? "";
  for (const item of items) {
    while (!item.startsWith(prefix)) prefix = prefix.slice(0, -1);
  }
  return prefix;
}

/** Tab-completion: returns the completed input and any ambiguous matches. */
export function complete(raw: string): { value: string; matches: string[] } {
  const leading = raw.match(/^\s*/)?.[0] ?? "";
  const parts = raw.trim().length ? raw.trim().split(/\s+/) : [""];
  const endsWithSpace = /\s$/.test(raw) && raw.trim().length > 0;
  const [cmd = ""] = parts;

  if (parts.length === 1 && !endsWithSpace) {
    const matches = COMMANDS.filter((c) => c.startsWith(cmd.toLowerCase()));
    if (!matches.length) return { value: raw, matches: [] };
    const completed = matches.length === 1 ? `${matches[0]} ` : commonPrefix(matches);
    return {
      value: leading + completed,
      matches: matches.length > 1 ? matches : [],
    };
  }

  const options = ARGS[cmd.toLowerCase()];
  if (!options) return { value: raw, matches: [] };
  const partial = endsWithSpace ? "" : (parts[1] ?? "");
  const matches = options.filter((o) => o.startsWith(partial.toLowerCase()));
  if (!matches.length) return { value: raw, matches: [] };
  const completed = matches.length === 1 ? matches[0] : commonPrefix(matches);
  return {
    value: `${leading}${cmd} ${completed}`,
    matches: matches.length > 1 ? matches : [],
  };
}

/** Inline "ghost" suggestion: the remaining characters of the best match. */
export function suggest(raw: string): string {
  if (!raw || /^\s*$/.test(raw)) return "";
  const parts = raw.trim().split(/\s+/);
  const endsWithSpace = /\s$/.test(raw);
  const [cmd = ""] = parts;

  if (parts.length === 1 && !endsWithSpace) {
    const match = COMMANDS.find((c) => c.startsWith(cmd.toLowerCase()));
    return match && match !== cmd.toLowerCase() ? match.slice(cmd.length) : "";
  }

  const options = ARGS[cmd.toLowerCase()];
  if (!options || parts.length > 2) return "";
  const partial = endsWithSpace ? "" : (parts[1] ?? "");
  const match = options.find((o) => o.startsWith(partial.toLowerCase()));
  if (!match) return "";
  return match.slice(partial.length);
}

export function runCommand(raw: string): {
  lines: Line[];
  clear?: boolean;
  openUrl?: string;
  theme?: "dark" | "light" | "toggle";
} {
  const input = raw.trim();
  if (!input) return { lines: [] };
  const [cmd = "", arg] = input.split(/\s+/);

  switch (cmd.toLowerCase()) {
    case "help":
      return { lines: HELP };
    case "about":
      return { lines: aboutLines() };
    case "internships":
    case "experience":
      return { lines: internshipLines() };
    case "projects":
      return { lines: projectLines() };
    case "resume":
      return {
        lines: [
          { text: `${resume.fileName} — ${resume.viewUrl}` },
          { text: "Tip: run `open resume` to view it.", tone: "muted" },
        ],
      };
    case "contact":
      return { lines: contactLines() };
    case "ls":
      return {
        lines: [
          {
            text: "about.md   internships.md   projects.md   resume.pdf   contact.md",
          },
        ],
      };
    case "whoami":
      return { lines: [{ text: "guest" }] };
    case "theme": {
      const mode = (arg ?? "").toLowerCase();
      if (mode === "dark" || mode === "light") {
        return { lines: [{ text: `theme set to ${mode}`, tone: "muted" }], theme: mode };
      }
      if (mode) {
        return {
          lines: [{ text: "theme: usage — theme [dark|light]", tone: "error" }],
        };
      }
      return { lines: [{ text: "toggling theme...", tone: "muted" }], theme: "toggle" };
    }
    case "clear":
      return { lines: [], clear: true };
    case "open": {
      const targets: Record<string, string> = {
        linkedin: contact.linkedin,
        github: contact.github,
        email: `mailto:${contact.email}`,
        resume: resume.viewUrl,
      };
      const url = targets[(arg ?? "").toLowerCase()];
      if (!url) {
        return {
          lines: [
            {
              text: "open: usage — open <linkedin|github|email|resume>",
              tone: "error",
            },
          ],
        };
      }
      return { lines: [{ text: `opening ${arg}...`, tone: "muted" }], openUrl: url };
    }
    default:
      return {
        lines: [{ text: `zsh: command not found: ${cmd}`, tone: "error" }],
      };
  }
}
