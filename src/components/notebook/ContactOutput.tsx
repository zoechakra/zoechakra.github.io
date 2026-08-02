import { contact } from "@/data/portfolio";

const rows = [
  { label: "Email:", value: contact.email, href: `mailto:${contact.email}` },
  { label: "LinkedIn:", value: contact.linkedinLabel, href: contact.linkedin },
  { label: "GitHub:", value: contact.githubLabel, href: contact.github },
];

export function ContactOutput() {
  return (
    <dl className="font-mono text-[13px] leading-7">
      {rows.map((row) => (
        <div key={row.label} className="flex flex-wrap gap-x-3">
          <dt className="w-24 shrink-0 text-nb-muted">{row.label}</dt>
          <dd>
            <a
              href={row.href}
              target="_blank"
              rel="noreferrer"
              className="text-nb-accent underline underline-offset-2"
            >
              {row.value}
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}
