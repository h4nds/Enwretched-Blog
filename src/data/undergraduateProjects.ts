import { UndergraduateProject } from '@/types/artwork';
import { showcasePath } from '@/lib/imagePath';

const ug = (path: string) => showcasePath(`undergrad/${path}`);

export const undergraduateProjects: UndergraduateProject[] = [
  {
    id: 'ug-knot-art',
    title: 'Knot Art Poster',
    course: 'Foundation Studio',
    period: 'Freshman Year',
    description:
      'Introductory poster exploring knot forms, composition, and hand-rendered typography within a structured design framework.',
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
    id: 'ug-3-in-2',
    title: '3rdPersons Instrumentals 2',
    course: 'Design Foundations',
    period: 'Upper Sophomore Year',
    description:
      'Sequential layout exercises refining hierarchy, pacing, and visual balance across multi-panel compositions for 3s instrumentals proj.',
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
  {
    id: 'ug-alone',
    title: 'Alone',
    course: 'Digital Imaging',
    period: 'Sophomore Year',
    description:
      'A study of solitude and introspection through nature photography and digital compositing.',
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
    id: 'ug-oakley',
    title: 'Oakley Brand Extension',
    course: 'Oakley Design Class 1200',
    period: 'Junior Year',
    description:
      'Brand research, creative brief, and campaign development for Oakley—including social media direction, environmental sketches, and snowboarder concept studies.',
    tags: ['Branding', 'Campaign', 'Research'],
    images: [
      {
        url: ug('Oakley Desgin class 1200/social media 2.0.jpg'),
        alt: 'Oakley — social media campaign',
        isPrimary: true,
      },
    ],
    documents: [
      {
        title: 'Creative Brief',
        url: ug('Oakley Desgin class 1200/Creative Brief_2.0.pdf'),
      },
      {
        title: 'Brand Research',
        url: ug('Oakley Desgin class 1200/Oakley Reaserch.pdf'),
      },
      {
        title: 'Places — Sketch Studies',
        url: ug('Oakley Desgin class 1200/PLACES SKETECHES.pdf'),
      },
      {
        title: 'Snowboarder — Sketch Print',
        url: ug('Oakley Desgin class 1200/snowboarder sketeches print.pdf'),
      },
    ],
  },
  {
    id: 'ug-wireframes',
    title: 'UX Wireframe Suite',
    course: 'Web Design & UX',
    period: 'Junior Year',
    description:
      'Low-fidelity wireframes for four small-business web experiences, documenting information architecture, page flow, and responsive layout structure.',
    tags: ['UX', 'Wireframes', 'Web Design'],
    images: [],
    documents: [
      {
        title: 'Barbershop — Wireframe',
        url: ug('website wireframes/Barbershop — Wireframe.pdf'),
      },
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
    id: 'ug-pilot',
    title: 'Pilot — Client Commission Series',
    course: 'Client Studio',
    period: 'Junior–Senior Year',
    description:
      'Album artwork commissions for Pilot, from early work-in-progress layouts through final delivered cover art.',
    tags: ['Client Work', 'Music', 'Illustration'],
    images: [
      {
        url: ug('pilot_jinky_wrk/pilot commis 2 wip.jpg'),
        alt: 'Pilot commission — work in progress',
      },
      {
        url: ug('pilot_jinky_wrk/pilot comm.jpg'),
        alt: 'Pilot commission — layout study',
      },
      {
        url: ug('pilot_jinky_wrk/pilot 3.jpg'),
        alt: 'Pilot commission — alternate direction',
      },
      {
        url: ug('pilot_jinky_wrk/complete pilot 2.jpg'),
        alt: 'Pilot commission — near-final',
      },
      {
        url: ug('pilot_jinky_wrk/completed pilot commision.jpg'),
        alt: 'Pilot commission — final delivery',
        isPrimary: true,
      },
    ],
  },
  {
    id: 'ug-enwretched-identity',
    title: 'EnWretched Identity System',
    course: 'Branding & Identity',
    period: 'Senior Year',
    description:
      'Logo suite and colorway explorations for the EnWretched mark—mono, clear, and themed variants built for flexible digital application.',
    tags: ['Branding', 'Logo Design', 'Identity'],
    images: [
      {
        url: ug('sitelogos/enwtch-purple.png'),
        alt: 'EnWretched logo — purple',
        isPrimary: true,
      },
      {
        url: ug('sitelogos/enwtch-red.png'),
        alt: 'EnWretched logo — red',
      },
      {
        url: ug('sitelogos/enwtch-blue.png'),
        alt: 'EnWretched logo — blue',
      },
      {
        url: ug('sitelogos/enwtch-green.png'),
        alt: 'EnWretched logo — green',
      },
      {
        url: ug('sitelogos/enwtch-clear.png'),
        alt: 'EnWretched logo — clear',
      },
      {
        url: ug('sitelogos/enwtch-mono.png'),
        alt: 'EnWretched logo — mono',
      },
    ],
  },
];
