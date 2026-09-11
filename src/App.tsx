import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { LandingAbduction } from './LandingAbduction'
import { useImagesLoaded } from './useImagesLoaded'
import { GenericSkeleton, LandingSkeleton, WorkSkeleton, AboutSkeleton, TeamSkeleton, NonprofitsSkeleton, StudentsSkeleton, ProjectDetailSkeleton } from './Skeletons'
import { usePath, Link } from './router'

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

const projects: Project[] = [
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

const moreProjects: { name: string; description: string; npoUrl?: string }[] = [
  { name: 'Inner City Visions', description: 'A client management system for Inner City Visions to support youth services and human trafficking intervention programs.', npoUrl: 'https://innercityvisions.org/' },
  { name: 'L.A. Waterkeeper', description: 'An interactive web app that educates the public about the LA River’s impact.', npoUrl: 'https://www.lawaterkeeper.org/' },
  { name: 'Alzheimer’s San Diego', description: 'A client management system that consolidates client onboarding, check-ins, and tracking all in one platform.', npoUrl: 'https://www.alzsd.org/' },
  { name: 'SaveCanto', description: 'A web app to act as a volunteer management system and a refined map and table system for verifying/displaying Cantonese language learning programs.' },
  { name: 'Project Ropa Offline Forms App', description: 'A check-ins app for volunteers to track deliveries of clean clothing to the homeless in LA.', npoUrl: 'https://www.projectropa.org/' },
  { name: 'Coordinating Survival Kit Distribution', description: 'A system streamlining on-the-ground distribution of homeless aid packages by thousands of volunteers.', npoUrl: 'https://www.thegivingspirit.org/' },
  { name: 'iiDecide', description: 'A platform for anonymously connecting victims and survivors of sexual assault who have the same perpetrator.' },
  { name: 'Oppia', description: 'Supporting free, interactive online learning opportunities for students with limited access to formal education.', npoUrl: 'https://www.oppia.org/' },
  { name: 'Gladeo', description: 'A pathway mapper web application to assist community college students in planning their coursework.', npoUrl: 'https://www.gladeo.org/' },
  { name: 'Swipe Out Hunger', description: 'A donor-donee matching app allowing students to share swipes with those struggling from food insecurity.', npoUrl: 'https://www.swipehunger.org/' },
  { name: 'Westside Food Bank', description: 'A food pantry locator with information on the nearest available pantries.', npoUrl: 'http://www.westsidefoodbankca.org/' },
  { name: 'Friends of the Semel Institute', description: 'Data analysis of a UCLA nonprofit’s donor base to maximize donations toward mental health awareness and research.', npoUrl: 'https://www.friendsofsemelinstitute.org/' },
  { name: 'Beloved Beauty', description: 'A donor deck and user survey to support funding for victims of sex trafficking.', npoUrl: 'https://www.belovedbeauty.org/' },
]

const partnerLogos = [
  { name: 'CRJW', src: '/assets/figma/logos/crjw.png' },
  { name: 'Wags & Walks', src: '/assets/figma/logos/wags.png' },
  { name: 'Mending Kids', src: '/assets/figma/logos/mending-kids.png' },
  { name: 'SaveCanto', src: '/assets/figma/logos/savecanto.png' },
  { name: 'Alzheimer’s San Diego', src: '/assets/figma/logos/asd.png' },
  { name: 'CoachArt', src: '/assets/figma/logos/coachart.png' },
  { name: 'oneAll', src: '/assets/figma/logos/oneall.png' },
  { name: 'HURIDOCS', src: '/assets/figma/logos/huridocs.png' },
  { name: 'Gravyty', src: '/assets/figma/logos/gravyty.png' },
  { name: 'Swipe Out Hunger', src: '/assets/figma/logos/swoh.png' },
  { name: 'Gladeo', src: '/assets/figma/logos/gladeo.png' },
  { name: 'Westside Food Bank', src: '/assets/figma/logos/wsfb.png' },
]
const teamPhotos = ['/assets/team-1.png', '/assets/team-2.png', '/assets/team-3.png', '/assets/team-4.png']
const teamPortraits = Array.from(
  { length: 34 },
  (_, index) => `/assets/figma/team/portraits/member-${String(index + 1).padStart(2, '0')}.png`,
)
type LandingPhoto = {
  id: string
  avifSrcSet: string
  jpegSrc: string
  jpegSrcSet: string
}

const landingPhotos: LandingPhoto[] = Array.from({ length: 15 }, (_, index) => {
  const id = `photo-${index + 1}`
  const base = `/assets/figma/landing/${id}`
  return {
    id,
    avifSrcSet: `${base}-640.avif 640w, ${base}-1280.avif 1280w`,
    jpegSrc: `${base}-1280.jpg`,
    jpegSrcSet: `${base}-640.jpg 640w, ${base}-1280.jpg 1280w`,
  }
})
const landingPartners = [
  { name: 'Center for Restorative Justice Works', url: 'https://www.crjw.org/' },
  { name: 'Wags & Walks', url: 'https://www.wagsandwalks.org/' },
  { name: 'Mending Kids', url: 'https://www.mendingkids.org/' },
  { name: 'Save Cantonese', url: 'https://www.savecantonese.org/' },
  { name: "Alzheimer's San Diego", url: 'https://www.alzsd.org/' },
  { name: 'Inner City Visions', url: 'https://innercityvisions.org/' },
  { name: 'L.A. Waterkeeper', url: 'https://www.lawaterkeeper.org/' },
  { name: 'Los Angeles Food Policy Council', url: 'https://www.goodfoodla.org/' },
  { name: 'CoachArt', url: 'https://www.coachart.org/' },
  { name: 'oneAll', url: null },
  { name: 'HURIDOCS', url: 'https://huridocs.org/' },
  { name: 'Gravyty', url: 'https://gravyty.com/' },
  { name: 'Friends of the Semel Institute', url: 'https://www.friendsofsemelinstitute.org/' },
  { name: 'Handle with Care', url: 'https://handlewithcareus.org/' },
  { name: 'Beloved Beauty', url: 'https://www.belovedbeauty.org/' },
  { name: 'Swipe Out Hunger', url: 'https://www.swipehunger.org/' },
].map((partner, index) => ({ ...partner, src: `/assets/figma/landing/partner-${index + 1}.png` }))

// When false, the hero UFO just idle-bobs in place instead of wandering the
// hero and running the carousel abduction/sucking sequence.
const UFO_MOTION_ENABLED = false

const NOVA_LOGO_PATHS = [
  'M8.48183 3.85332L0 12.3352L11.5648 23.9L20.0467 15.4182L8.48183 3.85332Z',
  'M9.64461 1.81385L23.4441 15.6133C23.4441 15.6133 22.1698 16.8399 20.937 18.0528C19.8048 19.1667 18.5732 20.0157 19.4823 21.1269C20.3915 22.2381 18.1186 20.8996 18.1186 20.8996L17.5731 21.3996L17.664 23.2179C16.3912 21.8542 15.1951 23.7467 14.1519 24.9055L0.352447 11.106L9.64461 1.81385Z',
  'M38.1918 3.35755L46.6736 11.8394L34.097 24.416L25.6152 15.9341L38.1918 3.35755Z',
  'M16.0018 23.9517C16.3569 23.5967 16.9325 23.5967 17.2876 23.9517L18.3161 24.9803C18.6712 25.3353 18.6712 25.911 18.3161 26.266L16.7964 27.7858L14.4821 25.4715L16.0018 23.9517Z',
  'M18.9413 26.7104C19.2963 26.3554 19.872 26.3554 20.227 26.7104L21.1905 27.6739C21.5455 28.029 21.5455 28.6046 21.1905 28.9596L19.6707 30.4794L17.4215 28.2302L18.9413 26.7104Z',
  'M21.623 29.4067C21.9781 29.0516 22.5537 29.0516 22.9088 29.4067L24.6263 31.1242L22.4788 33.2718L20.1184 30.9113L21.623 29.4067Z',
  'M37.2347 2.94409L39.549 5.25838L23.2833 21.5241C22.5732 22.2342 21.4219 22.2342 20.7118 21.5241L20.3261 21.1384C19.9711 20.7833 19.9711 20.2077 20.3261 19.8527L37.2347 2.94409Z',
  'M13.3277 18.8837L15.257 16.9545L28.4722 30.1696L26.5429 32.0989L13.3277 18.8837Z',
  'M25.2115 20.7888L27.2367 18.7635L33.7597 25.2865L31.7344 27.3117L25.2115 20.7888Z',
  'M22.6658 23.3342L24.691 21.309L31.214 27.8319L29.1887 29.8572L22.6658 23.3342Z',
  'M21.9601 22.7193C22.5809 22.805 23.2079 22.6136 23.6749 22.1958L24.6661 21.3089L24.2115 24.8546L21.9601 22.7193Z',
  'M23.5744 0L27.9458 4.37145L23.5744 8.7429L19.2029 4.37145L23.5744 0Z',
]

function Logo() {
  return <Link className="logo" href="/" aria-label="Nova home">
    <span className="logo-diamond">
      <span className="logo-art">
        <svg className="logo-mark" viewBox="0 0 46.6736 33.2718" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs><linearGradient id="logoGradient" x1="0" y1="0" x2="46.6736" y2="33.2718" gradientUnits="userSpaceOnUse"><stop stopColor="var(--blue)" /><stop offset="1" stopColor="var(--pink)" /></linearGradient></defs>
          {NOVA_LOGO_PATHS.map((d, i) => <path key={i} d={d} fill="url(#logoGradient)" />)}
        </svg>
        <svg className="logo-mark logo-mark-overlay" viewBox="0 0 46.6736 33.2718" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {NOVA_LOGO_PATHS.map((d, i) => <path key={i} d={d} fill="#176bdf" />)}
        </svg>
      </span>
    </span>
  </Link>
}

function SocialIcon({ name }: { name: 'instagram' | 'github' }) {
  if (name === 'github') return <svg viewBox="0 0 34.5 34.02" aria-hidden="true"><path d="M12.93 33.24c-.28 1.6-2.6.32-3.49-.15C-6.54 24.8-.96.33 16.65 0c17.62-.32 24.71 23.4 9.58 32.46-.76.46-4.15 2.5-4.56 1.04-.27-1.97.25-4.5-.04-6.4-.12-.72-.9-1.22-.87-1.98 2.46-.21 5.19-1.27 6.47-3.51 1.36-2.4 1.62-5.82.43-8.34-.22-.45-.87-1.17-.92-1.57-.12-.99.4-2.1.06-3.56-.36-1.54-1.36-.97-2.48-.58-.7.24-2.26 1.26-2.62 1.31-.48.08-2.45-.4-3.18-.43-.68-.04-1.5-.04-2.18-.01-.9.04-3.02.56-3.66.34-.59-.21-1.38-.86-2.08-1.14-2.11-.82-2.79-.67-2.9 1.75-.04.78.25 1.9.14 2.49-.08.43-.81 1.21-1.04 1.74-.92 2.12-.54 6.26.75 8.22 1.6 2.43 3.61 2.68 6.17 3.29.18.04.27-.1.22.22l-1.11 2.28c-1.71.57-2.96.45-4.26-.81-1.02-.99-2.26-3.43-4.06-2.19.5.78 1.24 1.2 1.8 1.98.8 1.11 1.15 2.6 2.5 3.19.13.06.79.31.85.31h3.27c-.12.95.15 2.24 0 3.15Z"/></svg>
  return <svg viewBox="0 0 34.02 34.02" aria-hidden="true"><circle cx="17.01" cy="17.01" r="17.01"/><rect x="8.1" y="8.1" width="17.82" height="17.82" rx="5.3" fill="none" stroke="white" strokeWidth="2.2"/><circle cx="17.01" cy="17.01" r="4.45" fill="none" stroke="white" strokeWidth="2.2"/><circle cx="23.1" cy="10.95" r="1.3" fill="white"/></svg>
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const links = [['About', '/about'], ['Our Work', '/work'], ['Our Team', '/team'], ['For Students', '/students'], ['For Nonprofits', '/nonprofits']]

  return <header className="header">
    <nav className="nav" aria-label="Main navigation">
      <Logo />
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => <Link key={href} href={href} onClick={close}>{label}</Link>)}
        <a className="button button-solid" href="https://mail.google.com/mail/?view=cm&fs=1&to=novaforgood@gmail.com" target="_blank" rel="noopener noreferrer">Contact Us <ArrowUpRight size={15}/></a>
      </div>
    </nav>
  </header>
}

function Footer() {
  return <footer>
    <div className="footer-brand"><Logo/><strong>NOVA, TECH FOR GOOD</strong></div>
    <div className="footer-links">
      <Link href="/about">About</Link>
      <Link href="/work">Work</Link>
      <Link href="/team">Our Team</Link>
      <Link href="/students">For Students</Link>
    </div>
    <small>© 2026 nova for good | Last updated Sept 11, 2026</small>
    <div className="footer-socials" aria-label="Social links">
      <a href="https://www.instagram.com/novaforgood" target="_blank" rel="noreferrer" aria-label="Nova on Instagram"><SocialIcon name="instagram" /></a>
      <a href="https://github.com/novaforgood" target="_blank" rel="noreferrer" aria-label="Nova on GitHub"><SocialIcon name="github" /></a>
    </div>
  </footer>
}

function AppShell({ children, skeleton }: { children: React.ReactNode; skeleton: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const loaded = useImagesLoaded(contentRef)
  return <main id="top">
    <Header />
    {!loaded && <div className="page-skeleton" aria-hidden="true">{skeleton}</div>}
    <div className={`page-content${loaded ? ' page-content-visible' : ''}`} ref={contentRef}>{children}</div>
    <Footer />
  </main>
}

// Narrower viewports slow the photo carousels down: 1440px+ plays at normal
// speed, down to 3x slower (i.e. 1/3 speed) around phone-width viewports.
function carouselSpeedForWidth(width: number) {
  return Math.min(3, Math.max(1, 1440 / width))
}

function LandingPage() {
  const landingPageRef = useRef<HTMLDivElement>(null)
  const heroUfoRef = useRef<HTMLDivElement>(null)
  const photoRowsRef = useRef<HTMLDivElement>(null)
  const [wideCarousel, setWideCarousel] = useState(() => window.matchMedia('(min-width:1800px)').matches)
  const [carouselSpeed, setCarouselSpeed] = useState(() => carouselSpeedForWidth(window.innerWidth))

  useEffect(() => {
    const media = window.matchMedia('(min-width:1800px)')
    const update = () => setWideCarousel(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const update = () => setCarouselSpeed(carouselSpeedForWidth(window.innerWidth))
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const landing = landingPageRef.current
    if (!landing) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-offscreen', !entry.isIntersecting))
    }, { rootMargin: '240px 0px' })
    const carousels = landing.querySelectorAll('.landing-carousel')
    carousels.forEach((carousel) => observer.observe(carousel))
    return () => observer.disconnect()
  }, [])

  return <AppShell skeleton={<LandingSkeleton />}>
    <div className="landing-page" ref={landingPageRef}>
      <div className="landing-decor" aria-hidden="true">
        <img className="landing-decor-sparkles landing-decor-sparkles-top" src="/assets/figma/landing/sparkle-field.svg" alt="" />
        <img className="landing-decor-sparkles landing-decor-sparkles-middle" src="/assets/figma/landing/sparkle-field-middle.svg" alt="" />
        <img className="landing-decor-gallery-ribbon" src="/assets/figma/landing/gallery-ribbon-left.png" alt="" />
        <img className="landing-decor-about-star" src="/assets/figma/landing/about-star-left.png" alt="" />
        <img className="landing-decor-network-star-large" src="/assets/figma/landing/network-star-large.png" alt="" />
        <img className="landing-decor-network-star-small" src="/assets/figma/landing/network-star-small.png" alt="" />
      </div>
      <section className="landing-hero">
        <img className="landing-hero-star" src="/assets/figma/landing/hero-star.png" alt="" />
        <div className={`landing-ufo-flight${UFO_MOTION_ENABLED ? '' : ' ufo-bob-only'}`} ref={heroUfoRef} aria-hidden="true"><img className="landing-ufo" src="/assets/figma/landing/max-ufo.svg" alt="" /></div>
        <div className="landing-hero-copy">
          <img className="landing-wordmark" src="/assets/figma/landing/nova-wordmark.svg" alt="Nova" />
          <h1>Tech for Good</h1>
          <p>A team of UCLA students creating high-impact technical solutions that empower nonprofits to better serve disadvantaged communities.</p>
          <Link className="button button-gradient" href="/nonprofits">Work With Us <ArrowUpRight size={15}/></Link>
        </div>
      </section>

      <section className="landing-gallery" id="team" aria-label="Nova team photos">
        <div className="landing-photo-rows" ref={photoRowsRef}>
          <PhotoStrip stripId="top" photos={landingPhotos.slice(0, 6)} widths={[342.56, 282.433, 385.38, 192.69, 342.56, 282.433]} repeatsPerHalf={wideCarousel ? 2 : 1} speed={carouselSpeed} />
          <PhotoStrip stripId="middle" photos={landingPhotos.slice(6, 12)} widths={[192.69, 342.56, 342.56, 192.69, 282.433, 385.38]} repeatsPerHalf={wideCarousel ? 2 : 1} speed={carouselSpeed} />
        </div>
        <div className="landing-about" id="about">
          <div>
            <h2>Who We Are</h2>
            <p>⟡&nbsp; Developers, designers, and innovators who love to solve problems.<br />⟡&nbsp; Students dedicated to learning about and supporting under-resourced communities.<br />⟡&nbsp; A team that strongly believes in making a difference.</p>
          </div>
          <Link className="button button-outline" href="/students">Learn More <ArrowUpRight size={12}/></Link>
          <img className="landing-about-planet" src="/assets/figma/landing/about-planet.png" alt="" />
        </div>
        <PhotoStrip stripId="bottom" className="landing-bottom-strip" photos={landingPhotos.slice(8, 15)} widths={[342.56, 192.69, 342.56, 192.69, 342.56, 192.69, 342.56]} repeatsPerHalf={wideCarousel ? 2 : 1} speed={carouselSpeed} />
      </section>

    <ProjectsPreview />
    <NetworkSection />
    <CtaSection />
    {UFO_MOTION_ENABLED && <LandingAbduction landingPageRef={landingPageRef} heroUfoRef={heroUfoRef} photoRowsRef={photoRowsRef} />}
    </div>
  </AppShell>
}

function PhotoStrip({ photos, widths, stripId, repeatsPerHalf, speed = 1, className = '' }: { photos: LandingPhoto[]; widths: number[]; stripId: string; repeatsPerHalf: number; speed?: number; className?: string }) {
  // Two identical halves make the CSS loop seamless. Normal viewports only need
  // one photo set per half; ultra-wide viewports get a second set to prevent gaps.
  const half = Array.from({ length: repeatsPerHalf }, () => photos).flat()
  const sequence = [...half, ...half]
  const duration = (stripId === 'middle' ? 22 : 19) * repeatsPerHalf * speed
  return <div className={`landing-carousel ${className}`} data-strip-id={stripId}>
    <div className="landing-photo-track" style={{ animationDuration: `${duration}s` }}>{sequence.map((photo, index) =>
      <picture key={`${photo.id}-${index}`} style={{ width: widths[index % widths.length] ?? 342.56 }}>
        <source type="image/avif" srcSet={photo.avifSrcSet} sizes={`${Math.ceil(widths[index % widths.length] ?? 342.56)}px`} />
        <img
          src={photo.jpegSrc}
          srcSet={photo.jpegSrcSet}
          sizes={`${Math.ceil(widths[index % widths.length] ?? 342.56)}px`}
          data-photo-id={photo.id}
          data-copy-index={Math.floor(index / photos.length)}
          data-logical-index={index % photos.length}
          loading={stripId === 'bottom' || index >= photos.length ? 'lazy' : 'eager'}
          decoding="async"
          alt={index < photos.length ? 'Nova team' : ''}
        />
      </picture>)}</div>
  </div>
}

function ProjectsPreview() {
  const landingProjectCopy = [
    ['Medical Inventory System', '@Mending Kids', 'A web-based inventory management system that lets Mending Kids staff log, categorize, and track a medical supply’s journey from donation to deployment.'],
    ['Foster Onboarding Tracker', '@Wags and Walks', 'A centralized foster management platform to streamline onboarding, communication, and resource accessibility for the Wags & Walks team.'],
    ['Donation Allocation Portal', '@Center for Restorative Justice Works', 'A unified budgeting platform that automatically imports donation data and simplifies fund allocation, turning financial data into actionable insights.'],
  ]
  return <section className="landing-projects" id="work">
    <div className="landing-section-intro"><h2>Projects</h2><p>We were founded on the belief that even small solutions have the potential to create a large impact. We put together small interdisciplinary teams and work closely with nonprofits to bring a product to life through ideation, design, and implementation.</p></div>
    <div className="landing-project-list">
      {landingProjectCopy.map(([name, client, summary], index) => <Link className="landing-project" href={`/work/${projects[index].slug}`} key={name}><img src={`/assets/figma/landing/project-${index + 1}.png`} alt="" /><div><h3>{name}</h3><strong>{client}</strong><p>{summary}</p></div></Link>)}
    </div>
    <Link className="button button-outline" href="/work">More Projects <ArrowUpRight size={12}/></Link>
  </section>
}

function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <div className="project-image"><img src={project.image} alt={`${project.name} project preview`} /></div>
    <h3>{project.name}</h3>
    <p>{project.summary}</p>
    <Link href={`/work/${project.slug}`}>View project <ArrowUpRight size={15}/></Link>
  </article>
}

function NetworkSection() {
  return <section className="landing-network">
    <div className="landing-section-intro"><h2>Our Network</h2><p>We wouldn't be able to do what we love alone. We're grateful for these organizations who have advised us and given us a hand in better understanding the social sector. Interested in becoming a partner or advisor? <a href="https://forms.gle/g6gmjG4uYwL1AP5T9" target="_blank" rel="noreferrer"><u>Let us know</u></a> — we'd love to talk with you!</p></div>
    <div className="landing-partners">{landingPartners.map(partner => partner.url
      ? <a key={partner.src} href={partner.url} target="_blank" rel="noopener noreferrer" aria-label={partner.name}><img src={partner.src} alt={partner.name} /></a>
      : <img key={partner.src} src={partner.src} alt={partner.name} />)}</div>
  </section>
}

function CtaSection() {
  return <section className="landing-cta" id="nonprofits"><h2>Interested?</h2><div className="cta-actions"><Link className="button button-outline" href="/nonprofits">Work With Us <ArrowUpRight size={12}/></Link><Link className="button button-outline" href="/students">Join Our Team <ArrowUpRight size={12}/></Link></div></section>
}

function WorkPage() {
  const featuredProjects = [
    { ...projects[0], displayName: 'Medical Inventory System', client: '@Mending Kids', clientUrl: 'https://www.mendingkids.org/', image: '/assets/figma/work/mending-kids.png' },
    { ...projects[1], displayName: 'Foster Onboarding Tracker', client: '@Wags and Walks', clientUrl: 'https://www.wagsandwalks.org/', image: '/assets/figma/work/wags-walks.png' },
    { ...projects[2], displayName: 'Donation Allocation Portal', client: '@Center for Restorative Justice Works', clientUrl: 'https://www.crjw.org/', image: '/assets/figma/work/crjw.png' },
  ]

  return <AppShell skeleton={<WorkSkeleton />}>
    <div className="work-page" data-node-id="345:778">
      <span className="work-gradient-mesh work-gradient-mesh-top" aria-hidden="true"><img src="/assets/figma/work/gradient-mesh-4.png" alt="" /></span>
      <span className="work-gradient-mesh work-gradient-mesh-left" aria-hidden="true"><img src="/assets/figma/work/gradient-mesh-4.png" alt="" /></span>
      <section className="work-content">
        <header className="work-intro">
          <span className="work-intro-spark work-intro-spark-left">✦</span>
          <span className="work-intro-spark work-intro-spark-top">✦</span>
          <span className="work-intro-spark work-intro-spark-right">✦</span>
          <h1>Projects</h1>
          <p>Take a look at some of the projects we’ve worked on! Whether they're web development, mobile development, data science, or design, our solutions have been able to serve a wide variety of nonprofits.</p>
        </header>
        <div className="work-featured-list">
          {featuredProjects.map(project => <div className="work-featured-project" key={project.slug}>
            <Link className="work-featured-image" href={`/work/${project.slug}`}><img src={project.image} alt={`${project.name} product preview`} /></Link>
            <div className="work-featured-copy">
              <div><h2>{project.displayName}</h2><a href={project.clientUrl} target="_blank" rel="noreferrer"><strong>{project.client}</strong></a></div>
              <p>{project.summary}</p>
            </div>
          </div>)}
        </div>
        <section className="work-more-projects">
          <h2>...and more!</h2>
          <div className="work-more-list">
            {moreProjects.map(({ name, description, npoUrl }) => npoUrl
              ? <a className="work-more-row" href={npoUrl} target="_blank" rel="noopener noreferrer" key={name}><strong>{name}</strong><span>{description}</span><ArrowUpRight size={12} strokeWidth={1.5}/></a>
              : <div className="work-more-row work-more-row-static" key={name}><strong>{name}</strong><span>{description}</span></div>)}
          </div>
        </section>
      </section>
    </div>
  </AppShell>
}

const boardMembers = [
  ['Himani Jha', 'President'], ['Ashley Varghese', 'President'], ['Jay Thapar', 'External Vice-President'],
  ['Gokul Nambiar', 'Internal Vice-President'], ['Akhilesh Basetty', 'Developer'], ['Linda Wang', 'Designer'],
  ['Tawny Huang', 'Developer'], ['Anusha Ladha', 'Developer'],
]

const generalMembers = [
  ['Aditi Karthik', 'Developer'], ['Clare Jin', 'Developer'], ['Christine Han', 'Developer'],
  ['Cao Ninh Nguyen', 'Developer'], ['Sophie Kim', 'Designer'], ['Edin Le', 'Designer'],
  ['Katelyn Doanla', 'Designer'], ['Olivia Qi', 'Designer'], ['Jimin Kim', 'Developer'],
  ['Travis Ha', 'Developer'], ['Kasie Yang', 'Designer'], ['Lian Elsa Linton', 'Developer'],
  ['Shane Kuk', 'Developer'], ['Kian Shandi', 'Developer'], ['Haydn Man', 'Developer'],
  ['Katie Azuma', 'Designer'], ['Tiffany Pham', 'Designer'], ['Viyan Dabke', 'Developer'],
  ['Edi Zhang', 'Developer'], ['Kai Davey', 'Designer'], ['Nancy Tran', 'Designer'],
  ['Sunny Gandhari', 'Developer'], ['Maya Yoder', 'Designer'], ['Alyssa Leung', 'Developer'],
  ['Janani Acharya', 'Developer'], ['Clemente Irarrazaval', 'Developer'],
]

const alumniMembers = [
  'Sonav Agarwal', 'Kylie Bach', 'Richelle Shim', 'Jason Chan', 'Tam Vo', 'Priyanshu Sharma',
  'Michael Wu', 'Kevin Li', 'Ingrid Chang', 'Pravir Chugh', 'Sahithi Lingampalli',
  'Natalia Luzuriaga', 'Nikhil Suresh', 'Arya Bhalla', 'Bryan Chiang', 'Joshua Zhang',
  'Chinmaya Vempati', 'Yili Liu', 'Janie Wang', 'Sean Choi', 'Valentin Nguyen',
  'Isabel Parmenter', 'Max Wu', 'Aneri Patel', 'Yuhan Liu', 'Willie Jeng',
  'Victor Lin', 'Tanaya Nawathe', 'Jeffrey Zhou', 'Anivrit Subramaniam', 'Charlie Kuoch',
  'Kati Rady-Pentek', 'Jeff Yue', 'Adithya Nair', 'Janys Li', 'Maizah Ali',
  'Ishan Garg', 'Jessica Wong', 'Steve Jiang', 'Dean Jones', 'Wolfe Pickett',
  'Bryan Song', 'Ashley Zhu', 'Jenny Wang', 'Alyssa Wang', 'Katie Li',
  'Iris Chang', 'Catherine Hu', 'Sriram Balachandran', 'Isabella Qian', 'Stephanie Doan',
  'Serene Supakkul', 'Jessica Lam', 'Sam Chai', 'Vivek Menon', 'Janice Tsai',
  'Joanna Chen', 'Kristopher Bakhtiar', 'Coleman Leung', 'Hannah Chu', 'Anagha Srivatsav',
  'Carter Bian', 'Kevin Zhang', 'Edward Zhang', 'Whitney Chan', 'Caitlyn Chen', 'Daniel Fang',
]

function AboutPage() {
  const stories = [
    [<>We were founded in November 2018, when our co-founders—Bryan, Jessica, Max, and Stephanie—wanted to use their technical skills to make an active impact in the LA community.<br/><br/>In the coming weeks, they cold-emailed nonprofits across the city, seeking out problems that technology could tackle.</>, '/assets/figma/about/story-1.png'],
    [<>It’s this constant desire to learn and create that has brought together <strong>40+ committed members</strong> working year-round on projects to help nonprofits serve their communities more effectively.<br/><br/>We are a close-knit group of CS, design, and business students at UCLA, each actively participating in outreach, problem-solving, and development.</>, '/assets/figma/about/story-2.png'],
    [<>We strive to understand the reality of under-resourced communities by working closely with nonprofits. We represent an ambitious, fast-moving, and creative team aiming to make a lasting impact.<br/><br/>We believe that <strong>anyone</strong> can help bring change to the community. We are Nova.</>, '/assets/figma/about/story-3.png'],
  ]
  return <AppShell skeleton={<AboutSkeleton />}><div className="about-page" data-node-id="494:113">
    <div className="about-background" aria-hidden="true">
      <img className="about-background-mesh" src="/assets/figma/about/background.png" alt="" />
      <img className="about-constellation" src="/assets/figma/about/constellation.svg" alt="" />
    </div>
    <section className="about-story">
      <h1>Our Story</h1>
      <div className="about-story-list">{stories.map(([copy, image], index) => <article className={index % 2 ? 'reverse' : ''} key={index}>
        <p>{copy}</p><img src={image as string} onError={event => { event.currentTarget.src = teamPhotos[index] }} alt={`Nova members, chapter ${index + 1}`} />
      </article>)}</div>
    </section>
    <div className="about-actions"><Link className="button button-outline" href="/nonprofits">Work With Us <ArrowUpRight size={12}/></Link><Link className="button button-outline" href="/students">Join Our Team <ArrowUpRight size={12}/></Link></div>
  </div></AppShell>
}

function TeamMember({ member, index }: { member: string[]; index: number }) {
  return <article className="team-member">
    <img src={teamPortraits[index]} onError={event => { event.currentTarget.src = teamPhotos[index % teamPhotos.length] }} alt={`${member[0]}, ${member[1]}`} />
    <h3>{member[0]}</h3><p>{member[1]}</p>
    <a className="linkedin-mark" href="https://www.linkedin.com/company/nova-tech-for-good/" target="_blank" rel="noreferrer" aria-label={`${member[0]} on LinkedIn`}>in</a>
  </article>
}

function TeamPage() {
  return <AppShell skeleton={<TeamSkeleton />}><div className="team-page" data-node-id="494:987">
    <div className="team-background" aria-hidden="true">
      <img className="team-bg-mesh" src="/assets/figma/team/gradient-mesh-top.png" alt="" />
      <img className="team-bg-halo team-bg-halo-middle" src="/assets/figma/team/gradient-halo-middle.png" alt="" />
      <img className="team-bg-halo team-bg-halo-bottom" src="/assets/figma/team/gradient-halo-bottom.png" alt="" />
      <img className="team-star team-star-left-large" src="/assets/figma/team/star-large.png" alt="" />
      <img className="team-star team-star-left-small" src="/assets/figma/team/star-small.png" alt="" />
      <img className="team-star team-star-right-large" src="/assets/figma/team/star-large.png" alt="" />
      <img className="team-star team-star-right-top" src="/assets/figma/team/star-top-right.png" alt="" />
      <img className="team-ring-left" src="/assets/figma/team/ring-left.png" alt="" />
      <img className="team-ring-right" src="/assets/figma/team/ring-right.png" alt="" />
    </div>
    <section className="team-content">
      <h1>Meet Our Team</h1>
      <p className="team-intro">We are a close-knit group of CS, design, and business students at UCLA, each actively participating in outreach, problem-solving, and development.</p>
      <h2>26–27 Board</h2><div className="team-grid">{boardMembers.map((member, index) => <TeamMember member={member} index={index} key={member[0]} />)}</div>
      <h2>Members</h2><div className="team-grid">{generalMembers.map((member, index) => <TeamMember member={member} index={index + boardMembers.length} key={member[0]} />)}</div>
      <section className="team-join"><div><h2>Join Us!</h2><p>We’re always looking for thoughtful developers, designers, and community-minded builders to join Nova.</p><Link className="button button-outline" href="/students">Recruitment Details <ArrowUpRight size={12}/></Link></div><img src="/assets/team-4.png" alt="Nova members collaborating" /></section>
      <section className="team-alumni">
        <h2>Alumni</h2>
        <ul aria-label="Nova alumni">{alumniMembers.map(name => <li key={name}>{name}</li>)}</ul>
      </section>
    </section>
  </div></AppShell>
}

function NonprofitsPage() {
  return <AppShell skeleton={<NonprofitsSkeleton />}>
    <div className="nonprofits-page" data-node-id="362:316">
    <div className="nonprofits-background" aria-hidden="true">
      <img className="nonprofits-bg-top" src="/assets/figma/nonprofits-exact/background-a.png" alt="" />
      <img className="nonprofits-bg-bottom" src="/assets/figma/nonprofits-exact/background-b.png" alt="" />
      <img className="nonprofits-constellation" src="/assets/figma/nonprofits-exact/constellation.svg" alt="" />
    </div>
    <section className="split-hero section-shell">
      <h1>For Nonprofits</h1>
      <div><p><strong>We partner with nonprofits to create technological solutions that drive meaningful impact.</strong><br/><br/>From ideation to launch, our teams of developers and designers work closely with your organization to understand your goals, design user-centered experiences, and build digital tools that help further your mission.</p><a className="button button-outline" href="mailto:hello@novaforgood.org?subject=Nonprofit%20partnership">Work With Us <ArrowUpRight size={15}/></a></div>
      <img src="/assets/nonprofits-hero.png" alt="Nova team" />
    </section>
    <section className="looking-for section-shell">
      <h2>What We Bring</h2>
      <div className="criteria-grid">
        <article><img src="/assets/figma/nonprofits-exact/bring-1.png" alt="Nova members supporting community impact" /><h3>Community Impact</h3><p>Dedication to creating positive, measurable impact within communities through furthering your mission.</p></article>
        <article><img src="/assets/figma/nonprofits-exact/bring-2.png" alt="Nova members sharing technical expertise" /><h3>Technical Expertise</h3><p>Innovation centered on technology and design to address your unique challenges, opportunities, and vision.</p></article>
        <article><img src="/assets/figma/nonprofits-exact/bring-3.png" alt="Nova members collaborating" /><h3>Commitment</h3><p>An enthusiastic team ready to collaborate, share insights, and work alongside our partners to bring ideas to life.</p></article>
      </div>
    </section>
    <section className="process section-shell">
      <h2>Project Structure</h2>
      <div className="timeline">
        {['Stakeholder Discovery', 'User Research', 'Development', 'Handoff'].map((item, index) => <article key={item}><span>{index + 1}</span><h3>{item}</h3><p>{['Understanding your mission, defining goals, and establishing project scope.', 'Conducting user research, exploring brand identity, and mapping user flows to inform design decisions.', 'Designing and building solutions through iterative development and user testing.', 'Launching final product and providing documentation and resources for long-term success.'][index]}</p></article>)}
      </div>
    </section>
    <section className="testimonials section-shell">
      <h2>Client Testimonials</h2>
      <div className="testimonial-stack">
        <div className="testimonial-row">
          <div className="testimonial-person">
            <img className="testimonial-photo" src="/assets/figma/nonprofits-exact/testimonial-eitan.png" alt="Eitan Nir" />
            <div className="testimonial-person-info"><strong>Eitan Nir</strong><span>Foster Lead</span></div>
            <img className="testimonial-logo" src="/assets/figma/logos/wags.png" alt="Wags & Walks" />
          </div>
          <blockquote>“Nova’s thoughtful, solutions-oriented approach and genuine investment in our mission has helped streamline processes and ultimately allow our team to spend less time on administrative tasks and more time focusing on what matters most—supporting our fosters and saving dogs.<br/><br/>We are so grateful for Nova’s partnership, creativity, and dedication. Their work will have a lasting impact on our organization, and we would highly recommend them to any nonprofit looking to enhance their operations through thoughtful, mission-driven technology solutions.”</blockquote>
        </div>
        <div className="testimonial-row">
          <div className="testimonial-person">
            <img className="testimonial-photo" src="/assets/figma/nonprofits-exact/testimonial-mary.png" alt="Mary Zimmerman" />
            <div className="testimonial-person-info"><strong>Mary Zimmerman</strong><span>Foster Lead</span></div>
            <img className="testimonial-logo" src="/assets/figma/logos/mending-kids.png" alt="Mending Kids" />
          </div>
          <blockquote>“This is a much more streamlined process... there’s just less steps. It’s way better than what we’re working with now for sure!”</blockquote>
          <img className="testimonial-moon" src="/assets/figma/nonprofits-exact/testimonial-moon.png" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
    <NetworkSection />
    <section className="nonprofit-cta"><h2>Want to learn more?</h2><div><Link className="button button-outline" href="/about">About Us</Link><Link className="button button-outline" href="/work">Our Work</Link><a className="button button-outline" href="https://mail.google.com/mail/?view=cm&fs=1&to=novaforgood@gmail.com" target="_blank" rel="noopener noreferrer">Contact Us</a></div></section>
    </div>
  </AppShell>
}

function StudentsPage() {
  const events = [
    ['Applications open', 'SEP 22', 'tinyurl.com/nova-2627'],
    ['Infosession #1', 'SEP 29', 'in-person'],
    ['Infosession #2', 'SEP 30', 'on Zoom'],
    ['Applications Due', 'OCT 2', ''],
    ['Meet & Greet', 'OCT 6-7', 'Invite only'],
    ['Interviews', 'OCT 12-15', 'Invite only'],
  ]
  const reflections = [
    ['Jimin Kim', 'Developer', 'i didn’t apply to a single club until my sophomore year out of fear of how intensive and competitive technical clubs can be. i just knew that i wanted to surround myself with people who work not for a line on a resume, but out of empathy and creativity. stalking nova’s instagram & EAF booth, it was clear that nova was exactly that :)'],
    ['Katelyn Doanla', 'Designer', 'Nova’s mission-driven approach to technology for social good resonates deeply with my values as a designer. I wanted to learn how to grow in this space and explore design’s potential to benefit people. Nova creates that environment where this people-first mindset is at the core of all our technical work!'],
    ['Anusha Ladha', 'Marketing director / Developer', 'It just seemed like such a fun group of creatives & i wanted a way to give back to the community in the way i knew best: through tech. i liked how nova mixed impact + creativity, and i wanted to be part of that energy.'],
    ['Akhilesh Basetty', 'Finance director / Developer', 'I was looking into tech clubs to get CS experience, and I found it really cool how Nova built projects for local nonprofits. I was super hyped to impact the local community while gaining technical experience.'],
    ['Lian Elsa Linton', 'Developer', 'Nova not only gives you the space to grow your technical experience, but it also gives you a really fun and amazing community that makes you feel at home :)'],
  ]
  const reflectionPortraits = [
    '/assets/figma/students-exact/candidate-2.png',
    '/assets/figma/students-exact/candidate-3.png',
    '/assets/figma/students-exact/candidate-6.png',
    '/assets/figma/students-exact/candidate-7.png',
    '/assets/figma/students-exact/candidate-10.png',
  ]

  return <AppShell skeleton={<StudentsSkeleton />}>
    <div className="students-page" data-node-id="514:2273">
    <div className="students-background" aria-hidden="true">
      <img className="students-mesh students-mesh-middle" src="/assets/figma/students/gradient-mesh-middle.png" alt="" />
      <img className="students-mesh students-mesh-bottom" src="/assets/figma/students/gradient-mesh-bottom.png" alt="" />
      <img className="students-sparkles students-sparkles-wide" src="/assets/figma/students/sparkles-wide.svg" alt="" />
      <img className="students-sparkles students-sparkles-right" src="/assets/figma/students/sparkles-right.svg" alt="" />
      <span className="students-soft-star students-soft-star-right"><img src="/assets/figma/students/soft-star.png" alt="" /></span>
      <span className="students-soft-star students-soft-star-bottom-left"><img src="/assets/figma/students/soft-star.png" alt="" /></span>
    </div>
    <section className="page-hero">
      <h1>Join Us!</h1>
    </section>
    <section className="students section-shell">
      <div className="student-banner"><span>✦</span><h2>Light the Way</h2><span>✦</span></div>
      <h3>Fall 2026 Recruitment</h3>
      <p className="student-intro-copy">At Nova, we’re building a team of developers and designers passionate about improving our communities through tech. We are so excited for you to join us this fall!</p>
      <div className="event-list">{events.map(([name, date, detail]) => <article key={name}><strong>{name}</strong><span>{date}</span>{detail ? detail.startsWith('tinyurl') ? <a href={`https://${detail}`} target="_blank" rel="noreferrer">{detail}</a> : <small>{detail}</small> : null}</article>)}</div>
    </section>
    <section className="reflections section-shell">
      <h2>Why Nova?</h2><h3 className="reflection-subtitle">Member Reflections</h3>
      <div className="reflection-grid">
        {reflections.map(([name, role, quote], index) => <article className={index % 2 ? 'reverse' : ''} key={name}><div><p>“{quote}”</p><strong>— {name}, {role}</strong></div><img src={reflectionPortraits[index]} alt={`${name}, ${role}`} /></article>)}
      </div>
    </section>
    </div>
  </AppShell>
}

function ProjectDetailPage({ project }: { project: Project }) {
  const projectIndex = projects.findIndex(item => item.slug === project.slug)
  const previous = projects[(projectIndex + projects.length - 1) % projects.length]
  const next = projects[(projectIndex + 1) % projects.length]
  return <AppShell skeleton={<ProjectDetailSkeleton project={project} />}>
    <section className={`figma-detail-hero project-${project.slug}`} data-node-id={project.figmaNode}>
      <img className="detail-deco detail-star detail-star-left" src="/assets/figma/details/star2.png" alt="" />
      <img className="detail-deco detail-star detail-star-right" src="/assets/figma/details/star2.png" alt="" />
      <div className="figma-detail-gradient">
        <h1>{project.name}</h1>
        <div className="figma-laptop">
          <img src={project.screen} alt={`${project.name} product screen`} />
        </div>
      </div>
    </section>
    <section className="figma-case-study">
      <div className="figma-case-inner">
        <div className="figma-meta" data-node-id="detail-meta">
          <p><strong>Timeline:</strong> {project.timeline}</p>
          <p><strong>Tech Stack:</strong> {project.techStack}</p>
          <div><strong>Team Members:</strong><ul>{project.teamMembers.map(member => <li key={member}>{member}</li>)}</ul></div>
        </div>

        <section className="figma-copy-block">
          <h2>{project.backgroundTitle}</h2>
          <p>{project.background}</p>
        </section>

        <section className="figma-problem">
          <h2>The Problem</h2>
          <p>{project.problem}</p>
        </section>

        <section className="figma-problem figma-solution">
          <h2>Our Solution</h2><p>{project.solutionIntro}</p>
        </section>

        <section className="figma-copy-block figma-features">
          <h2>Key Features</h2>
          <div className="figma-solution-grid">
            {project.solutions.map(solution => <article key={solution.title}>
              <span aria-hidden="true">✦</span><div><h3>{solution.title}</h3>
              <p>{solution.body}</p>
              </div>
            </article>)}
          </div>
        </section>

        {project.testimonial ? <section className="figma-impact">
          <h2>Metrics &amp; Impact</h2>
          {project.metrics ? <div className="metric-grid">{project.metrics.map(metric => <article key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></article>)}</div> : null}
          {project.slug === 'mending-kids' ? <ul className="mending-impact-findings">
            <li>The Dashboard acts as the primary anchor for users—<strong>81.8%</strong> rely on it for general filtering.</li>
            <li>User’s <strong>high-velocity alignment</strong> with our central Dashboard architecture ensures zero friction during wide-scale deployment.</li>
            <li>High subjective usability rating <strong>(3.1/5 task ease)</strong> for non-expert demographic <strong>(2.9/5 familiarity)</strong></li>
            <li>Autonomous Power-User Adoption: <strong>25.9%</strong> of testers independently utilized advanced contextual shortcuts to merge creation and assignment loops, cutting traditional operational steps in half.</li>
          </ul> : null}
          <div className="figma-testimonial"><h3>Client Testimonial</h3>
          <p>{project.testimonial}</p>
          </div></section> : null}

        <section className="figma-team">
          <h2>Our Team:</h2>
          {project.teamImages.map((src, index) => <img key={src} src={src} alt={`${project.name} team ${index + 1}`} />)}
        </section>

        <nav className="figma-detail-nav" aria-label="Project navigation">
          <div><Link className="button button-outline" href={`/work/${previous.slug}`}><ArrowLeft size={16}/> Previous Project</Link><Link className="button button-outline" href={`/work/${next.slug}`}>Next Project <ArrowRight size={16}/></Link></div>
          <Link className="detail-all-projects" href="/work">View All Projects</Link>
        </nav>
      </div>
    </section>
  </AppShell>
}

function NotFoundPage() {
  return <AppShell skeleton={<GenericSkeleton />}><section className="page-hero"><h1>Page not found</h1><p>This route is not implemented yet.</p><Link className="button button-solid" href="/">Back home</Link></section></AppShell>
}

function App() {
  const path = usePath()
  const normalizedPath = path.replace(/\/$/, '') || '/'
  const project = projects.find(item => normalizedPath === `/work/${item.slug}`)

  let page: React.ReactNode
  if (normalizedPath === '/') page = <LandingPage />
  else if (normalizedPath === '/about') page = <AboutPage />
  else if (normalizedPath === '/team') page = <TeamPage />
  else if (normalizedPath === '/work') page = <WorkPage />
  else if (normalizedPath === '/nonprofits') page = <NonprofitsPage />
  else if (normalizedPath === '/students') page = <StudentsPage />
  else if (project) page = <ProjectDetailPage project={project} />
  else page = <NotFoundPage />

  return <div key={normalizedPath}>{page}</div>
}

export default App
