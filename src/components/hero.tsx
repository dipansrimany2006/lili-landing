"use client"
import dynamic from "next/dynamic"
import Link from "next/link"
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
          <Pill className="mb-8 animate-fade-in-up">Live On Aptos</Pill>
          <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-poppins font-semibold tracking-tight leading-[0.9] animate-fade-in-up animation-delay-100">
            <span className="inline-block px-4 py-1 bg-black/40 backdrop-blur-sm rounded-lg">Launch slow.</span>
            <br />
            <span className="inline-block px-4 py-1 bg-black/40 backdrop-blur-sm rounded-lg mt-2">Launch clean.</span>
            <br />
            <span className="inline-block px-4 py-1 bg-black/40 backdrop-blur-sm rounded-lg mt-2 text-primary">Launch unbreakable.</span>
          </h1>
          <p className="font-poppins text-lg sm:text-xl text-foreground/70 text-balance mt-10 max-w-[500px] mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Aptos-native fair launches for builders who choose transparency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14 animate-fade-in-up animation-delay-300">
            <Link href="https://applilipadlaunch.vercel.app/">
            <Button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="max-sm:w-full text-base px-8 py-6"
            >
              [Launch Project]
            </Button>
            </Link>
            <Link href="/docs">
              <Button
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="max-sm:w-full text-base px-8 py-6"
              >
                [Explore Docs]
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
