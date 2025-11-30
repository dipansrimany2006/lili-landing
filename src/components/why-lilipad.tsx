"use client"

import { Pill } from "./pill"
import { useHeroBg } from "@/contexts/hero-bg-context"

export function WhyLilipad() {
  const { setIsHovering } = useHeroBg()

  return (
    <section id="why-us" className="relative z-20 min-h-svh flex flex-col justify-center py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        <Pill className="mb-8 scroll-animate">WHY LILIPAD</Pill>

        <div className="grid md:grid-cols-3 gap-8 mt-16 scroll-stagger">
          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-12 transition-all duration-300 hover:bg-white/10 hover:border-soft-lavender/40 scroll-animate"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <h3 className="text-2xl md:text-3xl font-poppins font-semibold mb-4 text-soft-lavender">The Problem</h3>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Most token launches are opaque, vulnerable to misuse, and require deep Move expertise to implement safely.
            </p>
          </div>

          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-12 transition-all duration-300 hover:bg-white/10 hover:border-soft-teal/40 scroll-animate"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <h3 className="text-2xl md:text-3xl font-poppins font-semibold mb-4 text-soft-teal">The Solution</h3>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Lilipad provides a fair-launch pipeline with verifiable escrows, deterministic vesting, and secure
              liquidity locking — all modular and self-serve.
            </p>
          </div>

          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-12 transition-all duration-300 hover:bg-white/10 hover:border-soft-mint/40 scroll-animate"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <h3 className="text-2xl md:text-3xl font-poppins font-semibold mb-4 text-soft-mint">Who It Helps</h3>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Builders, teams, DAOs, and communities who want fraud-proof token lifecycles without writing Move.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
