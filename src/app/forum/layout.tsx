import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Forum',
  description:
    'Ballroom forum — upcoming message board from EnWretched. Rails backend, themes, and community features in progress.',
  path: '/forum',
});

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
