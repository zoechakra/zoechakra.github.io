import { createFileRoute } from "@tanstack/react-router";
import { NotebookChrome } from "@/components/notebook/NotebookChrome";
import { Cell } from "@/components/notebook/Cell";
import { TerminalCell } from "@/components/notebook/TerminalCell";
import { AboutOutput } from "@/components/notebook/AboutOutput";
import { InternshipsOutput } from "@/components/notebook/InternshipsOutput";
import { ProjectsOutput } from "@/components/notebook/ProjectsOutput";
import { ResumeOutput } from "@/components/notebook/ResumeOutput";
import { ContactOutput } from "@/components/notebook/ContactOutput";
import { profile } from "@/data/portfolio";

const title = "Zoe Chakraborty — Portfolio Notebook";
const description =
  "Zoe Chakraborty's portfolio, built as a JupyterLab notebook: an interactive terminal, internships at RBC and IBM, projects, resume, and contact info.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <NotebookChrome>
      <header className="mb-10 border-b border-nb-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-7 text-nb-muted">
          {profile.subtitle}
        </p>
      </header>

      <Cell index={1} source={"!zsh  # interactive — type `help`"}>
        <TerminalCell />
      </Cell>

      <Cell index={2} source="portfolio.about()">
        <AboutOutput />
      </Cell>

      <Cell index={3} source="portfolio.internships()">
        <InternshipsOutput />
      </Cell>

      <Cell index={4} source="portfolio.projects()">
        <ProjectsOutput />
      </Cell>

      <Cell index={5} source="portfolio.resume()">
        <ResumeOutput />
      </Cell>

      <Cell index={6} source="portfolio.contact()">
        <ContactOutput />
      </Cell>
    </NotebookChrome>
  );
}
