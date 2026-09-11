export type Project = {
  slug: string
  name: string
  image: string
  screen: string
  label: string
  summary: string
  figmaNode: string
  timeline: string
  techStack: string
  teamMembers: string[]
  backgroundTitle: string
  background: string
  problem: string
  solutionIntro: string
  solutions: { title: string; body: string }[]
  testimonial?: string
  metrics?: { value: string; label: string }[]
  teamImages: string[]
}

export const projects: Project[] = [
  {
    slug: 'mending-kids',
    name: 'Mending Kids',
    image: '/assets/mk-project.png',
    screen: '/assets/mk-screen.png',
    label: 'Dashboard',
    summary: 'A web-based inventory management system that lets MK staff log, categorize, and track medical supplies from donation to destination.',
    figmaNode: '874:11598',
    timeline: 'January 2026 - June 2026',
    techStack: 'React, Next.js, TypeScript, Supabase, Vercel, HTML, CSS, Figma',
    teamMembers: [
      'Project Leads: Aditi Karthik, Akhilesh Basetty, Himani Jha, Kasie Yang',
      'Developers: Clemente Irarrazaval, Alyssa Leung, Sunny Gandhari - Developer, Janani Acharya, Kian Shandi',
      'Designers: Edin Le, Linda Wang, Kai Davey',
    ],
    backgroundTitle: 'NonProfit BACKGROUND',
    background: 'Mending Kids provides free life-saving surgeries to children who can’t afford them across the world, providing volunteering surgeons, medical staff, and medical supplies, either going to them or flying them into the US for the necessary care.',
    problem: 'Medical supplies are tracked using a manual, error-prone spreadsheet by rotating staff, leading to supply waste, inefficient operations, audit challenges, and underfunded missions.',
    solutionIntro: 'An inventory management system that provides full visibility and control of a supply’s end-to-end journey from donation to deployment, streamlining operational processes and report generation.',
    solutions: [
      { title: 'Dashboard', body: 'High-level overview of inventory status, including items nearing expiration, low-stock alerts, ongoing and upcoming mission summaries, and an activity feed.' },
      { title: 'Inventory Management', body: 'An inventory system for managing donated medical supplies, with detailed item records, inventory status tracking, and comprehensive filtering.' },
      { title: 'Missions Page', body: 'Mission dashboard organizing missions by specialty and location, displaying key details—including mission information, medical lead, team members, and budget—for efficient planning and coordination.' },
    ],
    testimonial: '“This is a much more streamlined process... there’s just less steps. It’s way better than what we’re working with now for sure!”',
    metrics: [{ value: '98.2%', label: 'seamless task success rate' }, { value: '81.8%', label: 'of users demonstrate perfect mental-model alignment' }, { value: '22.7 sec', label: 'identifying urgent items using Dashboard' }],
    teamImages: ['/assets/figma/details/mk-team-1.png', '/assets/figma/details/mk-team-2.png'],
  },
  {
    slug: 'wags-walks',
    name: 'Wags & Walks',
    image: '/assets/wags-project.png',
    screen: '/assets/wags-screen.png',
    label: 'Inventory Management',
    summary: 'A webpage to centralize dog fosters, automate reminders, and consolidate resources into a user-friendly system.',
    figmaNode: '862:9782',
    timeline: 'January 2026 - June 2026',
    techStack: 'Next.js, Firebase, Google Apps Script, Google Sheets, Shelter Manager, Squarespace, Figma',
    teamMembers: [
      'Project Leads: Anusha Ladha, Ashley Varghese, Olivia Qi',
      'Developers: Tawny Huang, Jay Thapar, Shane Kuk, Clare Jin',
      'Designers: Maya Yoder, Nancy Tran',
    ],
    backgroundTitle: 'NonProfit BACKGROUND',
    background: 'Wags & Walks is a nonprofit dedicated to reducing euthanasia in local shelters and helping rescue dogs find permanent homes. One of its most impactful initiatives is its Foster Program, which places rescue dogs in temporary homes where they can receive care, socialization, and stability before adoption.',
    problem: 'Decentralized foster management systems and manual workflows created inefficiencies, limited visibility into foster progress, and made onboarding resources difficult to access.',
    solutionIntro: 'A centralized foster management and resource platform that streamlines onboarding, communication, and resource accessibility for the Wags & Walks team.',
    solutions: [
      { title: 'Applicant Pipeline', body: 'Centralizes foster applications into one dashboard for reviewing, searching, filtering, and tracking applications with staff notes and status updates.' },
      { title: 'Foster Directory', body: 'A unified directory combining application, ShelterManager, and Google Group data with insights into foster activity and active dogs.' },
      { title: 'Task & Communication Management', body: 'Prioritized follow-ups, household profiles, email tools, and admin controls streamline foster support and communication.' },
      { title: 'Resource Center', body: 'Organizes onboarding materials, educational guides, PDFs, videos, and FAQs into a searchable and filterable hub.' },
    ],
    testimonial: '“Nova’s thoughtful, solutions-oriented approach and genuine investment in our mission has helped streamline processes and ultimately allow our team to spend less time on administrative tasks and more time focusing on what matters most—supporting our fosters and saving dogs. We are so grateful for Nova’s partnership, creativity, and dedication. Their work will have a lasting impact on our organization, and we would highly recommend them to any nonprofit looking to enhance their operations through thoughtful, mission-driven technology solutions.”',
    teamImages: ['/assets/figma/details/wags-team-1.png', '/assets/figma/details/wags-team-2.png'],
  },
  {
    slug: 'crjw',
    name: 'CRJW',
    image: '/assets/crjw-project.png',
    screen: '/assets/crjw-screen.png',
    label: 'Missions',
    summary: 'An external fund allocation platform that auto-imports donor and donation information into structured, usable data.',
    figmaNode: '862:10071',
    timeline: 'January 2026 - June 2026',
    techStack: 'React + Vite, Tailwind CSS, Firebase (Hosting & Cloud Functions), Parse Server, Resend, Figma, Ant Design',
    teamMembers: [
      'Project Leads: Lian Elsa Linton, Jimin Kim, Travis Ha, Katelyn Doanla',
      'Developers: Gokul Nambiar, Haydn Man, Edi Zhang, Viyan Dabke',
      'Designers: Sophia Kim, Katie Azuma, Tiffany Pham',
    ],
    backgroundTitle: 'NonProfit BACKGROUND',
    background: 'Center for Restorative Justice Works (CRJW) is a nonprofit organization dedicated to restoring relationships impacted by incarceration. CRJW supports children, families, and formerly incarcerated individuals through programs that promote connection, healing, and successful reentry into society.',
    problem: 'Donation management depended on disconnected systems and manual data entry in spreadsheets with donor records expiring after 90 days, creating challenges for long-term financial tracking.',
    solutionIntro: 'Integrated fund allocation tools, automated donation tracking, and a reporting dashboard into CRJW’s existing internal platform, improving financial visibility and operational efficiency.',
    solutions: [
      { title: 'Automated Donation Tracking', body: 'The updated platform syncs new donations collected through Harness Giving with CRJW’s internal database, eliminating ~90% of manual entry.' },
      { title: 'Centralized Fund Allocation System', body: 'Staff can allocate donation funds to various programs directly through the internal site, without cross-referencing donation data.' },
      { title: 'Allocation Analytics', body: 'All allocation trends are presented in filterable and exportable dashboards for ease of financial reporting, similar to QuickBooks-style reports.' },
      { title: 'Existing Site Improvements', body: 'Existing functionalities of the internal site have been updated for stylistic continuity and improved staff workflows.' },
    ],
    teamImages: ['/assets/figma/details/crjw-team-1.png', '/assets/figma/details/crjw-team-2.png'],
  },
]
