import { ArrowUpRight } from 'lucide-react'
import { NonprofitsSkeleton } from '../Skeletons'
import { Link } from '../router'
import { AppShell } from '../components/AppShell'
import { NetworkSection } from '../components/NetworkSection'

export function NonprofitsPage() {
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
