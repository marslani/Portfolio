import { useState, useEffect } from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileMenu from './MobileMenu';
import Navbar from './Navbar';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${
        menuOpen ? 'site-header--menu-open' : ''
      }`}
    >
      {/* Dynamic Animated Ambient Beam */}
      <div className="electric-ambient-glow" aria-hidden="true" />

      {/* Cyber Mesh Overlay Background */}
      <div className="header-mesh-bg" aria-hidden="true" />

      <div className="site-header__inner container-shell">
        {/* Animated Brand Mark */}
        <a href="/#top" className="brand-mark group" aria-label="Muhammad Arslan Home">
          <div className="brand-mark__dot-wrapper">
            <span className="brand-mark__dot" />
            <span className="brand-mark__electric-ring" />
            <span className="brand-mark__spark" />
          </div>
          <span className="brand-mark__text">
            Muhammad <span className="brand-mark__highlight">Arslan</span>
          </span>
         
        </a>

        {/* Desktop Navbar Component */}
        {!isMobile && <Navbar />}

        {/* Action Controls (Theme Switcher + Mobile Toggle) */}
        <div className="header-actions">
          {/* Electric Theme Switcher Button */}
          <button
            type="button"
            className="electric-btn theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            <div className="electric-btn__glow" />
            <div className="electric-btn__border-ring" />
            <div className="electric-btn__content">
              {theme === 'light' ? (
                <Moon size={19} className="theme-icon moon-icon" />
              ) : (
                <Sun size={19} className="theme-icon sun-icon" />
              )}
            </div>
          </button>

          {/* Electric Mobile Hamburger Toggle Button */}
          {isMobile && (
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
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobile && <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />}
    </header>
  );
}