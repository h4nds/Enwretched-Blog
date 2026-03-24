import { notFound } from "next/navigation";
import { getBlogPost } from "@/data/blogPosts";
import BlogArticleClient from "./BlogArticleClient";

type PageProps = {
  params: { id: string };
};

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.id);
  if (!post) {
    notFound();
  }
  return <BlogArticleClient post={post} />;
}
