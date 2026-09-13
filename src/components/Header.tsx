import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from '../router'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const links = [['About', '/about'], ['Our Work', '/work'], ['Our Team', '/team'], ['For Students', '/students'], ['For Nonprofits', '/nonprofits'], ['Support Us', '/support']]

  return <header className="header">
    <nav className="nav" aria-label="Main navigation">
      <Logo />
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => <Link key={href} href={href} onClick={close}>{label}</Link>)}
        <a className="button button-solid" href="https://mail.google.com/mail/?view=cm&fs=1&to=novaforgood@gmail.com" target="_blank" rel="noopener noreferrer">Contact Us <ArrowUpRight size={15}/></a>
      </div>
    </nav>
  </header>
}
