"use client"

import { Pill } from "./pill"
import { useHeroBg } from "@/contexts/hero-bg-context"

const steps = [
  {
    title: "Token Creation",
    description:
      "Mint a compliant Aptos token or import an existing one. Supply is verifiable and escrowed before usage.",
    color: "soft-sky",
  },
  {
    title: "Fair Launchpad",
    description:
      "Conduct transparent sales where APT deposits create vesting streams — avoiding instant dumps and supply manipulation.",
    color: "soft-sage",
  },
  {
    title: "Vesting Engine",
    description: "Linear, timestamp-based vesting streams backed by dedicated escrows. Immutable once created.",
    color: "soft-peach",
  },
  {
    title: "Liquidity Locks",
    description: "Lock LP references or fungible tokens (e.g., from Hyperion) with enforced unlock times.",
    color: "soft-teal",
  },
]

export function HowItWorks() {
  const { setIsHovering } = useHeroBg()

  return (
    <section id="how-it-works" className="relative z-20 min-h-svh flex flex-col justify-center py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto w-full">
        <Pill className="mb-8 scroll-animate">HOW IT WORKS</Pill>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-16 scroll-stagger">
          {steps.map((step, index) => {
            const colorClasses: Record<string, { text: string; border: string }> = {
              "soft-sky": { text: "text-soft-sky", border: "hover:border-soft-sky/40" },
              "soft-sage": { text: "text-soft-sage", border: "hover:border-soft-sage/40" },
              "soft-peach": { text: "text-soft-peach", border: "hover:border-soft-peach/40" },
              "soft-teal": { text: "text-soft-teal", border: "hover:border-soft-teal/40" },
            }
            const colors = colorClasses[step.color]
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-300 hover:bg-white/10 ${colors.border} scroll-animate`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className={`${colors.text} font-poppins font-bold text-4xl md:text-5xl`}>{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl md:text-2xl font-poppins font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-foreground/70 text-base md:text-lg leading-relaxed ml-16 md:ml-20">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
