"use client"

import { Hero } from "@/components/hero"
import { WhyLilipad } from "@/components/why-lilipad"
import { HowItWorks } from "@/components/how-it-works"
import { FooterSection } from "@/components/footer-section"
import { Leva } from "leva"
import { PartnerSection } from "@/components/partner-section"

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerSection />
      <WhyLilipad />
      <HowItWorks />
      <FooterSection />
      <Leva hidden />
    </>
  )
}
