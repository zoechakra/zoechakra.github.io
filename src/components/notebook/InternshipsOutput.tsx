import { internships } from "@/data/portfolio";

export function InternshipsOutput() {
  return (
    <ul className="font-mono text-[13px] leading-6">
      {internships.map((item, i) => (
        <li
          key={i}
          className="flex flex-col gap-0.5 border-l-2 border-nb-border py-2 pl-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
        >
          <span>
            <span className="font-semibold text-foreground">{item.company}</span>
            <span className="text-nb-muted"> — {item.team}</span>
          </span>
          <span className="shrink-0 text-nb-muted">{item.dates}</span>
        </li>
      ))}
    </ul>
  );
}
