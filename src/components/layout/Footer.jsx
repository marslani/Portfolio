import { ArrowUp, Mail, Phone } from 'lucide-react';
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
      <div className="site-footer__bg-glow" aria-hidden="true" />
      <div className="container-shell site-footer__inner">
        {/* Brand Information */}
        <div className="site-footer__brand">
          <h3 className="site-footer__title">Muhammad Arslan</h3>
          <span className="site-footer__badge">Full Stack Software Developer</span>
          
          <div className="site-footer__contact">
            <a href="tel:+923433604547" className="site-footer__contact-link">
              <span className="icon-wrapper"><Phone size={15} /></span>
              <span>0343 360 4547</span>
            </a>
            <a href="mailto:muhammadarslanm011@gmail.com" className="site-footer__contact-link">
              <span className="icon-wrapper"><Mail size={15} /></span>
              <span>muhammadarslanm011@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="site-footer__link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Icons & Back-to-Top */}
        <div className="site-footer__actions">
          <div className="site-footer__socials" aria-label="Social links">
            <a 
              href="https://github.com/marslani" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="social-btn github"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0.5C5.648 0.5 0.5 5.648 0.5 12C0.5 17.094 3.792 21.346 8.207 22.855C8.807 22.96 9.04 22.602 9.04 22.284C9.04 22.004 9.028 21.293 9.023 20.343C5.832 20.918 5.146 18.54 5.146 18.54C4.682 17.185 3.958 16.775 3.958 16.775C2.942 16.086 4.033 16.101 4.033 16.101C5.148 16.184 5.728 17.252 5.728 17.252C6.712 18.968 8.265 18.454 8.869 18.168C8.973 17.454 9.261 16.977 9.578 16.692C7.053 16.404 4.385 15.362 4.385 10.832C4.385 9.6 4.838 8.58 5.583 7.78C5.462 7.492 5.06 6.293 5.702 4.753C5.702 4.753 6.672 4.44 8.998 6.02C9.922 5.784 10.908 5.667 11.894 5.662C12.88 5.667 13.867 5.784 14.792 6.02C17.12 4.44 18.089 4.753 18.089 4.753C18.733 6.293 18.33 7.492 18.21 7.78C18.957 8.58 19.405 9.6 19.405 10.832C19.405 15.375 16.732 16.4 14.204 16.685C14.68 17.06 15.107 17.803 15.107 18.898C15.107 20.493 15.092 21.756 15.092 22.285C15.092 22.607 15.323 22.969 15.933 22.854C20.346 21.344 23.5 17.095 23.5 12C23.5 5.648 18.352 0.5 12 0.5Z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammmad-arslan/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="social-btn linkedin"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4.98 3.5C3.67 3.5 2.61 4.56 2.61 5.88C2.61 7.2 3.67 8.26 4.98 8.26C6.3 8.26 7.36 7.2 7.36 5.88C7.36 4.56 6.3 3.5 4.98 3.5ZM3.88 20.5H6.08V9.09H3.88V20.5ZM8.61 9.09V20.5H10.81V14.32C10.81 12.83 11.94 12.61 12.62 12.61C13.32 12.61 14.28 12.83 14.28 14.32V20.5H16.48V13.97C16.48 10.77 15.18 9.58 12.98 9.58C11.28 9.58 10.69 10.26 10.34 10.7H10.27V9.09H8.61Z" fill="currentColor"/>
              </svg>
            </a>
          </div>

          <a href="#top" className="site-footer__top" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="site-footer__bottom container-shell">
        <p>© {new Date().getFullYear()} Muhammad Arslan. All rights reserved.</p>
      </div>
    </footer>
  );
}