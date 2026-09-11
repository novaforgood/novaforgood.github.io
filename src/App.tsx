import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { LandingAbduction } from './LandingAbduction'
import { useImagesLoaded } from './useImagesLoaded'
import { GenericSkeleton, LandingSkeleton, WorkSkeleton, AboutSkeleton, TeamSkeleton, NonprofitsSkeleton, StudentsSkeleton, ProjectDetailSkeleton } from './Skeletons'
import { usePath, Link } from './router'
import { projects, type Project } from './data/projects'
import { moreProjects, teamPhotos, teamPortraits, landingPhotos, boardMembers, generalMembers, alumniMembers } from './data/site'
import { AppShell } from './components/AppShell'
import { PhotoStrip, carouselSpeedForWidth } from './components/PhotoStrip'
import { NetworkSection } from './components/NetworkSection'
import { CtaSection } from './components/CtaSection'

// When false, the hero UFO just idle-bobs in place instead of wandering the
// hero and running the carousel abduction/sucking sequence.
const UFO_MOTION_ENABLED = false

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
