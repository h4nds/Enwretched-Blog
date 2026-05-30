export const SITE_URL = 'https://enwretched.com';
export const SITE_NAME = 'EnWretched';
export const DEFAULT_OG_IMAGE = '/images/showcase/deamon.png';
export const DEFAULT_DESCRIPTION =
  'Portfolio and blog of Ray Wretch, a digital artist and aspiring web developer exploring fullstack development and experimental art.';

/** Turn a relative asset path into an absolute URL for JSON-LD and OG tags. */
export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
