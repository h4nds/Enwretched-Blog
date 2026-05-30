import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Gallery',
  description:
    'Gallery of digital art, photography, and mixed media by Ray Wretch — surreal landscapes, experimental pieces, and client work.',
  path: '/gallery',
  image: '/images/showcase/recovery.jpg',
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
