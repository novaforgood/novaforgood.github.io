import { ArrowUpRight } from 'lucide-react'
import { WorkSkeleton } from '../Skeletons'
import { Link } from '../router'
import { AppShell } from '../components/AppShell'
import { projects } from '../data/projects'
import { moreProjects } from '../data/site'

export function WorkPage() {
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
