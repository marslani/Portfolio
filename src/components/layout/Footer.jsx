import { ArrowUp, Globe, Mail } from 'lucide-react';
import './Footer.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__title">Muhammad Arslan</p>
          <p>Full Stack Software Developer</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="site-footer__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__socials" aria-label="Social links">
          <a href="mailto:muhammadarslan.dev@gmail.com" aria-label="Email">
            <Mail size={16} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Globe size={16} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Globe size={16} />
          </a>
        </div>

        <a href="#top" className="site-footer__top" aria-label="Back to top">
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
