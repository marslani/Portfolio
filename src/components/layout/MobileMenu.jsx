import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Cpu, 
  Briefcase, 
  Mail, 
  Zap,
  X 
} from 'lucide-react';
import './MobileMenu.css';

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

const menuVariants = {
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
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: -20, scale: 0.95 },
  open: { opacity: 1, x: 0, scale: 1 }
};

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="cyber-mobile-menu"
        >
          {/* Background Glow */}
          <div className="cyber-bg-glow" />
         

          <nav className="cyber-menu-nav" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} variants={itemVariants}>
                  <a 
                    href={item.href} 
                    className={`cyber-nav-item ${item.highlight ? 'cyber-nav-item--cta' : ''}`}
                    onClick={onClose}
                  >
                    <div className="cyber-nav-content">
                      <div className="cyber-icon-box">
                        <Icon size={20} className="cyber-icon" />
                      </div>
                      <span className="cyber-nav-label">{item.label}</span>
                    </div>

                    {/* Hover Effect Layer */}
                    <span className="cyber-hover-indicator" />
                    <div className="cyber-glow-overlay" />
                  </a>
                </motion.div>
              );
            })}
          </nav>

          {/* Bottom Border Accent Line */}
          <div className="cyber-footer-divider" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}