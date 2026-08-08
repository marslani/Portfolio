import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Cpu, 
  Briefcase, 
  Mail, 
  Zap,
  ChevronRight
} from 'lucide-react';
import './Header.css';

const navItems = [
  { label: 'Home', href: '#home', icon: Home, highlight: false },
  { label: 'About', href: '#about', icon: User, highlight: false },
  { label: 'Skills', href: '#skills', icon: Cpu, highlight: false },
  { label: 'Experience', href: '#experience', icon: Briefcase, highlight: false },
  { label: 'Workflow', href: '#workflow', icon: Zap, highlight: false },
  { label: 'Architecture', href: '#architecture', icon: Zap, highlight: false },
  { label: 'Projects', href: '#projects', icon: Briefcase, highlight: false },
  { label: 'FAQ', href: '#faq', icon: Zap, highlight: false },
  { label: 'Contact', href: '#contact', icon: Mail, highlight: true },
];

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -20, scale: 0.95 },
  open: { opacity: 1, x: 0, scale: 1 }
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Header styling context
      setScrolled(currentScrollY > 20);

      // Mobile menu open rehne par header visible rahega
      if (menuOpen) {
        setVisible(true);
        return;
      }

      // SCROLL LOGIC FIXED:
      // Scroll Down -> HIDE Header
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setVisible(false);
      } 
      // Scroll Up -> SHOW Header
      else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      // Page Top pe hamesha visible
      if (currentScrollY <= 10) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const scrollToSection = (hash) => {
    if (!hash) return;
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
    if (!el) return;

    const headerEl = document.querySelector('.site-header');
    const headerHeight = headerEl ? Math.ceil(headerEl.getBoundingClientRect().height) : 0;
    const gap = 16;
    const elTop = window.scrollY + el.getBoundingClientRect().top;
    const target = Math.max(0, elTop - headerHeight - gap);
    window.scrollTo({ top: target, behavior: 'smooth' });

    try {
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    } catch (e) {
      // ignore
    }

    el.classList.remove('section-highlight');
    void el.offsetWidth;
    el.classList.add('section-highlight');
    window.setTimeout(() => el.classList.remove('section-highlight'), 2000);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const shouldDelay = menuOpen;
    setMenuOpen(false);

    const doScroll = () => {
      scrollToSection(href);
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', href);
      } else {
        window.location.hash = href;
      }
    };

    if (shouldDelay) {
      setTimeout(doScroll, 300);
    } else {
      doScroll();
    }
  };

  return (
    <header
      className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${
        menuOpen ? 'site-header--menu-open' : ''
      } ${!visible ? 'site-header--hidden' : 'site-header--visible'}`}
    >
      {/* Top Animated Laser Beam */}
      <div className="electric-ambient-glow" aria-hidden="true" />

      {/* Futuristic Mesh Glow Layer */}
      <div className="header-mesh-bg" aria-hidden="true" />

      <div className="site-header__inner">
        {/* Brand Logo */}
        <a href="/#top" onClick={(e) => handleNavClick(e, '#top')} className="brand-mark">
          <div className="brand-mark__dot-wrapper">
            <span className="brand-mark__dot" />
            <span className="brand-mark__electric-ring" />
            <span className="brand-mark__spark" />
          </div>
          <span className="brand-mark__text">
            Arslan
          </span>
        </a>

        {/* Desktop Navbar */}
        <nav className="desktop-nav" aria-label="Desktop Navigation">
          <ul className="desktop-nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`desktop-nav-link ${
                    item.highlight ? 'desktop-nav-link--cta' : ''
                  }`}
                >
                  <span className="desktop-nav-link__text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="header-actions">
          <button
            type="button"
            className={`electric-btn menu-button ${menuOpen ? 'is-active' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className="electric-btn__glow" />
            <div className="electric-btn__border-ring" />
            <div className="hamburger-box">
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
              <span className="hamburger-line line-3" />
            </div>
          </button>
        </div>
      </div>

      {/* Embedded Mobile Navigation Drawer */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="cyber-mobile-menu"
          >
            <div className="cyber-bg-glow" />

            <nav className="cyber-menu-nav" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.label} variants={mobileItemVariants}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`cyber-nav-item ${
                        item.highlight ? 'cyber-nav-item--cta' : ''
                      }`}
                    >
                      <div className="cyber-nav-content">
                        <div className="cyber-icon-box">
                          <Icon size={17} className="cyber-icon" />
                        </div>
                        <span className="cyber-nav-label">{item.label}</span>
                      </div>
                      <ChevronRight size={16} className="cyber-chevron" />
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            <div className="cyber-footer-divider" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}