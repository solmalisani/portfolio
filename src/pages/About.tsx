"use client"

import React from "react"
import { Press } from "@/components/AboutAnimation"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end md:block"
      style={{
        backgroundColor: "var(--background)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Background ASCII Video */}
      <Press className="absolute inset-0 h-full w-full pointer-events-none object-cover" />

      {/* --- DESKTOP LAYOUT (Staggered Absolute Blocks) --- */}
      <div className="hidden md:block relative z-10 h-full w-full min-h-screen pointer-events-none">
        {/* Block 1: Top Left */}
        <div className="absolute top-[16%] left-8 md:left-12 max-w-[280px] text-left pointer-events-auto bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
          <p className="text-sm md:text-base leading-relaxed font-light">
            Hey! I’m Sol Malisani—an Argentinian fashion designer with experience across both haute couture and ready-to-wear.
          </p>
        </div>

        {/* Block 2: Middle Left */}
        <div className="absolute top-[50%] left-8 md:left-12 max-w-[280px] text-left pointer-events-auto bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
          <p className="text-sm md:text-base leading-relaxed font-light">
            My practice begins on the body and ends at the seam: construction is never an afterthought.
          </p>
        </div>

        {/* Block 3: Top Right */}
        <div className="absolute top-[28%] right-8 md:right-12 max-w-[280px] text-right pointer-events-auto bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
          <p className="text-sm md:text-base leading-relaxed font-light">
            Trained in patternmaking, hand-pleating, and architectural draping, I combine hand skills with digital tools like Adobe Suite to take ideas from sketch to sample.
          </p>
        </div>

        {/* Block 4: Bottom Right */}
        <div className="absolute bottom-[12%] right-8 md:right-12 max-w-[280px] text-right pointer-events-auto bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
          <p className="text-sm md:text-base leading-relaxed font-light">
            Currently based in Amsterdam, NL
          </p>
        </div>
      </div>

      {/* --- MOBILE LAYOUT (Clean Vertical Scrollable Cards) --- */}
      <div className="md:hidden relative z-10 w-full pt-28 pb-16 px-5 flex flex-col gap-4 pointer-events-auto bg-gradient-to-t from-black via-black/70 to-transparent">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-white">
          <p className="text-sm leading-relaxed font-light">
            Hey! I’m Sol Malisani—an Argentinian fashion designer with experience across both haute couture and ready-to-wear.
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-white">
          <p className="text-sm leading-relaxed font-light">
            My practice begins on the body and ends at the seam: construction is never an afterthought.
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-white">
          <p className="text-sm leading-relaxed font-light">
            Trained in patternmaking, hand-pleating, and architectural draping, I combine hand skills with digital tools like Adobe Suite to take ideas from sketch to sample.
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-white text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-medium">
            Currently based in Amsterdam, NL
          </p>
        </div>
      </div>
    </section>
  )
}
