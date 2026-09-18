import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router"
import { projects } from "../data/projects"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const skills = [
  {
    category: "Digital",
    items: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "CLO3D"],
  },
  {
    category: "Technical",
    items: ["Technical Flats", "Techpacks", "Moodboards"],
  },
  {
    category: "Craft",
    items: ["Patternmaking", "Illustration", "Sewing", "Fitting Analysis"],
  },
]

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Handle scroll-to after navigating back from a project page
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: "smooth" })
      }, 50)
    }
  }, [location.state])

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <Nav />

      {/* Hero */}
      <section
        className="pt-32 pb-20 px-8"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="grid gap-0" style={{ gridTemplateColumns: "1fr auto" }}>
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-8"
                style={{ color: "var(--accent)", fontFamily: "'Courier Prime', monospace" }}
              >
                Fashion Designer — Amsterdam
              </p>
              <h1
                className="font-display leading-none mb-0"
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 9rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                }}
              >
                SOL
                <br />
                MALISANI
              </h1>
            </div>
            <div className="flex flex-col justify-end pb-2">
              <p
                className="text-xs tracking-widest uppercase"
                style={{
                  color: "var(--muted-foreground)",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  letterSpacing: "0.2em",
                }}
              >
                Est. 2025 · Selected Work 2025–2026
              </p>
            </div>
          </div>

          <div
            className="mt-16 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-8"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p
              className="max-w-md text-base leading-relaxed"
              style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
            >
              I design garments and collections where construction and concept
              are inseparable. Available for freelance and collaboration.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="font-display text-3xl" style={{ color: "var(--accent)" }}>
                  Let's work together!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-8 py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="font-display text-xs tracking-widest uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              Selected Work
            </h2>
            <span className="font-display text-xs" style={{ color: "var(--muted-foreground)" }}>
              {projects.length} projects
            </span>
          </div>

          <div className="space-y-0">
            {projects.map((project, i) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group transition-all duration-300"
                style={{
                  borderTop: "1px solid var(--border)",
                  borderBottom: i === projects.length - 1 ? "1px solid var(--border)" : "none",
                  backgroundColor:
                    hoveredProject === project.id ? "var(--secondary)" : "transparent",
                }}
              >
                <div
                  className="py-6 grid gap-6 items-center"
                  style={{ gridTemplateColumns: "60px 1fr 1fr auto" }}
                >
                  <span
                    className="font-display text-xs"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {project.id}
                  </span>
                  <div>
                    <h3
                      className="font-display text-2xl md:text-3xl tracking-tight transition-colors duration-200"
                      style={{
                        color:
                          hoveredProject === project.id
                            ? "var(--accent)"
                            : "var(--foreground)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-xs tracking-widest uppercase mt-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {project.category}
                    </p>
                  </div>
                  <p
                    className="text-sm leading-relaxed hidden md:block"
                    style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-col items-end gap-3">
                    <span
                      className="font-display text-xs"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {project.year}
                    </span>
                    <button
                      onClick={() => navigate(`/${project.slug}`)}
                      className="text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200"
                      style={{
                        border: "1px solid var(--accent)",
                        color: "var(--accent)",
                        background: "none",
                        cursor: "pointer",
                        fontFamily: "'Courier Prime', monospace",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.backgroundColor = "var(--accent)"
                        el.style.color = "var(--accent-foreground)"
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.backgroundColor = "transparent"
                        el.style.color = "var(--accent)"
                      }}
                    >
                      See more →
                    </button>
                  </div>
                </div>

                {/* Expanded image on hover */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: hoveredProject === project.id ? "320px" : "0px",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover"
                    style={{ height: "300px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-8 py-20"
        style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--card)" }}
      >
        <div className="max-w-screen-xl mx-auto">
          <p
            className="font-display text-xs tracking-widest uppercase mb-16"
            style={{ color: "var(--muted-foreground)" }}
          >
            About
          </p>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2
                className="font-display leading-tight mb-8"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--foreground)" }}
              >
                A garment is a conversation between body, material, and maker.
              </h2>
              <div
                className="space-y-4"
                style={{ color: "var(--muted-foreground)", fontWeight: 300, lineHeight: 1.8 }}
              >
                <p>
                  I'm Sol Malisani—an Amsterdam based fashion designer with
                  experience across both haute couture and ready-to-wear. My
                  practice begins on the body and ends at the seam: construction
                  is never an afterthought.
                </p>
                <p>
                  Trained in patternmaking, hand-pleating, and architectural
                  draping, I combine hand skills with digital tools like CLO3D
                  and Adobe Suite to take ideas from sketch to sample.
                </p>
              </div>
            </div>

            <div>
              <img
                src="/images/Foto.jpg"
                alt="Sol Malisani, fashion designer"
                style={{ height: "420px", filter: "grayscale(20%)" }}
              />
            </div>
          </div>

          {/* Skills */}
          <div className="pt-12" style={{ borderTop: "1px solid var(--border)" }}>
            <p
              className="font-display text-xs tracking-widest uppercase mb-8"
              style={{ color: "var(--muted-foreground)" }}
            >
              Skills & Disciplines
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3
                    className="font-display text-xs tracking-widest uppercase mb-4"
                    style={{ color: "var(--accent)" }}
                  >
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={`${group.category}-${item}`}
                        className="text-sm flex items-center gap-3"
                        style={{ color: "var(--foreground)" }}
                      >
                        <span style={{ color: "var(--border)" }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-8 py-24"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-screen-xl mx-auto">
          <p
            className="font-display text-xs tracking-widest uppercase mb-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            Contact
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <h2
                className="font-display leading-tight mb-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--foreground)" }}
              >
                Let's build
                <br />
                something
                <br />
                <span style={{ color: "var(--accent)" }}>worth wearing.</span>
              </h2>
              <a
                href="mailto:solmalisanidesign@gmail.com"
                className="font-display inline-flex"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="px-6 py-3 text-sm tracking-widest uppercase transition-all duration-200"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--accent-foreground)",
                    fontFamily: "'Courier Prime', monospace",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = "var(--foreground)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)"
                  }}
                >
                  solmalisanidesign@gmail.com →
                </span>
              </a>
            </div>

            <div className="space-y-6" style={{ color: "var(--muted-foreground)" }}>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--muted-foreground)" }}>
                  Location
                </p>
                <p className="font-display">Amsterdam, Netherlands</p>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--muted-foreground)" }}>
                  Availability
                </p>
                <p className="font-display">
                  <span style={{ color: "var(--accent)" }}>●</span> Available
                </p>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted-foreground)" }}>
                  Socials
                </p>
                <div className="flex gap-6">
                  {[
                    { label: "Instagram", href: "https://www.instagram.com/12twelve.design/" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/maria-sol-malisani-asis/" },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm tracking-wide transition-colors duration-200"
                      style={{ color: "var(--muted-foreground)", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.color = "var(--foreground)"
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)"
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  )
}
