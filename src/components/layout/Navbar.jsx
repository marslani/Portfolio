import React, { useState } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '/#top' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Work', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="main-nav" aria-label="Main navigation">
      {/* Brand Logo */}
    

      {/* Mobile Menu Toggle */}
      <button 
        className="nav-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href} 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}