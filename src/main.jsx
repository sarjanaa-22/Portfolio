import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowUpRight, BookOpen, BriefcaseBusiness, CalendarDays,
  CheckCircle2, ChevronRight, Code2, FileText, GraduationCap, Layers3,
  Mail, MapPin, Menu, Phone, Sparkles, X
} from 'lucide-react';
import './styles.css';

const navigation = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Participations'];

const skills = [
  { title: 'Programming', icon: Code2, items: ['Python', 'C', 'Java (Basic)'] },
  { title: 'Web Development', icon: Layers3, items: ['HTML', 'CSS', 'MERN Stack'] },
  { title: 'Productivity', icon: FileText, items: ['MS Office', 'Google Workspace'] },
];

const projects = [
  { title: 'College Chatbot', meta: 'Python', type: 'Project' },
  { title: 'Planora – Event Calendar Application', meta: 'C Data Structures', type: 'Project' },
  { title: 'AI – MediScan', meta: 'Prescription Analysis Platform', type: 'Featured project', featured: true },
  { title: 'Campus Placement Management System', meta: 'Ongoing', type: 'Project' },
  { title: 'Drowsiness Detection System', meta: 'Python & OpenCV', type: 'Project' },
];

const certifications = [
  'Elite Certificate in NPTEL – Internet of Things (IoT)',
  'Web Developer Bootcamp with Flask and Python — Udemy',
  'Typewriting – Lower',
  'BA – Hindi',
];

const participationGroups = [
  { title: 'Hackathons', entries: [
    ['SIH 2025 – Automated Bus Scheduling & Route Management System', 'Delhi Transport Corporation'],
    ['Vexora ’26 – National Level Hackathon', 'Sathyabama University'],
    ['Creonix ’25 – National Level Hackathon', 'SRM Easwari Engineering College'],
    ["RushHour'26 — National Level Hackathon", 'Sathyabama University'],
  ] },
  { title: 'Event Participations', entries: [
    ['Texus – Paper Presentation', 'SRM Institute of Science and Technology'],
    ['Fluxon – Poster Presentation & Quiz', 'Jeppiaar Engineering College'],
    ['Techritz – Techword Scramble', 'Rajalakshmi Institute of Technology'],
  ] },
];

function SectionHeading({ eyebrow, title, children }) {
  return <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {children && <p className="section-intro">{children}</p>}
  </div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.dataset.nav);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.2] });
    document.querySelectorAll('[data-nav]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const goTo = (item) => { setOpen(false); document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); };
  return <header className="navbar">
    <a className="brand" href="#home" onClick={() => goTo('Home')}>SARJANAA <span>S N</span></a>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
      {navigation.map(item => <button key={item} className={active === item ? 'active' : ''} onClick={() => goTo(item)}>{item}</button>)}
    </nav>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>;
}

function Hero() {
  return <section id="home" data-nav="Home" className="hero">
    <div className="hero-copy">
      <div className="availability"><span></span> Portfolio / 2026</div>
      <h1>Hii,<br /><span>I'm Sarjanaa S N</span></h1>
      <p className="hero-role">Computer Science Engineering Student</p>
      <p className="hero-description">Enthusiastic third-year Computer Science Engineering student with a strong foundation in programming, web development, and problem-solving. Passionate about learning emerging technologies and developing innovative solutions.</p>
      <div className="hero-actions">
        <a className="button button-cream" href="#projects">View My Work <ArrowDownRight size={18} /></a>
        <a className="button button-outline" href="#contact">Contact Me <ArrowUpRight size={18} /></a>
      </div>
    </div>
    <div className="hero-art" aria-label="Abstract developer inspired graphic">
      <div className="hero-grid"></div><div className="orb orb-one"></div><div className="orb orb-two"></div><div className="code-card">
        <span>&lt;/&gt;</span><strong>BUILDING<br />WITH PURPOSE</strong><i>01 — 05</i>
      </div>
      <div className="contact-chip chip-email"><Mail size={16} /> sarju.sn22@gmail.com</div>
      <div className="contact-chip chip-location"><MapPin size={16} /> Chennai, Tamil Nadu</div>
      <div className="hero-stamp">CS<br /><small>STUDENT</small></div>
    </div>
    <a href="#about" className="scroll-cue">SCROLL TO EXPLORE <ChevronRight size={16} /></a>
  </section>;
}

function About() {
  const highlights = ['Problem Solver', 'Tech Explorer', 'Web Developer', 'Innovative Thinker'];
  return <section id="about" data-nav="About" className="section about"><SectionHeading eyebrow="01 / ABOUT ME" title="Curious by nature. Driven by possibilities.">Enthusiastic third-year Computer Science Engineering student with a strong foundation in programming, web development, and problem-solving. Passionate about learning emerging technologies and developing innovative solutions.</SectionHeading>
    <div className="highlight-grid">{highlights.map((item, i) => <div className="highlight-card" key={item}><span>0{i + 1}</span><Sparkles size={21} /><h3>{item}</h3></div>)}</div>
    <div className="education-wrap"><div><p className="eyebrow">EDUCATION</p><h3 className="education-title">A foundation for what’s next.</h3></div><div className="education-list">
      <Education name="B.E – Computer Science Engineering" line1="3rd Year · CGPA: 7.99" line2="Meenakshi Sundararajan Engineering College" date="Present" />
      <Education name="HSC – Computer Science" line1="84% · Cut-off: 177" line2="St. Sebastian Matric Higher Secondary School" date="2024" />
      <Education name="SSLC" line1="83%" line2="St. Sebastian Matric Higher Secondary School" date="2022" />
    </div></div>
  </section>;
}

function Education({name, line1, line2, date}) { return <article className="education-item"><GraduationCap /><div><h4>{name}</h4><p>{line1}</p><small>{line2}</small></div><time>{date}</time></article>; }

function Skills() { return <section id="skills" data-nav="Skills" className="section skills-section"><SectionHeading eyebrow="02 / SKILLS" title="The tools I’m learning with.">A focused set of tools for creating, experimenting, and solving problems.</SectionHeading><div className="skill-grid">{skills.map(({title, icon: Icon, items}, i) => <article className="skill-card" key={title}><div className="skill-card-top"><span>0{i + 1}</span><Icon /></div><h3>{title}</h3><div className="pill-list">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>; }

function ProjectCard({project, index}) { return <article className={`project-card ${project.featured ? 'featured' : ''}`}><div className="project-number">0{index + 1}</div><div className="project-shape"><Code2 size={project.featured ? 42 : 28} /></div><div className="project-content"><p>{project.type}</p><h3>{project.title}</h3><span>{project.meta}</span></div><div className="project-arrow"><ArrowUpRight size={20} /></div></article>; }
function Projects() { return <section id="projects" data-nav="Projects" className="section projects-section"><SectionHeading eyebrow="03 / SELECTED WORK" title="Ideas shaped into projects.">A collection of projects from my learning journey.</SectionHeading><div className="projects-grid">{projects.map((project, i) => <ProjectCard project={project} index={i} key={project.title} />)}</div></section>; }

function Experience() { return <section id="experience" data-nav="Experience" className="section experience"><SectionHeading eyebrow="04 / EXPERIENCE" title="Learning in real-world contexts." /><div className="timeline">
  <TimelineItem title="Frontend Development Intern" organisation="Shanthi IT Solutions" detail="Technology: HTML & CSS" />
  <TimelineItem title="Web Development Intern" organisation="NITTTR" />
  </div></section>; }
function TimelineItem({title, organisation, detail}) { return <article className="timeline-item"><div className="timeline-dot"></div><div className="timeline-icon"><BriefcaseBusiness /></div><div><h3>{title}</h3><p>{organisation}</p>{detail && <small>{detail}</small>}</div></article>; }

function Certifications() { return <section id="certifications" data-nav="Certifications" className="section certifications"><SectionHeading eyebrow="05 / CERTIFICATIONS & COURSES" title="A continuing path of learning." /><div className="cert-grid">{certifications.map((certificate, i) => <article className="cert-card" key={certificate}><span>0{i + 1}</span><BookOpen /><h3>{certificate}</h3><CheckCircle2 size={18} /></article>)}</div></section>; }

function Participations() { return <section id="participations" data-nav="Participations" className="section participations"><SectionHeading eyebrow="06 / PARTICIPATIONS" title="Showing up, learning, contributing." /><div className="participation-grid">{participationGroups.map(group => <article className="participation-card" key={group.title}><div className="participation-title"><CalendarDays /><h3>{group.title}</h3></div>{group.entries.map(([name, place]) => <div className="participation-entry" key={name}><h4>{name}</h4><p>{place}</p></div>)}</article>)}</div><div className="extras-grid"><article><p className="eyebrow">ACTIVITIES & LEADERSHIP</p><h3>Placement Coordinator</h3><p>Meenakshi Sundararajan Engineering College</p><h3>Active Member – EDI Club</h3><p>Meenakshi Sundararajan Engineering College</p></article><article><p className="eyebrow">SOFT SKILLS</p><div className="text-pill-list">{['Leadership & Decision Making', 'Analytical Thinking', 'Problem Solving', 'Team Collaboration', 'Positive Attitude'].map(x => <span key={x}>{x}</span>)}</div><p className="eyebrow lower">LANGUAGES</p><div className="text-pill-list">{['Tamil', 'English', 'Hindi', 'Japanese (Basic)'].map(x => <span key={x}>{x}</span>)}</div></article><article><p className="eyebrow">HOBBIES</p><ul>{['Playing Chess', 'UI/UX Practice', 'Exploring New Technologies', 'Building Personal Software Projects'].map(x => <li key={x}>{x}</li>)}</ul></article></div></section>; }

function ContactSlide() {
  return <section id="contact" className="contact-slide" aria-label="Contact details">
    <h2>Reach Out</h2>
    <div className="contact-slide-list">
      <a href="tel:+917530012204"><Phone aria-hidden="true" />+91 75300 12204</a>
      <a href="mailto:sarju.sn22@gmail.com"><Mail aria-hidden="true" />sarju.sn22@gmail.com</a>
      <p><MapPin aria-hidden="true" />Chennai, Tamil Nadu</p>
      <a href="http://www.linkedin.com/in/sarjanaanarayanan-212854362" target="_blank" rel="noreferrer"><ArrowUpRight aria-hidden="true" />www.linkedin.com/in/sarjanaanarayanan-212854362</a>
    </div>
  </section>;
}

function Footer() { return <footer><a className="brand" href="#home">SARJANAA <span>S N</span></a><p>Computer Science Engineering Student <i>|</i> Web Development <i>|</i> Technology Enthusiast</p><div>{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div></footer>; }

function App() { return <><Navbar /><main><Hero /><About /><Skills /><Projects /><Experience /><Certifications /><Participations /><ContactSlide /></main><Footer /></>; }
createRoot(document.getElementById('root')).render(<App />);
