"use client"

import { Pill } from "./pill"
import { useHeroBg } from "@/contexts/hero-bg-context"

export function WhyLilipad() {
  const { setIsHovering } = useHeroBg()

  return (
    <section id="why-us" className="relative z-20 min-h-svh flex flex-col justify-center py-24">
      <div className="max-w-5xl mx-auto">
        <Pill className="mb-8">WHY LILIPAD</Pill>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div
            className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl px-6 py-12 transition-all duration-300 hover:bg-white/10"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <h3 className="text-2xl font-sentient mb-4 text-primary">The Problem</h3>
            <p className="text-white text-base leading-relaxed">
              Most token launches are opaque, vulnerable to misuse, and require deep Move expertise to implement safely.
            </p>
          </div>

          <div
            className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl px-6 py-12 transition-all duration-300 hover:bg-white/10"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <h3 className="text-2xl font-sentient mb-4 text-primary">The Solution</h3>
            <p className="text-white text-base leading-relaxed">
              Lilipad provides a fair-launch pipeline with verifiable escrows, deterministic vesting, and secure
              liquidity locking — all modular and self-serve.
            </p>
          </div>

          <div
            className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl px-6 py-12 transition-all duration-300 hover:bg-white/10"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <h3 className="text-2xl font-sentient mb-4 text-primary">Who It Helps</h3>
            <p className="text-white text-base leading-relaxed">
              Builders, teams, DAOs, and communities who want fraud-proof token lifecycles without writing Move.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
