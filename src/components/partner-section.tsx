"use client"

import Image from "next/image"
import { Pill } from "./pill"
import { useHeroBg } from "@/contexts/hero-bg-context"

const partners = [
  {
    name: "Partner One",
    logoUrl: "/partners/partner-one.png",
    websiteUrl: "https://partnerone.com",
  },
  {
    name: "Partner Two",
    logoUrl: "/partners/partner-two.png",
    websiteUrl: "https://partnertwo.com",
  }
]

export function PartnerSection() {
  const { setIsHovering } = useHeroBg()

  return (
    <section id="partners" className="relative z-20 flex flex-col justify-center py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto w-full">
        <Pill className="mb-8">Our Partners</Pill>
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 hover:bg-white/10"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Image src={partner.logoUrl} alt={partner.name} width={200} height={64} className="max-h-16 w-auto" />
              <p>{partner.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}