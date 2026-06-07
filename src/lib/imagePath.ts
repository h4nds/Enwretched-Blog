/** Encode each path segment so filenames with spaces work with next/image. */
export function normalizeImageSrc(src: string): string {
  if (!src.startsWith('/')) return src;
  const segments = src.split('/').filter(Boolean);
  return '/' + segments.map(encodeURIComponent).join('/');
}

export function showcasePath(relativePath: string): string {
  return `/images/showcase/${relativePath}`;
}
