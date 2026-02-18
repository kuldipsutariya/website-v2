
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Brain, Eye, Sparkles, Flame, Lightbulb, Repeat } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "The Magic of Your Subconscious Mind - Paras Shah",
  description:
    "Unlock the hidden power of your subconscious. A life-changing workshop on visualization, affirmation techniques, and the science of belief.",
}

const learnings = [
  "How to use alpha states, suggestions & autosuggestion for transformation",
  "Repetition, emotion, and subconscious rewiring",
  "Visualization tools that actually work",
  "Mind-blowing success stories from around the world",
  "Techniques used by Olympians, entrepreneurs, and saints",
  "How faith can create real miracles in your life",
  "The science of belief and how to reprogram it",
]

const topics = [
  {
    icon: Brain,
    title: "The Hidden Superpower Inside You",
    description:
      "Your mind is your garden. Plant seeds of belief, confidence, and purpose and it shall grow miracles. Your subconscious mind is the genie; it obeys. Your conscious mind is the gatekeeper; it chooses.",
  },
  {
    icon: Eye,
    title: "Visualization Mastery",
    description:
      "\"All things are created twice: first in the mind, then in reality.\" Learn to relax into alpha state, project your dream like a movie, use all senses, feel it deeply, and release to let the universe deliver.",
  },
  {
    icon: Sparkles,
    title: "The Laws That Govern Miracles",
    description:
      "Explore the master laws of the universe: Cause & Effect, Gestation, and Visualization. Real-life transformations from Michael Jackson to Norman Cousins to Roger Bannister.",
  },
  {
    icon: Flame,
    title: "Faith: Your Inner Alchemy",
    description:
      "Faith fuels religions, relationships, revolutions and results. Faith is 100% belief. Even 1% doubt equals 100% failure. \"If you have faith as small as a mustard seed, you can move mountains.\"",
  },
  {
    icon: Repeat,
    title: "Affirmation Techniques",
    description:
      "Quick Affirmation for 30-second mindset shifts. Autogenic Conditioning to relax and rewire. Card Method to carry affirmations everywhere. Written Affirmation for daily journaling your future as NOW.",
  },
  {
    icon: Lightbulb,
    title: "Self-Programming",
    description:
      "Change your thoughts, shift your emotions, act differently, transform your life. The subconscious accepts what you repeatedly tell it with emotion. Stop forcing. Start flowing.",
  },
]

const legends = [
  { name: "Michael Jackson", story: "Visualized greatness and became history." },
  { name: "Norman Cousins", story: "Laughed his way out of disease." },
  { name: "Roger Bannister", story: "Shattered the 4-minute mile and belief limits." },
]

export default function SubconsciousMindPage() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col">
        {/* Hero */}
        <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-28 animate-hero">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground animate-up delay-100">
              Workshop
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-foreground animate-up delay-200 text-balance">
              The Magic of Your Subconscious Mind
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-up delay-300">
              Unlock the hidden power of your subconscious. {"\""}You become what you believe.{"\""}
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 animate-scale"
            >
              Join This Workshop <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* About + Image */}
        <section className="px-6 py-24 lg:py-32 animate-fade">
          <div className="mx-auto max-w-6xl grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-up delay-100">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                About This Workshop
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                A Life-Changing Journey Into the Secrets of Your Mind
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Feeling stuck? Struggling with health, money, relationships, or confidence? This workshop helps anyone, at any stage of life, master the ONE thing that controls everything: your subconscious mind.
              </p>
              <div className="mt-8 flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-foreground">Expect:</h3>
                <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    True Empowerment, not motivation that fades.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Deep Healing, not hype.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    Practical Tools, not theory.
                  </li>
                </ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg img-zoom animate-scale">
              <Image
                src="/images/subconscious-mind.jpg"
                alt="The Magic of Your Subconscious Mind"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="bg-secondary px-6 py-24 lg:py-32 animate-fade">
          <div className="mx-auto max-w-6xl grid items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Curriculum
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                What You'll Learn
              </h2>
            </div>
            <ul className="flex flex-col gap-4">
              {learnings.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/20 hover:shadow-md animate-up delay-100"
                >
                  <Brain className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Topics */}
        <section className="px-6 py-24 lg:py-32 animate-up delay-200">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Deep Dive
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Workshop Topics
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <div
                  key={topic.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg animate-scale"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                    <topic.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{topic.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legends */}
        <section className="bg-primary px-6 py-24 lg:py-32 animate-fade">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
                Believe Like the Legends
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Belief Isn't Magic. Belief Is the Magic.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {legends.map((legend) => (
                <div
                  key={legend.name}
                  className="flex flex-col gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center animate-up delay-100"
                >
                  <h3 className="text-sm font-semibold text-primary-foreground">{legend.name}</h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/70">{legend.story}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 text-center lg:py-32 animate-scale">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Awaken the Magic Within
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {"\""}Thoughts are things... Choose wisely.{"\""} Let your subconscious work FOR you. Stop forcing. Start flowing.
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
