import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  SUMMARY,
  TRACKS,
  type Track,
} from './data'
import './App.css'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

type Theme = 'light' | 'dark'
type Filter = 'All' | Track

const EASE = [0.16, 1, 0.3, 1] as const

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <button
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={onToggle}
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 1 0 11 11z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      )}
    </button>
  )
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="section-inner">{children}</div>
    </section>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="heading-block">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  )
}

function FilterBar({ active, onChange }: { active: Filter; onChange: (f: Filter) => void }) {
  const options: Filter[] = ['All', ...TRACKS]
  return (
    <div className="filter-bar" role="tablist" aria-label="Filter by focus area">
      {options.map((f) => (
        <button
          key={f}
          role="tab"
          aria-selected={active === f}
          className={`filter-pill ${active === f ? 'active' : ''}`}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}

const ROLE_WORDS = ['Supply Chain', 'Business Operations', 'Strategy & Ops']

function RoleCycler() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLE_WORDS.length), 2400)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="role-cycler">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLE_WORDS[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="role-cycler-word"
        >
          {ROLE_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<Filter>('All')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    meta?.setAttribute('content', theme === 'dark' ? '#0b0f16' : '#f7f5f0')
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const matchesFilter = (tracks: Track[]) => filter === 'All' || tracks.includes(filter as Track)

  return (
    <div className="page-content">
      <header className="navbar">
        <a href="#home" className="brand">Chetana Reddy Sunkugari</a>
        <nav className="nav-desktop">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <button
          className={`menu-btn ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <nav className="nav-mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}

      <section id="home" className="hero-section">
        <div className="hero">
          <motion.span
            className="badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="dot" /> M.S. Industrial Engineering, NYU &middot; Open to opportunities
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            Chetana Reddy Sunkugari
          </motion.h1>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
          >
            Industrial Engineer, working across <RoleCycler />
          </motion.p>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
          >
            {SUMMARY}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46, ease: EASE }}
          >
            <a href="#experience" className="btn btn-primary">View Experience</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </motion.div>
        </div>
      </section>

      <Section id="experience">
        <SectionHeading eyebrow="Career" title="Experience" />
        <Reveal delay={0.1}>
          <FilterBar active={filter} onChange={setFilter} />
        </Reveal>
        <div className="timeline">
          {EXPERIENCE.map((e, i) => {
            const visibleBullets = e.bullets.filter((b) => matchesFilter(b.tracks))
            const dimmed = filter !== 'All' && visibleBullets.length === 0
            return (
              <Reveal key={e.role + e.company} delay={i * 0.06} className={`timeline-card ${dimmed ? 'dimmed' : ''}`}>
                <div className="timeline-head">
                  <div>
                    <h3>{e.role}</h3>
                    <p className="timeline-sub">{e.company} &middot; {e.location}</p>
                  </div>
                  <span className="timeline-dates">{e.dates}</span>
                </div>
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b.text} className={matchesFilter(b.tracks) ? '' : 'faded'}>
                      {b.text}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section id="projects">
        <SectionHeading eyebrow="Applied Work" title="Industry & Government Projects" />
        <Reveal delay={0.1}>
          <FilterBar active={filter} onChange={setFilter} />
        </Reveal>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => {
            const dimmed = !matchesFilter(p.tracks)
            return (
              <Reveal key={p.title} delay={i * 0.07} className={`project-card ${dimmed ? 'dimmed' : ''}`}>
                <div className="project-head">
                  <span className="project-org">{p.org}</span>
                  <span className="project-dates">{p.dates}</span>
                </div>
                <h3>{p.title}</h3>
                <p className="project-desc">{p.summary}</p>
                <ul className="project-bullets">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {p.tracks.map((t) => (
                    <span className="tag tag-sm" key={t}>{t}</span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section id="skills">
        <SectionHeading eyebrow="Toolkit" title="Skills" />
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="skill-card">
              <div className="skill-card-head">{s.label}</div>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="education">
        <SectionHeading eyebrow="Background" title="Education" />
        <div className="timeline">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.07} className="timeline-card">
              <div className="timeline-head">
                <div>
                  <h3>{e.degree}</h3>
                  <p className="timeline-sub">{e.school} &middot; {e.location}</p>
                </div>
                <span className="timeline-dates">{e.dates}</span>
              </div>
              {e.note && <p className="timeline-note">{e.note}</p>}
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="contact">
        <SectionHeading eyebrow="Reach Out" title="Let's talk" />
        <Reveal delay={0.1} className="contact-box">
          <p>
            Open to opportunities in supply chain, business operations and strategy &amp; operations.
            Based in New York.
          </p>
          <div className="info-cards">
            <div className="info-card"><span>Location</span>{CONTACT.location}</div>
            <div className="info-card"><span>Phone</span>{CONTACT.phone}</div>
            <div className="info-card"><span>Email</span>{CONTACT.email}</div>
          </div>
          <div className="contact-links">
            <a href={`mailto:${CONTACT.email}`}>Email</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </Reveal>
      </Section>

      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} Chetana Reddy Sunkugari. All rights reserved.</span>
        <div className="footer-links">
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${CONTACT.email}`}>Email</a>
        </div>
      </footer>
    </div>
  )
}

export default App
