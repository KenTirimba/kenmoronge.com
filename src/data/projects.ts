import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'fedex-financial-system-analysis',
    title: 'FedEx Financial System Analysis',
    subtitle: 'Process optimisation for global logistics finance',
    track: 'analytics',
    tags: ['Business Process Analysis', 'Financial Systems', 'Process Mapping', 'SQL'],
    description:
      'Led the end-to-end analysis of FedEx\'s financial management system at ADEC Innovations, identifying bottlenecks and implementing a cash application system that improved reconciliation accuracy and processing speed.',
    problem:
      'FedEx\'s offshore financial processing had manual reconciliation steps causing delays and error rates that impacted cash flow visibility.',
    approach:
      'Mapped the existing AS-IS process using BPMN, conducted root cause analysis on error-prone steps, collaborated with stakeholders to design the TO-BE process, and oversaw implementation of an automated cash application workflow.',
    outcome:
      'Reduced manual reconciliation time significantly, improved data accuracy, and established a scalable offshore processing model.',
    metrics: [
      { label: 'Process Steps Eliminated', value: '30%' },
      { label: 'Reconciliation Accuracy', value: '↑ 95%' },
      { label: 'Processing Time', value: '↓ 40%' },
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'first-american-process-improvement',
    title: 'First American Financial Corp.',
    subtitle: 'Business process improvement & automation',
    track: 'analytics',
    tags: ['BPA', 'Change Management', 'Automation', 'Documentation'],
    description:
      'Developed and implemented process improvement strategies for First American Financial Corp., creating detailed process documentation and managing business process automation projects.',
    problem:
      'Inconsistent process documentation and manual handoffs were creating operational inefficiencies across offshore teams.',
    approach:
      'Conducted stakeholder interviews, created comprehensive process documentation, identified automation opportunities, and managed end-to-end implementation with change management support.',
    outcome:
      'Delivered standardised process documentation, reduced handoff errors, and improved cross-team operational consistency.',
    metrics: [
      { label: 'Processes Documented', value: '25+' },
      { label: 'Handoff Errors', value: '↓ 35%' },
      { label: 'Team Adoption', value: '100%' },
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'vextup-marketplace',
    title: 'VextUp',
    subtitle: 'Two-sided marketplace for beauty services',
    track: 'webdev',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Maps API'],
    description:
      'Built a full-stack two-sided marketplace connecting informal beauty service providers with clients in Nairobi. Features GPS-based provider discovery, real-time booking, Firebase Cloud Messaging push notifications, and a mobile-first design.',
    problem:
      'Informal beauty service providers in Nairobi lacked a digital platform to reach clients, manage bookings, and build credibility.',
    approach:
      'Designed and built the full product in Next.js/TypeScript/Firebase with Nominatim geocoding, parallelised Firestore queries, FCM push notifications, and a bottom-nav mobile UX.',
    outcome:
      'A fully functional marketplace MVP with real-time booking, provider discovery, and push notification infrastructure.',
    metrics: [
      { label: 'Tech Stack', value: 'Next.js + Firebase' },
      { label: 'Mobile-first', value: 'Yes' },
      { label: 'Real-time', value: 'Yes' },
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'laveiv-luxury-fashion',
    title: 'LAVEIV',
    subtitle: 'Luxury fashion e-commerce — Nairobi',
    track: 'webdev',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel', 'E-commerce'],
    description:
      'Designed and built a luxury fashion e-commerce website for a Nairobi-based brand. Features an autoplay hero video, editorial lookbook section, and a premium aesthetic with Cormorant Garamond typography.',
    problem:
      'The brand had no digital presence and needed a website that matched their luxury positioning and communicated exclusivity.',
    approach:
      'Delivered a single-file, highly optimised HTML/CSS/JS site with autoplay video, custom cursor, and editorial design language deployed to Vercel.',
    outcome:
      'A live, fast-loading luxury e-commerce site that elevated the brand\'s digital presence.',
    metrics: [
      { label: 'Load Time', value: '< 2s' },
      { label: 'Design', value: 'Luxury editorial' },
      { label: 'Deployed', value: 'Vercel' },
    ],
    featured: false,
  },
  {
    id: '5',
    slug: 'tabitha-mutinda-campaign',
    title: 'Tabitha Mutinda',
    subtitle: 'Political campaign website — Nairobi Women Rep 2027',
    track: 'webdev',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    description:
      'Built a campaign and portfolio website for Tabitha Mutinda, a 2027 Nairobi Women Representative candidate. Features a bold forest green / gold palette, manifesto sections, and a strong call-to-action.',
    problem:
      'The candidate needed a credible digital presence to communicate her platform and reach voters ahead of the 2027 elections.',
    approach:
      'Designed and built in Next.js with a distinctive forest green / yellow-green / dark gold palette, Cormorant Garamond typography, and clear manifesto sections.',
    outcome:
      'Live campaign site on Vercel with strong brand identity and clear voter call-to-action.',
    metrics: [
      { label: 'Turnaround', value: '5 days' },
      { label: 'Deployed', value: 'Vercel' },
      { label: 'Mobile-first', value: 'Yes' },
    ],
    featured: false,
  },
  {
    id: '6',
    slug: 'sienna-signs-branding',
    title: 'Sienna Signs',
    subtitle: 'Luxury bespoke wedding signage brand',
    track: 'webdev',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Luxury Design'],
    description:
      'Built a speculative pitch website for Sienna Signs, a luxury bespoke wedding signage brand. Warm parchment aesthetics, Cormorant Garamond / Jost typography, and premium micro-interactions.',
    problem:
      'The brand needed a website that communicated luxury, craftsmanship, and exclusivity to high-end wedding clients.',
    approach:
      'Designed in Next.js with warm parchment colour palette, editorial typography, and subtle scroll-driven animations that reflect the brand\'s artisanal quality.',
    outcome:
      'A stunning pitch-ready website that communicates luxury at first glance.',
    metrics: [
      { label: 'Design style', value: 'Luxury editorial' },
      { label: 'Typography', value: 'Cormorant + Jost' },
      { label: 'Stack', value: 'Next.js' },
    ],
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
