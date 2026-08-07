import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
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
} from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Modal from '../components/common/Modal';
import SectionTitle from '../components/common/SectionTitle';
import FilterTab from '../components/common/FilterTab';

import { projectsData } from '../data/projectsData';
import { skillsData } from '../data/skillsData';
import { experienceData } from '../data/experienceData';
import { faqData } from '../data/faqData';
import './HomePage.css';

const projectFilterOptions = ['All', 'Web', 'Mobile', 'Desktop'];
const roles = ['Full Stack Developer', 'React Native Developer', 'Electron.js Developer'];

export default function HomePage({ addToast = () => {} }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 20) {
      nextErrors.message = 'Message should be at least 20 characters long.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      addToast('Please fix the highlighted fields before sending.', 'error');
      return;
    }

    addToast('Your message has been prepared for sending.', 'success');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" id="top" aria-label="Introduction">
        <div className="container-shell hero-section__inner">
          <motion.div
            className="hero-section__content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <span className="section-eyebrow hero-section__eyebrow">
              <Sparkles size={14} aria-hidden="true" />
              Available for global remote work
            </span>

            <h1 className="hero-section__title">
              Full Stack Software Developer building practical products for modern teams.
            </h1>

            <div className="hero-section__role-wrap" aria-live="polite">
              <span className="hero-section__role-label">I work as</span>
              <div className="hero-section__role-stack">
                {roles.map((role, index) => (
                  <span key={role} className={`hero-section__role hero-section__role--${index}`}>
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <p className="hero-section__description">
              I design and build web, mobile, and desktop products with a strong focus on user experience,
              maintainable code, and business clarity.
            </p>

            <div className="hero-section__actions">
              <Button as="a" href="#projects" className="hero-section__cta hero-section__cta--primary">
                View Projects
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button as="a" href="/resume.pdf" className="hero-section__cta hero-section__cta--secondary">
                <Download size={18} aria-hidden="true" />
                Download Resume
              </Button>
            </div>

            <ul className="hero-section__stats" aria-label="Professional profile statistics">
              <li>
                <strong>6+</strong>
                <span>Years building software</span>
              </li>
              <li>
                <strong>28</strong>
                <span>Projects delivered</span>
              </li>
              <li>
                <strong>Global</strong>
                <span>Remote collaboration</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="hero-section__card-wrap"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          >
            <Card className="profile-card">
              <div className="profile-card__topbar">
                <span className="profile-card__status">Available for work</span>
              </div>
              <div className="profile-card__avatar" aria-label="Developer Profile Initial">MA</div>
              <div className="profile-card__details">
                <h2>Muhammad Arslan</h2>
                <p>Full Stack Software Developer</p>
              </div>
              <div className="profile-card__meta">
                <div>
                  <span>Location</span>
                  <strong>
                    <MapPin size={14} aria-hidden="true" />
                    Lahore, Pakistan
                  </strong>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>
                    <Code2 size={14} aria-hidden="true" />
                    Web • Mobile • Desktop
                  </strong>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about" aria-labelledby="about-heading">
        <div className="container-shell about-section__grid">
          <SectionTitle id="about-heading" eyebrow="About" title="Built for clarity, scale, and real-world product delivery." />

          <div className="about-section__copy">
            <p>
              I help teams turn product ideas into dependable digital experiences. My work blends front-end
              craftsmanship, API logic, and multi-platform thinking so interfaces remain clear while the underlying
              architecture stays maintainable.
            </p>
            <p>
              I am comfortable working across web, mobile, and desktop products with the same JavaScript-first mindset,
              which helps teams move faster without sacrificing quality or consistency across platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills" aria-labelledby="skills-heading">
        <div className="container-shell">
          <SectionTitle id="skills-heading" eyebrow="Skills" title="Tools and systems that support product work from idea to release." align="center" />

          <div className="skills-grid">
            {skillsData.map(({ title, description, icon: Icon, skills }) => (
              <Card key={title} className="skill-card">
                <div className="skill-card__header">
                  <span className="icon-badge"><Icon size={18} aria-hidden="true" /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>

                <div className="skill-card__list">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-card__item">
                      <div className="skill-card__label-row">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="skill-card__meter" aria-label={`${skill.name} proficiency ${skill.value}%`}>
                        <span style={{ width: `${skill.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="architecture-section" id="architecture" aria-labelledby="architecture-heading">
        <div className="container-shell">
          <SectionTitle id="architecture-heading" eyebrow="Architecture" title="System patterns shaped for maintainable product delivery." />

          <div className="architecture-layout">
            <Card className="architecture-card">
              <h3>Web product architecture</h3>
              <div className="diagram diagram--web">
                <div className="diagram__layer diagram__layer--ui">React + Vite UI</div>
                <div className="diagram__line" aria-hidden="true" />
                <div className="diagram__layer diagram__layer--api">Express API</div>
                <div className="diagram__line" aria-hidden="true" />
                <div className="diagram__layer diagram__layer--data">MongoDB</div>
              </div>
            </Card>

            <Card className="architecture-card">
              <h3>Mobile product architecture</h3>
              <div className="diagram diagram--mobile">
                <div className="diagram__layer diagram__layer--shared">Shared React Native codebase</div>
                <div className="diagram__line" aria-hidden="true" />
                <div className="diagram__layer diagram__layer--device">iOS / Android clients</div>
                <div className="diagram__line" aria-hidden="true" />
                <div className="diagram__layer diagram__layer--sync">API + data sync</div>
              </div>
            </Card>

            <Card className="architecture-card">
              <h3>Desktop product architecture</h3>
              <div className="diagram diagram--desktop">
                <div className="diagram__layer diagram__layer--main">Electron main process</div>
                <div className="diagram__line" aria-hidden="true" />
                <div className="diagram__layer diagram__layer--render">Renderer UI</div>
                <div className="diagram__line" aria-hidden="true" />
                <div className="diagram__layer diagram__layer--local">Local + remote data access</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects" aria-labelledby="projects-heading">
        <div className="container-shell">
          <div className="projects-section__top">
            <SectionTitle id="projects-heading" eyebrow="Projects" title="Selected work across product, mobile, and desktop experiences." />

            <div className="projects-section__filters" role="tablist" aria-label="Project filters">
              {projectFilterOptions.map((option) => (
                <FilterTab
                  key={option}
                  label={option}
                  active={activeFilter === option}
                  onClick={() => setActiveFilter(option)}
                />
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <Card key={project.title} className="project-card" onClick={() => setSelectedProject(project)}>
                <div className="project-card__header">
                  <span className="project-card__tag" style={{ background: `${project.accent}1A`, color: project.accent }}>
                    {project.category}
                  </span>
                  <span className="project-card__icon"><Code2 size={16} aria-hidden="true" /></span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <div className="project-card__tags">
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-card__footer">
                  <span>View case study</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section" id="workflow" aria-labelledby="workflow-heading">
        <div className="container-shell">
          <SectionTitle id="workflow-heading" eyebrow="Workflow" title="A repeatable system for building what matters without unnecessary overhead." />

          <div className="workflow-timeline">
            {[
              { icon: Users, title: 'Discovery', detail: 'Clarify goals, assumptions, scope, and delivery expectations early.' },
              { icon: Globe, title: 'Architecture', detail: 'Map the app structure, data flow, and platform decisions before build starts.' },
              { icon: Rocket, title: 'Iterative build', detail: 'Ship in focused milestones with version control and practical review loops.' },
              { icon: CheckCircle2, title: 'Verification', detail: 'Test functionality, usability, and release readiness with clear quality checks.' },
              { icon: Database, title: 'Launch', detail: 'Deploy to Vercel, Netlify, or Railway with a clean, monitored release path.' },
              { icon: MonitorSmartphone, title: 'Growth', detail: 'Review real usage, refine the product, and support ongoing iteration.' },
            ].map(({ icon: Icon, title, detail }, index) => (
              <div key={title} className="workflow-step">
                <div className="workflow-step__marker">
                  <span>{index + 1}</span>
                </div>
                <div className="workflow-step__content">
                  <Icon size={18} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section" id="experience" aria-labelledby="experience-heading">
        <div className="container-shell">
          <SectionTitle id="experience-heading" eyebrow="Experience" title="Product-focused engineering experience shaped around real delivery work." />

          <div className="experience-list">
            {experienceData.map((item) => (
              <Card key={item.period} className="experience-item">
                <div className="experience-item__meta">
                  <span>{item.period}</span>
                </div>
                <div className="experience-item__content">
                  <div className="experience-item__heading">
                    <Briefcase size={16} aria-hidden="true" />
                    <h3>{item.title}</h3>
                  </div>
                  <p className="experience-item__location">{item.location}</p>
                  <p>{item.description}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="experience-item__tags">
                    {item.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Callout Section */}
      <section className="resume-section" id="resume" aria-labelledby="resume-heading">
        <div className="container-shell resume-section__inner">
          <div>
            <SectionTitle id="resume-heading" eyebrow="Resume" title="A concise overview of the work and value I bring to product teams." />
            <p className="resume-section__copy">
              I build reliable digital products with a strong emphasis on maintainability, accessibility, and clear cross-platform execution.
            </p>
          </div>
          <Button as="a" href="/resume.pdf" className="resume-section__button">
            <Download size={18} aria-hidden="true" />
            Download Resume (PDF)
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq" aria-labelledby="faq-heading">
        <div className="container-shell">
          <SectionTitle id="faq-heading" eyebrow="FAQ" title="Questions teams often ask before starting a project." align="center" />

          <div className="faq-list">
            {faqData.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.question} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                  <button
                    type="button"
                    className="faq-item__button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="faq-item__toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen ? <p className="faq-item__answer">{item.answer}</p> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <div className="container-shell contact-section__inner">
          <div className="contact-section__content">
            <SectionTitle id="contact-heading" eyebrow="Contact" title="Let’s build product experiences that feel clean, fast, and dependable." />
            <div className="contact-links" aria-label="Contact channels">
              <a href="mailto:muhammadarslan.dev@gmail.com">
                <Mail size={16} aria-hidden="true" />
                muhammadarslan.dev@gmail.com
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Globe size={16} aria-hidden="true" />
                GitHub Profile
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <Globe size={16} aria-hidden="true" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <div className="contact-form__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name ? <small id="name-error">{errors.name}</small> : null}
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email ? <small id="email-error">{errors.email}</small> : null}
            </div>

            <div className="contact-form__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message ? <small id="message-error">{errors.message}</small> : null}
            </div>

            <Button type="submit" className="contact-form__submit">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Case Study Modal */}
      <Modal isOpen={Boolean(selectedProject)} onClose={() => setSelectedProject(null)} title={selectedProject?.title || ''}>
        {selectedProject ? (
          <div className="case-study-modal">
            <p className="case-study-modal__summary">{selectedProject.shortDescription}</p>
            <div className="case-study-modal__group">
              <h4>Problem</h4>
              <p>{selectedProject.problem}</p>
            </div>
            <div className="case-study-modal__group">
              <h4>Approach</h4>
              <p>{selectedProject.approach}</p>
            </div>
            <div className="case-study-modal__group">
              <h4>Architecture</h4>
              <p>{selectedProject.architecture}</p>
            </div>
            <div className="case-study-modal__group">
              <h4>Outcome</h4>
              <p>{selectedProject.outcome}</p>
            </div>
            <div className="case-study-modal__tags">
              {selectedProject.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ) : null}
      </Modal>

      {/* Footer Legal Links */}
      <footer className="container-shell">
        <Link to="/privacy-policy" className="home-page__legal-link">Privacy Policy</Link>
        <Link to="/terms" className="home-page__legal-link home-page__legal-link--secondary">Terms of Service</Link>
      </footer>
    </div>
  );
}