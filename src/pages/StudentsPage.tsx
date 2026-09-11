import { StudentsSkeleton } from '../Skeletons'
import { AppShell } from '../components/AppShell'

export function StudentsPage() {
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
