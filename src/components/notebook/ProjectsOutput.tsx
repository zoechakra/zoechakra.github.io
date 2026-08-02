import { projects } from "@/data/portfolio";

export function ProjectsOutput() {
  return (
    <div className="flex flex-col gap-3 font-mono text-[13px] leading-6">
      {projects.map((project) => (
        <article
          key={project.name}
          className="grid gap-3 rounded-sm border border-nb-border bg-nb-cell p-4 sm:grid-cols-[minmax(9rem,15rem)_1fr] sm:gap-5"
        >
          <div>
            <h3 className="text-nb-accent">{project.name}</h3>
            <p className="mt-1 text-nb-muted">{project.dates}</p>
            <ul className="mt-2 flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-sm border border-nb-border px-1.5 py-0.5 text-[11px] leading-4 text-nb-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-nb-accent underline"
              >
                view repo
              </a>
            ) : null}
          </div>

          <ul className="space-y-2 text-foreground">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="text-nb-muted">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
