"use client"

import Image from "next/image"
import { Pill } from "./pill"
import { useHeroBg } from "@/contexts/hero-bg-context"

const partners = [
  
  {
    name: "Aptos",
    logoUrl: "/partner/Aptos.png",
    websiteUrl: "https://aptos.dev",
  },
  {
    name: "Hyperion",
    logoUrl: "/partner/hyperion.png",
    websiteUrl: "https://hyperion.example.com",
  },
  {
    name: "Amnis Finance",
    logoUrl: "/partner/Amnis.svg",
    websiteUrl: "https://amnis.example.com",
  },
  // {
  //   name: "DexScreener",
  //   logoUrl: "/partner/dexscreener.png",
  //   websiteUrl: "https://dexscreener.com",
  // },
  {
    name:"LiquidSwap",
    logoUrl: "/partner/liquidswap.png",
    websiteUrl:"https://pontem.network/liquidswap"
  }
]

export function PartnerSection() {
  const { setIsHovering } = useHeroBg()

  return (
    <section id="partners" className="relative z-20 flex flex-col justify-center py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto w-full">
        <Pill className="mb-8 scroll-animate">Integrations</Pill>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 scroll-stagger">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-soft-sage/40 scroll-animate-scale"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Image src={partner.logoUrl} alt={partner.name} width={200} height={64} className="max-h-12 md:max-h-16 w-auto" />
              <p className="text-foreground/80 font-poppins text-sm md:text-base">{partner.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}