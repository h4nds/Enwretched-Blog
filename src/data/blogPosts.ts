import { BlogPost } from '@/types/blog';

// Blog posts organized by year and month
const posts: BlogPost[] = [
  {
    id: '2025-06-06-new-digital-piece',
    title: 'Solo Ops: Creating "building it from scratch"',
    content: `So I belive i would be writing the first of many blog posts, that would come to grace this website. This Project took me about a year and 2 months to complete and being near the end of it all I gotta say, im tired coach.

    I went into this project with not really a clear vision of what i wanted to create, but i knew i wanted to create something that was a reflection of my journey and the struggles i had to face. Im hoping that i can paint that picture for you.

    Currently its still a work in progress as of 6/4/25 and i plan to continue working on it until i feel it is genuenly complete. I think it's important to never finish things halfway, Commitment to things like this really builds you and your art.
    
    Some of the few updates i still need to make include adding more functional components to the about me page and the blog page. I also need to add a contact section to the about me page. 
    
    id like to also include diffrent backgrounds for the pages on the website, as well as a background music player so users can listen to music while they browse.

    these are just some of the changes that ive had in mind i feel as though theyre also going to take some times into implementing, especially the music player. But im going to continue to build these projects one by one and integrate them into the site as time advances.

    so yeah thanks for reading this huge yap, im very exited to deploy and finally go live on the web! rahhhh

    - ray
    
    `,
    
    excerpt: 'A deep dive into the creation process of my latest work...',
    createdAt: '2025-06-06',
    tags: ['Web development', 'Process', 'Behind the Scenes'],
    author: 'Ray Wretch',
    imageUrl: '/images/showcase/feeling.png'
  },

  {
    id: '2025-16-06-new-digital-piece',
    title: 'Solo Ops: "Deployment"',
    content: `yo so I knew developing a Site like this on my own would be really good challenge for me and I knew the stakes and how much ambition this project was going to take me. 

    However I might have overestimated the actual legnth in time that this was going to take me front to back (literally) but with that being said ive been working more shifts at my actual Operations Job to stay level headed because I actually just went about buying my own car (turn up) and im knowing that thing is going to do me well so i want to take care of it.
    
    Apart from that though some changes I've planned to put in the site at the moment,
    
    - at least 10 hours a week on re-writing alot of the css to debloat my codebase
    - Properly Resize all the images on the page (sigh) 
    - Avoid severing legacy Java for the modern browsers 
    - Integrate Some SEO
    - Update the post board to things im currently doing (Consistancy)
    - badges for the main page
    - Add remaining work for the gallery
    - and update the about me page (yes again)
    - 2 new color scheme themes to switch form while veiwing 

    After i get these changes out the way I want to start making the wireframes for the fourm page so that i have a nice idea for the layout, as well as starting some new smaller projects to add to my github & Resume.
    I think smart way to go about that would be to just pull diffrent features off my actual site and downsize them into plugins and tools other devs can use for theyre own site, Or atleast that would be the idea anyway. 

    But yeah, Motion.
    
    Its been raining so much recently that skating is like almost impossible now a days. The weather in New York is so Confusing i gotta tell you, but in the mean time heres a small stack of clips of mine that i've put together recently. :p
    
    
    - ray
    
    `,
    
    excerpt: 'A deep dive into the creation process of my latest digital artwork...',
    createdAt: '06-18-2025',
    tags: ['hey guys', 'Process', 'Test Of Stregnth'],
    author: 'Ray Wretch',
    imageUrl: '/images/showcase/breaker.jpg'
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