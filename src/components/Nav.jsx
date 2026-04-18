import { useState, useEffect } from 'react';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#home" className="nav__logo"><img src='https://res.cloudinary.com/dyfqal83h/image/upload/v1776471631/Layer_1-3_fwkqfv.png' alt='logo'/></a>

      <button
        className={`nav__burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        {['Home', 'Services', 'Portfolio', 'Contact'].map(item => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
