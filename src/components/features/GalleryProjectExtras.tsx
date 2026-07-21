import type { CaseStudyNarrative, GalleryDocument } from "@/types/artwork";

export function OutcomeLine({ text }: { text: string }) {
  return (
    <p className="mt-2 border-l-2 border-theme-accent/70 pl-3 text-sm leading-snug text-theme-text-heading">
      {text}
    </p>
  );
}

const CASE_STUDY_LABELS: { key: keyof CaseStudyNarrative; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "insight", label: "Insight" },
  { key: "concept", label: "Concept" },
  { key: "execution", label: "Execution" },
  { key: "outcome", label: "Outcome" },
];

export function CaseStudyBlock({ caseStudy }: { caseStudy: CaseStudyNarrative }) {
  return (
    <dl className="mt-3 space-y-3">
      {CASE_STUDY_LABELS.map(({ key, label }) => (
        <div key={key}>
          <dt className="text-xs font-semibold uppercase tracking-wide text-theme-text-muted">
            {label}
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-theme-text">
            {caseStudy[key]}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function GalleryDocumentsList({
  documents,
  heading = "Supporting documents",
}: {
  documents: GalleryDocument[];
  heading?: string;
}) {
  return (
    <div className="mt-3">
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-theme-text-muted">
        {heading}
      </h4>
      <ul className="mt-2 divide-y divide-theme-border/50 rounded-lg border border-theme-border/60 bg-theme-accent-muted/10">
        {documents.map((doc) => (
          <li key={doc.url}>
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 px-3 py-2.5 text-sm text-theme-text transition hover:bg-theme-accent-muted/25 hover:text-theme-text-heading"
            >
              <span>{doc.title}</span>
              <span className="shrink-0 text-xs uppercase tracking-wider text-theme-text-muted">
                PDF ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CaseStudyDetails({
  caseStudy,
  documents,
}: {
  caseStudy?: CaseStudyNarrative;
  documents?: GalleryDocument[];
}) {
  if (!caseStudy && (!documents || documents.length === 0)) return null;

  return (
    <div className="mt-3 space-y-2">
      {caseStudy && (
        <details className="rounded-lg border border-theme-border/60 bg-theme-card/20 px-3 py-2">
          <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.15em] text-theme-text-heading">
            Case study
          </summary>
          <CaseStudyBlock caseStudy={caseStudy} />
        </details>
      )}
      {documents && documents.length > 0 && (
        <GalleryDocumentsList documents={documents} />
      )}
    </div>
  );
}
