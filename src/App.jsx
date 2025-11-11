import React from 'react'

function App() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Acme Corp',
      period: '2022 — Present',
      points: [
        'Build modern web apps with React and TypeScript',
        'Lead performance and accessibility improvements',
        'Collaborate with cross‑functional teams to ship features faster',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Pixel Studio',
      period: '2020 — 2022',
      points: [
        'Crafted responsive UI systems and design libraries',
        'Optimized Core Web Vitals and page experience',
        'Mentored junior developers on modern frontend practices',
      ],
    },
  ]

  const projects = [
    {
      title: 'Project Atlas',
      description:
        'A minimal analytics dashboard with clean typography and keyboard‑first navigation.',
      tech: ['React', 'Vite', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Noir UI Kit',
      description:
        'A black‑and‑white component library focused on clarity, contrast, and speed.',
      tech: ['Tailwind', 'Radix'],
      link: '#',
    },
    {
      title: 'Motion Notes',
      description:
        'Lightweight note‑taking with subtle motion and distraction‑free writing.',
      tech: ['React', 'LocalStorage'],
      link: '#',
    },
  ]

  const certificates = [
    {
      name: 'Frontend Web Development',
      issuer: 'Coursera',
      year: '2023',
    },
    {
      name: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      year: '2022',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header / Nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-black/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="font-semibold tracking-tight">Tegar Abdullah</a>
            <nav className="hidden sm:flex gap-6 text-sm">
              <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
              <a href="#experience" className="hover:opacity-60 transition-opacity">Experience</a>
              <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
              <a href="#certs" className="hover:opacity-60 transition-opacity">Certifications</a>
              <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="border-b border-black/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black px-3 py-1 text-xs tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              Available for opportunities
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Tegar Abdullah
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-black/70">
              Product‑minded engineer focused on simple, reliable, and fast web experiences.
              I design and build clean interfaces with a black‑and‑white aesthetic and strong
              emphasis on clarity and performance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md border border-black bg-black text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About / Summary */}
      <section id="about" className="border-b border-black/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Summary</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-black/80 leading-relaxed">
              <p>
                I enjoy turning complex ideas into elegant, accessible interfaces. My approach
                blends thoughtful UX, strong fundamentals, and pragmatic engineering.
              </p>
              <p>
                Outside of work, I explore typography, minimal design systems, and ways to make
                the web feel crisp and intentional—without unnecessary noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-b border-black/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
            </div>
            <div className="md:col-span-2 space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="grid sm:grid-cols-4 gap-4">
                  <div className="text-sm text-black/60">{exp.period}</div>
                  <div className="sm:col-span-3">
                    <h3 className="font-semibold leading-tight">
                      {exp.role} · <span className="text-black/70">{exp.company}</span>
                    </h3>
                    <ul className="mt-3 list-disc pl-5 space-y-1 text-black/80">
                      {exp.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-b border-black/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              {projects.map((p, idx) => (
                <a
                  key={idx}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-lg border border-black/10 p-5 hover:-translate-y-0.5 transition-all hover:shadow-[0_4px_0_0_#000]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold tracking-tight">{p.title}</h3>
                    <span className="text-xs border border-black rounded px-2 py-0.5">Demo</span>
                  </div>
                  <p className="mt-3 text-sm text-black/70">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-black/60">
                    {p.tech.map((t, i) => (
                      <span key={i} className="border border-black/20 rounded px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="border-b border-black/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Certifications</h2>
            </div>
            <div className="md:col-span-2 grid gap-4">
              {certificates.map((c, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-md border border-black/10 p-4">
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm text-black/60">{c.issuer}</p>
                  </div>
                  <span className="text-sm text-black/60">{c.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-md border border-black/10 p-6">
                <p className="text-black/80">Reach out via email:</p>
                <a
                  href="mailto:hello@tegarabdullah.dev"
                  className="mt-2 inline-block underline underline-offset-4 decoration-black hover:opacity-70"
                >
                  hello@tegarabdullah.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between text-sm text-black/60">
          <span>© {new Date().getFullYear()} Tegar Abdullah</span>
          <a href="#home" className="hover:opacity-60">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
