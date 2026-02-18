import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const distinctions = [
  "Trained 1000+ MBBS students for Communication & Personality Development.",
  "Public Speaking Mastery — Dale Carnegie Training.",
  "Creator of the 'Eighth Wonder' transformational workshop.",
  "Volunteer Faculty — Victoria State Government, Australia.",
  "Experienced IELTS Faculty with global exposure.",
]

const mentors = [
  "Bob Proctor",
  "Tony Robbins",
  "Dr. John Demartini",
  "Steve Jobs",
  "Warren Buffett",
]

export function About() {
  return (
    <section className="flex flex-col animate-fadeIn">
      {/* HERO */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl animate-rise">
          <p className="text-xs tracking-[0.35em] text-muted-foreground uppercase">
            About
          </p>

          <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight">
            Paras Shah
          </h1>

          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Trainer. Speaker. Mentor. Bridging global experience with inner transformation.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-16 text-center border-y animate-rise delay-100">
        <blockquote className="mx-auto max-w-3xl font-serif text-2xl italic leading-relaxed">
          “The only person you are destined to become is the person you decide to be.”
        </blockquote>
        <p className="mt-4 text-sm tracking-widest text-muted-foreground uppercase">
          Ralph Waldo Emerson
        </p>
      </section>

      {/* DISTINCTIONS */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl sm:text-4xl mb-8 text-center">
            A Life of Contribution
          </h2>

          <div className="grid gap-4">
            {distinctions.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <CheckCircle2 className="h-5 w-5 mt-1 text-primary" />
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE + STORY */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl animate-rise">
            <Image
              src="/images/paras-portrait.jpg"
              alt="Paras Shah"
              width={600}
              height={750}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="animate-rise delay-150">
            <h2 className="font-serif text-3xl sm:text-4xl mb-6">
              The Journey
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                With a Masters in Accounting and CPA Australia credentials, Paras Shah
                has worked across multinational environments before dedicating his life
                to education and transformation.
              </p>

              <p>
                Moving to Australia in 2006 opened global opportunities across finance,
                communication and technology sectors including HSBC, Acer, AAPT and Patni Computers.
              </p>

              <p>
                His deeper inquiry into life led him to Rishikesh, living in an ashram to
                seek answers beyond success — shaping the philosophy he teaches today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENTORS */}
      <section className="py-20 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl mb-8">
          Influences & Inspirations
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {mentors.map((name) => (
            <span
              key={name}
              className="px-5 py-2.5 border rounded-full text-sm transition hover:bg-foreground hover:text-background"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-primary text-primary-foreground">
        <h2 className="font-serif text-3xl sm:text-4xl">
          Begin Your Transformation
        </h2>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-8 bg-white text-black px-7 py-3 rounded-full transition hover:scale-105"
        >
          Get in Touch <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </section>
  )
}
