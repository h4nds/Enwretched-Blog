import { Artwork } from '@/types/artwork';
import { showcasePath } from '@/lib/imagePath';

const ug = (path: string) => showcasePath(`undergrad/${path}`);

/** Selected personal and professional work (undergraduate work lives in a dedicated gallery section). */
export const portfolioArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Follow The Notes',
    description:
      'This surreal, dreamlike piece on a mysterious woman in white entering a reflective river, her spine-like laced in a cursed Tattoo suggesting transformation of self. The lush environment blends natural elements with modern touches like glowing windows and graffiti on ancient stones.',
    outcomeLine:
      'Personal art direction, Photoshop — surreal composite on transformation and environment.',
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
      'Mixed media piece curated originally from a photograph I took of the waterside of a river in the woods with my partner.',
    outcomeLine:
      'Mixed media, photography + Photoshop — personal piece from an original photo.',
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
    outcomeLine:
      'Experimental digital, Photoshop — abstract piece on sound and sensory overload.',
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
    outcomeLine:
      'Art direction, photography + compositing — flagship personal piece with dedicated microsite.',
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
    outcomeLine:
      'Mixed technique, airbrush + Photoshop — experimental surreal landscape.',
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
    outcomeLine:
      'Digital collage, Photoshop + motion — layered nostalgia study.',
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
    description: 'Official cover art for Tekari, exploring themes of emptiness and longing.',
    outcomeLine:
      'Client cover art, illustration + Photoshop — EP artwork for Tekari.',
    images: [
      { url: '/images/showcase/tek_client.jpg', alt: 'Tekari Client Work - Ep cover', isPrimary: true },
      { url: '/images/showcase/Flash.png', alt: 'Cover art — process' },
    ],
    createdAt: '2023',
    tags: ['Client', 'photography', 'Illustration', 'Music', 'photoshop'],
    category: 'professional',
  },
  {
    id: '9',
    title: 'TLC Remix',
    description: 'A personal project reimagining classic album artwork through a contemporary lens.',
    outcomeLine:
      'Personal concept, Photoshop — contemporary remix of classic album art.',
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
      'A personal Photoshop project showcasing growth in raster and vector cut compositing to build something entirely new.',
    outcomeLine:
      'Personal composite, Photoshop — raster/vector cut-and-build scene study.',
    images: [
      { url: '/images/showcase/Promfall.jpg', alt: 'Main View', isPrimary: true },
      { url: '/images/showcase/Promfall2.png', alt: '2nd View' },
      { url: '/images/showcase/Promfall3.png', alt: '3rd View' },
    ],
    createdAt: '2025',
    tags: ['Personal', 'scene', 'Photoshop', 'Music'],
    category: 'personal',
  },
  {
    id: '11',
    title: 'Misery & Dior',
    description: 'Client work for a late friend—cover art for the album "Misery & Dior" by Ter99r.',
    outcomeLine:
      'Client cover art, illustration + layout — album package for Ter99r.',
    images: [
      { url: '/images/showcase/mandd.png', alt: 'Official Coverart', isPrimary: true },
      { url: '/images/showcase/md_tracklist.jpg', alt: 'Official tracklist' },
    ],
    createdAt: '2022',
    tags: ['Client', 'Illustration', 'Music', 'photoshop'],
    category: 'professional',
  },
  {
    id: '12',
    title: 'Self Titled Instrumentals by 3rdPerson',
    description:
      'Client work for a longtime friend—cover art and packaging as an homage to early Clams Casino aesthetics.',
    outcomeLine:
      'Client cover art, illustration — instrumental tape artwork for 3rdPerson.',
    images: [
      { url: '/images/showcase/3_cover_revised.png', alt: 'Official Coverart', isPrimary: true },
      { url: '/images/showcase/3_tape.png', alt: 'Alternate cover' },
    ],
    createdAt: '2025',
    tags: ['Client', 'Illustration', 'Music'],
    category: 'professional',
  },
  {
    id: '13',
    title: 'Madd Scientist by Pilot',
    description:
      'Client cover art for Pilot—production compilation featuring various underground artists.',
    outcomeLine:
      'Client cover art, Photoshop — release artwork for Pilot compilation.',
    images: [
      { url: '/images/showcase/pilot_1.png', alt: 'Official Coverart', isPrimary: true },
      { url: '/images/showcase/pilot_2.jpg', alt: 'Alternate cover' },
    ],
    createdAt: '2024',
    tags: ['Client', 'Photoshop', 'Music', 'photoshop'],
    category: 'professional',
  },
  {
    id: '14',
    title: 'Brick Arms EP Release Flyer',
    description:
      'Show poster for Brick Arms and two supporting bands—NYHC flyer design for a live date.',
    outcomeLine:
      'Client poster, Photoshop — live show flyer for Brick Arms bill.',
    images: [
      { url: '/images/showcase/brickarms/nyhcflyer.jpg', alt: 'Official Flyer', isPrimary: true },
      { url: '/images/showcase/brickarms/nyhcflyer2.jpg', alt: 'Official Flyer' },
    ],
    createdAt: '2025',
    tags: ['Client', 'Photoshop', 'Music', 'photoshop'],
    category: 'professional',
  },
  {
    id: '15',
    title: 'Vein',
    description:
      'Mixed media work composed over three weeks, layering newsprint flash, digital texture, and hand-drawn scanned line work.',
    outcomeLine:
      'Mixed media, flash + digital — tattoo-adjacent studio piece over three weeks.',
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
      'Completed personal composite—digital surface painting, final export from an ongoing studio piece.',
    outcomeLine:
      'Personal composite, digital painting + Photoshop — finished studio export.',
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
  {
    id: '17',
    title: 'Oakley Brand Extension',
    description:
      'Speculative brand extension for Oakley: research-backed campaign concept, creative brief, social direction, and environmental sketch studies—packaged the way an agency would hand off a pitch.',
    outcomeLine:
      'Brand strategy & campaign concept, Adobe CC — speculative extension with brief, research deck, and launch visuals.',
    images: [
      {
        url: ug('Oakley Desgin class 1200/social media 2.0.jpg'),
        alt: 'Oakley — social media campaign',
        isPrimary: true,
      },
    ],
    documents: [
      { title: 'Creative Brief', url: ug('Oakley Desgin class 1200/Creative Brief_2.0.pdf') },
      { title: 'Brand Research', url: ug('Oakley Desgin class 1200/Oakley Reaserch.pdf') },
      { title: 'Places — Sketch Studies', url: ug('Oakley Desgin class 1200/PLACES SKETECHES.pdf') },
      {
        title: 'Snowboarder — Sketch Print',
        url: ug('Oakley Desgin class 1200/snowboarder sketeches print.pdf'),
      },
    ],
    caseStudy: {
      problem:
        'Oakley’s identity is tied to performance, optics, and culture—but the assignment required a credible extension: a new campaign or touchpoint that feels native to the brand, not a generic re-skin.',
      insight:
        'Research pointed to how Oakley wins when it anchors product stories in place, sport, and attitude. The opportunity was to extend that world through a social-first campaign with environmental visuals that could scale across channels.',
      concept:
        'A speculative “Places” direction: social campaign art direction plus athlete and environment sketch studies that support a snowboard / action-sports narrative while staying on-brand.',
      execution:
        'Delivered a full pitch stack—creative brief, brand research PDF, key social visual, and supporting sketch prints (Places and snowboarder studies)—so strategy, rationale, and execution read as one system.',
      outcome:
        'Speculative pitch packaged to agency standards (student project, Oakley Design Class 1200).',
    },
    createdAt: '2025',
    tags: ['Branding', 'Campaign', 'Research', 'Case study'],
    category: 'professional',
  },
  {
    id: '18',
    title: 'Pilot — Client Commission Series',
    description:
      'Album artwork commission for Pilot: from early layouts and WIP comps through revision rounds to final delivered cover art, with process retained for portfolio.',
    outcomeLine:
      'Commissioned cover art, Photoshop — concept through final delivery for Pilot release artwork.',
    images: [
      { url: ug('pilot_jinky_wrk/pilot commis 2 wip.jpg'), alt: 'Pilot commission — work in progress' },
      { url: ug('pilot_jinky_wrk/pilot comm.jpg'), alt: 'Pilot commission — layout study' },
      { url: ug('pilot_jinky_wrk/pilot 3.jpg'), alt: 'Pilot commission — alternate direction' },
      { url: ug('pilot_jinky_wrk/complete pilot 2.jpg'), alt: 'Pilot commission — near-final' },
      {
        url: ug('pilot_jinky_wrk/completed pilot commision.jpg'),
        alt: 'Pilot commission — final delivery',
        isPrimary: true,
      },
    ],
    caseStudy: {
      problem:
        'Pilot needed cover art that read at streaming thumbnail size, matched the mood of the release, and could survive a few rounds of layout and tone feedback without losing identity.',
      insight:
        'Early directions showed that busy compositions fought legibility; the strongest path was a clearer focal point, tighter type/image balance, and a mood that fit underground / sample-heavy production.',
      concept:
        'Explore multiple layout studies and color treatments in WIP, compare alternate art directions, then converge on a single cover that works for digital distribution and print-adjacent use.',
      execution:
        'Documented the full arc—WIP, layout studies, alternates, near-final, and final delivery—so revision history is visible, not just the finished frame.',
      outcome:
        'Final cover delivered for Pilot’s release artwork.',
    },
    createdAt: '2025',
    tags: ['Client Work', 'Music', 'Illustration', 'Case study'],
    category: 'professional',
  },
  {
    id: '19',
    title: 'EnWretched Identity System',
    description:
      'Logo suite and colorway explorations for the EnWretched mark—mono, clear, and themed variants in use across this site and the wallpaper collection below.',
    outcomeLine:
      'Identity design, vector + digital — multi-variant logo system deployed on enwretched.com.',
    images: [
      { url: ug('sitelogos/enwtch-purple.png'), alt: 'EnWretched logo — purple', isPrimary: true },
      { url: ug('sitelogos/enwtch-red.png'), alt: 'EnWretched logo — red' },
      { url: ug('sitelogos/enwtch-blue.png'), alt: 'EnWretched logo — blue' },
      { url: ug('sitelogos/enwtch-green.png'), alt: 'EnWretched logo — green' },
      { url: ug('sitelogos/enwtch-clear.png'), alt: 'EnWretched logo — clear' },
      { url: ug('sitelogos/enwtch-mono.png'), alt: 'EnWretched logo — mono' },
    ],
    createdAt: '2025',
    tags: ['Branding', 'Logo Design', 'Identity'],
    category: 'professional',
  },
];

export function getSortedPortfolioArtworks(): Artwork[] {
  return [...portfolioArtworks].sort((a, b) => {
    const byYear =
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    if (byYear !== 0) return byYear;
    return Number(b.id) - Number(a.id);
  });
}

/** Homepage bento grid — newest work first (year, then id). */
export function getFeaturedArtworks(count = 4): Artwork[] {
  return getSortedPortfolioArtworks().slice(0, count);
}
