import React, { useState, useEffect } from 'react';
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
  { label: 'Home', href: '/#top', icon: Home, highlight: false },
  { label: 'About', href: '/#about', icon: User, highlight: false },
  { label: 'Skills', href: '/#skills', icon: Cpu, highlight: false },
  { label: 'Workflow', href: '/#workflow', icon: Zap, highlight: false },
  { label: 'Experience', href: '/#experience', icon: Zap, highlight: false },
  { label: 'Architecture', href: '/#architecture', icon: Zap, highlight: false },
  { label: 'Projects', href: '/#projects', icon: Briefcase, highlight: false },
  { label: 'FAQ', href: '/#faq', icon: Zap, highlight: false },
  { label: 'Contact', href: '/#contact', icon: Mail, highlight: true },
];

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.04, 0.62, 0.23, 0.98],
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: [0.04, 0.62, 0.23, 0.98],
      staggerChildren: 0.06,
      delayChildren: 0.05
    }
  }
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -15, scale: 0.96 },
  open: { opacity: 1, x: 0, scale: 1 }
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${
        menuOpen ? 'site-header--menu-open' : ''
      }`}
    >
      {/* Dynamic Animated Ambient Light Beam */}
      <div className="electric-ambient-glow" aria-hidden="true" />

      {/* Cyber Mesh Overlay Background */}
      <div className="header-mesh-bg" aria-hidden="true" />

      <div className="site-header__inner container-shell">
        {/* Brand Logo */}
        <a href="/#top" className="brand-mark">
          <div className="brand-mark__dot-wrapper">
            <span className="brand-mark__dot" />
            <span className="brand-mark__electric-ring" />
            <span className="brand-mark__spark" />
          </div>
          <span className="brand-mark__text">
            Arslan<span className="brand-mark__highlight">.dev</span>
          </span>
        </a>

        {/* Desktop Navbar Links */}
        <nav className="desktop-nav" aria-label="Desktop Navigation">
          <ul className="desktop-nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`desktop-nav-link ${
                    item.highlight ? 'desktop-nav-link--cta' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls (Mobile Toggle) */}
        <div className="header-actions">
          {/* Mobile Menu Hamburger Toggle */}
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
                      className={`cyber-nav-item ${
                        item.highlight ? 'cyber-nav-item--cta' : ''
                      }`}
                      onClick={handleNavClick}
                    >
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