import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Globe,
  Mail,
  MapPin,
  MonitorSmartphone,
  Rocket,
  Sparkles,
  Users,
  Smartphone,
  Monitor,
  X,
  Cpu,
  Server,
  Layers,
  Phone
} from 'lucide-react';

import './HomePage.css';
import { experienceData } from '../data/experienceData';

/* Data Structures */

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Web Application',
    category: 'Web',
    accent: '#2563eb',

    shortDescription:
      'Responsive React e-commerce application with product browsing, category-based navigation, shopping workflows, and a structured API-driven architecture.',

    problem:
      'The application required a responsive and user-friendly shopping experience with clear product discovery, reusable interface components, and reliable communication with backend services.',

    approach:
      'Developed the frontend with React using reusable components, structured application state, responsive layouts, API integration, and performance-conscious rendering patterns.',

    architecture:
      'React Application → REST API → Node.js / Express Backend → MongoDB',

    outcome:
      'Delivered a responsive e-commerce experience with a maintainable component structure, reusable UI patterns, and a consistent experience across desktop, tablet, and mobile devices.',

    stack: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'CSS'
    ]
  },

  {
    id: 2,
    title: 'Cross-Platform Mobile Application',
    category: 'Mobile',
    accent: '#7c3aed',

    shortDescription:
      'React Native mobile application designed for Android and iOS with reusable components, API integration, and a consistent cross-platform experience.',

    problem:
      'The application required a single mobile codebase that could provide a consistent user experience across Android and iOS while keeping the codebase maintainable.',

    approach:
      'Built the application with React Native using reusable components, structured navigation, API integration, application state management, and platform-aware UI patterns.',

    architecture:
      'React Native Application → API Layer → Backend Services → Database',

    outcome:
      'Created a maintainable cross-platform mobile application with shared functionality and a consistent interface across supported mobile platforms.',

    stack: [
      'React Native',
      'JavaScript',
      'Redux',
      'REST API',
      'Android',
      'iOS'
    ]
  },

  {
    id: 3,
    title: 'Cross-Platform Desktop Software',
    category: 'Desktop',
    accent: '#059669',

    shortDescription:
      'Electron.js desktop application combining a React interface with Node.js capabilities for cross-platform desktop workflows.',

    problem:
      'The software required a desktop environment capable of combining a modern web-based interface with access to desktop-level functionality.',

    approach:
      'Developed the desktop application with Electron.js and React, using the Electron main process and secure IPC communication to connect the interface with desktop functionality.',

    architecture:
      'Electron Main Process ↔ Secure IPC Layer ↔ React Renderer',

    outcome:
      'Built a cross-platform desktop application architecture suitable for Windows, macOS, and Linux environments while maintaining a reusable React-based interface.',

    stack: [
      'Electron.js',
      'React',
      'Node.js',
      'JavaScript',
      'IPC',
      'HTML5',
      'CSS3'
    ]
  }
];

const skillsData = [
  {
    title: 'Frontend Engineering',
    description: 'Constructing performant, responsive web interfaces.',
    icon: Code2,
    skills: [
      { name: 'React.js / Vite', level: 'Advanced', value: 95 },
      { name: 'JavaScript (ES6+)', level: 'Advanced', value: 92 },
      { name: 'HTML5 & Modern CSS3', level: 'Advanced', value: 95 }
    ]
  },
  {
    title: 'Mobile & Multi-Platform',
    description: 'Cross-platform mobile and desktop delivery.',
    icon: Smartphone,
    skills: [
      { name: 'React Native', level: 'Proficient', value: 88 },
      { name: 'Electron.js', level: 'Proficient', value: 85 },
      { name: 'Cross-Platform UI/UX', level: 'Advanced', value: 90 }
    ]
  },
  {
    title: 'Desktop',
    description: 'Desktop workflows with a strong shared JS foundation.',
    icon: Monitor,
    skills: [
      { name: 'Electron.js', level: 'Proficient', value: 82 },
      { name: 'Main/renderer patterns', level: 'Proficient', value: 78 },
      { name: 'Desktop UX', level: 'Working Knowledge', value: 72 }
    ]
  },
  {
    title: 'Tooling & Deployment',
    description: 'Reliable release and delivery workflows.',
    icon: Layers,
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', value: 92 },
      { name: 'Vercel', level: 'Proficient', value: 82 },
      { name: 'Netlify', level: 'Proficient', value: 78 },
      { name: 'Railway', level: 'Working Knowledge', value: 70 }
    ]
  },
  {
    title: 'Backend & Database',
    description: 'Scalable server architecture and API design.',
    icon: Server,
    skills: [
      { name: 'Node.js / Express.js', level: 'Proficient', value: 88 },
      { name: 'MongoDB System', level: 'Proficient', value: 85 },
      { name: 'RESTful API Architecture', level: 'Advanced', value: 92 }
    ]
  }
];

const faqData = [
  {
    question: 'What core technologies and platforms do you specialize in?',
    answer:
      'I offer cross-platform development across three main domains using a unified JavaScript/TypeScript ecosystem: Web Development with React & Vite, Desktop Software with Electron.js & React, and Mobile App Development with React Native.',
  },
  {
    question: 'Can you deliver full-stack solutions from database to UI?',
    answer:
      'Yes. I build complete end-to-end applications that cover MongoDB database schemas, secure Express/Node.js REST APIs, and responsive user interfaces on web, mobile, and desktop.',
  },
  {
    question: 'How do you maintain code quality across Web, Desktop, and Mobile platforms?',
    answer:
      'I use a modular, clean-code approach. Core business logic, API integrations, and state management are separated into reusable modules so React, Electron, and React Native apps remain consistent and performant.',
  },
  {
    question: 'What is your process for managing remote projects and team collaboration?',
    answer:
      'I use asynchronous workflows with scheduled syncs. GitHub, Jira, and Notion handle planning, Slack and Discord support real-time updates, and video calls ensure milestone reviews stay aligned.',
  },
  {
    question: 'What engagement models do you offer for new projects?',
    answer:
      'I am available for freelance projects, contract engagements, and full-time remote roles. I adapt to your team’s roadmap for MVP delivery, cross-platform deployment, or ongoing feature development.',
  },
  {
    question: 'How do you ensure high performance and fast load times in React apps?',
    answer:
      'Performance starts from day one with Vite, code-splitting, lazy loading, lightweight state, and optimized asset delivery to support smooth 60fps experiences across web, desktop, and mobile.',
  }
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please state your name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email address.';
    if (!formData.message.trim() || formData.message.trim().length < 15) errs.message = 'Please provide a message with at least 15 characters.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setToastMessage('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="home-page">
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#059669',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '600',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          zIndex: 2000
        }}>
          {toastMessage}
        </div>
      )}

      {/* Hero Section */}
      <section className="hero" id="home" aria-label="Introduction">
        <div className="hero__container">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero__badges">
              <span className="badge badge--status">
                <span className="badge__dot"></span>
                Available for remote roles
              </span>
              <span className="badge badge--location">
                <MapPin size={14} />
                Lahore, Pakistan <span className="badge__divider">•</span> PKT (UTC+5)
              </span>
            </div>

            <div className="hero__header">
              <span className="hero__greeting">Hello, I am</span>
              <h1 className="hero__name">Muhammad Arslan</h1>
              <h2 className="hero__role">
                I build as a <span className="hero__role-highlight">Full Stack Developer</span>
              </h2>
            </div>

            <p className="hero__description">
              Full Stack Software Developer delivering web, mobile (React Native), and desktop (Electron.js) applications from one JavaScript core — built for performance, accessibility, and maintainability across time zones.
            </p>

            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn--secondary">
                <Download size={18} /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero__media-wrap"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="hero__image-card">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Workspace setup"
                className="hero__image"
              />
              <div className="hero__stack-card">
                <span className="hero__stack-label">STACK</span>
                <p className="hero__stack-items">
                  React <span className="hero__stack-dot">•</span> React Native <span className="hero__stack-dot">•</span> Electron <span className="hero__stack-dot">•</span> Node
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero__scroll">
          <span className="hero__scroll-text">SCROLL</span>
          <ArrowDown size={14} className="hero__scroll-icon" />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container-shell">
          <div className="section-header">
            <span className="section-eyebrow">ABOUT</span>
            <h2 className="section-title">A concise story about how I build products</h2>
            <p className="section-copy">
              I blend clean interface architecture, cross-platform engineering, and practical product thinking to ship reliable software for clients and teams.
            </p>
          </div>

          <div className="about-grid">
            <motion.div
              className="about-main-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div className="about-main-card__header">
                <div className="about-main-card__badge">
                  <Sparkles size={16} />
                  <span>Full Stack Developer</span>
                </div>
                <h3 className="about-main-card__title">
                  I build software the way good systems are designed — modular, well-documented, and easy to extend.
                </h3>
                <p className="about-main-card__text">
                  My focus is cross-platform delivery: shipping web, mobile, and desktop products from one consistent JavaScript foundation. Based in Lahore, Pakistan, I collaborate seamlessly with international engineering teams.
                </p>
              </div>

              <div className="about-highlights-pills">
                <span className="about-pill"><CheckCircle2 size={14} /> Modular engineering</span>
                <span className="about-pill"><CheckCircle2 size={14} /> Cross-platform parity</span>
                <span className="about-pill"><CheckCircle2 size={14} /> Async collaboration</span>
              </div>
            </motion.div>

            <div className="about-cards-column">
              <motion.div className="about-feature-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
                <div className="about-feature-card__icon about-feature-card__icon--web">
                  <Globe size={22} />
                </div>
                <div>
                  <h4>Web (React / Vite)</h4>
                  <p>Fast, single-page web apps built with clean component state and responsive layouts.</p>
                </div>
              </motion.div>

              <motion.div className="about-feature-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
                <div className="about-feature-card__icon about-feature-card__icon--mobile">
                  <Smartphone size={22} />
                </div>
                <div>
                  <h4>Mobile (React Native)</h4>
                  <p>Native iOS and Android clients from a single codebase with consistent UX across platforms.</p>
                </div>
              </motion.div>

              <motion.div className="about-feature-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
                <div className="about-feature-card__icon about-feature-card__icon--desktop">
                  <Monitor size={22} />
                </div>
                <div>
                  <h4>Desktop (Electron.js)</h4>
                  <p>Cross-platform desktop tools with native integrations and robust local system capabilities.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="container-shell">
          <div className="section-header">
            <span className="section-eyebrow">SKILLS</span>
            <h2 className="section-title">A focused, honest tech stack</h2>
            <p style={{ color: 'var(--color-muted)', marginTop: '0.5rem' }}>
              Proficiency levels reflect real working depth — not inflated claims. Tiers: Advanced, Proficient, and Working Knowledge.
            </p>
          </div>

          <div className="skills-grid">
            {skillsData.map((group, idx) => {
              const IconComp = group.icon;
              return (
                <motion.div
                  key={group.title}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="skill-card__header">
                    <span className="icon-badge"><IconComp size={20} /></span>
                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                  </div>

                  <div className="skill-card__list">
                    {group.skills.map((s) => (
                      <div key={s.name}>
                        <div className="skill-card__label-row">
                          <span className="skill-name">{s.name}</span>
                          <span className="skill-level">{s.level}</span>
                        </div>
                        <div className="skill-card__meter">
                          <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="architecture-section" id="architecture">
        <div className="container-shell">
          <div className="section-header">
            <span className="section-eyebrow">ARCHITECTURE</span>
            <h2 className="section-title">System design, not just code</h2>
            <p style={{ color: 'var(--color-muted)', marginTop: '0.5rem' }}>
              Representative architecture patterns across the web, mobile, and desktop stacks I work with.
            </p>
          </div>

          <div className="architecture-layout">
            <div className="architecture-card">
              <h3>Web Application Stack</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', margin: '0.4rem 0 1rem' }}>
                React (Vite) single-page application communicating with an Express REST API backed by MongoDB.
              </p>
              <div className="diagram">
                <div className="diagram__layer">React (Vite) SPA</div>
                <div className="diagram__line" />
                <div className="diagram__layer">REST API — Express</div>
                <div className="diagram__line" />
                <div className="diagram__layer">MongoDB Database System</div>
              </div>
            </div>

            <div className="architecture-card">
              <h3>Cross-Platform Mobile Stack</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', margin: '0.4rem 0 1rem' }}>
                React Native application compiling down to native iOS and Android components.
              </p>
              <div className="diagram">
                <div className="diagram__layer">React Native App Codebase</div>
                <div className="diagram__line" />
                <div className="diagram__layer">Native Bridge (iOS / Android)</div>
                <div className="diagram__line" />
                <div className="diagram__layer">REST API Sync Backend</div>
              </div>
            </div>

            <div className="architecture-card">
              <h3>Desktop Application Stack</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', margin: '0.4rem 0 1rem' }}>
                Electron desktop application isolating the Node main process from the UI renderer.
              </p>
              <div className="diagram">
                <div className="diagram__layer">Electron Main Process (Node)</div>
                <div className="diagram__line" />
                <div className="diagram__layer">Secure IPC Channel</div>
                <div className="diagram__line" />
                <div className="diagram__layer">React Renderer UI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section" id="workflow">
        <div className="container-shell">
          <div className="section-header">
            <span className="section-eyebrow">WORKFLOW</span>
            <h2 className="section-title">Clear, predictable engineering process</h2>
          </div>

          <div className="workflow-timeline">
            {[
              { icon: Users, title: 'Requirement Discovery', detail: 'Aligning on project goals, data models, and platform boundaries before writing code.' },
              { icon: Globe, title: 'System Architecture', detail: 'Designing clean API schemas, state flow, and modular folder structures.' },
              { icon: Rocket, title: 'Agile Implementation', detail: 'Building features iteratively with frequent Git commits and milestone demos.' },
              { icon: CheckCircle2, title: 'Testing & Optimization', detail: 'Conducting performance tuning, responsive design validation, and error handling checks.' },
              { icon: Database, title: 'Production Deployment', detail: 'Deploying services with clean environment variables and automated pipelines.' },
              { icon: MonitorSmartphone, title: 'Iterative Support', detail: 'Monitoring real-world usability and maintaining cross-platform dependencies.' }
            ].map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.title} className="workflow-step">
                  <div className="workflow-step__marker">{idx + 1}</div>
                  <div className="workflow-step__content">
                    <StepIcon size={20} />
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container-shell">
          <div className="projects-section__top">
            <div>
              <span className="section-eyebrow">PROJECTS</span>
              <h2 className="section-title">Selected software projects</h2>
            </div>

            <div className="projects-section__filters">
              {['All', 'Web', 'Mobile', 'Desktop'].map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeFilter === cat ? 'filter-btn--active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                onClick={() => setSelectedProject(p)}
              >
                <div className="project-card__header">
                  <span className="project-card__tag" style={{ background: `${p.accent}1A`, color: p.accent }}>
                    {p.category}
                  </span>
                  <span className="project-card__icon"><Code2 size={16} /></span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.shortDescription}</p>
                <div className="project-card__tags">
                  {p.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-card__footer">
                  <span>View case study</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section" id="experience">
        <div className="container-shell">
          <div className="section-header">
            <span className="section-eyebrow">EXPERIENCE</span>
<h2 className="section-title">
  Real-world projects. Practical engineering.
</h2>


          </div>

          <div className="experience-list">
            {experienceData.map((item) => (
              <div key={item.title} className="experience-item">
                <div className="experience-item__meta">{item.period}</div>
                <div className="experience-item__content">
                  <div className="experience-item__heading">
                    <h3>{item.title}</h3>
                  </div>
                  <p className="experience-item__location">{item.location}</p>
                  <p className="experience-item__preview">{item.description}</p>
                  <div className="experience-item__actions">
                    <button
                      type="button"
                      className="experience-item__view-more"
                      onClick={() => setSelectedExperience(item)}
                    >
                      View more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <AnimatePresence>
            {selectedExperience && (
              <div className="modal-overlay" onClick={() => setSelectedExperience(null)}>
                <motion.div
                  className="modal-card"
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.98, rotate: -0.8 },
                    visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
                    exit: { opacity: 0, y: 24, scale: 0.98, rotate: -0.8 }
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal-header">
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{selectedExperience.title}</h3>
                      <p className="experience-modal__meta">{selectedExperience.period} · {selectedExperience.location}</p>
                    </div>
                    <button className="modal-close" onClick={() => setSelectedExperience(null)} aria-label="Close">
                      <X size={18} />
                    </button>
                  </div>

                  <motion.div className="experience-modal" initial="hidden" animate="visible" exit="hidden"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
                  >
                    <motion.p className="experience-modal__description" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
                      {selectedExperience.description}
                    </motion.p>

                    <motion.div className="experience-modal__group" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
                      <h4>Highlights</h4>
                      <ul>
                        {selectedExperience.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div className="experience-modal__group" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
                      <h4>Tech Stack</h4>
                      <div className="experience-modal__tags">
                        {selectedExperience.stack.map((stack) => (
                          <span key={stack}>{stack}</span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section" id="resume">
        <div className="container-shell">
          <div className="resume-section__inner">
            <div>
              <span className="section-eyebrow">RESUME</span>
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Ready to review my complete history?</h2>
              <p className="resume-section__copy">
                Download a clean, one-page summary of technical projects, software engineering capabilities, and architectural practices.
              </p>
            </div>
            <a href="#contact" className="btn btn--primary" style={{ whiteSpace: 'nowrap' }}>
              <Download size={18} /> Download PDF Resume
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section
        className="faq-section"
        id="faq"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container-shell">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="faq-section__intro">
              Answers crafted for Web, Mobile, and Desktop development clients who want polished delivery and clear communication.
            </p>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div
                  key={index}
                  className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <button
                    type="button"
                    className="faq-item__button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-item__toggle">{isOpen ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        className="faq-item__answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container-shell contact-section__inner">
          <div>
            <span className="section-eyebrow">CONTACT</span>
            <h2 className="section-title">Let's discuss your project</h2>
            <p style={{ color: 'var(--color-text-soft)', marginTop: '0.8rem', lineHeight: '1.6' }}>
              Available for full-stack engineering roles, cross-platform app delivery, and remote technical consulting.
            </p>

            <div className="contact-card">

              <div className="contact-card__list">
                <a href="tel:+923433604547" className="contact-card__item">
                  <Phone size={18} />
                  <span>0343 360 4547</span>
                </a>
                <a href="mailto:muhammadarslanm011@gmail.com" className="contact-card__item">
                  <Mail size={18} />
                  <span>muhammadarslanm011@gmail.com</span>
                </a>
                <a href="https://github.com/marslani" target="_blank" rel="noopener noreferrer" className="contact-card__item">
                  <span className="contact-card__brand-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0.5C5.648 0.5 0.5 5.648 0.5 12C0.5 17.094 3.792 21.346 8.207 22.855C8.807 22.96 9.04 22.602 9.04 22.284C9.04 22.004 9.028 21.293 9.023 20.343C5.832 20.918 5.146 18.54 5.146 18.54C4.682 17.185 3.958 16.775 3.958 16.775C2.942 16.086 4.033 16.101 4.033 16.101C5.148 16.184 5.728 17.252 5.728 17.252C6.712 18.968 8.265 18.454 8.869 18.168C8.973 17.454 9.261 16.977 9.578 16.692C7.053 16.404 4.385 15.362 4.385 10.832C4.385 9.6 4.838 8.58 5.583 7.78C5.462 7.492 5.06 6.293 5.702 4.753C5.702 4.753 6.672 4.44 8.998 6.02C9.922 5.784 10.908 5.667 11.894 5.662C12.88 5.667 13.867 5.784 14.792 6.02C17.12 4.44 18.089 4.753 18.089 4.753C18.733 6.293 18.33 7.492 18.21 7.78C18.957 8.58 19.405 9.6 19.405 10.832C19.405 15.375 16.732 16.4 14.204 16.685C14.68 17.06 15.107 17.803 15.107 18.898C15.107 20.493 15.092 21.756 15.092 22.285C15.092 22.607 15.323 22.969 15.933 22.854C20.346 21.344 23.5 17.095 23.5 12C23.5 5.648 18.352 0.5 12 0.5Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span>GitHub Profile</span>
                </a>
                <a href="https://www.linkedin.com/in/muhammmad-arslan/" target="_blank" rel="noopener noreferrer" className="contact-card__item">
                  <span className="contact-card__brand-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4.98 3.5C3.67 3.5 2.61 4.56 2.61 5.88C2.61 7.2 3.67 8.26 4.98 8.26C6.3 8.26 7.36 7.2 7.36 5.88C7.36 4.56 6.3 3.5 4.98 3.5ZM3.88 20.5H6.08V9.09H3.88V20.5ZM8.61 9.09V20.5H10.81V14.32C10.81 12.83 11.94 12.61 12.62 12.61C13.32 12.61 14.28 12.83 14.28 14.32V20.5H16.48V13.97C16.48 10.77 15.18 9.58 12.98 9.58C11.28 9.58 10.69 10.26 10.34 10.7H10.27V9.09H8.61Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              {errors.name && <small>{errors.name}</small>}
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
              {errors.email && <small>{errors.email}</small>}
            </div>

            <div className="contact-form__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or open position..."
              />
              {errors.message && <small>{errors.message}</small>}
            </div>

            <button type="submit" className="btn btn--primary" style={{ justifySelf: 'start' }}>
              Send Message <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      {/* Modal View */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <motion.div
              className="modal-card"
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.98, rotate: -0.8 },
                visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
                exit: { opacity: 0, y: 24, scale: 0.98, rotate: -0.8 }
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{selectedProject.title}</h3>
                <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close">
                  <X size={18} />
                </button>
              </div>

              <motion.div className="case-study-modal" initial="hidden" animate="visible" exit="hidden"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } }
                }}
              >
                <motion.p className="case-study-modal__summary" variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}>
                  {selectedProject.shortDescription}
                </motion.p>

                <motion.div className="case-study-modal__group" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
                  <h4>Problem Statement</h4>
                  <p>{selectedProject.problem}</p>
                </motion.div>

                <motion.div className="case-study-modal__group" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
                  <h4>Engineering Approach</h4>
                  <p>{selectedProject.approach}</p>
                </motion.div>

                <motion.div className="case-study-modal__group" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
                  <h4>System Architecture</h4>
                  <p>{selectedProject.architecture}</p>
                </motion.div>

                <motion.div className="case-study-modal__group" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
                  <h4>Key Outcome</h4>
                  <p>{selectedProject.outcome}</p>
                </motion.div>

                <motion.div className="case-study-modal__tags" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
                  {selectedProject.stack.map((s) => <span key={s}>{s}</span>)}
                </motion.div>

                <div className="modal-scroll-hint" aria-hidden="true">
                  <ArrowDown size={16} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="container-shell footer-container">
        <a href="#home" className="home-page__legal-link">Privacy Policy</a>
        <a href="#home" className="home-page__legal-link">Terms of Service</a>
      </footer>
    </div>
  );
}