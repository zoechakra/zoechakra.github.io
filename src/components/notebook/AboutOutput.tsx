import { about, aboutFacts } from "@/data/portfolio";

export function AboutOutput() {
  return (
    <div className="font-mono text-[13px] leading-6">
      {about.map((p, i) => (
        <p key={i} className="mb-3 whitespace-pre-wrap text-foreground">
          {p}
        </p>
      ))}
      <dl className="mt-4 space-y-1">
        {aboutFacts.map(([k, v]) => (
          <div key={k} className="flex gap-3">
            <dt className="w-44 shrink-0 text-nb-muted">{k}</dt>
            <dd className="text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
