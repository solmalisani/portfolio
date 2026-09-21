import * as React from "react"
import { useParams, Link } from "react-router"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, X } from "lucide-react"
import { cn } from "../lib/utils"

interface ImageData {
  id: string
  src: string
  alt?: string
}

interface GalleryContextType {
  selectedImage: ImageData | null
  setSelectedImage: (image: ImageData | null) => void
}

const GalleryContext = React.createContext<GalleryContextType | null>(null)

const spring = {
  type: "spring",
  stiffness: 350,
  damping: 35,
  mass: 1,
}

// --- GALLERY COMPONENTS ---
export function Gallery({ children }: { children: React.ReactNode }) {
  const [selectedImage, setSelectedImage] = React.useState<ImageData | null>(null)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedImage])

  return (
    <GalleryContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
      <GalleryModal />
    </GalleryContext.Provider>
  )
}

export function GalleryGrid({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "columns-1 sm:columns-2 md:columns-3 gap-6",
        className
      )}
    >
      {children}
    </div>
  )
}

export function GalleryImage({
  src,
  alt,
  id,
  className,
}: {
  src: string
  alt?: string
  id: string
  className?: string
}) {
  const context = React.useContext(GalleryContext)
  if (!context) throw new Error("GalleryImage must be used within a Gallery")

  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      className={cn(
        "relative mb-6 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden",
        className
      )}
      onClick={() => context.setSelectedImage({ id, src, alt })}
    >
      <motion.img
        layoutId={`image-${id}`}
        src={src}
        alt={alt || "Gallery Image"}
        className="w-full h-auto object-cover rounded-xl"
        variants={{
          hover: { scale: 0.98 },
          tap: { scale: 0.95 },
        }}
        transition={spring}
      />

      <motion.div
        variants={{
          hover: { opacity: 1 },
          tap: { opacity: 1 },
        }}
        initial={{ opacity: 0 }}
        className="absolute inset-0 bg-black/10 pointer-events-none rounded-xl"
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}

function GalleryModal() {
  const context = React.useContext(GalleryContext)
  if (!context) return null

  const { selectedImage, setSelectedImage } = context

  return (
    <AnimatePresence>
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
            onClick={() => setSelectedImage(null)}
          />

          <motion.div
            className="relative z-10 w-full h-full flex items-center justify-center cursor-zoom-out"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, info) => {
              if (
                Math.abs(info.offset.y) > 100 ||
                Math.abs(info.velocity.y) > 300
              ) {
                setSelectedImage(null)
              }
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              layoutId={`image-${selectedImage.id}`}
              src={selectedImage.src}
              alt={selectedImage.alt || "Selected gallery image"}
              className="w-auto h-auto max-w-[95vw] max-h-[90vh] rounded-xl shadow-2xl object-contain will-change-transform"
              draggable={false}
              transition={spring}
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="absolute top-6 right-6 z-50 p-2.5 bg-white/10 text-white rounded-full backdrop-blur-md hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}

const PROJECTS_DATA: Record<
  string,
  {
    title: string
    year: string
    category: string
    description: string[]
    images: { id: string; src: string; alt: string }[]
  }
> = {
  IVH: {
    title: "Iris Van Herpen",
    year: "2026",
    category: "Haute Couture",
    description:[
      "During my five month internship at IVH, I was selected by the senior design team to lead the physical creation of the Starquake gown for Paris Couture Week 2026.",
      "Executing the entire build from scratch, I drafted patterns, machine assembled, and hand sewed fluid chiffon half wheels onto rigid, laser-cut carbon fiber boning under tight industry deadlines.",
      "Beyond this lead look, I contributed across the atelier by creating dimensional artwork samples, assisting with made to measure orders, and restoring archive garments for major exhibitions.",
    ],
    images: [
      { id: "ivh-1", src: "/images/IVH/1.webp", alt: "Editorial shoot" },
      { id: "ivh-2", src: "/images/IVH/2.webp", alt: "Eileen Gu" },
      { id: "ivh-3", src: "/images/IVH/3.webp", alt: "Eileen Gu" },
      { id: "ivh-4", src: "/images/IVH/4.webp", alt: "Portrait" },
      { id: "ivh-5", src: "/images/IVH/5.webp", alt: "Show PFW" },
      { id: "ivh-6", src: "/images/IVH/6.webp", alt: "Show PFW" },
    ],
  },
  "rythme-sacre": {
    title: "Rythme Sacre",
    year: "2026",
    category: "Bridal Couture",
    description: [
      "Born from nature’s essential movement, Rythme Sacré translates organic gestures into form and texture, honoring the silent dance between strength and fragility. Set in an ethereal garden, its soft tones and enveloping volumes celebrate vital energy and rebirth.",
      "I was one of eight IED students selected to present one of the designs of this collection at Stephane Rolland’s Barcelona Bridal Fashion Week show.",
    ],
    images: [
      { id: "bbfw-0", src: "/images/BBFW/0.webp", alt: "Fitting with Stephane" },
      { id: "bbfw-1", src: "/images/BBFW/1.webp", alt: "Runway" },
      { id: "bbfw-2", src: "/images/BBFW/2.webp", alt: "Runway" },
      { id: "bbfw-4", src: "/images/BBFW/4.webp", alt: "Runway" },
      { id: "bbfw-5", src: "/images/BBFW/5.webp", alt: "Runway" },
      { id: "bbfw-6", src: "/images/BBFW/6.webp", alt: "Runway" },
      { id: "bbfw-7", src: "/images/BBFW/7.webp", alt: "Runway" },
      { id: "bbfw-8", src: "/images/BBFW/8.webp", alt: "Runway" },
      { id: "bbfw-9", src: "/images/BBFW/9.webp", alt: "Runway" },
      { id: "bbfw-10", src: "/images/BBFW/10.webp", alt: "Runway" },
      { id: "bbfw-11", src: "/images/BBFW/11.webp", alt: "Runway" },
      { id: "bbfw-12", src: "/images/BBFW/12.webp", alt: "Runway" },
      { id: "bbfw-13", src: "/images/BBFW/13.webp", alt: "Runway" },
      { id: "bbfw-14", src: "/images/BBFW/14.webp", alt: "Runway" },
      { id: "bbfw-15", src: "/images/BBFW/15.webp", alt: "Runway" },
      { id: "bbfw-16", src: "/images/BBFW/16.webp", alt: "Runway" },
      { id: "bbfw-17", src: "/images/BBFW/17.webp", alt: "Runway" },
      { id: "bbfw-18", src: "/images/BBFW/18.webp", alt: "Runway" },
      { id: "bbfw-19", src: "/images/BBFW/19.webp", alt: "Editorial" },
    ],
  },
  "glitched-urbanism": {
    title: "Glitched Urbanism",
    year: "2026",
    category: "Streetwear / Print Design",
    description: [
      "Glitched Urbanism explores the visual friction of the modern city through a digital lens. By utilizing physical, manual scanners to capture the hyper-layered topography of urban surfaces, from ripped street advertisements and underground event flyers to industrial metal grids, the collection documents a literal tactile map of city life.",
      "The resulting graphic prints manipulate scale, text distortion, and composition into seamless rapports. This visual chaos is balanced by structured commercial silhouettes, juxtaposing raw street texture with wearable, high street womenswear and menswear basics."
    ],
    images: [
      { id: "glitched-1", src: "/images/GlitchedUrbanism/1.webp", alt: "Editorial metro" },
      { id: "glitched-2", src: "/images/GlitchedUrbanism/2.webp", alt: "Editorial metro" },
      { id: "glitched-3", src: "/images/GlitchedUrbanism/3.webp", alt: "Editorial man" },
      { id: "glitched-4", src: "/images/GlitchedUrbanism/4.webp", alt: "Look 1" },
      { id: "glitched-5", src: "/images/GlitchedUrbanism/5.webp", alt: "Look 2" },
      { id: "glitched-6", src: "/images/GlitchedUrbanism/6.webp", alt: "Look 3" },
      { id: "glitched-8", src: "/images/GlitchedUrbanism/8.webp", alt: "Look 5" },
      { id: "glitched-9", src: "/images/GlitchedUrbanism/9.webp", alt: "Look 6" },
      { id: "glitched-10", src: "/images/GlitchedUrbanism/10.webp", alt: "Look 7" },
      { id: "glitched-11", src: "/images/GlitchedUrbanism/11.webp", alt: "Look 8" },
      { id: "glitched-12", src: "/images/GlitchedUrbanism/12.webp", alt: "Look 9" },
      { id: "glitched-7", src: "/images/GlitchedUrbanism/7.webp", alt: "Look 4" },
    ],
  },
  "rompiendo-el-circulo": {
    title: "Rompiendo el Circulo",
    year: "2026",
    category: "Womenswear",
    description: [
      "Breaking the Circle is a collection inspired by the silent struggle of the women in my family who were unable to choose their own path. Through a dialogue between rigid denim, heavy knits, and sharp outerwear, the collection translates emotional weight into bold structural forms, claiming presence and autonomy through garment construction."
    ],
    images: [
      { id: "rompiendo-1", src: "/images/RompiendoElCirculo/1.webp", alt: "Editorial" },
      { id: "rompiendo-2", src: "/images/RompiendoElCirculo/2.webp", alt: "Editorial" },
      { id: "rompiendo-3", src: "/images/RompiendoElCirculo/3.webp", alt: "Editorial" },
      { id: "rompiendo-4", src: "/images/RompiendoElCirculo/4.webp", alt: "Look 1" },
      { id: "rompiendo-5", src: "/images/RompiendoElCirculo/5.webp", alt: "Look 1" },
      { id: "rompiendo-6", src: "/images/RompiendoElCirculo/6.webp", alt: "Look 1" },
      { id: "rompiendo-7", src: "/images/RompiendoElCirculo/7.webp", alt: "Look 1" },
      { id: "rompiendo-8", src: "/images/RompiendoElCirculo/8.webp", alt: "Look 1" },
      { id: "rompiendo-9", src: "/images/RompiendoElCirculo/9.webp", alt: "Look 2" },
      { id: "rompiendo-10", src: "/images/RompiendoElCirculo/10.webp", alt: "Look 2" },
      { id: "rompiendo-11", src: "/images/RompiendoElCirculo/11.webp", alt: "Look 2" },
      { id: "rompiendo-12", src: "/images/RompiendoElCirculo/12.webp", alt: "Look 2" },
      { id: "rompiendo-13", src: "/images/RompiendoElCirculo/13.webp", alt: "Look 2" },
      { id: "rompiendo-14", src: "/images/RompiendoElCirculo/14.webp", alt: "Look 3" },
      { id: "rompiendo-15", src: "/images/RompiendoElCirculo/15.webp", alt: "Look 3" },
      { id: "rompiendo-16", src: "/images/RompiendoElCirculo/16.webp", alt: "Look 3" },
      { id: "rompiendo-17", src: "/images/RompiendoElCirculo/17.webp", alt: "Look 3" },
      { id: "rompiendo-18", src: "/images/RompiendoElCirculo/18.webp", alt: "Look 4" },
      { id: "rompiendo-20", src: "/images/RompiendoElCirculo/20.webp", alt: "Look 4" },
      { id: "rompiendo-21", src: "/images/RompiendoElCirculo/21.webp", alt: "Look 4" },
      { id: "rompiendo-22", src: "/images/RompiendoElCirculo/22.webp", alt: "Look 4" },
      { id: "rompiendo-23", src: "/images/RompiendoElCirculo/23.webp", alt: "Look 4" },
    ],
  },
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()

  const project = slug ? PROJECTS_DATA[slug] : null

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] pt-32 text-center px-4">
        <h1 className="text-3xl font-bold mb-3">Project Not Found</h1>
        <p className="text-muted-foreground mb-6">The project you are looking for does not exist.</p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm font-medium underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
      </div>
    )
  }

  return (
    <Gallery>
      <div className="w-full max-w-6xl mx-auto pt-28 sm:pt-36 pb-20 px-6 sm:px-12">
        {/* Back Link */}
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>

        {/* Project Header */}
        <div className="mb-12 border-b border-border/40 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {project.title}
            </h1>
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>

          <div className="w-full space-y-4 mt-6">
            {(Array.isArray(project.description)
              ? project.description
              : String(project.description).split("\n").filter(Boolean)
            ).map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Interactive Image Gallery */}
        <GalleryGrid>
          {project.images.map((img) => (
            <GalleryImage
              key={img.id}
              id={img.id}
              src={img.src}
              alt={img.alt}
            />
          ))}
        </GalleryGrid>

        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>

      </div>
    </Gallery>
  )
}
