"use client"
import dynamic from "next/dynamic"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useHeroBg } from "@/contexts/hero-bg-context"

const GL = dynamic(() => import("./gl").then(mod => ({ default: mod.GL })), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-background" />
})

export function Hero() {
  const { isHovering, setIsHovering } = useHeroBg()

  return (
    <div className="flex flex-col min-h-svh justify-between relative px-8 md:px-12">
      <div className="absolute inset-0 z-0">
        <GL hovering={isHovering} />
      </div>

      <div className="relative z-10 flex flex-col h-svh justify-center pointer-events-none">
        <div className="text-center pointer-events-auto">
          <Pill className="mb-6">BETA RELEASE</Pill>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-sans">
            Unlock your <br /> future growth
          </h1>
          <p className="font-mono text-base sm:text-lg text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
            Through perpetual investment strategies that outperform the market
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
            <Button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="max-sm:w-full"
            >
              [Launch a Token]
            </Button>
            <Button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="max-sm:w-full"
            >
              [Explore Docs]
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
