import { internships } from "@/data/portfolio";

export function InternshipsOutput() {
  return (
    <ul className="font-mono text-[13px] leading-6">
      {internships.map((item, i) => (
        <li
          key={i}
          className="grid grid-cols-[minmax(0,40%)_minmax(0,1fr)] items-start gap-3 border-l-2 border-nb-border py-2 pl-4"
        >
          <span className="min-w-0 break-words font-semibold text-foreground">
            {item.company}
          </span>
          <span className="flex min-w-0 flex-col text-nb-muted sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-4">
            <span className="min-w-0 break-words">{item.team}</span>
            <span className="shrink-0">{item.dates}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
