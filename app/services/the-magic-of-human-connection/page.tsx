import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Shield, Users, Handshake } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "The Magic of Human Connection - Paras Shah",
  description:
    "Build Trust. Influence with Integrity. Create Deep Impact. A practice-based workshop to build meaningful connections and navigate tough conversations.",
}

const whoFor = [
  "Lead teams, clients or people and want to handle difficult conversations better.",
  "Care about becoming more emotionally intelligent, grounded, and likable.",
  "Want to upgrade professional impact or personal relationships.",
  "Sometimes struggle with being misunderstood, dismissed, or disconnected.",
  "Want to influence ethically and lead with warmth and confidence.",
]

const modules = [
  {
    icon: Shield,
    number: "01",
    title: "The Healthy Personality",
    subtitle: "Build a calm, confident, and authentic presence.",
    points: [
      "Stop people-pleasing while remaining respectful.",
      "Become self-aware, likeable, and grounded.",
      "Stay emotionally steady under pressure.",
      "Core traits of a personality people naturally trust.",
    ],
    outcome: "A stronger sense of self and magnetic personal presence.",
  },
  {
    icon: Heart,
    number: "02",
    title: "The Most Important Law of Human Relationships",
    subtitle: "Unlock the principle that changes responses instantly.",
    points: [
      "Subtle language and body shifts to open people up.",
      "Create safety and trust fast, in conflict or collaboration.",
      "Mindset to dissolve tension in difficult moments.",
      "Why people resist or withdraw, and what to do instead.",
    ],
    outcome:
      "Transforms every interaction—from clients to family—with ethical influence.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Tools to Improve Every Relationship",
    subtitle: "Six habits that quietly transform how people feel around you.",
    points: [
      "6 science-backed habits that deepen trust and respect.",
      "Influence without force.",
      "Express appreciation that melts walls.",
      "Listen so others feel seen and heard.",
    ],
    outcome:
      "Build new bonds or heal old ones—show up better every day.",
  },
]

const format = [
  { label: "Includes", value: "Exercises, group discussions, real-life scenarios, actionable takeaways" },
  { label: "Style", value: "Practical, hands-on, interactive (zero fluff, deeply human)" },
  { label: "Duration", value: "Half-day or full-day (in-person or virtual options)" },
]

export default function HumanConnectionPage() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col">
        {/* Hero */}
        <section id="hero" className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-28 animate-hero">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground animate-up delay-100">
              Workshop
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-foreground animate-up delay-200">
              The Magic of Human Connection
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-up delay-300">
              Build Trust. Influence with Integrity. Create Deep Impact.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground animate-up delay-400">
              True human connection has become a superpower in a world full of noise and surface-level exchanges.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 animate-scale delay-500"
            >
              Enroll Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* About + Image */}
        <section id="about" className="px-6 py-24 lg:py-32 animate-fade">
          <div className="mx-auto max-w-6xl grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg img-zoom">
              <Image
                src="/images/human-connection.jpg"
                alt="The Magic of Human Connection"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="animate-up delay-200">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                About This Workshop
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Connect, Influence & Build Lasting Bonds
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Practice-based workshop inspired by Dale Carnegie principles to build meaningful connections and navigate tough conversations.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Improve communication skills and deepen empathy, leading to more meaningful personal and professional relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section id="who" className="bg-secondary px-6 py-24 lg:py-32 animate-fade">
          <div className="mx-auto max-w-6xl grid items-start gap-16 lg:grid-cols-2">
            <div className="animate-up delay-200">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Who This Is For
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                This Workshop Is for You If
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Introvert, extrovert, coach, leader, or anyone seeking deeper relationships, this is a safe space to grow.
              </p>
            </div>
            <ul className="flex flex-col gap-4 animate-up delay-300">
              {whoFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/20 hover:shadow-md"
                >
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Modules */}
        <section id="modules" className="px-6 py-24 lg:py-32 animate-fade">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center animate-up delay-200">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                What You'll Learn
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Life-Changing Modules
              </h2>
            </div>
            <div className="flex flex-col gap-12">
              {modules.map((mod) => (
                <div
                  key={mod.title}
                  className="grid items-start gap-8 rounded-2xl border border-border bg-card p-8 lg:grid-cols-3 lg:p-12 animate-scale"
                >
                  <div className="lg:col-span-1">
                    <span className="text-xs font-semibold text-muted-foreground">{mod.number}</span>
                    <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                      <mod.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-bold text-foreground">{mod.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mod.subtitle}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="flex flex-col gap-3">
                      {mod.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 rounded-lg bg-secondary p-4 text-sm italic leading-relaxed text-muted-foreground">
                      {mod.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Format */}
        <section id="format" className="bg-primary px-6 py-24 lg:py-32 animate-up delay-200">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
                Format
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Workshop Details
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {format.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 sm:flex-row sm:items-start sm:gap-6"
                >
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 sm:w-24">
                    {item.label}
                  </span>
                  <p className="text-sm leading-relaxed text-primary-foreground/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="px-6 py-24 text-center lg:py-32 animate-fade">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Become the Kind of Person Others Naturally Trust
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              This workshop helps you become the kind of person others naturally trust, open up to, and want to follow.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
