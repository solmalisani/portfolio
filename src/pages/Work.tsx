import React, { useState } from "react"
import { ProjectCard } from "@/components/ProjectCard";

export default function WorkPage() {
    const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  return (
    <div className="sm:pt-20">

        {/* --- HEADER "LET'S WORK TOGETHER" --- */}
        <div
        className="group relative cursor-default mb-8 w-full flex flex-col items-center text-center"
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

      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
            title="Iris Van Herpen"
            description="Constructed a custom Haute Couture dress for the Paris Couture Week 2026 runway, executing the entire production process from pattern making, machine sewing, and hand stitching."
            imgSrc="/images/IVH/portada.webp"
            link="#"
        />
        <ProjectCard
            title="Rithme Sacre"
            description="Winner of Stephane Rolland's student design contest. Presented the final garment on the official runway during Barcelona Bridal Fashion Week."
            imgSrc="/images/BBFW/portada.webp"
            link="#"
            linkText="Explore Concept"
        />
        <ProjectCard
            title="Glitched Urbanism"
            description="9-look capsule featuring engineered digital prints created from manual street scans across Barcelona, Marrakech, and Amsterdam, fully developed from initial tech sheets to final CAD flats."
            imgSrc="/images/GlitchedUrbanism/portada.webp"
            link="#"
        />
        <ProjectCard
            title="Rompiendo el Circulo"
            description="10-look womenswear collection that translates the silent struggle and emotional weight of my family's women into bold structural forms, utilizing rigid denim, heavy knits, and sharp outerwear to claim presence and autonomy."
            imgSrc="/images/RompiendoElCirculo/portada.webp"
            link="#"
        />
    </div>
    </div>
  );
}
