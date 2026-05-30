import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/data/blogPosts';
import { SITE_URL } from '@/constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts();

  const basePages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/forum`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/recovery`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${encodeURIComponent(post.id)}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...basePages, ...blogPages];
}
