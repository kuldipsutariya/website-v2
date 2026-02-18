import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Mic, Users, Brain, BookOpen, Volume2, Pause, Sparkles, PenTool } from "lucide-react"

export const metadata: Metadata = {
  title: "Speak to Prosper - Paras Shah",
  description:
    "The ultimate key to living a confident life. Master public speaking, communication skills, and persuasion techniques with expert training from Paras Shah.",
}

const outcomes = [
  "Become an effective marketer.",
  "Inspire & move hearts and minds.",
  "Build & foster thriving relationships with all.",
  "Positively influence the lives of your dear ones.",
  "Gain extraordinary confidence & lead an inspired life.",
]

const modules = [
  {
    icon: Mic,
    title: "Why Public Speaking?",
    description:
      "Public speaking brings a host of advantages. Your confidence skyrockets, influence and persuasion skills are refined, and you can inspire others. It develops cognitive skills, critical thinking, and enhanced listening ability.",
  },
  {
    icon: Sparkles,
    title: "Busting the Myth: Born Speaker",
    description:
      "Not all influential leaders are \"born with\" excellent communication skills. They learnt it and excelled at it. T.Harv Eker once said, \"Every master was once a disaster.\" Public speaking is a skill you can learn.",
  },
  {
    icon: Brain,
    title: "Overcome Stage Fear",
    description:
      "Build solid confidence to overcome the 'stage fear'. After attending this module, you can communicate your thoughts with clarity and charisma, no matter how large the gathering is.",
  },
  {
    icon: BookOpen,
    title: "Ancient Techniques",
    description:
      "Learn ancient persuasion and communication techniques that have proved effective for more than 2000 years. Master the art of body language, the silent but most crucial part of communication.",
  },
  {
    icon: PenTool,
    title: "How to Prepare & Curate Content",
    description:
      "Learn time-tested techniques for opening and closing communications pensively, keeping audiences engaged, doing adequate research, and curating content that engages from start to end.",
  },
  {
    icon: Pause,
    title: "The Power of Pause",
    description:
      "\"Music is the space between the notes.\" The space between words allows them to resonate and reach their full measure. Learn to unleash the real power of pause aptly and moderately.",
  },
  {
    icon: Volume2,
    title: "Improving the Voice",
    description:
      "Yes, you can improve your voice. The module teaches a century-old strategy to improve your voice by helping you gain more control over your vocal cords through cross-training methods.",
  },
]

export default function SpeakToProsperPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24 lg:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Communication Training
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Speak to Prosper
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The ultimate key to living a confident life. You can have all the skills in the world, but without communication skills, all other skills become redundant.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            Transform Your Speaking
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Questions & Image */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Does This Sound Familiar?
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Communication Changes Everything
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Is your relationship in the doldrums due to a lack of communication?",
                "Do you feel deprived of a promotion because your manager can't recognize your efforts?",
                "Do you feel people don't listen to you?",
                "Do you feel you are often misunderstood?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-relaxed text-foreground/80">
              This training module is specially designed for those who wish to hone their communication skills. Speaking persuasively on your feet is a skill anyone can learn.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/images/speak-to-prosper.jpg"
              alt="Public speaking mastery training"
              width={700}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-primary px-6 py-16 text-center">
        <blockquote className="mx-auto max-w-3xl font-serif text-xl font-medium italic leading-relaxed text-primary-foreground sm:text-2xl">
          "Your goal should be to be in the top 10% of communicators. Almost everyone who is in the top 10% today started in the bottom 10%."
        </blockquote>
        <cite className="mt-4 block text-sm not-italic tracking-widest text-primary-foreground/60 uppercase">
          Brian Tracy
        </cite>
      </section>

      {/* Outcomes */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Results
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Speak Masterfully So You Can
            </h2>
          </div>
          <ul className="flex flex-col gap-4">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/20 hover:shadow-md">
                <Mic className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-secondary px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Curriculum
            </p>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl text-foreground">
              Training Modules
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <div
                key={mod.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <mod.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{mod.title}</h3>
                <p className="text-sm text-muted-foreground">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center lg:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl text-foreground">
            If You Wish to Be an Impeccable Speaker, Nothing Can Stop You
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Except the limits you set for yourself. Start your speaking transformation today.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
