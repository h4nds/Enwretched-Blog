import { BlogPost } from '@/types/blog';

// Blog posts organized by year and month
const posts: BlogPost[] = [
  {
    id: '2024-03-15-new-digital-piece',
    title: 'Solo Ops: Creating "building it from scratch"',
    content: `So I belive i would be writing the first of many blog posts, that would come to grace this website. This Project took me about a year and 2 months to complete and being near the end of it all I gotta say, im tired coach.

    I went into this project with not really a clear vision of what i wanted to create, but i knew i wanted to create something that was a reflection of my journey and the struggles i had to face. Im hoping that i can paint that picture for you.

    Currently its still a work in progress as of 6/4/25 and i plan to continue working on it until i feel it is genuenly complete. I think it's important to never finish things halfway, Commitment to things like this really builds you and your art.
    
    Some of the few updates i still need to make include `,
    
    excerpt: 'A deep dive into the creation process of my latest digital artwork...',
    createdAt: '2024-03-15',
    tags: ['Digital Art', 'Process', 'Behind the Scenes'],
    author: 'Ray Wretch',
    imageUrl: '/images/showcase/follow-the-notes.jpg'
  },
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