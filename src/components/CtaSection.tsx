import { ArrowUpRight } from 'lucide-react'
import { Link } from '../router'

export function CtaSection() {
  return <section className="landing-cta" id="nonprofits"><h2>Interested?</h2><div className="cta-actions"><Link className="button button-outline" href="/nonprofits">Work With Us <ArrowUpRight size={12}/></Link><Link className="button button-outline" href="/students">Join Our Team <ArrowUpRight size={12}/></Link></div></section>
}
