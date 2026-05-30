import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Recovery',
  description:
    'Recovery — a surreal nature photograph by Ray Wretch. Process notes on mist, moss, and dreamlike digital manipulation.',
  path: '/recovery',
  image: '/images/showcase/recovery.jpg',
});

export default function RecoveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
