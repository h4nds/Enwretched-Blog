import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Get in touch with Ray Wretch for commissions, collaborations, and creative projects. Graphic design, digital art, and web development.',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
