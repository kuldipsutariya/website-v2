import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Award, Users, Globe } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "The IELTS Magic Book - Paras Shah",
  description:
    "Paras Shah's #1 bestseller 'The IELTS Magic: Your Key to IELTS Success'. Student-friendly, jargon-free strategies for cracking the IELTS exam.",
}

const highlights = [
  {
    icon: Award,
    title: "#1 Bestseller",
    description: "The IELTS Magic: Your Key to IELTS Success has helped hundreds of students pass with flying colours.",
  },
  {
    icon: BookOpen,
    title: "Student-Friendly",
    description: "Jargon-free, to the point, and designed to equip you strategically for the IELTS exam.",
  },
  {
    icon: Users,
    title: "12+ Years of Experience",
    description: "After 12 years of IELTS coaching experience and 18 years in the IELTS fraternity, distilled into one book.",
  },
  {
    icon: Globe,
    title: "Proven Strategies",
    description: "Focus Practice and Symbol of Success - two effective strategies that work wonders every single time.",
  },
]

export default function IELTSMagicBookPage() {
  return (
    <div className="flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Book
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            The IELTS Magic Book
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Does IELTS intimidate you? Here is the much-required respite you were looking for.
          </p>
          <a
            href="https://www.amazon.in/IELTS-Magic-Your-Success-Paras/dp/9359807486"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            Buy Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Book + Description */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
                <Image
                  src="/images/book-cover.jpg"
                  alt="The IELTS Magic Book by Paras Shah"
                  width={500}
                  height={650}
                  className="h-auto w-full max-w-sm object-cover"
                />
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                About the Book
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Your Key to IELTS Success
              </h2>
              <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  There are many books on how to crack the test, but very few on how to conquer your mind before preparing for the test, which, in many ways, determines your future.
                </p>
                <p>
                  {"Paras Shah's"} #1 bestseller will help you in more than one way to prepare for the exam. For over four decades, IELTS has been setting new benchmarks for English language testing, widely accepted by governments, employers, and thousands of universities across the globe.
                </p>
                <p>
                  This book is penned by a student himself who has first-hand experience in preparing and appearing for the test. After 12 years of IELTS coaching experience and 18 years in the IELTS fraternity, he vouches for two effective strategies: Focus Practice and Symbol of Success, which work wonders every single time.
                </p>
                <p>
                  This book is student-friendly, jargon-free, and to the point of equipping you for the exam. Learn about the preparation strategies that have helped hundreds of students overcome the barriers and pass the exam with flying colours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-secondary px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Why This Book
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              What Makes It Different
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="bg-primary px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
            About the Author
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Paras Shah
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-primary-foreground/80">
            Paras Shah is an IELTS coach who has helped innumerable students pass their exams. His knack for teaching led him to participate in the IDP Australia Teacher Training Programme during his stay in Australia. Through online and in-person knowledge sessions, he has guided hundreds of students to approach the IELTS exam strategically and get the desired results. This book is {"Paras'"} humble attempt to reach a wider student base to make IELTS preparation student-friendly, strategic, and accessible.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center lg:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ready to Conquer IELTS?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Get your copy of The IELTS Magic Book and unlock the strategies that have helped hundreds achieve their dream scores.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.amazon.in/IELTS-Magic-Your-Success-Paras/dp/9359807486"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
            >
              Buy Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
