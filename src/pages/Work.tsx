import React, { useState } from "react"
import { ProjectCard } from "@/components/ProjectCard"

export default function WorkPage() {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)

  return (
    // Changed pt-24 on mobile (to clear fixed navbar) and sm:pt-28 for desktop
    <div className="pt-20 sm:pt-28 pb-12">
      <div
        className="group relative cursor-default mb-6 w-full flex flex-col items-center text-center"
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <h2 className="relative text-center text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <span className="block overflow-hidden">
            <span
              className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isHeaderHovered ? "translateY(-8%)" : "translateY(0)",
                fontWeight: "800",
              }}
            >
              Projects
            </span>
          </span>
        </h2>
      </div>

      {/* Reduced padding from p-8 to px-4 pt-2 on mobile for better card width */}
      <div className="grid grid-cols-1 gap-8 px-4 sm:px-8 pt-2 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Iris Van Herpen"
          description="Constructed a custom Haute Couture dress for the Paris Couture Week 2026 runway, executing the entire production process from pattern making, machine sewing, and hand stitching."
          imgSrc="/images/IVH/portada.webp"
          link="/work/IVH"
        />
        <ProjectCard
          title="Rythme Sacre"
          description="Winner of Stephane Rolland's student design contest. Presented the final garment on the official runway during Barcelona Bridal Fashion Week."
          imgSrc="/images/BBFW/portada2.webp"
          link="/work/rythme-sacre"
          linkText="Explore Concept"
        />
        <ProjectCard
          title="Glitched Urbanism"
          description="9-look capsule featuring engineered digital prints created from manual street scans across Barcelona, Marrakech, and Amsterdam, fully developed from initial tech sheets to final CAD flats."
          imgSrc="/images/GlitchedUrbanism/portada2.webp"
          link="/work/glitched-urbanism"
        />
        <ProjectCard
          title="Rompiendo el Circulo"
          description="10-look womenswear collection that translates the silent struggle and emotional weight of my family's women into bold structural forms, utilizing rigid denim, heavy knits, and sharp outerwear to claim presence and autonomy."
          imgSrc="/images/RompiendoElCirculo/portada.webp"
          link="/work/rompiendo-el-circulo"
        />
      </div>
    </div>
  )
}
