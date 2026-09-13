import { ArrowUpRight } from 'lucide-react'
import { GenericSkeleton } from '../Skeletons'
import { Link } from '../router'
import { AppShell } from '../components/AppShell'

const sparks: { top: string; left?: string; right?: string; size: number }[] = [
  { top: '6%', left: '8%', size: 40 },
  { top: '16%', right: '10%', size: 58 },
  { top: '30%', left: '5%', size: 34 },
  { top: '52%', right: '4%', size: 44 },
  { top: '65%', left: '3%', size: 36 },
  { top: '76%', right: '6%', size: 42 },
  { top: '87%', right: '10%', size: 50 },
  { top: '97%', left: '9%', size: 30 },
]

export function SupportPage() {
  const pillars = [
    {
      title: 'Nonprofit Impact',
      copy: "Your support, whether cash or credits for tools we already run on, covers the software, hosting, and travel we need to build and deploy real tools for local nonprofits, like Mending Kids' medical inventory system or the Center for Restorative Justice Works' donation allocation portal.",
    },
    {
      title: 'Student Development',
      copy: 'It also funds the recruiting, mentorship, and team events that give our members their first real client project, turning them into engineers and designers who ship things that matter.',
    },
  ]

  return <AppShell skeleton={<GenericSkeleton />}>
    <div className="support-page">
      <div className="support-background" aria-hidden="true">
        {sparks.map((s, i) => <span
          key={i}
          className="support-spark"
          style={{ top: s.top, left: s.left, right: s.right, fontSize: s.size }}
        >✦</span>)}
      </div>

      <section className="page-hero">
        <h1>Support Nova</h1>
        <p>Nova runs on the people who back us. We've partnered with 18 LA nonprofits and built a team of 40+ UCLA students who use their skills to build real software for causes they care about, from a medical inventory system for Mending Kids to a distribution system supporting thousands of volunteers delivering aid across LA.</p>
        <div className="cta-actions support-hero-actions">
          <a className="button button-outline" href="https://mail.google.com/mail/?view=cm&fs=1&to=novaforgood@gmail.com" target="_blank" rel="noopener noreferrer">Sponsor or Donate <ArrowUpRight size={15}/></a>
        </div>
      </section>

      <section className="section-shell support-pillars">
        <h2 className="support-pillars-heading">What Your Support Funds</h2>
        <div className="support-pillars-layout">
          <img className="support-pillars-photo" src="/assets/figma/support/wags-walks-team.png" alt="The Nova team behind the Wags & Walks foster onboarding tracker" />
          <div className="support-pillars-cards">
            {pillars.map(pillar => <article key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>)}
          </div>
        </div>
        <p className="support-pillars-footnote">A gift, cash or in-kind, might cover a software subscription, transportation to a nonprofit site visit, or the team's hoodies for outreach events. Every contribution goes to something specific.</p>
      </section>

      <section className="cta" id="interested">
        <div>
          <h2>Sponsor or Donate</h2>
          <p>Companies get branding on our site, clothing, and materials, plus direct access to UCLA engineering and design students through our workshops and events. That support can be a cash sponsorship, or software credits and subscriptions for the tools we build with: hosting, dev tools, design software, whatever you make. Individuals can give any amount, one-time or ongoing. Either way, email us and we'll follow up with details.</p>
          <div className="cta-actions">
            <a className="button button-solid" href="https://mail.google.com/mail/?view=cm&fs=1&to=novaforgood@gmail.com" target="_blank" rel="noopener noreferrer">Contact Us <ArrowUpRight size={15}/></a>
            <Link className="button button-outline" href="/about">About Us</Link>
          </div>
        </div>
      </section>
    </div>
  </AppShell>
}
