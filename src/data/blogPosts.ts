import { BlogPost } from '@/types/blog';

// Blog posts organized by year and month
const posts: BlogPost[] = [

  {
    id: '2026-03-21-ink-themes-drafts',
    title: 'Practicing Practice',
    content: `Hello my blog, to live is to suffer yes yes,

life has been moving faster than my drafts folder, and I'm working on so many different projects at once, with also just like rotting in my room sometimes but this is a productive post so

I've decided to use my prowess in sketching to start doing tattoos, if you know me personally its something I've always considered, but never really thought i had it in me since i never thought my own drawings were that cool, or at least professional enough for me to put on somebody's skin. But id always have it recommended to me whenever someone would catch me drawing, So. I've just went ahead and gotten all the gear i need to start actually getting ink on skin!! now i really just need to put in the practice, so lets see where this takes us

![Tattoo gear and flash](/images/showcase/tattoo guns.jpg)

Next there's the website, full stack updates, and progress I've made so far with my other projects. I've made 6 NEW THEMES, ranging from the classic enwretched, void, corruption

![Enwretched logo](/images/sitelogos/enlogo.png)


I implemented themes for Kanadojo to get familiar with building themes for a TypeScript web app. It was a really fun process, and I am thinking of rotating themes throughout the year, kind of like a seasonal thing. Im also planning to overhaul the gallery after I sort out my best undergrad work to add and since ill be featuring programming, graphic design, photography, and other media, I think clearer differentiation between the types of work will be important. I like to stay organized. So I'm spanning these same changes to the gallery and the other pages, but I've already started thinking of making more sites to showcase and i cant wait to share how those shoot.

There is also the matter of the commission inquiry in my contact form not working properly, which I'm planning to have a fix for this week, i just need to figure out how to set up API keys, i have a really cool project in mind that id like to build in order for me to understand it better and then go ahead and use that experience from that side project into my actual website.

Im really proud of the two side projects i decided to take up and build. Siizer my Image resizer tool is steadily underway to becoming a fully functional web based application, as of recent I've implemented presets that corresponds to the photo and video sizes that most big name social media apps use.

i guess Thats as much as i have to cover for now. my next few posts should b fun so ima see you then

be safe work harrddd

- ray`,
    excerpt: 'Tattoos, six themes, Siizer, and life outrunning the drafts folder',
    createdAt: '2026-03-21',
    tags: [
      'Tattoos',
      'Themes',
      'Site Updates',
      'Siizer',
      'Side Projects',
      'Fullstack',
    ],
    author: 'Ray Wretch',
    imageUrl: '/images/sitelogos/enlogo.png',
  },

  {
    id: 'Side Project Time',
    title: 'Side Project Time',
    content: `Heyyyyyyy blog this is going to be a quick post about my side projects and what i've been working on lately.

    So This is my Image Resizer Tool 'Siizer' thats been my main focus lately, I've been working on it for about  now and I've got it to a point where I'm pretty happy with it. its stack consists of Rust(yeah lol), typescript, and react. I was thinking of having this be a genuine app u can have of your desktop, but i decided to make it a web app instead. Its pretty basic for now, but I've got some ideas for some more features to add to it in the future.
    ![Alpha build of Siizer](/images/showcase/siizer.png)
    
    I wanted a pretty minimalistic design for the app while still being able to have some functionality, so i made sure to include a light and dark mode switch. You can add presets for different image sizes, and you can also add custom sizes to the app, the codebase is pretty clean too from how i structured it the app is consists of a single global stylesheet with variables, no inline styles.
    
    Right now its a pretty basic app, but I've got some ideas for some more features to add to it in the future, like fixing the site logo and adding a few more presets for different image sizes. Im thinking of hosting this on vercel as well, so i can have a nice URL for it. but till then you can check it out on my github repo [here](https://github.com/enwretched/Siizer) 

    Theres also 1 other project that been working on along side Siizer, its actually a wifi manager called MangoFitz, its a pretty basic app that allows you to manage your wifi connections and devices on your network. This was more of a personal project seeing as id like to configure my wifi on my linux machine more and im just getting tired of having to do it manually via the terminal. 
    
    Im going to have a more lengthy post about this project, right now its looking pretty complex seeing as i need to integrate it with my OS and actually make it work, The tech stack for right now is really just Rust and Tauri, much like the wifi manager for windows its going to be really easy to use and configure.

    Thats about all i have for now, Fullstack sickness is real and i hope i find no cure.......

- ray`,
    excerpt: 'Fullstack Sickness',
    createdAt: '2026-02-07',
    tags: ['Fullstack', 'Projcects', 'showcases', 'Frontend Development'],
    author: 'Ray Wretch',
    imageUrl: '/images/showcase/yeschef.png'
  },

  {
    id: '2026-01-15-new-year-updates',
    title: 'HAPPY NEW YEARZ!!!!',
    content: `Heyyyyy Blog this is my first post of the yearrrrrrr holyyyy shitttttt & im late AF so ima keep it short aii?
 ![listen mannnn](/images/showcase/happynwar.jpg)

2025 was full of advancements and set backs. I wont say much more than that fr. I've been busy preparing for the new year, and Ialready started dealing with mad personal bullshit, you cant make everything feel alright. Even so I'm still pretty hopefull for the new year and the new technologies that would come from web dev and desgin. 

 I'm genuinely hopeful about what this year has in store, especially with everything happening with our advnacements with my website and the forum site that ive been working on. Keeping the Momentum going, There area few important projects lined up for the first quarter of '26 that I am really excited to see through.

Outside of work however, I'm looking forward to skating more, learning new tricks, and continuing to grow as a visual artist and designer overall. I also want to try to push myself into unfamiliar territory creatively. I'm going to try being more uncomfortable with the mediums I use to express what I'm feeling and thinking, as well as begin planning on taking time to start new projects and put more micriosites/websites into production.

heres Just a few Site Changes for this post btw:

- Admin things (/admin/messages) to view and manage contact submissions for the time being
- Server-Side Secure authentication using HTTP-only cookies
- Message management: view, mark as read/archived, delete, search, and also filter
- API endpoints: GET messages, PATCH status updates, DELETE messages (all password-protected)
- Rate limiting and a few other security measures
  
There's also really big things developing on the forum side of my site (on the backend anyway) im planning to have the wireframes posted up in a sepaerate post in a later date but i think thats about all i have for now, ty for readdinggggg ilyyyyyy b saffeeeeee u hurdd & workk harddddd

*p.s: please feel free to reach out for any work or commisions you may need, i'll be more than happy to help you out!!*



- ray`,
    excerpt: 'new years maintenenceeee yesssssss',
    createdAt: '2026-01-15',
    tags: ['Happy New Yearzzzz', 'Site Updates', 'myfault', 'updates'],
    author: 'Ray Wretch',
    imageUrl: '/images/showcase/newwyrr.jpg'
  },

  {
    id: '2025-11-19-site-update-recovery',
    title: 'Solo Ops: Site Updateee',
    content: `hiiiiiiii blog early adult life has been killing me softly. I recently celebrated my birthday in October and a lot of personal situations arose taking my time away from full stack and into other meaningless shit- but but in the sea of losses that I've been forced to sail in there's been nice Wins we've come across. Most of my current focus now is really just towards my classes, brainstorming for this upcoming project and as well as, finalizing the wireframe for the forum page(and actually entire site) that is soon to be added some time over the holidays, as well as some aesthetics upgrades. its really important to me that i keep this place looking sick

Im trying to make a goal of *Mid Febuary of 2026* for the actual completion of that extension of the website, and while i do want to make sure i pace myself for this project specifically, putting my eyes in one lane for too long makes me drive slower. Thats just the way it is for me, Apart from that here are some recent changes to the site since the death of my pc— YOO I DEAD FORGOT TO WRITE ABOUT THIS LMAOAOA

oo k kok ok so yo my home lab PC literally fucking killed itself earlier this month. I never though id have to deal with a messed up windows update, forcing all of my important application to not be provisioned. I diagnosed my pc myself after running into circles with Windows Recovery, and this would've never happend if I NEVER LEFT MY PC ON TO GO TO FUCKIGN WORK MAN lord god in heaven how do you buy all of the parts for your rig. Take time out of your life to sort our piece by piece on the market to then get them all, build your rig and unfortunately put windows on that thing just for the operating system to force AI into my rig and brick your apps LIKE WHAT. I had to crash when i got on windows support (which was also just a horrible experience for the amount of money that comany is actually worth) becuase none of them were even really understanding what my problem really was like even when literally having to RDP my shit and look though my whole computer like are you serious gang. Only for them to have them tell me that I'm just going to have the wipe my entire system regardless of how many restores or reinstallations we do of windows like they would just not work. So i ended up caving in and just starting from scratch again, currently it still feels really foreign to use so ive ported the latest version of the site to my laptop to work on using github. Hopefully it'll feel better to work off of over time. 

But yeah my fault for the politic, this was just one of the many hurdles we have to jump over or somthing idek, 

- improved optimization for the splash screen
- Microsite inclusion for the Recovery artwork
    - side project for class revolving around the process behind the creation
    - metadata display with tags, and a description.
    - Modern-Glass like aesthetic
- UX Optimization
- Made the title and the short desc. for the art work wrapped in a clickable link that takes you to the microsite (easy navigation)
- improved click handling for links site wide

I think that covers most of the changes I've made since the hiatus 

its fine.

im fine.

So yeah sorry for not giving an update for so for a bit ima keep getting the site right :3 
  


- ray`,
    excerpt: 'heyyy again',
    createdAt: '2025-11-19',
    tags: ['Back from the dead', 'Site Updates', 'myfault', 'updates'],
    author: 'Ray Wretch',
    imageUrl: '/images/showcase/dridlife.png'
  },
  
  {
    id: '2025-09-15-hardcore-show',
    title: 'Field Work: Brick Arms - Ep Release',
    content: `The Show was absolutely insane, BRICKKK!!!!!!!!!!!!

Hi blogggg, i finnaly got the chance to see a hardcore show this month at an underground venue in the heart of the city. The energy was absolutely captivating and rowdy from the moment I walked in, and I was stoked to see some of my favorite bands.

![Brick Arms by me - BRICKARMS](/images/showcase/brickarms/brick far.jpg)

I was lucky enough to create the flyer for this show, working with a very good friend of mine. The poster work represents BrickArms and the other two bands playing that night. There's something special about designing for a show you're actually going to attend - you're not just creating art, you're creating the visual identity for an experience you're about to live.

![](/images/showcase/brickarms/cole darkk.jpg)

The show itself was everything you'd want from a hardcore preformance. The volume was punishing in the best way possible. Each band brought their own energy, but they all shared that raw, unfiltered intensity that makes hardcore so special. I've been blessed to get a few good shots of the concert while I was there, capturing some of that chaotic energy.

personally though what really struck me was how this scene operates. Like it's not about the mainstream venues or the polished performances. It's about finding these hidden spaces where the music can be as loud and as raw as it needs to be. Where the community comes together not because of marketing or promotion, but because they genuinely want to be there, to experience something real.

![](/images/showcase/brickarms/brickkyy.jpg)

The underground nature of it all - the secret location, the DIY flyers, the word-of-mouth promotion - it all adds to the authenticity. This is music in its purest form, stripped of all the industry bullshit, just raw energy and genuine passion.

Shooting and Editing these shots took me about a Day and a half (i got fake lazy), but it was worth it. My favorite band was BrickArms(duh) and their 3rd to last song was sooooooooooooooooo sick. These are the shows that remind you why you fell in love with hardcore/skramz in the first place.

![colessss](/images/showcase/brickarms/colleeee.jpg)

![last song - hunter close up](/images/showcase/brickarms/hunter clost.jpg)



People were definitely hurt in the making of these images.
All Pictures by me u hurddddddddddd 

- ray`,

    excerpt: 'BRICKKKKKKK',
    createdAt: '2025-09-15',
    tags: ['Hardcore', 'NYHC', 'Underground', 'Photography', 'Flyer Design'],
    author: 'Ray Wretch',
    imageUrl: '/images/showcase/brickarms/brickkk.jpg'
  },

  {
    id: '2025-08-22-site-features-update',
    title: 'Solo Ops: Site Updateee',
    content: `Heyyyyyy so I havent had much time to actually write a concrete blog post for the site these past few weeks but today was a massive step forward for my website in terms of optimization and functionality ^_^ .

    I had finally went over my codebase again (with a metal pick) to really try and see how I can make as many improvements as possible before my next big implentation. I felt like it would be best before begining to work on the forum page, at least with how im picturing this in my head.

    Theres now a responisve contact form system, with a fully functional API that sends messages and commisions to my email. Wired with a nice UI and a nice animation when the user clicks the submit button too  (if its still working) and a mongoDB storage storage for submissions.

    I also went ahead and started working on my API infrastructure, Backend endpoints for handling form submissions and newsletter handling- Did I mention I can sent newsletters now? anyway, Re-enforced the Backend architecture using Nex.JS routes and MongoDB, fixed a few social media links, the Services showcase in the about me page, and the contact page.

    As I continue to work on the site, I thought about looking into more UI/UX improvements in the homescreen and gallery as I feel there could be a lot of room for improvement, as well as just more small creative bits of design that I can implement within each page. Also my latest artwork/commisions that ive worked on over this summer, as well as all of the current undergrad work that ive been orgainizing quitely. Hopefull they make a good addition to what i have so far. But as for what ive pushed, the contact features are now live and ready for you to use, shoot me a email so we can work :3.

    Classes are starting up for me this week, I havent met any of my professors yet or anything like that, I like to raw dog my classes so I'm pretty sure im going to be busy with that. But I'll try to make some time to work on the site and get in tip top shape for the forum page to be integrated, 
  
![DexCrazy Artwork](/images/showcase/dexcrazy.jpg)

- ray`,
    excerpt: 'heyyy',
    createdAt: '2025-08-30',
    tags: ['Back from the dead', ' New Contact Features', 'API Development', 'TypeScript'],
    author: 'Ray Wretch',
    imageUrl: '/images/showcase/death remastered.jpg'
  },

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
    id: '2025-06-16-deployment',
    title: 'Solo Ops: "Deployment"',
    content: `yo so I knew developing a Site like this on my own would be really good challenge for me and I knew the stakes and how much ambition this project was going to take me. 

    However I might have overestimated the actual length in time that this was going to take me front to back (literally) but with that being said I've been working more shifts at my actual Operations Job to stay level headed because I actually just went about buying my own car (turn up) and I'm knowing that thing is going to do me well so i want to take care of it.
    
    Apart from that though some changes I've planned to put in the site at the moment,
    
    - at least 10 hours a week on re-writing a lot of the css to debloat my codebase
    - Properly Resize all the images on the page (sigh) 
    - Avoid severing legacy Java for the modern browsers 
    - Integrate Some SEO
    - Update the post board to things I'm currently doing (Consistency)
    - badges for the main page
    - Add remaining work for the gallery
    - and update the about me page (yes again)
    - 2 new color scheme themes to switch from while viewing 

    After I get these changes out the way I want to start making the wireframes for the forum page so that I have a nice idea for the layout, as well as starting some new smaller projects to add to my github & Resume.
    I think smart way to go about that would be to just pull different features off my actual site and downsize them into plugins and tools other devs can use for their own site, or at least that would be the idea anyway. 

    But yeah, Motion.
    
    It's been raining so much recently that skating is like almost impossible nowadays. The weather in New York is so confusing I gotta tell you, but in the meantime here's a small stack of clips of mine that I've put together recently. :p
    
    
    - ray
    
    `,
    
    excerpt: 'Just some Updates...',
    createdAt: '2025-06-16',
    tags: ['hey guys', 'Process', 'Test Of Stregnth'],
    author: 'Ray Wretch',
    imageUrl: '/images/showcase/breaker2.jpg'
  },
  // Add more posts here
];

// Helper function to get posts sorted by date (newest first)
export const getBlogPosts = () => {
  return [...posts].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

// Slugify for URL matching: "Side Project Time" -> "side-project-time"
function toSlug(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// Helper to get a single post by ID (supports exact id, decoded id, or slug match)
export const getBlogPost = (id: string) => {
  const decoded = decodeURIComponent(id);
  const bySlug = toSlug(decoded);
  return (
    posts.find(post => post.id === id) ??
    posts.find(post => post.id === decoded) ??
    posts.find(post => toSlug(post.id) === bySlug)
  );
};

// Export all posts for direct access if needed
export const blogPosts = getBlogPosts();  