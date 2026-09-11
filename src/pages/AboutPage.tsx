import { ArrowUpRight } from 'lucide-react'
import { AboutSkeleton } from '../Skeletons'
import { Link } from '../router'
import { AppShell } from '../components/AppShell'
import { teamPhotos } from '../data/site'

export function AboutPage() {
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
