import { useParams, Link } from "react-router"
import { useState } from "react"
import { projects } from "../data/projects"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const [activeIndex, setActiveIndex] = useState(0)

  if (!project) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <Nav />
        <p className="font-display text-2xl">Project not found.</p>
        <Link
          to="/"
          className="mt-6 text-xs tracking-widest uppercase"
          style={{ color: "var(--accent)", textDecoration: "none" }}
        >
          ← Back to work
        </Link>
      </div>
    )
  }

  const images = project.images
  const prev = () =>
    setActiveIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setActiveIndex((i) => (i + 1) % images.length)

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <Nav />

      <div className="pt-32 pb-24 px-8 max-w-screen-xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="font-display text-xs tracking-widest uppercase inline-flex items-center gap-2 mb-16 transition-colors duration-200"
          style={{ color: "var(--muted-foreground)", textDecoration: "none" }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.color = "var(--foreground)"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.color =
              "var(--muted-foreground)"
          }}
        >
          ← Back
        </Link>

        {/* Header */}
        <div
          className="pb-12 mb-12"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{
              color: "var(--accent)",
              fontFamily: "'Courier Prime', monospace",
            }}
          >
            {project.id} / {project.category} — {project.year}
          </p>
          <h1
            className="font-display leading-none mb-8"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 7rem)",
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
            }}
          >
            {project.title.toUpperCase()}
          </h1>

          <div>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "var(--muted-foreground)",
                fontWeight: 300,
                maxWidth: "480px",
              }}
            >
              {project.description}
            </p>
            <div>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 tracking-wide"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--muted-foreground)",
                    fontFamily: "'Courier Prime', monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div>
          {/* Main image */}
          <div
            className="relative w-full overflow-hidden mb-4"
            style={{ backgroundColor: "var(--muted)", aspectRatio: "16/9" }}
          >
            <img
              src={images[activeIndex]}
              alt={`${project.title} — image ${activeIndex + 1}`}
              className="w-full h-full object-contain"
              style={{ transition: "opacity 0.3s ease" }}
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 font-display text-xs tracking-widest px-3 py-2 transition-all duration-200"
                  style={{
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--accent)"
                    ;(e.currentTarget as HTMLElement).style.color =
                      "var(--accent-foreground)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--background)"
                    ;(e.currentTarget as HTMLElement).style.color =
                      "var(--foreground)"
                  }}
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-xs tracking-widest px-3 py-2 transition-all duration-200"
                  style={{
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--accent)"
                    ;(e.currentTarget as HTMLElement).style.color =
                      "var(--accent-foreground)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--background)"
                    ;(e.currentTarget as HTMLElement).style.color =
                      "var(--foreground)"
                  }}
                >
                  →
                </button>
              </>
            )}
          </div>

          {/* Thumbnails + counter */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="overflow-hidden transition-all duration-200"
                  style={{
                    width: "64px",
                    height: "48px",
                    border:
                      i === activeIndex
                        ? "1px solid var(--accent)"
                        : "1px solid var(--border)",
                    background: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <span
              className="font-display text-xs"
              style={{ color: "var(--muted-foreground)" }}
            >
              {activeIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
