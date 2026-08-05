import {
  AppWindow,
  Database,
  Gauge,
  Globe,
  Layers3,
  Smartphone,
  TerminalSquare,
  Wrench,
} from 'lucide-react';

export const skillsData = [
  {
    title: 'Frontend',
    description: 'Modern product interfaces with responsive, accessible UX.',
    icon: Globe,
    skills: [
      { name: 'React.js', level: 'Advanced', value: 92 },
      { name: 'Vite', level: 'Advanced', value: 88 },
      { name: 'JavaScript (ES6+)', level: 'Advanced', value: 90 },
      { name: 'HTML5 & Semantic CSS3', level: 'Advanced', value: 90 },
    ],
  },
  {
    title: 'Mobile',
    description: 'Cross-platform experiences for iOS and Android.',
    icon: Smartphone,
    skills: [
      { name: 'React Native', level: 'Proficient', value: 84 },
      { name: 'Cross-platform workflows', level: 'Proficient', value: 80 },
      { name: 'App state patterns', level: 'Proficient', value: 78 },
      { name: 'Native integrations', level: 'Working Knowledge', value: 68 },
    ],
  },
  {
    title: 'Desktop',
    description: 'Desktop workflows with a strong shared JS foundation.',
    icon: AppWindow,
    skills: [
      { name: 'Electron.js', level: 'Proficient', value: 80 },
      { name: 'Main/renderer patterns', level: 'Proficient', value: 76 },
      { name: 'Desktop UX', level: 'Working Knowledge', value: 72 },
    ],
  },
  {
    title: 'Backend & Database',
    description: 'API design and data handling for product systems.',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 'Proficient', value: 82 },
      { name: 'Express.js', level: 'Proficient', value: 80 },
      { name: 'REST API Design', level: 'Proficient', value: 82 },
      { name: 'MongoDB', level: 'Proficient', value: 78 },
    ],
  },
  {
    title: 'Tooling & Deployment',
    description: 'Reliable release and delivery workflows.',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', value: 88 },
      { name: 'Vercel', level: 'Proficient', value: 82 },
      { name: 'Netlify', level: 'Proficient', value: 78 },
      { name: 'Railway', level: 'Working Knowledge', value: 70 },
    ],
  },
];

export const capabilityHighlights = [
  { label: 'Performance-first delivery', icon: Gauge },
  { label: 'Cross-platform thinking', icon: Layers3 },
  { label: 'Modern tooling fluency', icon: TerminalSquare },
];
