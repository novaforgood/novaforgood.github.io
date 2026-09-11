import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { LandingAbduction } from '../LandingAbduction'
import { LandingSkeleton } from '../Skeletons'
import { Link } from '../router'
import { AppShell } from '../components/AppShell'
import { PhotoStrip, carouselSpeedForWidth } from '../components/PhotoStrip'
import { NetworkSection } from '../components/NetworkSection'
import { CtaSection } from '../components/CtaSection'
import { landingPhotos } from '../data/site'
import { projects } from '../data/projects'

// When false, the hero UFO just idle-bobs in place instead of wandering the
// hero and running the carousel abduction/sucking sequence.
const UFO_MOTION_ENABLED = false

export function LandingPage() {
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
