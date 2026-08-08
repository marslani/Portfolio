import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Home,
  User,
  Cpu,
  Briefcase,
  Mail,
  Zap,
  X,
  Menu
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
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98], when: 'afterChildren' }
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98], staggerChildren: 0.06, delayChildren: 0.05 }
  }
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -15, scale: 0.96 },
  open: { opacity: 1, x: 0, scale: 1 }
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const threshold = 8;
    lastScrollY.current = window.scrollY || 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      // always show near top
      if (currentY <= 20) {
        setHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      const delta = currentY - lastScrollY.current;
      if (Math.abs(delta) > threshold) {
        // hide on scroll down, show on scroll up
        if (delta > 0) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        lastScrollY.current = currentY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (hash) => {
    if (!hash) return;
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
    if (!el) return;

    // compute header height dynamically
    const headerEl = document.querySelector('.site-header');
    const headerHeight = headerEl ? Math.ceil(headerEl.getBoundingClientRect().height) : 0;
    const gap = 12;
    const elTop = window.scrollY + el.getBoundingClientRect().top;
    const target = Math.max(0, elTop - headerHeight - gap);

    window.scrollTo({ top: target, behavior: 'smooth' });

    // Safety: after smooth scroll completes (or while it's running), re-check
    // and adjust if the section is still partially hidden (timing/platform issues)
    window.setTimeout(() => {
      try {
        const postRect = el.getBoundingClientRect();
        const headerEl2 = document.querySelector('.site-header');
        const headerH2 = headerEl2 ? Math.ceil(headerEl2.getBoundingClientRect().height) : headerHeight;
        const desiredTop = headerH2 + gap;
        if (postRect.top < desiredTop) {
          const adjust = postRect.top - desiredTop;
          window.scrollBy({ top: adjust, behavior: 'smooth' });
        }
      } catch (e) {
        // ignore
      }
    }, 450);

    try {
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    } catch (e) {
      // ignore
    }

    // section container highlight
    el.classList.remove('section-highlight');
    // restart animation
    // eslint-disable-next-line no-unused-expressions
    void el.offsetWidth;
    el.classList.add('section-highlight');
    window.setTimeout(() => el.classList.remove('section-highlight'), 2000);

    // blink the first heading inside the section
    try {
      const title = el.querySelector('h1, h2, h3, h4, h5');
      if (title) {
        title.classList.remove('section-title-highlight');
        // eslint-disable-next-line no-unused-expressions
        void title.offsetWidth;
        title.classList.add('section-title-highlight');
        window.setTimeout(() => title.classList.remove('section-title-highlight'), 1600);
      }
    } catch (err) {
      // ignore
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const shouldDelay = menuOpen;
    setMenuOpen(false);

    const doScroll = () => {
      scrollToSection(href);
      if (history && history.pushState) {
        history.pushState(null, '', href);
      } else {
        window.location.hash = href;
      }
    };

    if (shouldDelay) {
      // allow mobile menu to close first
      setTimeout(doScroll, 800);
    } else {
      doScroll();
    }
  };

  return (
    <header
      className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${
        menuOpen ? 'site-header--menu-open' : ''
      } ${hidden && !menuOpen ? 'site-header--hidden' : 'site-header--visible'}`}
    >
      <div className="electric-ambient-glow" aria-hidden="true" />
      <div className="header-mesh-bg" aria-hidden="true" />

      <div className="site-header__inner container-shell">
        <a href="/#top" className="brand-mark" onClick={(e) => handleNavClick(e, '#top')}>
          <div className="brand-mark__dot-wrapper">
            <span className="brand-mark__dot" />
            <span className="brand-mark__electric-ring" />
            <span className="brand-mark__spark" />
          </div>
          <span className="brand-mark__text">Arslan</span>
        </a>

        <nav className="desktop-nav" aria-label="Desktop Navigation">
          <ul className="desktop-nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`desktop-nav-link ${item.highlight ? 'desktop-nav-link--cta' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className={`electric-btn menu-button ${menuOpen ? 'is-active' : ''}`}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
                    <a href={item.href} onClick={(e) => handleNavClick(e, item.href)} className={`cyber-nav-item ${item.highlight ? 'cyber-nav-item--cta' : ''}`}>
                      <div className="cyber-nav-content">
                        <div className="cyber-icon-box">
                          <Icon size={18} className="cyber-icon" />
                        </div>
                        <span className="cyber-nav-label">{item.label}</span>
                      </div>

                      <span className="cyber-hover-indicator" />
                      <div className="cyber-glow-overlay" />
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
