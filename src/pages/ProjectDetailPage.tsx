import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ProjectDetailSkeleton } from '../Skeletons'
import { Link } from '../router'
import { AppShell } from '../components/AppShell'
import { projects, type Project } from '../data/projects'

export function ProjectDetailPage({ project }: { project: Project }) {
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
