import {
  about,
  aboutFacts,
  contact,
  internships,
  profile,
  projects,
  resume,
} from "@/data/portfolio";

export type Line = { text: string; tone?: "accent" | "muted" | "error" };

const HELP: Line[] = [
  { text: "Available commands:", tone: "muted" },
  { text: "  help                show this message" },
  { text: "  about               who I am" },
  { text: "  internships         where I've worked" },
  { text: "  projects            what I've built" },
  { text: "  resume              link to my resume" },
  { text: "  contact             how to reach me" },
  { text: "  ls                  list notebook sections" },
  { text: "  whoami              current user" },
  { text: "  open <target>       open linkedin | github | email | resume" },
  { text: "  theme               toggle dark / light mode" },
  { text: "  clear               clear the screen" },
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
    ...aboutFacts.map(([k, v]) => ({ text: `${k.padEnd(21)} ${v}` })),
  ];
}

function internshipLines(): Line[] {
  return internships.map((i) => ({
    text: `${i.company} — ${i.team} · ${i.dates}`,
  }));
}

function projectLines(): Line[] {
  return projects.flatMap((p) => [
    { text: `${p.name}  (${p.dates})`, tone: "accent" as const },
    ...p.bullets.map((b) => ({ text: `  - ${b}` })),
    { text: `  [${p.tags.join(", ")}]`, tone: "muted" as const },
    { text: "" },
  ]);
}

function contactLines(): Line[] {
  return [
    { text: `Email:    ${contact.email}` },
    { text: `LinkedIn: ${contact.linkedinLabel}` },
    { text: `GitHub:   ${contact.githubLabel}` },
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
