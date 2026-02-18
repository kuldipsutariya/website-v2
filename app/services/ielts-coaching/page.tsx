
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  AlertTriangle,
  Target,
  BookOpen,
  Globe,
  Users,
  Zap,
  Brain,
} from "lucide-react"

export const metadata: Metadata = {
  title: "IELTS Coaching - Paras Shah",
  description:
    "Get your desired IELTS bands on the first attempt with 16+ years of expert coaching from Paras Shah. Personalized strategies for Reading, Writing, Listening, and Speaking.",
}

const challenges = [
  { title: "Spelling & Grammar", description: "Lack of vocabulary leading to inability to express thoughts articulately." },
  { title: "Cohesive Structuring", description: "Difficulty in structuring answers in a logical, cohesive manner that scores higher bands." },
  { title: "Using the Right Tone", description: "Inability to adapt the appropriate tone for different question types and contexts." },
  { title: "Using Collocations", description: "Missing natural word combinations that native speakers use effortlessly." },
  { title: "Clarity of Thought", description: "Struggling to organize ideas clearly under exam time pressure." },
]

const benefits = [
  {
    icon: Target,
    title: "Comprehensive Practice",
    description:
      '"PRECISE practice makes a man perfect". Quantify your skills, identify gaps, and improve efficiently for top scores.',
  },
  {
    icon: BookOpen,
    title: "Strategic Planning",
    description:
      "Analyze strengths and weaknesses, plan meticulously, and maximize your results with targeted practice.",
  },
  {
    icon: Zap,
    title: "Benchmarking with the Best",
    description:
      '"If you aim higher than you expect, you could reach higher than you dreamed." Practice for 8 bands to secure 7.',
  },
  {
    icon: Brain,
    title: "Learning from Experience",
    description:
      "16+ years of IELTS teaching experience, sharing proven strategies to help you achieve top bands every time.",
  },
  {
    icon: Globe,
    title: "English-speaking Culture",
    description:
      "Learn to think like a native speaker. Benefit from my decade-long experience living in Australia.",
  },
  {
    icon: Users,
    title: "Cross-training & Peak Performance",
    description:
      "Learn how to enter a peak performance state for exams and accelerate your learning effectively.",
  },
]

export default function IELTSCoachingPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24 lg:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            IELTS Coaching
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Get Your Desired Bands on the First Attempt
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            IELTS exams can be stressful, but with the right guidance and personalized strategy, achieving your dream score is possible.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            Start Your IELTS Journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/images/ielts-coaching.jpg"
              alt="IELTS Coaching classroom environment"
              width={700}
              height={500}
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              My Story
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              16 Years in the IELTS Journey
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
              <p>I started my IELTS journey sixteen years back. Sharing my experience helps hundreds of students achieve their desired bands.</p>
              <p>Living abroad for almost a decade gave me insight into the nuances of English-speaking cultures and learning methods.</p>
              <p>Today, I guide students from across the world, including Russia, Belarus, New Zealand, Canada, Australia, and the USA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-primary px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-16">
            <div className="mb-4 flex items-center justify-center gap-2">
              <AlertTriangle className="h-4 w-4 text-primary-foreground/60" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
                Common Challenges
              </p>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-primary-foreground">
              What Holds Students Back
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c, i) => (
              <div
                key={c.title}
                className="flex flex-col gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 transition-all duration-300 hover:border-primary-foreground/20"
              >
                <span className="text-xs font-semibold text-primary-foreground/40">0{i + 1}</span>
                <h3 className="text-lg font-semibold text-primary-foreground">{c.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Why Choose Us
          </p>
          <h2 className="mb-8 font-serif text-3xl font-bold sm:text-4xl">
            How We Help You Succeed
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <b.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary px-6 py-24 text-center lg:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Ready to Crack IELTS on Your First Attempt?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Let's have a chat or a detailed discussion about your IELTS exam challenges. I am here to guide you.
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
