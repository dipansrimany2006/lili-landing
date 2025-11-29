"use client"

import { Pill } from "./pill"
import { useHeroBg } from "@/contexts/hero-bg-context"

const steps = [
  {
    title: "Token Creation",
    description:
      "Mint a compliant Aptos token or import an existing one. Supply is verifiable and escrowed before usage.",
  },
  {
    title: "Fair Launchpad",
    description:
      "Conduct transparent sales where APT deposits create vesting streams — avoiding instant dumps and supply manipulation.",
  },
  {
    title: "Vesting Engine",
    description: "Linear, timestamp-based vesting streams backed by dedicated escrows. Immutable once created.",
  },
  {
    title: "Liquidity Locks",
    description: "Lock LP references or fungible tokens (e.g., from Hyperion) with enforced unlock times.",
  },
]

export function HowItWorks() {
  const { setIsHovering } = useHeroBg()

  return (
    <section id="how-it-works" className="relative z-20 h-svh flex flex-col justify-center py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto w-full">
        <Pill className="mb-8">HOW IT WORKS</Pill>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-lg p-6 transition-all duration-300 hover:bg-white/10"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-primary font-sentient text-3xl">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-sentient text-white">{step.title}</h3>
              </div>
              <p className="text-white text-base leading-relaxed ml-12">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
