"use client"

import Link from "next/link"

export function FooterSection() {
  return (
    <footer id="contact" className="relative z-20 py-16 bg-[#0B1418]/90 backdrop-blur-sm border-t border-white/10 px-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="scroll-animate-left">
            <h4 className="font-poppins font-semibold text-lg mb-6 text-soft-teal">Resources</h4>
            <ul className="space-y-3 text-foreground/70 text-base">
              <li>
                <Link href="/docs" className="hover:text-soft-mint transition-colors duration-200">
                  Whitepaper
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-soft-mint transition-colors duration-200">
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/docs#developer-appendix" className="hover:text-soft-mint transition-colors duration-200">
                  SDK
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-soft-mint transition-colors duration-200">
                  Audit Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soft-mint transition-colors duration-200">
                  Hyperion Integration
                </a>
              </li>
            </ul>
          </div>

          <div className="scroll-animate-right">
            <h4 className="font-poppins font-semibold text-lg mb-6 text-soft-lavender">Legal</h4>
            <ul className="space-y-3 text-foreground/70 text-base">
              <li>
                <a href="#" className="hover:text-soft-sky transition-colors duration-200">
                  Risk Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soft-sky transition-colors duration-200">
                  Fair-Launch Notice
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-foreground/50 text-sm scroll-animate">
          <p>&copy; 2025 Lilipad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
