"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react'
import { FaAws } from 'react-icons/fa'
import {
  SiBetterstack,
  SiDatadog,
  SiDocker,
  SiGithubactions,
  SiGnubash,
  SiGrafana,
  SiJenkins,
  SiKubernetes,
  SiPrometheus,
  SiTerraform,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import {
  Activity,
  AppWindow,
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  CloudCog,
  Database,
  DatabaseZap,
  Download,
  Gauge,
  GitBranch,
  Globe2,
  HardDrive,
  KeyRound,
  LockKeyhole,
  Mail,
  Menu,
  MonitorCog,
  Network,
  Route,
  Scale,
  Send,
  ServerCog,
  ShieldCheck,
  SlidersHorizontal,
  Table2,
  Terminal,
  Waypoints,
  Workflow,
  Wrench,
  X,
} from 'lucide-react'
import { profile } from '../src/profile'

const brandIcons = {
  AWS: FaAws,
  'AWS CLI': FaAws,
  Azure: VscAzure,
  'Azure CLI': VscAzure,
  'Azure DevOps': VscAzure,
  Terraform: SiTerraform,
  'GitHub Actions': SiGithubactions,
  Jenkins: SiJenkins,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  EKS: SiKubernetes,
  AKS: SiKubernetes,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  Datadog: SiDatadog,
  'Better Stack': SiBetterstack,
  Bash: SiGnubash,
}

const serviceIcons = {
  EC2: ServerCog,
  ECS: Boxes,
  VPC: Network,
  S3: HardDrive,
  RDS: Database,
  Aurora: DatabaseZap,
  DynamoDB: Table2,
  'Azure VMs': MonitorCog,
  'Azure Web Apps': AppWindow,
  'Azure SQL': Database,
  VNets: Network,
  'Azure Storage': HardDrive,
  'AWS CodePipeline': Workflow,
  CodeDeploy: GitBranch,
  OIDC: KeyRound,
  CloudWatch: Activity,
  'Azure Monitor': Activity,
  Nagios: Activity,
  'Route 53': Route,
  'Front Door': Globe2,
  'Load Balancers': Scale,
  'VNet Peering': Waypoints,
  'NAT Gateway': Network,
  VPNs: ShieldCheck,
  Shell: Terminal,
  'AWS AppConfig': SlidersHorizontal,
  'Secrets Manager': LockKeyhole,
  KMS: KeyRound,
  'Least-privilege IAM': ShieldCheck,
}

const awsServices = new Set([
  'AWS', 'AWS CLI', 'EC2', 'ECS', 'VPC', 'S3', 'RDS', 'Aurora', 'DynamoDB', 'EKS',
  'AWS CodePipeline', 'CodeDeploy', 'CloudWatch', 'Route 53', 'AWS AppConfig',
  'Secrets Manager', 'KMS',
])

const azureServices = new Set([
  'Azure', 'Azure CLI', 'Azure DevOps', 'Azure VMs', 'Azure Web Apps', 'Azure SQL',
  'VNets', 'Azure Storage', 'AKS', 'Azure Monitor', 'Front Door', 'VNet Peering',
])

function TechIcon({ name }) {
  const Icon = brandIcons[name] || serviceIcons[name] || Wrench
  const platformClass = awsServices.has(name) ? ' aws-icon' : azureServices.has(name) ? ' azure-icon' : ''
  return <Icon className={`stack-pill-icon${platformClass}`} aria-hidden="true" />
}

const capabilityIcons = [CloudCog, Workflow, Boxes]

const deliveryFlow = [
  { label: 'Source', detail: 'Commit & review', Icon: GitBranch },
  { label: 'Pipeline', detail: 'Build & validate', Icon: Workflow },
  { label: 'Container', detail: 'Package once', Icon: Boxes },
  { label: 'Cloud', detail: 'Deploy safely', Icon: CloudCog },
  { label: 'Observe', detail: 'Watch & improve', Icon: Activity },
]

const workStories = [
  {
    number: '01',
    eyebrow: 'Trading infrastructure',
    title: 'Multi-environment AWS built as code',
    copy: 'Built AWS infrastructure with Terraform across ECS, EC2, VPC, IAM, S3, Aurora, and DynamoDB for trading and operational platforms.',
    scope: 'Trading + operational workflows',
    ownership: 'Terraform + AWS foundations',
    tags: ['Terraform', 'AWS ECS', 'Aurora', 'DynamoDB', 'IAM'],
    Icon: ServerCog,
  },
  {
    number: '02',
    eyebrow: 'Release engineering',
    title: 'Secure delivery with automated recovery',
    copy: 'Automated CI/CD with GitHub Actions and OIDC-based AWS authentication, then implemented blue-green releases and automated rollback with CodeDeploy.',
    scope: 'Application release lifecycle',
    ownership: 'Pipeline + deployment automation',
    tags: ['GitHub Actions', 'OIDC', 'CodeDeploy', 'Automated rollback'],
    Icon: GitBranch,
  },
  {
    number: '03',
    eyebrow: 'Multi-cloud operations',
    title: 'Visible, connected, production-ready systems',
    copy: 'Operated AWS and Azure platforms with container orchestration, secure networking, dashboards, alerts, and hands-on incident support.',
    scope: 'AWS + Azure environments',
    ownership: 'Reliability + incident support',
    tags: ['CloudWatch', 'Datadog', 'Better Stack', 'Prometheus', 'Azure Monitor'],
    Icon: Activity,
  },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  useEffect(() => {
    const targets = document.querySelectorAll('[data-motion]')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    document.documentElement.classList.add('motion-ready')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.16, rootMargin: '0px 0px -7% 0px' })

    targets.forEach((target) => observer.observe(target))
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const sendMessage = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <main>
      <a className="skip-link" href="#about">Skip to content</a>

      <header className="site-header">
        <div className="nav shell">
          <a className="wordmark" href="#top" aria-label="Nishwanth, home"><span>BN</span><i /></a>
          <nav id="main-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <a className="resume-link" href="/Bonagiri-Sai-Nishwanth-Resume.pdf" download>Download CV <Download size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="ops-ribbon shell" aria-label="Portfolio system status">
          <span><i /> SYSTEM ONLINE</span>
          <span>REGION / ap-south-1</span>
          <span>PROFILE / cloud-devops</span>
          <span>BUILD / 2026.07</span>
        </div>
        <div className="hero-grid shell">
          <div className="hero-copy reveal">
            <div className="identity-line"><span>{profile.name}</span><i />{profile.role}</div>
            <div className="hero-kicker"><span /> Cloud systems · delivery automation · reliability</div>
            <h1>Infrastructure<br />built to stay <em>up.</em></h1>
            <p>{profile.summary}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="secondary-button" href="#contact">Start a conversation</a>
            </div>
            <div className="hero-proof">
              <div><strong>Current</strong><span>Equicom Technologies</span></div>
              <div><strong>Core</strong><span>AWS · Terraform · Kubernetes</span></div>
            </div>
            <div className="terminal-line" aria-label="Current focus"><span>$</span> shipping resilient cloud platforms<span className="cursor" /></div>
          </div>

          <div className="hero-visual reveal reveal-delay">
            <img src="/images/devops-infrastructure-hero.png" alt="Original visualization of connected cloud infrastructure, container clusters, and resilient systems" fetchPriority="high" decoding="async" />
            <div className="visual-scrim" />
            <div className="signal-card signal-one"><ServerCog size={18} /><span>Infrastructure</span><strong>Terraform IaC</strong></div>
            <div className="signal-card signal-two"><GitBranch size={18} /><span>Delivery</span><strong>Automated</strong></div>
            <div className="signal-card signal-three"><Activity size={18} /><span>Systems</span><strong>Observed</strong></div>
            <div className="live-badge"><span /> Production minded</div>
          </div>
        </div>

        <div className="hero-metrics shell">
          {profile.impact.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          <p><span>Based in India</span>Available for Cloud & DevOps opportunities</p>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="shell about-grid">
          <div className="section-title" data-motion="left">
            <span className="eyebrow">01 / About</span>
            <h2>I make complex cloud systems easier to ship, observe, and trust.</h2>
          </div>
          <div className="about-content" data-motion="right">
            <p className="lead">I work across the full operational path—from cloud foundations and secure networking to automated releases, container platforms, and the signals that keep production healthy.</p>
            <div className="capability-grid" id="expertise">
              {profile.capabilities.map((item, index) => {
                const Icon = capabilityIcons[index]
                return (
                  <article className="glass-card capability-card" data-motion="rise" style={{ '--motion-order': index }} key={item.number}>
                    <div className="icon-box"><Icon size={23} /></div>
                    <span className="card-number">{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    <div className="tags">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="delivery section-pad" aria-labelledby="delivery-title">
        <div className="shell delivery-shell">
          <div className="delivery-heading" data-motion="rise">
            <span className="eyebrow">My operating path</span>
            <h2 id="delivery-title">From commit to confidence.</h2>
            <p>A reliable release is a connected system—not a final pipeline step.</p>
          </div>
          <div className="delivery-flow">
            {deliveryFlow.map((stage, index) => (
              <div className="flow-stage" data-motion="rise" style={{ '--motion-order': index }} key={stage.label}>
                <span className="flow-index">0{index + 1}</span>
                <span className="stage-status"><i /> ready</span>
                <div className="flow-icon"><stage.Icon size={21} /></div>
                <strong>{stage.label}</strong>
                <p>{stage.detail}</p>
              </div>
            ))}
          </div>
          <div className="flow-foundation" data-motion="rise">
            <span><ShieldCheck size={16} /> Security at every boundary</span>
            <span><Network size={16} /> Networking that stays explicit</span>
            <span><Gauge size={16} /> Signals before surprises</span>
          </div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="shell">
          <div className="work-heading" data-motion="rise">
            <div>
              <span className="eyebrow">02 / Selected work</span>
              <h2>Operational work with real production weight.</h2>
            </div>
            <p>Representative systems and delivery outcomes drawn directly from my experience.</p>
          </div>

          <div className="story-grid">
            {workStories.map((story, index) => (
              <article className="story-card" data-motion="rise" style={{ '--motion-order': index }} key={story.number}>
                <div className="story-top"><span><b>DEPLOY</b> / {story.number}</span><story.Icon size={24} /></div>
                <div className="story-body">
                  <span className="story-eyebrow">{story.eyebrow}</span>
                  <h3>{story.title}</h3>
                  <p>{story.copy}</p>
                  <div className="story-proof">
                    <div><span>Scope</span><strong>{story.scope}</strong></div>
                    <div><span>Ownership</span><strong>{story.ownership}</strong></div>
                  </div>
                  <div className="tags">{story.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>

          <article className="observability-feature" data-motion="rise">
            <img src="/images/observability-platform.png" alt="Original visualization of connected service telemetry and a healthy production system" loading="lazy" decoding="async" />
            <div className="feature-shade" />
            <div className="feature-copy">
              <span className="eyebrow">Reliability in practice</span>
              <h3>See the system before the system sees you.</h3>
              <p>Dashboards and alerting across CloudWatch, Datadog, Better Stack, Prometheus, Grafana, and Azure Monitor—paired with production troubleshooting and incident support.</p>
              <div className="feature-signals">
                <span><Gauge size={17} /> Observable</span>
                <span><ShieldCheck size={17} /> Secure</span>
                <span><Network size={17} /> Connected</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="shell experience-grid">
          <div className="section-title experience-title" data-motion="left">
            <span className="eyebrow">03 / Experience</span>
            <h2>Built and supported in production.</h2>
            <p>Three years across cloud infrastructure, delivery automation, containers, and live operations.</p>
            <a className="text-link" href="/Bonagiri-Sai-Nishwanth-Resume.pdf" download>Full resume <ArrowDownRight size={16} /></a>
          </div>
          <div className="timeline">
            {profile.experience.map((job, index) => (
              <article className="job-card" data-motion="right" style={{ '--motion-order': index }} key={job.company}>
                <span className="timeline-dot" />
                <div className="job-head">
                  <div><span className="job-index">RUNTIME / 0{index + 1}</span><h3>{job.role}</h3><p>{job.company}</p></div>
                  <time>{job.period}</time>
                </div>
                <p className="job-summary">{job.summary}</p>
                <div className="job-focus">{job.focus.map((item) => <span key={item}>{item}</span>)}</div>
                <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stack section-pad" id="skills">
        <div className="shell">
          <div className="stack-heading" data-motion="rise">
            <span className="eyebrow">04 / Technical stack</span>
            <h2>Tools I use to move from commit to production.</h2>
          </div>
          <div className="stack-grid">
            {Object.entries(profile.skills).map(([group, items], index) => {
              const Icon = [CloudCog, ServerCog, Workflow, Boxes, Activity, Network, Terminal, ShieldCheck][index]
              return (
                <article className="stack-group" data-motion="rise" style={{ '--motion-order': index % 2 }} key={group}>
                  <span className="layer-index">LAYER / 0{index + 1}</span>
                  <div className="stack-name"><Icon size={19} /><h3>{group}</h3></div>
                  <div className="stack-items">
                    {items.map((item) => <span className="stack-pill" key={item}><TechIcon name={item} /><span>{item}</span></span>)}
                  </div>
                </article>
              )
            })}
          </div>
          <div className="principles-block" data-motion="rise">
            <div className="principles-heading"><span className="eyebrow">Engineering principles</span><p>The standards I bring to everyday infrastructure work.</p></div>
            <div className="principles-grid">
              <div><span>01</span><strong>Automate repeatable work</strong><p>Reduce manual drift and make the safe path the easy path.</p></div>
              <div><span>02</span><strong>Secure every boundary</strong><p>Keep access explicit, minimal, and observable.</p></div>
              <div><span>03</span><strong>Instrument critical paths</strong><p>Build useful signals into systems before incidents happen.</p></div>
              <div><span>04</span><strong>Design for recovery</strong><p>Make rollback, troubleshooting, and support part of delivery.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="shell contact-panel" data-motion="rise">
          <div className="contact-copy">
            <span className="eyebrow">05 / Contact</span>
            <h2>Need someone who thinks beyond the deploy?</h2>
            <p>Open to Cloud & DevOps engineering opportunities where automation, security, and production reliability matter.</p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}><Mail size={17} /> Email</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={17} /> LinkedIn</a>
              <a href="/Bonagiri-Sai-Nishwanth-Resume.pdf" download><Download size={17} /> Resume</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={sendMessage}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Your name" autoComplete="name" required />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me about the role or system" required />
            <button type="submit">Send message <Send size={17} /></button>
          </form>
        </div>
        <footer className="shell footer-bottom">
          <span>© 2026 {profile.name}</span>
          <span>Cloud · DevOps · Reliability</span>
          <a href="#top">Back to top <ArrowUpRight size={15} /></a>
        </footer>
      </section>
    </main>
  )
}
