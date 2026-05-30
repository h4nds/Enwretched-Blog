import { createPageMetadata } from '@/lib/seo';
import HomeClient from './HomeClient';

export const metadata = createPageMetadata({
  title: 'EnWretched - Graphic Design & FullStack',
  description:
    'Portfolio and blog of Ray Wretch — surreal digital art, photography, mixed media, and full-stack web development.',
  path: '/',
  absoluteTitle: true,
});

export default function HomePage() {
  return <HomeClient />;
}
