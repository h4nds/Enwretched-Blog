import { UndergraduateProject } from '@/types/artwork';
import { showcasePath } from '@/lib/imagePath';

const ug = (path: string) => showcasePath(`undergrad/${path}`);

/** Smaller process pieces kept out of the main grid (foundation + wireframes). */
export const processGalleryProjects: UndergraduateProject[] = [
  {
    id: 'proc-wireframes',
    title: 'UX Wireframe Suite',
    description:
      'Low-fidelity wireframes for four small-business web experiences—IA, page flow, and responsive structure. Hi-fi / clickable prototype upgrade in progress.',
    outcomeLine:
      'UX / IA, wireframing — four site structures (PDF).',
    tags: ['UX', 'Wireframes', 'Web Design'],
    images: [],
    documents: [
      { title: 'Barbershop — Wireframe', url: ug('website wireframes/Barbershop — Wireframe.pdf') },
      {
        title: 'Flour & Co. Bakery — Wireframe',
        url: ug('website wireframes/Flour & co Bakery — Wireframe.pdf'),
      },
      {
        title: 'Lunette Nail Salon — Wireframe',
        url: ug('website wireframes/Lunette Nail Salon — Wireframe.pdf'),
      },
      {
        title: 'Seafood Restaurant — Wireframe',
        url: ug('website wireframes/Seafood Restaurant — Wireframe.pdf'),
      },
    ],
  },
  {
    id: 'proc-alone',
    title: 'Alone',
    description:
      'A study of solitude and introspection through nature photography and digital compositing.',
    outcomeLine:
      'Digital imaging, Photoshop — surreal composite from original photography.',
    tags: ['Photography', 'Surreal', 'Photoshop'],
    images: [
      {
        url: showcasePath('Alone.jpg'),
        alt: 'Alone — final composite',
        isPrimary: true,
      },
    ],
  },
  {
    id: 'proc-knot-art',
    title: 'Knot Art Poster',
    description:
      'Introductory poster exploring knot forms, composition, and hand-rendered typography.',
    outcomeLine:
      'Print layout, hand type + composition — hierarchy and form study.',
    tags: ['Print Design', 'Typography', 'Foundation'],
    images: [
      {
        url: ug('knot art poster final freshman yr.png'),
        alt: 'Knot Art Poster — final print',
        isPrimary: true,
      },
    ],
  },
  {
    id: 'proc-3-in-2',
    title: '3rdPersons Instrumentals 2',
    description:
      "Multi-panel layout exercises for 3rdPerson's instrumentals project—hierarchy, pacing, and balance across a serialized format.",
    outcomeLine:
      'Multi-panel layout, print composition.',
    tags: ['Layout', 'Composition', 'Print'],
    images: [
      {
        url: ug('3-in-2-again-complete.png'),
        alt: '3-in-2 composition — final',
        isPrimary: true,
      },
      {
        url: ug('3-in-2-again-second-fix.png'),
        alt: '3-in-2 composition — revision',
      },
    ],
  },
];

/** @deprecated Import processGalleryProjects instead */
export const undergraduateProjects = processGalleryProjects;
