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
  Layers
} from 'lucide-react';

import './HomePage.css';

/* Data Structures */
const projectsData = [
  {
    id: 1,
    title: 'Enterprise MERN Web Platform',
    category: 'Web',
    accent: '#2563eb',
    shortDescription: 'High-throughput web dashboard featuring real-time analytics, modular workflows, and unified API layer.',
    problem: 'The client needed a responsive, performant dashboard capable of handling real-time state updates without heavy page reloads.',
    approach: 'Engineered a modular React application using Vite, with optimized route-splitting and RESTful query caching.',
    architecture: 'React (Vite) Single Page App → Express REST API → MongoDB Database System',
    outcome: 'Improved rendering speeds by 45% and delivered a clean UI pattern across all screen viewports.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    id: 2,
    title: 'Cross-Platform Mobile App',
    category: 'Mobile',
    accent: '#8b5cf6',
    shortDescription: 'Unified mobile client for iOS and Android providing real-time data sync and offline support.',
    problem: 'Duplicate codebases for iOS and Android led to inconsistent feature parity and high maintenance overhead.',
    approach: 'Built a shared React Native codebase with customized platform primitives and efficient native bridges.',
    architecture: 'React Native Shared Client → Centralized Data Sync Layer → Express API',
    outcome: 'Reduced release cycles by 50% while guaranteeing feature parity across both mobile operating systems.',
    stack: ['React Native', 'JavaScript', 'REST API', 'Redux']
  },
  {
    id: 3,
    title: 'Desktop Workflow Suite',
    category: 'Desktop',
    accent: '#059669',
    shortDescription: 'Cross-platform desktop tool designed for local file processing and secure system operations.',
    problem: 'Users required offline-first processing power with direct access to local system resources.',
    approach: 'Leveraged Electron.js with isolated IPC channels connecting the renderer interface with system processes.',
    architecture: 'Electron Main Process ← IPC Bridge → React Renderer UI',
    outcome: 'Shipped a lightweight desktop app operating seamlessly on Windows, macOS, and Linux.',
    stack: ['Electron.js', 'React', 'Node.js IPC', 'HTML5/CSS3']
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

const experienceData = [
  {
    period: '2021 — PRESENT',
    title: 'Senior Full Stack Software Developer',
    location: 'Remote / Lahore, Pakistan',
    description: 'Directing cross-platform software delivery for international clients across web, mobile, and desktop ecosystems.',
    highlights: [
      'Architected and deployed full-stack React and Node.js solutions serving high-volume client operations.',
      'Engineered cross-platform mobile apps with React Native, cutting cross-platform overhead.',
      'Maintained consistent unit test coverage and clean software documentation standards.'
    ],
    stack: ['React', 'React Native', 'Node.js', 'MongoDB', 'Electron.js']
  }
];

const faqData = [
  {
    question: 'What time zones do you support for remote collaboration?',
    answer: 'I am based in Lahore, Pakistan (PKT, UTC+5) and regularly collaborate with software teams across North America, the UK, Europe, and UAE time zones through async communication and scheduled overlap.'
  },
  {
    question: 'How do you handle cross-platform code maintainability?',
    answer: 'By keeping core business logic clean and modular in pure JavaScript/TypeScript, client interfaces (React, React Native, Electron) consume unified APIs and state managers smoothly.'
  },
  {
    question: 'Can you build both backend APIs and front-end interfaces?',
    answer: 'Yes, I deliver complete end-to-end applications — from MongoDB database schemas and Express APIs to responsive React UIs.'
  }
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
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
            <h2 className="section-title">Engineering clarity across the full stack</h2>
          </div>

          <div className="about-grid">
            <motion.div
              className="about-main-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
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
                <span className="about-pill"><CheckCircle2 size={14} /> Modular Engineering</span>
                <span className="about-pill"><CheckCircle2 size={14} /> Cross-Platform Parity</span>
                <span className="about-pill"><CheckCircle2 size={14} /> Async Communication</span>
              </div>
            </motion.div>

            <div className="about-cards-column">
              <motion.div className="about-feature-card" whileHover={{ y: -4 }}>
                <div className="about-feature-card__icon about-feature-card__icon--web">
                  <Globe size={22} />
                </div>
                <div>
                  <h4>Web (React / Vite)</h4>
                  <p>Fast, single-page web applications built with clean component state and responsive layouts.</p>
                </div>
              </motion.div>

              <motion.div className="about-feature-card" whileHover={{ y: -4 }}>
                <div className="about-feature-card__icon about-feature-card__icon--mobile">
                  <Smartphone size={22} />
                </div>
                <div>
                  <h4>Mobile (React Native)</h4>
                  <p>Native iOS and Android client applications delivered from a single JavaScript codebase.</p>
                </div>
              </motion.div>

              <motion.div className="about-feature-card" whileHover={{ y: -4 }}>
                <div className="about-feature-card__icon about-feature-card__icon--desktop">
                  <Monitor size={22} />
                </div>
                <div>
                  <h4>Desktop (Electron.js)</h4>
                  <p>Cross-platform desktop tools with native operating system integrations and local file access.</p>
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
            <h2 className="section-title">Professional software history</h2>
          </div>

          <div className="experience-list">
            {experienceData.map((exp) => (
              <div key={exp.title} className="experience-item">
                <div className="experience-item__meta">{exp.period}</div>
                <div className="experience-item__content">
                  <div className="experience-item__heading">
                    <Briefcase size={18} style={{ color: 'var(--color-blue)' }} />
                    <h3>{exp.title}</h3>
                  </div>
                  <p className="experience-item__location">{exp.location}</p>
                  <p>{exp.description}</p>
                  <ul>
                    {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                  <div className="experience-item__tags">
                    {exp.stack.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
      <section className="faq-section" id="faq">
        <div className="container-shell">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title">Frequently asked questions</h2>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                  <button
                    type="button"
                    className="faq-item__button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-item__toggle">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && <p className="faq-item__answer">{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container-shell contact-section__inner">
          <div>
            <span className="section-eyebrow">CONTACT</span>
            <h2 className="section-title">Let's discuss your project</h2>
            <p style={{ color: 'var(--color-text-soft)', marginTop: '0.8rem', lineHeight: '1.6' }}>
              Available for full-stack engineering roles, cross-platform app delivery, and remote technical consulting.
            </p>

            <div className="contact-links">
              <a href="mailto:muhammadarslan.dev@gmail.com">
                <Mail size={18} /> muhammadarslan.dev@gmail.com
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Globe size={18} /> GitHub Profile
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Globe size={18} /> LinkedIn Profile
              </a>
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