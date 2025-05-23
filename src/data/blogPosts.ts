import { BlogPost } from '@/types/blog';

// Blog posts organized by year and month
const posts: BlogPost[] = [

  {
    id: '2024-03-12-digital-art-thoughts',
    title: 'Thoughts on Digital Art Creation',
    content: `The process of creating digital art is both similar to and distinct from traditional art forms. 
    While we still rely on fundamental artistic principles, the digital medium offers unique opportunities 
    and challenges.

    In this reflection, I share my thoughts on the philosophy behind digital art creation and how it 
    continues to evolve as technology advances.`,
    excerpt: 'A reflection on the process and philosophy behind digital art creation...',
    createdAt: '2024-03-12',
    tags: ['Digital Art', 'Philosophy', 'Process'],
    author: 'Ray Wretch'
  },
  // Add more posts here
];

// Helper function to get posts sorted by date (newest first)
export const getBlogPosts = () => {
  return [...posts].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

// Helper function a single post by ID
export const getBlogPost = (id: string) => {
  return posts.find(post => post.id === id);
};

// Export all posts for direct access if needed
export const blogPosts = getBlogPosts(); 