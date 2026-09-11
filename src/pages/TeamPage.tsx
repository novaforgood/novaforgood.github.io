import { ArrowUpRight } from 'lucide-react'
import { TeamSkeleton } from '../Skeletons'
import { Link } from '../router'
import { AppShell } from '../components/AppShell'
import { boardMembers, generalMembers, alumniMembers, teamPhotos, teamPortraits } from '../data/site'

function TeamMember({ member, index }: { member: string[]; index: number }) {
  return <article className="team-member">
    <img src={teamPortraits[index]} onError={event => { event.currentTarget.src = teamPhotos[index % teamPhotos.length] }} alt={`${member[0]}, ${member[1]}`} />
    <h3>{member[0]}</h3><p>{member[1]}</p>
    <a className="linkedin-mark" href="https://www.linkedin.com/company/nova-tech-for-good/" target="_blank" rel="noreferrer" aria-label={`${member[0]} on LinkedIn`}>in</a>
  </article>
}

export function TeamPage() {
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
