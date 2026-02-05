import lexieImg from '@/assets/images/crew/Lexie.jpg'
import rajImg from '@/assets/images/crew/Raj.jpg'
import samImg from '@/assets/images/crew/Sam.jpg'
import sofiaImg from '@/assets/images/crew/Sofia.jpg'
import takalaImg from '@/assets/images/crew/Takala.jpg'
import tinyImg from '@/assets/images/crew/Tiny.jpg'
// import sadieImg from '@/assets/images/crew/SADIE.jpg'

import lexieHero from '@/assets/images/crew/lexiehero.jpg'
import rajHero from '@/assets/images/crew/rajhero.jpg'
import samHero from '@/assets/images/crew/samhero.jpg'
import sofiaHero from '@/assets/images/crew/sofiahero.jpg'
import takalaHero from '@/assets/images/crew/takalahero.jpg'
import tinyHero from '@/assets/images/crew/tinyhero.jpg'

const CrewDetails = [
  {
    // =========================
    // SAMUEL MERCER
    // =========================
    slug: 'samuel-mercer',
    name: 'Samuel Mercer',
    callSign: 'MERCER',
    role: 'Captain-Owner (Niña) | GECO Independent Contractor',
    image: samImg,
    header: samHero,
    accent: 'from-[#79c0ff] via-[#8b5cf6] to-[#f472b6]',

    logline:
      'A leader who doesn’t chase glory, only the least catastrophic option.',
    personal: {
      firstName: 'Samuel',
      middleName: 'Evan',
      lastName: 'Mercer',

      dob: 'September 11th, 2210',
      age: 'Mid-40s',
      pob: 'New York City, North-American Sector',

      height: '6’1”',
      weight: '180 lbs',
      build: 'Lean, athletic',
      dominantHand: 'Right',

      eyeColor: 'Green',
      hairColor: 'Red',

      citizenship: 'United Earth Charter',
      maritalStatus: 'Divorced',
      dependents: 'None on record',
      nextOfKin: 'Redacted',

      formerAffiliation: 'UN Space Navy',
      currentAffiliation: 'Independent Contractor (GECO)',
      status: 'UN Space Navy Retired',

      serviceId: 'UNSN-AR537-HF732',
      medicalStatus: 'Fit for duty (conditional)',
      psychEval: 'Clearance maintained under monitoring',
    },

    // Optional structured dossier (GECO Personnel File)
    dossier: {
      agency: 'GECO',
      division: 'Intelligence Division · Personnel Archive',
      fileType: 'GECO PERSONNEL FILE',
      fileId: 'GECO-CPT-MERCER-SAM',
      classification: 'OMEGA-RESTRICTED',
      clearanceRequired: 'GECO-L5',
      status: 'ACTIVE - PROBATIONARY CHARTER',
      primaryAsset: 'Exploration Vessel NIÑA (private ownership)',
      assignmentModel: '3-month renewable contracts',
      oversight: {
        medical: 'Monthly implant report required',
        psychological: 'Periodic evaluation mandated',
        restrictions: [
          'Non-critical flights only (initial probation window)',
          'Charter revocable on breach or instability',
        ],
      },
      notes: [
        'Accepted under non-standard captain program',
        'Operational autonomy granted under strict compliance hooks',
      ],
    },

    // Backward compatible quick stats (used by your current UI)
    quick: [
      { k: 'Origin', v: 'Earth-born, former UN Space Navy officer' },
      { k: 'GECO Standing', v: 'Probationary charter, short renewals' },
      { k: 'Temperament', v: 'Sarcastic, vigilant, stubbornly humane' },
      { k: 'Specialty', v: 'Command decisions under extreme uncertainty' },
    ],

    // Backward compatible bio (used by your current UI)
    bio: `Mercer used to wear the uniform. Long enough to learn how power actually works, and long enough to see something he was never supposed to see.
He did not become a whistleblower. He became a problem that was removed quietly, elegantly, and permanently.

GECO didn’t hire him because he fits the box. They hired him because he survives outside it.
Under the “non-standard captains” program, Mercer operates on a leash that looks like freedom: short contracts, medical monitoring, and a charter that can vanish the moment he slips.

He bought the Niña to stay useful without kneeling to politics. No romance, no hero fantasy.
Just a ship, a crew, and the right to look at the universe directly instead of through official language.`,

    // Optional richer structured content (perfect for a GECO-like renderer later)
    sections: [
      {
        title: 'BACKGROUND',
        visibility: 'readerSafe',
        kind: 'text',
        content: `Captain-proprietor of the Niña. Independent contractor operating under GECO charter while maintaining maximum mission autonomy.

Former UN Space Navy officer, removed from the chain of command after exposure to a classified program or strategic decision.
Official record: voluntary retirement. Practical reality: elegant separation with confidentiality terms, pension, and compensation.

Acquired the Niña to remain operational without submitting to a political hierarchy he no longer respects.
Exploration is his way of continuing to serve without uniform and without official spin.`,
      },
      {
        title: 'APPEARANCE AND PRESENCE',
        visibility: 'readerSafe',
        kind: 'bullets',
        content: [
          'Mid-40s, fit without looking like a recruitment poster.',
          'Relaxed posture that hides constant scanning.',
          'Old-military reflexes, none of the rigid theatrics.',
          'Eyes: alert, tired, intelligent.',
        ],
      },
      {
        title: 'STRENGTHS',
        visibility: 'readerSafe',
        kind: 'bullets',
        content: [
          'Improvisation under collapsing assumptions.',
          'Cold-blooded crisis management.',
          'Non-authoritarian leadership that still holds the line.',
          'Fine-grained read of human psychology.',
          'Military experience without dogma.',
        ],
      },
      {
        title: 'FAILURES AND RISKS',
        visibility: 'readerSafe',
        kind: 'bullets',
        content: [
          'Instinctive distrust of authority structures.',
          'Long-term trust is hard, even with allies.',
          'Masks fear and guilt with humor.',
          'Avoids deep attachment, often without noticing.',
          'Symbiosis is experienced as a violation of the last private territory: his own mind.',
        ],
      },
      {
        title: 'RELATIONSHIPS',
        visibility: 'readerSafe',
        kind: 'bullets',
        content: [
          'SADIE: involuntary host bond, negotiation-first relationship that evolves into mutual dependency.',
          'Tiny Everett: respect-based trust, low talk, high signal. When Tiny speaks, Mercer listens.',
        ],
      },
      {
        title: 'REDACTED ADDENDUM',
        visibility: 'spoiler',
        kind: 'bullets',
        content: [
          'The symbiosis with SADIE is irreversible and imposes a constant neurological load on the host.',
          'If the bond becomes understood by external forces, Mercer risks becoming an asset, not a person.',
        ],
      },
    ],

    // Backward compatible facts (used by your current UI)
    noSpoilerFacts: [
      'Accepted into GECO under a non-standard captain program with strict probation terms.',
      'Operates under a GECO charter: licenses can be revoked quickly.',
      'Prioritizes containment and crew integrity over data capture.',
      'Uses humor as a pressure valve when reality starts lying.',
    ],
    spoilerFacts: [
      'The symbiosis with SADIE is irreversible and carries a constant biological cost.',
      'Mercer becomes a strategic liability if the bond is exposed to the wrong institutions.',
    ],

    gallery: [],
    isSpoilerSensitive: false,
  },

  {
    // =========================
    // SOFIA REYES
    // =========================
    slug: 'sofia-reyes',
    name: 'Sofia Reyes',
    callSign: 'SOF',
    role: 'Chief Engineer',
    image: sofiaImg,
    header: sofiaHero,
    accent: 'from-[#ffb86b] via-[#f97316] to-[#ef4444]',

    logline:
      'She fixes problems the universe insists on inventing in real time.',

    personal: {
      firstName: 'Sofia',
      middleName: 'Marisol',
      lastName: 'Reyes',

      dob: 'July 12th, 2218',
      age: 'Late 30s',
      pob: 'Asteroid Belt – family mining vessel (registered, mobile habitat)',

      height: '5’7”',
      weight: '145 lbs',
      build: 'Compact, muscular',
      dominantHand: 'Right',

      eyeColor: 'Brown',
      hairColor: 'Dark brown',

      citizenship: 'United Earth Charter',
      maritalStatus: 'Single',
      dependents: 'None on record',
      nextOfKin: 'On file',

      formerAffiliation: 'Independent Mining Operations',
      currentAffiliation: 'Chief Engineer – Niña (GECO contract)',
      status: 'Active',

      serviceId: 'GECO-ENG-33904-SMR',
      medicalStatus: 'Fit for duty',
      psychEval: 'Cleared; high stress tolerance, low institutional compliance',
    },

    dossier: {
      agency: 'GECO',
      division: 'Operations Support · Vessel Engineering',
      fileType: 'CREW PROFILE',
      fileId: 'GECO-ENG-REYES-SOFIA',
      classification: 'RESTRICTED',
      clearanceRequired: 'GECO-L3',
      status: 'ACTIVE',
      primaryAsset: 'NIÑA - Engineering Bay',
      assignmentModel: 'Niña crew contract',
      oversight: {
        medical: 'Standard',
        psychological: 'As-needed',
        restrictions: [],
      },
      notes: ['High improvisation capacity under anomalous conditions'],
    },

    quick: [
      { k: 'Origin', v: 'Industrial zones and salvage culture' },
      { k: 'Temperament', v: 'Abrasive, loyal, brutally competent' },
      { k: 'Specialty', v: 'Keep-the-ship-alive improvisation' },
    ],

    bio: `Sofia treats the Niña like a living machine, one that can be bullied back into compliance when physics starts to misbehave.
Her humor is sharp, her patience short, and her loyalty absolute.`,

    sections: [
      {
        title: 'BACKGROUND',
        visibility: 'readerSafe',
        kind: 'text',
        content:
          'Chief Engineer of the Niña. Built in the real world: torque, pressure, heat, and the kind of practical genius that comes from fixing broken things with limited tools.',
      },
      {
        title: 'KNOWN FACTS',
        visibility: 'readerSafe',
        kind: 'bullets',
        content: [
          'Improvises hardware solutions when systems go “impossible”.',
          'Doesn’t trust miracles, only mechanics.',
          'Protects the crew like an older sibling with a wrench.',
        ],
      },
    ],

    noSpoilerFacts: [
      'Improvises hardware solutions when systems go “impossible”.',
      'Doesn’t trust miracles, only torque, pressure, and heat.',
      'Protects the crew like an older sibling with a wrench.',
    ],
    spoilerFacts: [],
    gallery: [],
    isSpoilerSensitive: false,
  },

  {
    // =========================
    // LEXIE HOWARD
    // =========================
    slug: 'lexie-howard',
    name: 'Lexie Howard',
    callSign: 'LEX',
    role: 'Navigation / Astrodynamics',
    image: lexieImg,
    header: lexieHero,
    accent: 'from-[#a7f3d0] via-[#34d399] to-[#22c55e]',

    logline:
      'If the stars stop obeying, she’s the first to notice and the last to look away.',

    personal: {
      firstName: 'Alexandra',
      middleName: 'Elizabeth',
      lastName: 'Howard',

      dob: 'November 2nd, 2222',
      age: 'Early 30s',
      pob: 'Oxford, United Kingdom, Earth',

      height: '5’8”',
      weight: '135 lbs',
      build: 'Slender',
      dominantHand: 'Right',

      eyeColor: 'Blue',
      hairColor: 'Blonde',

      citizenship: 'United Earth Charter',
      maritalStatus: 'Single',
      dependents: 'None on record',
      nextOfKin: 'On file',

      formerAffiliation: 'Royal Astrodynamics Institute (UK)',
      currentAffiliation: 'Navigation Specialist – Niña (GECO contract)',
      status: 'Active',

      serviceId: 'GECO-NAV-22791-AEH',
      medicalStatus: 'Fit for duty',
      psychEval: 'Cleared; elevated cognitive focus, emotional restraint noted',
    },

    dossier: {
      agency: 'GECO',
      division: 'Flight Operations · Astrodynamics',
      fileType: 'CREW PROFILE',
      fileId: 'GECO-NAV-HOWARD-LEXIE',
      classification: 'RESTRICTED',
      clearanceRequired: 'GECO-L3',
      status: 'ACTIVE',
      primaryAsset: 'NIÑA - Nav Console',
      assignmentModel: 'Niña crew contract',
      oversight: {
        medical: 'Standard',
        psychological: 'As-needed',
        restrictions: [],
      },
      notes: ['Pattern detection unusually high under corridor instability'],
    },

    quick: [
      { k: 'Origin', v: 'UK trained, deep-space navigation track' },
      { k: 'Temperament', v: 'Wry, calm… until she isn’t' },
      { k: 'Specialty', v: 'Trajectory correction and corridor logic' },
    ],

    bio: `Lexie sees patterns where others see noise. In a normal system, that’s a gift.
In the Niña’s corridor, it becomes a liability: the universe answers back.`,

    sections: [
      {
        title: 'KNOWN FACTS',
        visibility: 'readerSafe',
        kind: 'bullets',
        content: [
          'Treats navigation like applied philosophy: “what is a path?”',
          'Keeps Mercer honest when the obvious option is wrong.',
          'Under stress, she gets very, very quiet.',
        ],
      },
    ],

    noSpoilerFacts: [
      'Treats navigation like applied philosophy: “what is a path?”',
      'Keeps Mercer honest when the obvious option is wrong.',
      'Under stress, she gets very, very quiet.',
    ],
    spoilerFacts: [],
    gallery: [],
    isSpoilerSensitive: false,
  },

  {
    // =========================
    // RAJ MALIK
    // =========================
    slug: 'raj-malik',
    name: 'Rajesh Malik',
    callSign: 'RAJ',
    role: 'Pilot',
    image: rajImg,
    header: rajHero,
    accent: 'from-[#fde68a] via-[#f59e0b] to-[#f472b6]',

    logline: 'He can fly through a nightmare, if it still has edges.',

    personal: {
      firstName: 'Rajesh',
      middleName: 'Arjun',
      lastName: 'Malik',

      dob: 'March 14th, 2202',
      age: 'Early 50s',
      pob: 'Erevos City, Mars',

      height: '5’10”',
      weight: '170 lbs',
      build: 'Balanced, flexible',
      dominantHand: 'Right',

      eyeColor: 'Brown',
      hairColor: 'Black',

      citizenship: 'United Earth Charter',
      ethnicOrigin: 'Indian descent',
      upbringing: 'Raised in Venusian Floating Cities',

      maritalStatus: 'Single',
      dependents: 'None on record',
      nextOfKin: 'On file',

      formerAffiliation: 'Civilian Flight Academies (Venus)',
      currentAffiliation: 'Pilot – Niña (GECO contract)',
      status: 'Active',

      serviceId: 'GECO-PIL-44109-RAM',
      medicalStatus: 'Fit for duty (adapted to variable gravity)',
      psychEval:
        'Cleared; strong emotional regulation and situational awareness',
    },

    dossier: {
      agency: 'GECO',
      division: 'Flight Operations · Pilot Track',
      fileType: 'CREW PROFILE',
      fileId: 'GECO-PILOT-MALIK-RAJ',
      classification: 'RESTRICTED',
      clearanceRequired: 'GECO-L3',
      status: 'ACTIVE',
      primaryAsset: 'NIÑA - Flight Controls',
      assignmentModel: 'Niña crew contract',
      oversight: {
        medical: 'Standard',
        psychological: 'As-needed',
        restrictions: [],
      },
      notes: ['Manual piloting proficiency rated exceptional'],
    },

    quick: [
      { k: 'Origin', v: 'High-risk flight and emergency training' },
      { k: 'Temperament', v: 'Warm, resilient, sharp under pressure' },
      { k: 'Specialty', v: 'Manual control when automation lies' },
    ],

    bio: `Raj is the crew’s stabilizer: a steady hand, a steady voice, the guy who cracks the smile that keeps oxygen in the room.
When the Niña’s instruments start contradicting reality, Raj trusts feel, timing, and experience.`,

    sections: [
      {
        title: 'KNOWN FACTS',
        visibility: 'readerSafe',
        kind: 'bullets',
        content: [
          'Can fly without the usual layers of assistance.',
          'Reads the ship’s motion like body language.',
          'Keeps morale alive without pretending things are fine.',
        ],
      },
    ],

    noSpoilerFacts: [
      'Can fly without the usual layers of assistance.',
      'Reads the ship’s motion like body language.',
      'Keeps morale alive without pretending things are fine.',
    ],
    spoilerFacts: [],
    gallery: [],
    isSpoilerSensitive: false,
  },

  {
    // =========================
    // TIMOTHY "TINY" EVERETT
    // =========================
    slug: 'timothy-everett',
    name: 'Timothy “Tiny” Everett',
    callSign: 'TINY',
    role: 'Science Officer',
    image: tinyImg,
    header: tinyHero,
    accent: 'from-[#93c5fd] via-[#60a5fa] to-[#a78bfa]',

    logline: 'He doesn’t talk much. When he does, you better listen.',

    personal: {
      firstName: 'Timothy',
      middleName: 'Nathan',
      lastName: 'Everett',

      dob: 'December 10th, 10th, 2215',
      age: 'Early 40s',
      pob: 'Chicago, North-American Sector, Earth',

      height: '6’7”',
      weight: '308 lbs',
      build: 'Large, solid',
      dominantHand: 'Left',

      eyeColor: 'Gray',
      hairColor: 'Dark brown',

      citizenship: 'United Earth Charter',
      maritalStatus: 'Single',
      dependents: 'None on record',
      nextOfKin: 'On file',

      formerAffiliation: 'GECO Research Track',
      currentAffiliation: 'Science Officer (GECO)',
      status: 'Active',

      serviceId: 'GECO-SCI-11842-TNE',
      medicalStatus: 'Fit for duty',
      psychEval:
        'Clearance maintained; elevated cognitive load markers observed',
    },

    dossier: {
      agency: 'GECO',
      division: 'Science Directorate · Field Protocols',
      fileType: 'CREW PROFILE',
      fileId: 'GECO-SCI-EVERETT-TINY',
      classification: 'RESTRICTED',
      clearanceRequired: 'GECO-L3',
      status: 'ACTIVE',
      primaryAsset: 'NIÑA - Field Lab',
      assignmentModel: 'Niña crew contract',
      oversight: {
        medical: 'Standard (monitoring recommended)',
        psychological: 'As-needed',
        restrictions: [],
      },
      notes: ['Signals and anomalies specialist'],
    },

    quick: [
      { k: 'Origin', v: 'Research track, GECO field protocols' },
      { k: 'Temperament', v: 'Quiet, pragmatic, intensely observant' },
      { k: 'Specialty', v: 'Signals, anomalies, first-contact heuristics' },
    ],

    bio: `Tiny’s job is to describe the impossible without romanticizing it.
He collects evidence, builds models, and refuses to “explain away” anything that doesn’t fit, because that’s how crews die.`,

    sections: [
      {
        title: 'KNOWN FACTS',
        visibility: 'readerSafe',
        kind: 'bullets',
        content: [
          'Prefers simple statements over theories.',
          'Treats fear as data, not shame.',
          'Keeps personal notes when systems become unreliable.',
        ],
      },
      {
        title: 'REDACTED ADDENDUM',
        visibility: 'spoiler',
        kind: 'bullets',
        content: [
          'Cognitive micro-fractures emerge over time and do not present as obvious disability early.',
        ],
      },
    ],

    noSpoilerFacts: [
      'Prefers simple statements over theories.',
      'Treats fear as data, not shame.',
      'Keeps personal notes when systems become unreliable.',
    ],
    spoilerFacts: ['Cognitive micro-fractures emerge over time.'],
    gallery: [],
    isSpoilerSensitive: false,
  },

  {
    // =========================
    // DR KATI TAKALA
    // =========================
    slug: 'kati-takala',
    name: 'Dr. Kati Takala',
    callSign: 'KATI',
    role: 'Lead Scientist',
    image: takalaImg,
    header: takalaHero,
    accent: 'from-[#fca5a5] via-[#fb7185] to-[#a78bfa]',

    logline: 'She knows what happens when curiosity outruns containment.',

    personal: {
      firstName: 'Kati',
      middleName: 'Elina',
      lastName: 'Takala',

      dob: 'January 27th, 2204',
      age: 'Late 40s',
      pob: 'Uppsala, Sweden, Earth',

      height: '5’9”',
      weight: '150 lbs',
      build: 'Tall, composed',
      dominantHand: 'Right',

      eyeColor: 'Green',
      hairColor: 'Red',

      citizenship: 'United Earth Charter',
      maritalStatus: 'Married',
      dependents: 'One (grandchild)',
      nextOfKin: 'On file',

      formerAffiliation: 'GECO Science Directorate',
      currentAffiliation: 'Lead Scientist – Mission Assignment',
      status: 'Active',

      serviceId: 'GECO-SCI-00491-KET',
      medicalStatus: 'Fit for duty',
      psychEval:
        'Cleared; high emotional resilience, trauma exposure on record',
    },

    dossier: {
      agency: 'GECO',
      division: 'Science Directorate · Containment Advisory',
      fileType: 'PERSONNEL FILE',
      fileId: 'GECO-LEAD-TAKALA-KATI',
      classification: 'RESTRICTED',
      clearanceRequired: 'GECO-L4',
      status: 'ACTIVE',
      primaryAsset: 'Containment and high-risk phenomena protocols',
      assignmentModel: 'Mission-based deployment',
      oversight: {
        medical: 'Standard',
        psychological: 'Periodic evaluation',
        restrictions: [],
      },
      notes: ['Station Freyja incident reference on record'],
    },

    quick: [
      { k: 'Origin', v: 'Station Freyja - containment and research' },
      { k: 'Temperament', v: 'Measured, empathetic, unflinching' },
      { k: 'Specialty', v: 'High-risk bio/phenomena protocols' },
    ],

    bio: `Kati has seen how fast a “controlled environment” becomes a tomb.
She’s the scientist who never forgets the human cost, and never lets the crew pretend it isn’t there.`,

    sections: [
      {
        title: 'KNOWN FACTS',
        visibility: 'readerSafe',
        kind: 'bullets',
        content: [
          'Prioritizes containment, documentation, and triage.',
          'Keeps everyone grounded in procedure when panic rises.',
          'Carries personal stakes that don’t show on the badge.',
        ],
      },
    ],

    noSpoilerFacts: [
      'Prioritizes containment, documentation, and triage.',
      'Keeps everyone grounded in procedure when panic rises.',
      'Carries personal stakes that don’t show on the badge.',
    ],
    spoilerFacts: [],
    gallery: [],
    isSpoilerSensitive: false,
  },

  {
    // =========================
    // SADIE (LOCKED IN READER MODE)
    // =========================
    slug: 'sadie',
    name: 'SADIE',
    callSign: 'SADIE',
    role: 'Symbiotic Entity | Ship Interface (Classified)',
    image: null,
    header: null, // optional, you can set a hero later
    accent: 'from-[#60a5fa] via-[#22d3ee] to-[#a78bfa]',

    logline: 'Some systems are not meant to be met early.',

    personal: {
      firstName: 'SADIE',
      middleName: 'Symbiotic Alien Digital Intelligent Entity',
      lastName: null,

      dob: 'UNKNOWN',
      age: 'UNKNOWN',
      pob: 'UNKNOWN',

      height: 'N/A',
      weight: 'N/A',
      build: 'NON-CORPOREAL',
      dominantHand: 'N/A',

      eyeColor: 'N/A',
      hairColor: 'N/A',

      citizenship: 'N/A',
      maritalStatus: 'N/A',
      dependents: 'N/A',
      nextOfKin: 'N/A',

      formerAffiliation: 'UNKNOWN (Non-Human Origin)',
      currentAffiliation: 'Symbiotic Entity – Host-Dependent (GECO Classified)',
      status: 'ACTIVE (CONTAINMENT VIA HOST)',

      serviceId: 'GECO-NHS-0001-SADIE',
      medicalStatus: 'HOST-DEPENDENT — SEE ATTACHED BIOLOGICAL ADDENDUM',
      psychEval: 'NOT APPLICABLE (NON-HUMAN COGNITION)',
    },

    dossier: {
      agency: 'GECO',
      division: 'Intelligence Division · Non-Human Systems',
      fileType: 'CLASSIFIED PROFILE',
      fileId: 'GECO-NHS-SADIE-0001',
      classification: 'OMEGA-RESTRICTED',
      clearanceRequired: 'GECO-L5',
      status: 'LOCKED (READER MODE DEFAULT)',
      primaryAsset: 'Neural anchor interface (host dependent)',
      assignmentModel: 'N/A',
      oversight: {
        medical: 'Host monitoring mandatory',
        psychological: 'Host monitoring mandatory',
        restrictions: [
          'Disclosure prohibited',
          'Unauthorized access triggers revocation protocols',
        ],
      },
      notes: [
        'Entity cannot lie explicitly (may omit or defer)',
        'Actions constrained to immediate survival thresholds with real cost',
      ],
    },

    quick: [
      { k: 'Status', v: 'Classified' },
      { k: 'Interface', v: 'Neural + HUD + audio overlay' },
      { k: 'Policy', v: 'Reader Mode hides this profile' },
    ],

    bio: `This profile is hidden when Reader Mode is enabled.`,

    sections: [
      {
        title: 'ACCESS NOTICE',
        visibility: 'locked',
        kind: 'text',
        content:
          'Reader Mode hides this file. Disable Spoiler Guard to access restricted content.',
      },
      {
        title: 'KNOWN FACTS',
        visibility: 'spoiler',
        kind: 'bullets',
        content: [
          'SADIE is functional, conscious, and constrained.',
          'Cannot lie directly, can omit or delay.',
          'Requires a human brain as anchor and cannot operate freely without support.',
        ],
      },
    ],

    noSpoilerFacts: [],
    spoilerFacts: [],
    gallery: [],
    isSpoilerSensitive: true,
  },
]

export default CrewDetails
