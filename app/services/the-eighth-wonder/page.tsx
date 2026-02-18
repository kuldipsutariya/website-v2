import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Lightbulb, Compass, Sprout, Mountain } from "lucide-react"

export const metadata: Metadata = {
  title: "The Eighth Wonder - Paras Shah",
  description:
    "A little can change a lot. The Eighth Wonder workshop equips you with the skills to master the system, develop unshakable confidence, and achieve lasting success.",
}

const questions = [
  "Are you intimidated by challenges when you try to achieve something?",
  "Do you feel bored because of a plateau in your relationship?",
  "Do you feel some unseen force controls your life, and you are helpless?",
  "Have you tried to change yourself for the better and failed?",
  "Do you feel stuck when you try to change a habit?",
]

const seminars = [
  {
    icon: Compass,
    title: "Understanding the Fundamentals of Success",
    description:
      "There is no magic bullet, no secret formula, or no quick fix to success. The seminar helps you carve your path rather than looking for shortcuts. Be Consistent, Work Harder, and Work Smarter. You can beat them.",
  },
  {
    icon: Lightbulb,
    title: "Learning the Importance of Choice",
    description:
      "Our choices make us who we are. Choices are at the root of every aspect of your life. Each choice starts with an action, a behaviour that, over time becomes a habit. This seminar helps you get your fundamentals right.",
  },
  {
    icon: Sprout,
    title: "Cultivating Habits That Will Take You a Long Way",
    description:
      "Almost 95% of everything you think, feel, do, and achieve is the result of habit. This seminar will help you cultivate habits that push your growth further, and help you identify and break free from bad habits.",
  },
  {
    icon: Mountain,
    title: "Learning to Aim High",
    description:
      "\"The greater danger is not that our aim is too high and we miss it, but that it is too low and we hit it.\" The Eighth Wonder directs one to have high expectations, set achievable goals and push limits.",
  },
]

export default function EighthWonderPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24 lg:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Workshop
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            The Eighth Wonder
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A little can change a lot. A manual for success that equips you with the skills to master the system.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            Join the Workshop
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-primary px-6 py-16 text-center">
        <blockquote className="mx-auto max-w-3xl font-serif text-xl font-medium italic leading-relaxed text-primary-foreground sm:text-2xl">
          "Compound interest is the eighth wonder of the world. He who understands it, earns it... he who doesn't, pays it."
        </blockquote>
        <cite className="mt-4 block text-sm not-italic tracking-widest text-primary-foreground/60 uppercase">
          Albert Einstein
        </cite>
      </section>

      {/* Is This For You + Image */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Is This for You?
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              If Any of These Resonate
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              {questions.map((q) => (
                <li key={q} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base font-medium leading-relaxed text-foreground">
              If the answer to any of the above is yes, this workshop is for you.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/images/eighth-wonder.jpg"
              alt="The Eighth Wonder - personal growth"
              width={700}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-secondary px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl grid items-start gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              The Approach
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Little Things Matter. A Lot.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Your self-development lies in your own hands. Whether it is about breaking a harmful habit, strengthening your willpower, or building a better life for yourself — it's all on you. And you have what it takes.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 text-sm font-semibold text-foreground">How do we do that?</h3>
              <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  By helping you cultivate habits that bring lasting success.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  By debunking the myth that "Only massive effort brings massive success."
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  By showing how your little actions can have compound effects on your life.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 text-sm font-semibold text-foreground">What will you learn?</h3>
              <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Leverage fundamental tools & strategies for success.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Make conscious decisions in your daily life.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Identify negative habits and enhance positive ones.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seminar Topics */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Seminar Content
            </p>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl text-foreground">
              How the Seminar Widens Your Perception
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {seminars.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
              >
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

      {/* CTA */}
      <section className="bg-primary px-6 py-24 text-center lg:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            No Goal Is Too Big to Achieve
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/70">
            Follow this process and see the results for yourself. The steps are subtle, almost imperceptible, but the results are massive.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            Join the Workshop
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
