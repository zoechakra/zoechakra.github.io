import { projects } from "@/data/portfolio";

export function ProjectsOutput() {
  return (
    <div className="grid gap-3 font-mono text-[13px] leading-6 sm:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.name}
          className="rounded-sm border border-nb-border bg-nb-cell p-4"
        >
          <h3 className="text-nb-accent">{project.name}</h3>
          <p className="mt-1 text-foreground">{project.blurb}</p>
          <p className="mt-2 text-nb-muted">[{project.tags.join(", ")}]</p>
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
        </article>
      ))}
    </div>
  );
}
