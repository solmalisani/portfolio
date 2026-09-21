"use client"

import React from "react"
import { Press } from "@/components/AboutAnimation"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <Press className="absolute inset-0 h-full w-full pointer-events-none object-cover" />

      <div className="relative z-10 h-full w-full min-h-screen pointer-events-none">

        {/* Block 1: Top Left */}
        <div className="absolute top-[12%] sm:top-[14%] left-4 sm:left-8 md:left-12 max-w-[42vw] sm:max-w-[240px] md:max-w-[260px] text-left pointer-events-auto">
          <p className="text-[11px] xs:text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed font-light text-black">
            I’m Sol Malisani—an Argentinian fashion designer with experience across both haute couture and ready-to-wear.
          </p>
        </div>

        {/* Block 2: Middle Left (Intercalated) */}
        <div className="absolute top-[52%] sm:top-[48%] left-4 sm:left-8 md:left-12 max-w-[42vw] sm:max-w-[240px] md:max-w-[260px] text-left pointer-events-auto">
          <p className="text-[11px] xs:text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed font-light text-black">
            My practice begins on the body and ends at the seam: construction is never an afterthought.
          </p>
        </div>

        {/* Block 3: Top-Right / Upper Middle (Intercalated) */}
        <div className="absolute top-[28%] sm:top-[30%] right-4 sm:right-8 md:right-12 max-w-[42vw] sm:max-w-[240px] md:max-w-[260px] text-left md:text-right pointer-events-auto">
          <p className="text-[11px] xs:text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed font-light text-black">
            Trained in patternmaking, hand-pleating, and architectural draping, I combine hand skills with digital tools like Adobe Suite to take ideas from sketch to sample.
          </p>
        </div>

        {/* Block 4: Bottom Right */}
        <div className="absolute bottom-[10%] sm:bottom-[14%] right-4 sm:right-8 md:right-12 max-w-[42vw] sm:max-w-[240px] md:max-w-[260px] text-left md:text-right pointer-events-auto">
          <p className="text-[11px] xs:text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed font-light text-black">
            Currently based in Amsterdam, NL
          </p>
        </div>

      </div>
    </section>
  )
}
