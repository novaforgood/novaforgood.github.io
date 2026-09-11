import { Link } from '../router'
import { Logo } from './Logo'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  return <footer>
    <div className="footer-brand"><Logo/><strong>NOVA, TECH FOR GOOD</strong></div>
    <div className="footer-links">
      <Link href="/about">About</Link>
      <Link href="/work">Work</Link>
      <Link href="/team">Our Team</Link>
      <Link href="/students">For Students</Link>
    </div>
    <small>© 2026 nova for good | Last updated Sept 11, 2026</small>
    <div className="footer-socials" aria-label="Social links">
      <a href="https://www.instagram.com/novaforgood" target="_blank" rel="noreferrer" aria-label="Nova on Instagram"><SocialIcon name="instagram" /></a>
      <a href="https://github.com/novaforgood" target="_blank" rel="noreferrer" aria-label="Nova on GitHub"><SocialIcon name="github" /></a>
    </div>
  </footer>
}
