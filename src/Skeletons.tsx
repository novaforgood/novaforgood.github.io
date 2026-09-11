import type { Project } from './data/projects'

export function GenericSkeleton() {
  return <div className="skel-generic" style={{ padding: '96px 24px', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
    <div className="skel-line skel-line-heading" style={{ width: 240 }} />
    <div className="skel-line" style={{ width: 360 }} />
    <div className="skel-block" style={{ width: '100%', maxWidth: 960, height: 320 }} />
  </div>
}

export function LandingSkeleton() {
  return <div className="landing-page">
    <section className="landing-hero">
      <div className="landing-hero-copy">
        <div className="skel-line skel-line-heading" style={{ width: 180, margin: '0 auto 16px' }} />
        <div className="skel-line skel-line-heading" style={{ width: 280, margin: '0 auto 16px' }} />
        <div className="skel-line" style={{ width: 420, margin: '0 auto' }} />
        <div className="skel-block" style={{ width: 180, height: 44, margin: '24px auto 0' }} />
      </div>
    </section>

    <section className="landing-gallery">
      <div className="landing-photo-rows">
        <div className="landing-carousel"><div className="skel-block" style={{ width: '100%', height: 140 }} /></div>
        <div className="landing-carousel"><div className="skel-block" style={{ width: '100%', height: 140 }} /></div>
      </div>
      <div className="landing-about">
        <div>
          <div className="skel-line skel-line-heading" style={{ width: 200 }} />
          <div className="skel-line" />
          <div className="skel-line skel-line-short" />
        </div>
        <div className="skel-block" style={{ width: 140, height: 40 }} />
      </div>
      <div className="landing-carousel landing-bottom-strip"><div className="skel-block" style={{ width: '100%', height: 140 }} /></div>
    </section>

    <section className="landing-projects">
      <div className="landing-section-intro">
        <div className="skel-line skel-line-heading" style={{ width: 160 }} />
        <div className="skel-line" />
      </div>
      <div className="landing-project-list">
        {[0, 1, 2].map(index => <div className="landing-project" key={index}>
          <div className="skel-block" style={{ width: '100%', height: 200 }} />
          <div>
            <div className="skel-line skel-line-heading" style={{ width: '70%' }} />
            <div className="skel-line skel-line-short" />
            <div className="skel-line" />
          </div>
        </div>)}
      </div>
    </section>

    <section className="landing-network">
      <div className="landing-section-intro">
        <div className="skel-line skel-line-heading" style={{ width: 180 }} />
        <div className="skel-line" />
      </div>
      <div className="landing-partners">
        {Array.from({ length: 12 }, (_, index) => <div className="skel-block" key={index} style={{ width: 90, height: 50 }} />)}
      </div>
    </section>

    <section className="landing-cta">
      <div className="skel-line skel-line-heading" style={{ width: 200, margin: '0 auto 24px' }} />
      <div className="cta-actions">
        <div className="skel-block" style={{ width: 150, height: 40 }} />
        <div className="skel-block" style={{ width: 150, height: 40 }} />
      </div>
    </section>
  </div>
}

export function WorkSkeleton() {
  return <div className="work-page">
    <section className="work-content">
      <header className="work-intro">
        <div className="skel-line skel-line-heading" style={{ width: 160, margin: '0 auto 16px' }} />
        <div className="skel-line" style={{ margin: '0 auto', width: '70%' }} />
      </header>
      <div className="work-featured-list">
        {[0, 1, 2].map(index => <div className="work-featured-project" key={index}>
          <div className="work-featured-image"><div className="skel-block" style={{ width: '100%', height: 220 }} /></div>
          <div className="work-featured-copy">
            <div>
              <div className="skel-line skel-line-heading" style={{ width: '60%' }} />
              <div className="skel-line skel-line-short" />
            </div>
            <div className="skel-line" />
          </div>
        </div>)}
      </div>
      <section className="work-more-projects">
        <div className="skel-line skel-line-heading" style={{ width: 160 }} />
        <div className="work-more-list">
          {Array.from({ length: 13 }, (_, index) => <div className="work-more-row work-more-row-static" key={index}>
            <div className="skel-line skel-line-short" />
            <div className="skel-line" />
          </div>)}
        </div>
      </section>
    </section>
  </div>
}

export function AboutSkeleton() {
  return <div className="about-page">
    <section className="about-story">
      <div className="skel-line skel-line-heading" style={{ width: 200, margin: '0 auto 32px' }} />
      <div className="about-story-list">
        {[0, 1, 2].map(index => <article className={index % 2 ? 'reverse' : ''} key={index}>
          <div>
            <div className="skel-line" />
            <div className="skel-line" />
            <div className="skel-line skel-line-short" />
          </div>
          <div className="skel-block" style={{ width: '100%', height: 260 }} />
        </article>)}
      </div>
    </section>
    <div className="about-actions">
      <div className="skel-block" style={{ width: 150, height: 40 }} />
      <div className="skel-block" style={{ width: 150, height: 40 }} />
    </div>
  </div>
}

function SkelTeamMember() {
  return <article className="team-member">
    <div className="skel-block" style={{ width: '100%', aspectRatio: '1 / 1' }} />
    <div className="skel-line skel-line-short" style={{ margin: '12px auto 4px' }} />
    <div className="skel-line skel-line-short" style={{ margin: '0 auto' }} />
  </article>
}

export function TeamSkeleton() {
  return <div className="team-page">
    <section className="team-content">
      <div className="skel-line skel-line-heading" style={{ width: 240, margin: '0 auto 16px' }} />
      <div className="skel-line" style={{ margin: '0 auto 32px', width: '60%' }} />
      <div className="skel-line skel-line-heading" style={{ width: 140 }} />
      <div className="team-grid">{Array.from({ length: 8 }, (_, index) => <SkelTeamMember key={index} />)}</div>
      <div className="skel-line skel-line-heading" style={{ width: 140 }} />
      <div className="team-grid">{Array.from({ length: 26 }, (_, index) => <SkelTeamMember key={index} />)}</div>
      <section className="team-join">
        <div>
          <div className="skel-line skel-line-heading" style={{ width: 140 }} />
          <div className="skel-line" />
          <div className="skel-block" style={{ width: 180, height: 40 }} />
        </div>
        <div className="skel-block" style={{ width: '100%', height: 220 }} />
      </section>
      <section className="team-alumni">
        <div className="skel-line skel-line-heading" style={{ width: 140 }} />
        <ul aria-hidden="true">{Array.from({ length: 67 }, (_, index) => <li key={index}><div className="skel-line skel-line-short" /></li>)}</ul>
      </section>
    </section>
  </div>
}

export function NonprofitsSkeleton() {
  return <div className="nonprofits-page">
    <section className="split-hero section-shell">
      <div className="skel-line skel-line-heading" style={{ width: 220 }} />
      <div>
        <div className="skel-line" />
        <div className="skel-line" />
        <div className="skel-line skel-line-short" />
        <div className="skel-block" style={{ width: 150, height: 40, marginTop: 16 }} />
      </div>
      <div className="skel-block" style={{ width: '100%', height: 260 }} />
    </section>
    <section className="looking-for section-shell">
      <div className="skel-line skel-line-heading" style={{ width: 180 }} />
      <div className="criteria-grid">
        {[0, 1, 2].map(index => <article key={index}>
          <div className="skel-block" style={{ width: '100%', height: 140 }} />
          <div className="skel-line skel-line-heading" style={{ width: '60%' }} />
          <div className="skel-line" />
        </article>)}
      </div>
    </section>
    <section className="process section-shell">
      <div className="skel-line skel-line-heading" style={{ width: 200 }} />
      <div className="timeline">
        {[0, 1, 2, 3].map(index => <article key={index}>
          <div className="skel-block" style={{ width: 32, height: 32, borderRadius: '50%' }} />
          <div className="skel-line skel-line-short" />
          <div className="skel-line" />
        </article>)}
      </div>
    </section>
    <section className="testimonials section-shell">
      <div className="skel-line skel-line-heading" style={{ width: 220 }} />
      <div className="testimonial-stack">
        {[0, 1].map(index => <blockquote key={index}>
          <div className="skel-line" />
          <div className="skel-line" />
          <div className="skel-line skel-line-short" />
        </blockquote>)}
      </div>
    </section>
    <section className="landing-network">
      <div className="landing-section-intro">
        <div className="skel-line skel-line-heading" style={{ width: 180 }} />
        <div className="skel-line" />
      </div>
      <div className="landing-partners">
        {Array.from({ length: 12 }, (_, index) => <div className="skel-block" key={index} style={{ width: 90, height: 50 }} />)}
      </div>
    </section>
    <section className="nonprofit-cta">
      <div className="skel-line skel-line-heading" style={{ width: 200, margin: '0 auto 24px' }} />
      <div>
        <div className="skel-block" style={{ width: 150, height: 40 }} />
        <div className="skel-block" style={{ width: 150, height: 40 }} />
        <div className="skel-block" style={{ width: 150, height: 40 }} />
      </div>
    </section>
  </div>
}

export function StudentsSkeleton() {
  return <div className="students-page">
    <section className="page-hero">
      <div className="skel-line skel-line-heading" style={{ width: 160, margin: '0 auto' }} />
    </section>
    <section className="students section-shell">
      <div className="skel-line skel-line-heading" style={{ width: 200, margin: '0 auto' }} />
      <div className="skel-line skel-line-short" style={{ margin: '16px auto' }} />
      <div className="skel-line" style={{ margin: '0 auto 32px', width: '70%' }} />
      <div className="event-list">
        {Array.from({ length: 6 }, (_, index) => <article key={index}>
          <div className="skel-line skel-line-short" />
          <div className="skel-line skel-line-short" />
        </article>)}
      </div>
    </section>
    <section className="reflections section-shell">
      <div className="skel-line skel-line-heading" style={{ width: 140 }} />
      <div className="skel-line skel-line-short" />
      <div className="reflection-grid">
        {Array.from({ length: 5 }, (_, index) => <article className={index % 2 ? 'reverse' : ''} key={index}>
          <div>
            <div className="skel-line" />
            <div className="skel-line" />
            <div className="skel-line skel-line-short" />
          </div>
          <div className="skel-block" style={{ width: '100%', height: 200 }} />
        </article>)}
      </div>
    </section>
  </div>
}

export function ProjectDetailSkeleton({ project }: { project: Project }) {
  return <div>
    <section className={`figma-detail-hero project-${project.slug}`}>
      <div className="figma-detail-gradient">
        <div className="skel-line skel-line-heading" style={{ width: 260, margin: '0 auto 24px' }} />
        <div className="figma-laptop" />
      </div>
    </section>
    <section className="figma-case-study">
      <div className="figma-case-inner">
        <div className="figma-meta">
          <div className="skel-line skel-line-short" />
          <div className="skel-line" />
          <div>
            <div className="skel-line skel-line-short" />
            <ul>{project.teamMembers.map((_, index) => <li key={index}><div className="skel-line skel-line-short" /></li>)}</ul>
          </div>
        </div>
        <section className="figma-copy-block">
          <div className="skel-line skel-line-heading" style={{ width: 220 }} />
          <div className="skel-line" />
          <div className="skel-line" />
        </section>
        <section className="figma-problem">
          <div className="skel-line skel-line-heading" style={{ width: 180 }} />
          <div className="skel-line" />
          <div className="skel-line skel-line-short" />
        </section>
        <section className="figma-problem figma-solution">
          <div className="skel-line skel-line-heading" style={{ width: 180 }} />
          <div className="skel-line" />
        </section>
        <section className="figma-copy-block figma-features">
          <div className="skel-line skel-line-heading" style={{ width: 180 }} />
          <div className="figma-solution-grid">
            {project.solutions.map((_, index) => <article key={index}>
              <div className="skel-line skel-line-heading" style={{ width: '50%' }} />
              <div className="skel-line" />
            </article>)}
          </div>
        </section>
        {project.testimonial ? <section className="figma-impact">
          <div className="skel-line skel-line-heading" style={{ width: 220 }} />
          {project.metrics ? <div className="metric-grid">
            {project.metrics.map((_, index) => <article key={index}>
              <div className="skel-line skel-line-heading" style={{ width: 80, margin: '0 auto' }} />
              <div className="skel-line skel-line-short" style={{ margin: '0 auto' }} />
            </article>)}
          </div> : null}
          <div className="figma-testimonial">
            <div className="skel-line skel-line-heading" style={{ width: 180 }} />
            <div className="skel-line" />
          </div>
        </section> : null}
        <section className="figma-team">
          <div className="skel-line skel-line-heading" style={{ width: 140 }} />
          {project.teamImages.map((src, index) => <div className="skel-block" style={{ width: '100%', height: 300, marginTop: index ? 32 : 0 }} key={src} />)}
        </section>
      </div>
    </section>
  </div>
}
