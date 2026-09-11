import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from '../router'
import { AppShell } from '../components/AppShell'
import { ArchiveBody } from '../components/ArchiveBody'
import { ArchiveDetailSkeleton } from '../Skeletons'
import { archiveProjects } from '../data/archiveProjects'
import type { ArchiveProject } from '../data/archive'

export function ArchiveProjectPage({ project }: { project: ArchiveProject }) {
  const index = archiveProjects.findIndex(item => item.slug === project.slug)
  const previous = archiveProjects[(index + archiveProjects.length - 1) % archiveProjects.length]
  const next = archiveProjects[(index + 1) % archiveProjects.length]

  return <AppShell skeleton={<ArchiveDetailSkeleton />}>
    <div className="archive-page">
      <section className="archive-hero">
        <img className="detail-deco detail-star detail-star-left" src="/assets/figma/details/star2.png" alt="" />
        <img className="detail-deco detail-star detail-star-right" src="/assets/figma/details/star2.png" alt="" />
        <div className="archive-hero-copy">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      </section>

      <section className="archive-content">
        <div className="archive-meta">
          <p><strong>Nonprofit:</strong> {project.nonprofit.url
            ? <a href={project.nonprofit.url} target="_blank" rel="noopener noreferrer">{project.nonprofit.name} <ArrowUpRight size={13} /></a>
            : project.nonprofit.name}</p>
          {project.technology.length ? <p><strong>Tech Stack:</strong> {project.technology.join(', ')}</p> : null}
          {project.team.length ? <div><strong>Team Members:</strong><ul>{project.team.map(member => <li key={member}>{member}</li>)}</ul></div> : null}
        </div>

        <ArchiveBody blocks={project.body} />

        <nav className="figma-detail-nav" aria-label="Project navigation">
          <div>
            <Link className="button button-outline" href={`/work/${previous.slug}`}><ArrowLeft size={16} /> Previous Project</Link>
            <Link className="button button-outline" href={`/work/${next.slug}`}>Next Project <ArrowRight size={16} /></Link>
          </div>
          <Link className="detail-all-projects" href="/work">View All Projects</Link>
        </nav>
      </section>
    </div>
  </AppShell>
}
