import type { Metadata } from 'next';
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/constants/site';

type PageMetadataOptions = {
  /** Page title without the site suffix — layout template adds "| EnWretched". */
  title: string;
  description?: string;
  /** Path only, e.g. `/blog/my-post` */
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  tags?: string[];
  /** Set false for pages you do not want indexed (e.g. admin). */
  index?: boolean;
  /** When true, title is not suffixed with "| EnWretched" (use on homepage). */
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  publishedTime,
  tags,
  index = true,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${SITE_URL}${normalizedPath}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
      ...(type === 'article' && tags?.length ? { tags } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@enwretched',
    },
    robots: index
      ? {
          index: true,
          follow: true,
        }
      : {
          index: false,
          follow: false,
        },
  };
}
