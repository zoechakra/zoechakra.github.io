import { resume } from "@/data/portfolio";

export function ResumeOutput() {
  return (
    <div className="font-mono text-[13px] leading-6">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <span className="text-nb-muted">{resume.fileName}</span>
        <a
          href={resume.viewUrl}
          target="_blank"
          rel="noreferrer"
          className="text-nb-accent underline"
        >
          Open in new tab ↗
        </a>
      </div>
      <div className="overflow-hidden rounded-sm border border-nb-border bg-nb-cell">
        <iframe
          src={resume.embedUrl}
          title="Resume"
          className="h-[520px] w-full"
          allow="autoplay"
        />
      </div>
      <p className="mt-2 text-nb-muted">
        Preview blocked?{" "}
        <a
          href={resume.viewUrl}
          target="_blank"
          rel="noreferrer"
          className="text-nb-accent underline"
        >
          view the resume on Google Drive
        </a>
        .
      </p>
    </div>
  );
}
