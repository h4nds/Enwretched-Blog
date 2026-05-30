import { getBlogPosts } from '@/data/blogPosts';
import BlogListClient from './BlogListClient';

export default function BlogPage() {
  const posts = getBlogPosts();
  return <BlogListClient posts={posts} />;
}
