import lexieImg from '@/assets/images/crew/Lexie.jpg'
import rajImg from '@/assets/images/crew/Raj.jpg'
import samImg from '@/assets/images/crew/Sam.jpg'
import sofiaImg from '@/assets/images/crew/Sofia.jpg'
import takalaImg from '@/assets/images/crew/Takala.jpg'
import tinyImg from '@/assets/images/crew/Tiny.jpg'

import lexieHero from '@/assets/images/crew/lexiehero.jpg'
import rajHero from '@/assets/images/crew/rajhero.jpg'
import samHero from '@/assets/images/crew/samhero.jpg'
import sofiaHero from '@/assets/images/crew/sofiahero.jpg'
import takalaHero from '@/assets/images/crew/takalahero.jpg'
import tinyHero from '@/assets/images/crew/tinyhero.jpg'

export const crew = [
  {
    slug: 'samuel-mercer',
    name: 'Samuel Mercer',
    callsign: 'Mercer',
    role: 'Command',
    status: 'Active',
    origin: 'Erevos City, Mars',
    specialty: 'Command under pressure • anomaly triage',
    portrait: samImg,
    sceneThumb: samHero,
    tags: ['POV', 'Captain', 'GECO'],
  },
  {
    slug: 'raj-malik',
    name: 'Raj Malik',
    callsign: 'Raj',
    role: 'Pilot',
    status: 'Active',
    origin: 'New Delhi, Earth',
    specialty: 'Manual piloting • thermal crisis response',
    portrait: rajImg,
    sceneThumb: rajHero,
    tags: ['Pilot', 'Dry humor'],
  },
  {
    slug: 'lexie-howard',
    name: 'Lexie Howard',
    callsign: 'Lexie',
    role: 'Navigation',
    status: 'Active',
    origin: 'Bristol, UK',
    specialty: 'Course corrections • deep-field mapping',
    portrait: lexieImg,
    sceneThumb: lexieHero,
    tags: ['Navigation', 'British'],
  },
  {
    slug: 'sofia-reyes',
    name: 'Sofia Reyes',
    callsign: 'Sofia',
    role: 'Engineering',
    status: 'Active',
    origin: 'Monterrey, Mexico',
    specialty: 'Jump systems • improvised repairs',
    portrait: sofiaImg,
    sceneThumb: sofiaHero,
    tags: ['Engineer', 'Sharp tongue'],
  },
  {
    slug: 'timothy-everett',
    name: 'Timothy N. Everett',
    callsign: 'Tiny',
    role: 'Science',
    status: 'Active',
    origin: 'Chicago, North American sector',
    specialty: 'Signal analysis • anomaly linguistics',
    portrait: tinyImg,
    sceneThumb: tinyHero,
    tags: ['Science', 'Quiet'],
  },
  {
    slug: 'kati-takala',
    name: 'Dr. Kati Takala',
    role: 'Chief Scientist at Freyja Station',
    status: 'Classified',
    origin: 'Sweden, Earth',
    specialty: 'Xenobiology • anomaly detection',
    portrait: takalaImg,
    sceneThumb: takalaHero,
    tags: ['Science', 'Freyja Station', 'Classified'],
  },
]
