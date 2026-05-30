import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { createPersonSchema } from '@/components/seo/StructuredData';
import { absoluteUrl, DEFAULT_OG_IMAGE } from '@/constants/site';

export const metadata = createPageMetadata({
  title: 'About',
  description:
    'About Ray Wretch — multidisciplinary digital artist, graphic designer, and full-stack developer. Commissions, client work, and creative process.',
  path: '/about',
});

const personSchema = createPersonSchema({
  name: 'Ray Wretch',
  jobTitle: 'Digital Artist & Graphic Designer',
  url: absoluteUrl('/about'),
  sameAs: ['https://instagram.com/raywretch', 'https://github.com/raywretch'],
  image: absoluteUrl(DEFAULT_OG_IMAGE),
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={personSchema} />
      {children}
    </>
  );
}
