import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

const navItems = [
  { label: "Why Us", href: "#why-us" },
  { label: "How it works", href: "#how-it-works" },
  { label: "docs", href: "#docs" }
]

export const Header = () => {
  return (
    <div className="fixed z-50 py-4 md:py-8 top-0 left-0 w-full px-8 md:px-12 backdrop-blur-xs">
      <header className="flex items-center justify-between">
        <Link href="/">
          <Logo className="w-[100px] md:w-[120px]" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {navItems.map((item) => (
            <Link
              className="uppercase inline-block font-mono text-base text-foreground/60 hover:text-foreground duration-150 transition-colors ease-out"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-base text-primary hover:text-primary/80"
          href="/#sign-in"
        >
          Get Started
        </Link>
        <MobileMenu />
      </header>
    </div>
  )
}
