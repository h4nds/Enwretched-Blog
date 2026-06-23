import { Artwork } from '@/types/artwork';

/** Selected personal and professional work (undergraduate work lives in a dedicated gallery section). */
export const portfolioArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Follow The Notes',
    description:
      'This surreal, dreamlike piece on a mysterious woman in white entering a reflective river, her spine-like laced in a cursed Tattoo suggesting transformation of self. The lush environment blends natural elements with modern touches like glowing windows and graffiti on ancient stones.',
    images: [
      {
        url: '/images/showcase/follow-the-notes.jpg',
        alt: 'Follow The Notes - Main View',
        isPrimary: true,
      },
    ],
    createdAt: '2024',
    tags: ['surreal', 'digital', 'nature', 'photoshop'],
    category: 'personal',
  },
  {
    id: '2',
    title: 'Ten',
    description:
      'Mixed media piece curated orginally from a photograph i took of the waterside of a river in the woods with my partner.',
    images: [
      { url: '/images/showcase/ten.jpg', alt: 'Ten - Main View', isPrimary: true },
      { url: '/images/showcase/ten process.jpg', alt: 'Ten - Detail View' },
    ],
    createdAt: '2024',
    tags: ['mixed-media', 'photography', 'nature', 'photoshop'],
    category: 'personal',
  },
  {
    id: '3',
    title: '435 Hz',
    description:
      'This piece explores the intensity and distortion of sensory overload—especially sound. I wanted to capture what it feels like to be immersed in heavy bass, noise, and movement, rather than just show it.',
    images: [
      { url: '/images/showcase/435-hz.jpg', alt: '435 Hz - Main View', isPrimary: true },
      { url: '/images/showcase/435-hz process.jpg', alt: '435 Hz - Process' },
    ],
    createdAt: '2025',
    tags: ['abstract', 'digital', 'experimental', 'photoshop'],
    category: 'personal',
  },
  {
    id: '4',
    title: 'Recovery',
    description:
      "This piece explores nature's quiet surrealism in untouched, mossy spaces that feel like portals. It captures a hidden spring deep in the forest, veiled in mist, with softened focus like a half-remembered dream.",
    images: [
      { url: '/images/showcase/recovery.jpg', alt: 'Recovery - Main View', isPrimary: true },
    ],
    createdAt: '2024',
    tags: ['nature', 'photography', 'surreal', 'photoshop'],
    category: 'professional',
  },
  {
    id: '6',
    title: 'Airbrushed Castle',
    description:
      'An experimental piece combining traditional airbrushing techniques with digital manipulation.',
    images: [
      { url: '/images/showcase/brushed castle.jpg', alt: 'Airbrushed Castle - Main View', isPrimary: true },
      { url: '/images/showcase/brushed castle process.jpg', alt: 'Airbrushed Castle - Process' },
      { url: '/images/showcase/CASTLES WALLPAPER.png', alt: 'wallpaper' },
    ],
    createdAt: '2022',
    tags: ['Castle', 'photography', 'surreal', 'photoshop'],
    category: 'personal',
  },
  {
    id: '7',
    title: 'Memory Collection',
    description: 'A digital exploration of memory and nostalgia through layered imagery.',
    images: [
      { url: '/images/showcase/memory_gif.gif', alt: 'Memory Collection - Main View', isPrimary: true },
      { url: '/images/showcase/memory.jpg', alt: 'Memory Collection - Process' },
      { url: '/images/showcase/memory_paper1.jpg', alt: 'Memory Collection - Paper 1' },
      { url: '/images/showcase/memory_paper2.png', alt: 'Memory Collection - Paper 2' },
    ],
    createdAt: '2023',
    tags: ['Music', 'photography', 'Digital Design', 'Photoshop'],
    category: 'personal',
  },
  {
    id: '8',
    title: 'l appel du vide',
    description: 'Offical Coverart  for Tekari, exploring themes of emptiness and longing.',
    images: [
      { url: '/images/showcase/tek_client.jpg', alt: 'Tekari Client Work - Ep cover', isPrimary: true },
      { url: '/images/showcase/Flash.png', alt: 'Coverart - Process' },
    ],
    createdAt: '2023',
    tags: ['Client', 'photography', 'Illustration', 'Music', 'photoshop'],
    category: 'professional',
  },
  {
    id: '9',
    title: 'TLC Remix',
    description: 'A personal project reimagining classic album artwork through a contemporary lens.',
    images: [
      { url: '/images/showcase/TLC_remix.png', alt: 'TLC Remix - Main View', isPrimary: true },
      { url: '/images/showcase/TLC_solo.png', alt: 'TLC Remix - Solo View' },
    ],
    createdAt: '2022',
    tags: ['Personal', 'photography', 'Photoshop', 'Music'],
    category: 'personal',
  },
  {
    id: '10',
    title: 'Promethefall',
    description:
      'A personal photoshop project meant to showcase my growth in raster and vectoring cut images placed together so that I can create something entirely new.',
    images: [
      { url: '/images/showcase/Promfall.jpg', alt: 'Main View', isPrimary: true },
      { url: '/images/showcase/Promfall2.png', alt: '2nd View' },
      { url: '/images/showcase/Promfall3.png', alt: '3rd View' },
    ],
    createdAt: '2025',
    tags: ['Personal', 'scene', 'Photoshop', 'Muisc'],
    category: 'personal',
  },
  {
    id: '11',
    title: 'Misery & Dior',
    description: 'Client Work for a late friend, Coverart for the album "Misery & Dior" by Ter99r',
    images: [
      { url: '/images/showcase/mandd.png', alt: 'Official Coverart', isPrimary: true },
      { url: '/images/showcase/md_tracklist.jpg', alt: 'Offical Tracklist' },
    ],
    createdAt: '2022',
    tags: ['Client', 'Illustration', 'Muisc', 'photoshop'],
    category: 'professional',
  },
  {
    id: '12',
    title: 'Self Titled instrementals by 3rdPerson',
    description:
      'Client Work for a long time friend, the artwork and Tracks are a Hommage from the early works of Clams Casino ',
    images: [
      { url: '/images/showcase/3_cover_revised.png', alt: 'Official Coverart', isPrimary: true },
      { url: '/images/showcase/3_tape.png', alt: 'ALternate Cover' },
    ],
    createdAt: '2025',
    tags: ['Client', 'Illustration', 'Muisc'],
    category: 'professional',
  },
  {
    id: '13',
    title: 'Madd Scientist by Pilot',
    description:
      ' Another Client Work for a long time friend, These are Tracks produced by pilot with various artist amonghts the underground',
    images: [
      { url: '/images/showcase/pilot_1.png', alt: 'Official Coverart', isPrimary: true },
      { url: '/images/showcase/pilot_2.jpg', alt: 'ALternate Cover' },
    ],
    createdAt: '2024',
    tags: ['Client', 'Photoshop', 'Muisc', 'photoshop'],
    category: 'professional',
  },
  {
    id: '14',
    title: 'Brick Arms EP Release Flyer',
    description:
      'Here we have some poster Work for a very good friend of mine. Art, Representing Brick Arms and 2 other bands playing for the show',
    images: [
      { url: '/images/showcase/brickarms/nyhcflyer.jpg', alt: 'Official Flyer', isPrimary: true },
      { url: '/images/showcase/brickarms/nyhcflyer2.jpg', alt: 'Official Flyer' },
    ],
    createdAt: '2025',
    tags: ['Client', 'Photoshop', 'Muisc', 'photoshop'],
    category: 'professional',
  },
  {
    id: '15',
    title: 'Vein',
    description:
      'Mixed media work composed over three weeks, layering newsprint flash, digital texture, and hand-drawn scaned line work.',
    images: [
      { url: '/images/showcase/the-blood.jpg', alt: 'Vein - Main View', isPrimary: true },
    ],
    createdAt: '2026',
    tags: ['Tattoos', 'Flash', 'Digital Art', 'Process', 'Commissions'],
    category: 'personal',
  },
  {
    id: '16',
    title: 'Solomn',
    description:
      'Completed personal composite, Digital Surface Painting, final export from an ongoing studio piece.',
    images: [
      {
        url: '/images/showcase/solomn_complete.jpg',
        alt: 'Solomn - Main View',
        isPrimary: true,
      },
    ],
    createdAt: '2026',
    tags: ['personal', 'digital', 'photoshop', 'composite'],
    category: 'personal',
  },
];

export function getSortedPortfolioArtworks(): Artwork[] {
  return [...portfolioArtworks].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
