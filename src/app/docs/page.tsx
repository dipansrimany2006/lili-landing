"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronDown, ArrowLeft, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: `The early stages of a Web3 project are the most fragile and the most defining. Yet, even within a high-performance ecosystem like Aptos, launching a new token responsibly remains a surprisingly difficult task. Most teams lack the technical depth to build secure vesting systems in Move, manage liquidity safely, or structure fair and transparent token sales.

At the same time, communities struggle to trust new assets when insiders hold privileged access or when launch mechanics remain opaque. A single misstep, such as an unlocked treasury or an exploitable contract, can permanently erode trust.

Lilipad is built to address this gap on Aptos. It is a modular and self-service platform designed around one central idea: projects deserve a fair, transparent, and predictable way to launch, and communities deserve the confidence that comes with a fully trustless launch process.`,
  },
  {
    id: "philosophy",
    title: "Philosophy: A Home for Fair Launches",
    content: `Fairness is the cornerstone of Lilipad. The platform is not just a collection of tools but a philosophy of how crypto projects should begin. The fair launch movement emerged to challenge an environment dominated by opaque token allocations and insider advantages. Lilipad builds on this philosophy by embedding fairness directly into the architecture of the application.

A fair launch on Lilipad means that the rules of participation are the same for everyone. It ensures that token distribution mechanics are verifiable and predictable, and that the early liquidity of a token cannot be quietly withdrawn or manipulated.

Instead of giving power to privileged actors, Lilipad guarantees that every token path—from minting to vesting to liquidity provision—happens in a transparent and trustless manner secured by the Aptos blockchain. At the same time, the platform respects the autonomy of builders. Lilipad does not force a specific launch sequence. Projects are independent entities free to use only the Move modules they need in the order they choose.`,
  },
  {
    id: "project-identity",
    title: "The Role of Project Identity",
    content: `Project identity on Lilipad is intentionally kept off-chain. Instead of storing metadata directly on the blockchain, Lilipad allows creators to establish project identity through signed messages. This proves wallet ownership without incurring unnecessary gas costs or bloating the network state.

A project can define its name, brand, mission, and documentation off-chain, while Lilipad verifies authenticity through cryptographic signatures.

This approach is flexible, fast, and builder-friendly. Teams can update their project profiles organically, evolve their documentation, or migrate their metadata to decentralized storage without touching the blockchain. Developers can optionally anchor their project identity to the chain through a small on-chain hash commitment, but this is not required.

Lilipad views identity as a social element of the launch process rather than a technical one, ensuring the tools remain lightweight and accessible to all Aptos users.`,
  },
  {
    id: "launch-lifecycle",
    title: "The Launch Lifecycle",
    content: `A project journey on Lilipad follows a natural lifecycle but not a rigid sequence. Every component can stand alone yet connects elegantly with the next. Projects may create only a vesting schedule or only a liquidity lock. They may mint a token without running a sale or register a project identity without ever launching a token. The platform supports experimentation and partial usage.

For projects that wish to run a full fair launch, the lifecycle typically unfolds in four stages:

1. **Token Creation** — Mint or import your token
2. **Token Sale** — Run a transparent public sale
3. **Vesting Distribution** — Release tokens gradually over time
4. **Liquidity Protection** — Lock LP tokens to prevent rug pulls

Each stage is powered by independent modules in the Lilipad Move contract suite. Tokens are kept in escrow during sales; APT raised through sales is locked until the sale ends; vesting mechanisms release tokens gradually according to strict on-chain rules; and liquidity locks ensure that neither developers nor malicious actors can withdraw liquidity prematurely.

This lifecycle creates a transparent journey that community members can easily follow on the blockchain explorer. Fairness is not promised—it is provable.`,
  },
  {
    id: "token-minting",
    title: "Token Launch and Minting",
    content: `At the earliest stage of development, Lilipad provides a simple interface for minting a new asset. This feature is optional, as some projects may bring their own token or use an existing asset. However, for teams that wish to start from scratch, Lilipad ensures that token minting is fully transparent with no backdoors or hidden supply manipulations.

The token factory allows creators to define essential parameters:
- **Total Supply** — Define your token's maximum supply
- **Decimals** — Set precision for your token
- **Distribution Destination** — Compatible with the Aptos Token Standard

Tokens can be minted into the project wallet, audited by the community, and used immediately in a sale or vesting schedule. This simplicity helps teams move from idea to asset deployment in minutes while providing the community with clear and trustworthy data.`,
  },
  {
    id: "launchpad",
    title: "The Launchpad: Transparent Sales",
    content: `The heart of Lilipad is its launchpad. Unlike traditional token sale platforms, the Lilipad launchpad is designed to enforce fairness through its architecture rather than through policy.

When a project creates a sale, it reserves a specific amount of tokens in a secure on-chain escrow. These tokens cannot be touched, moved, or reclaimed until the Move logic dictates.

**How It Works:**

1. **Purchase** — Participants purchase tokens using APT, and a precise calculation determines the number of tokens they receive.

2. **Vesting Stream** — Instead of releasing tokens instantly (which historically creates problems like early dumps or price manipulation), Lilipad converts each purchase into a vesting stream. Buyers receive their tokens gradually over time, enforced entirely by the Move runtime.

3. **Sale End** — The sale continues until its defined end time. When the soft cap is reached, the system emits an event notifying the project and the community.

4. **Liquidity** — At this stage, the project can decide to list or migrate tokens to Hyperion DEX and optionally lock the resulting liquidity tokens on Lilipad to prevent early rug pulls.

5. **Withdrawal** — When the sale ends, the project owner can withdraw the raised APT, again fully governed by transparent on-chain rules.`,
  },
  {
    id: "vesting",
    title: "Vesting and Long Duration Distribution",
    content: `Vesting is one of the most essential components of a fair launch, and Lilipad treats it as such. The platform includes a manual vesting engine that any project can use independently of sales.

Whether distributing tokens to early investors, vesting tokens for contributors, or managing internal team allocations, the vesting module ensures accountability.

**Vesting Stream Parameters:**
- **Beneficiary** — The wallet receiving tokens
- **Token** — The asset being vested
- **Total Amount** — Full allocation to be distributed
- **Start Date** — When vesting begins
- **End Date** — When vesting completes

Lilipad holds the tokens in a dedicated escrow bucket and releases them gradually based on the Aptos blockchain timestamp. Beneficiaries can claim their unlocked portions at any time.

**Immutable Rules:** No one—not even the stream creator—can alter the vesting rules once the stream is created. This structure reinforces responsible tokenomics and avoids the pitfalls of manual multisig managed vesting.`,
  },
  {
    id: "liquidity-locking",
    title: "Liquidity Locking and Hyperion Integration",
    content: `Liquidity is the lifeblood of any token in the DeFi environment. It is also a frequent vector for abuse where developers pull liquidity after creating a pool. To counter this, Lilipad provides a locking mechanism that projects can use voluntarily but effectively.

**How LP Locking Works:**

1. After creating a liquidity pool on Hyperion, projects receive an LP position reference.

2. They can then lock this reference on Lilipad by specifying an unlock date.

3. The locking module prevents the LP position from being accessed until the specified time has passed.

This public commitment establishes confidence that liquidity is stable and not at risk of withdrawal.

**Additional Features:**
- Lock fungible tokens for treasury allocations
- Secure long-duration incentive pools
- No reliance on trust in a central authority`,
  },
  {
    id: "escrow-architecture",
    title: "Escrow Architecture and Security",
    content: `Central to Lilipad is its escrow architecture which leverages the Aptos Move resource model. Each module—sales, vesting, and locking—maintains its own independent escrow bucket.

**Triple Escrow System:**

| Escrow Type | Purpose |
|-------------|---------|
| **Sale Escrow** | Holds project tokens during active sales |
| **Vesting Escrow** | Stores tokens for gradual distribution |
| **Lock Escrow** | Secures LP positions and treasury tokens |

**Security Guarantees:**

- **State Isolation** — Tokens are never mixed between domains. Sale participants are isolated from vesting deposits, and locked liquidity is never commingled with sale supply.

- **Atomic Transitions** — When a buyer participates in a sale, tokens are transferred from Sale Escrow to Vesting Escrow in a single atomic transaction. Move guarantees that this operation either succeeds completely or reverts entirely.

- **No Double Spending** — The architecture prevents double spending, enforces strict ownership rules, and guarantees the integrity of the process.`,
  },
  {
    id: "developer-appendix",
    title: "Developer Appendix",
    subsections: [
      {
        id: "move-safety",
        title: "Move Native Safety and Resource Model",
        content: `The foundation of Lilipad rests on the Move smart contract language, utilizing a resource-oriented execution model naturally suited to custody-centric applications.

**Linear Logic:** Every token, escrow bucket, vesting stream, and lock entry is represented as a Move resource. These resources cannot be copied, implicitly destroyed, or reassigned. This fundamental guarantee prevents entire classes of vulnerabilities, such as double spending or accidental token burning.

**Module Namespace Control:** Resources are stored within a carefully controlled module namespace, ensuring that only the defining module can modify the internal state of a sale or vesting object.`,
      },
      {
        id: "data-structures",
        title: "Scalable Data Structures",
        content: `Lilipad is designed to scale horizontally using the Aptos Table standard, avoiding the congestion often associated with linear vector storage.

**Table Implementation:** Each module operates within the framework of separate resource groups and explicitly typed Table structures. This allows the protocol to support an unlimited number of simultaneous projects without degrading gas performance.

**Identifier Management:** Sale records, stream records, and lock records are indexed by unique identifiers (SaleId, StreamId) generated from global counter resources. These counters are protected by private access modifiers, ensuring no external actor can forge identifier values.`,
      },
      {
        id: "precision-arithmetic",
        title: "Precision Arithmetic and Pricing",
        content: `The sale logic utilizes rigorous math standards to prevent the rounding errors and overflow attacks common in DeFi.

**Overflow Protection:** All calculations use unsigned 128-bit integers (u128). Since Move prohibits silent overflow, developers are forced to handle boundary conditions explicitly.

**Fixed Point Precision:** The system uses a base precision factor to ensure price calculations remain stable without relying on floating point approximations. APT deposits are multiplied by a precision constant before division, ensuring that token distribution remains accurate regardless of the decimal scale.`,
      },
      {
        id: "vesting-logic",
        title: "Deterministic Vesting Logic",
        content: `Vesting is calculated using a pure arithmetic formula based on blockchain timestamps, ensuring auditability and predictability.

**Linear Unlock:** The system records the start time, end time, and total allocation. At the moment of a claim, the contract computes the unlocked amount as a linear proportion of the time elapsed.

**State Independence:** The formula depends solely on the on-chain timestamp and the immutable parameters of the stream, making it immune to external environmental manipulation.`,
      },
      {
        id: "hyperion-integration",
        title: "Hyperion Integration and Opaque Locking",
        content: `Liquidity locking is designed for flexibility and future compatibility with the Hyperion DEX.

**Opaque Byte Vectors:** Lilipad records LP position references as opaque byte vectors rather than decoding them on-chain. This allows the protocol to lock complex or evolving LP position types without requiring contract upgrades.

**Time-Based Enforcement:** Once an LP reference is recorded, the lock module enforces time-based restrictions on the underlying fungible components, preventing withdrawal until the specified maturity date.`,
      },
      {
        id: "events",
        title: "Event Emission and Indexing",
        content: `The protocol emits structured events for every critical state transition, enabling easy integration for frontend applications and analytics.

**Comprehensive Coverage:** Events are emitted for sale creation, deposits, purchases, stream formation, claims, and locks.

**Indexer Friendly:** Event schemas are designed to allow off-chain indexers to reconstruct the full history of a project launch without performing complex state traversals.`,
      },
      {
        id: "parallel-execution",
        title: "Parallel Execution Optimization",
        content: `Lilipad is optimized to leverage the Aptos Block-STM execution engine.

**Non-Overlapping State:** Because each sale entry and vesting stream is isolated within its own storage slot in the Table architecture, transactions for different projects or different buyers rarely touch the same memory location.

**High Throughput:** This isolation allows the Aptos runtime to execute high volumes of purchase and claim transactions in parallel, resulting in faster settlement and lower gas contention during high-demand launches.`,
      },
    ],
  },
]

function TableOfContents({
  activeSection,
  onSectionClick,
}: {
  activeSection: string
  onSectionClick: (id: string) => void
}) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["developer-appendix"])

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  return (
    <nav className="space-y-1">
      {sections.map((section) => (
        <div key={section.id}>
          <button
            onClick={() => {
              if (section.subsections) {
                toggleSection(section.id)
              }
              onSectionClick(section.id)
            }}
            className={cn(
              "w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between",
              activeSection === section.id
                ? "bg-primary/20 text-primary"
                : "text-foreground/70 hover:text-foreground hover:bg-white/5"
            )}
          >
            <span>{section.title}</span>
            {section.subsections && (
              <span className="text-foreground/50">
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </span>
            )}
          </button>
          {section.subsections && expandedSections.includes(section.id) && (
            <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-2">
              {section.subsections.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => onSectionClick(sub.id)}
                  className={cn(
                    "w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all duration-200",
                    activeSection === sub.id
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {sub.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

function ContentSection({ section }: { section: typeof sections[0] }) {
  if (section.subsections) {
    return (
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">{section.title}</h1>
          <p className="text-foreground/70 text-lg">
            Technical documentation for developers building on Lilipad.
          </p>
        </div>
        {section.subsections.map((sub) => (
          <div key={sub.id} id={sub.id} className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-poppins font-semibold mb-4 text-primary">
              {sub.title}
            </h2>
            <div className="prose prose-invert prose-lg max-w-none">
              {sub.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed mb-4">
                  {paragraph.split("**").map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="text-foreground font-semibold">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div id={section.id} className="scroll-mt-24">
      <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-8">{section.title}</h1>
      <div className="prose prose-invert prose-lg max-w-none space-y-6">
        {section.content.split("\n\n").map((paragraph, i) => {
          // Check if it's a list
          if (paragraph.includes("**") && paragraph.includes("—")) {
            const items = paragraph.split("\n").filter(Boolean)
            return (
              <div key={i} className="space-y-3 my-6">
                {items.map((item, j) => {
                  const parts = item.split("**")
                  return (
                    <div key={j} className="flex gap-3">
                      <span className="text-primary">-</span>
                      <p className="text-foreground/80">
                        {parts.map((part, k) =>
                          k % 2 === 1 ? (
                            <strong key={k} className="text-foreground font-semibold">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    </div>
                  )
                })}
              </div>
            )
          }

          // Check for numbered list
          if (/^\d\./.test(paragraph.trim())) {
            const items = paragraph.split("\n").filter(Boolean)
            return (
              <div key={i} className="space-y-4 my-6 ml-4">
                {items.map((item, j) => {
                  const parts = item.split("**")
                  return (
                    <div key={j} className="flex gap-4">
                      <span className="text-primary font-bold text-lg">{j + 1}.</span>
                      <p className="text-foreground/80">
                        {parts.map((part, k) =>
                          k % 2 === 1 ? (
                            <strong key={k} className="text-foreground font-semibold">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    </div>
                  )
                })}
              </div>
            )
          }

          // Regular paragraph
          return (
            <p key={i} className="text-foreground/80 leading-relaxed text-lg">
              {paragraph.split("**").map((part, j) =>
                j % 2 === 1 ? (
                  <strong key={j} className="text-foreground font-semibold">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentSection = sections.find((s) => s.id === activeSection) || sections[0]

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Mobile menu toggle */}
      <div className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-white/10 px-4 py-3">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-2 text-foreground/70 hover:text-foreground"
        >
          <ChevronRight
            className={cn("w-5 h-5 transition-transform", mobileMenuOpen && "rotate-90")}
          />
          <span className="font-medium">{currentSection.title}</span>
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-72 bg-background/95 backdrop-blur-lg border-r border-white/10 z-30 transition-transform lg:translate-x-0 overflow-y-auto",
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="p-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>

            <div className="mb-6">
              <h2 className="text-xl font-poppins font-bold text-primary">Lilipad Docs</h2>
              <p className="text-foreground/50 text-sm mt-1">Whitepaper v1</p>
            </div>

            <TableOfContents
              activeSection={activeSection}
              onSectionClick={(id) => {
                setActiveSection(id)
                setMobileMenuOpen(false)
              }}
            />

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="/LilipadWhitepaperv1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-h-screen lg:ml-0 pt-16 lg:pt-0">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
            <ContentSection section={currentSection} />

            {/* Navigation */}
            <div className="flex justify-between mt-16 pt-8 border-t border-white/10">
              {sections.findIndex((s) => s.id === activeSection) > 0 && (
                <button
                  onClick={() => {
                    const idx = sections.findIndex((s) => s.id === activeSection)
                    setActiveSection(sections[idx - 1].id)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{sections[sections.findIndex((s) => s.id === activeSection) - 1].title}</span>
                </button>
              )}
              <div className="flex-1" />
              {sections.findIndex((s) => s.id === activeSection) < sections.length - 1 && (
                <button
                  onClick={() => {
                    const idx = sections.findIndex((s) => s.id === activeSection)
                    setActiveSection(sections[idx + 1].id)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
                >
                  <span>{sections[sections.findIndex((s) => s.id === activeSection) + 1].title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
