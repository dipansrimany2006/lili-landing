"use client"

export function FooterSection() {
  return (
    <footer id="contact" className="relative z-20 py-16 bg-black/80 border-t border-border px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="font-sentient mb-4">Resources</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  SDK
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Audit Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Hyperion Integration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sentient mb-4">Legal</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Risk Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Fair-Launch Notice
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-foreground/50 text-xs">
          <p>&copy; 2025 Lilipad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
