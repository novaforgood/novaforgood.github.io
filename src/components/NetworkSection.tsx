import { landingPartners } from '../data/site'

export function NetworkSection() {
  return <section className="landing-network">
    <div className="landing-section-intro"><h2>Our Network</h2><p>We wouldn't be able to do what we love alone. We're grateful for these organizations who have advised us and given us a hand in better understanding the social sector. Interested in becoming a partner or advisor? <a href="https://forms.gle/g6gmjG4uYwL1AP5T9" target="_blank" rel="noreferrer"><u>Let us know</u></a> — we'd love to talk with you!</p></div>
    <div className="landing-partners">{landingPartners.map(partner => partner.url
      ? <a key={partner.src} href={partner.url} target="_blank" rel="noopener noreferrer" aria-label={partner.name}><img src={partner.src} alt={partner.name} /></a>
      : <img key={partner.src} src={partner.src} alt={partner.name} />)}</div>
  </section>
}
