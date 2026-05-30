interface JsonLdProps {
  data: Record<string, unknown>;
}

/** Server-safe JSON-LD for crawlers (no client Script wrapper). */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
