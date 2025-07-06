import Script from 'next/script';

interface StructuredDataProps {
  data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Predefined structured data types
export const createPersonSchema = (person: {
  name: string;
  jobTitle: string;
  url: string;
  sameAs?: string[];
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.jobTitle,
  "url": person.url,
  ...(person.sameAs && { "sameAs": person.sameAs }),
  ...(person.image && { "image": person.image }),
});

export const createArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author,
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "publisher": {
    "@type": "Person",
    "name": "Ray Wretch",
  },
  ...(article.image && { "image": article.image }),
  "url": article.url,
});

export const createImageObjectSchema = (image: {
  url: string;
  alt: string;
  width: number;
  height: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": image.url,
  "name": image.alt,
  "width": image.width,
  "height": image.height,
});

export const createCreativeWorkSchema = (work: {
  title: string;
  description: string;
  creator: string;
  dateCreated: string;
  image?: string;
  url: string;
  tags?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": work.title,
  "description": work.description,
  "creator": {
    "@type": "Person",
    "name": work.creator,
  },
  "dateCreated": work.dateCreated,
  ...(work.image && { "image": work.image }),
  "url": work.url,
  ...(work.tags && { "keywords": work.tags.join(", ") }),
}); 