import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Blog',
  description:
    'Studio log from Ray Wretch — site updates, side projects, tattoo progress, and process notes on design and full-stack development.',
  path: '/blog',
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
