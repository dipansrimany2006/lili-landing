"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface HeroBgContextType {
  isHovering: boolean
  setIsHovering: (value: boolean) => void
}

const HeroBgContext = createContext<HeroBgContextType | undefined>(undefined)

export function HeroBgProvider({ children }: { children: ReactNode }) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <HeroBgContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </HeroBgContext.Provider>
  )
}

export function useHeroBg() {
  const context = useContext(HeroBgContext)
  if (context === undefined) {
    throw new Error("useHeroBg must be used within a HeroBgProvider")
  }
  return context
}
