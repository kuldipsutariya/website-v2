import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Prayer with Paras - Paras Shah",
  description:
    "When you can't carry it alone, let someone pray with you. Submit your prayer request to Paras Shah. Every request is sacred.",
}

export default function PrayerWithParasPage() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col">
        {/* Hero */}
        <section
          id="hero"
          className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-28 animate-hero"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground animate-up delay-100">
              A Sacred Space
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-foreground animate-up delay-200">
              Prayer with Paras
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-up delay-300">
              {"\"Do not make prayer a monologue... make it a conversation.\""}
            </p>
          </div>
        </section>

        {/* Content + Image */}
        <section id="about" className="px-6 py-24 lg:py-32 animate-fade">
          <div className="mx-auto max-w-6xl grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg img-zoom animate-scale">
              <Image
                src="/images/prayer-with-paras.jpg"
                alt="Prayer with Paras - a sacred space for faith"
                width={700}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="animate-up delay-200">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                When You Can't Carry It Alone
              </h2>
              <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  Whenever I earnestly pray for someone else... something happens. Call it grace. Call it divine timing. Call it a miracle. But I've seen prayers work. I have witnessed the power of prayers repeatedly.
                </p>
                <p>
                  And every time I bow my head, not for myself but for someone else, with love, with faith, with full surrender, I feel heard. I feel something shifts in the unseen. I feel a response.
                </p>
                <p>
                  And that is why I've decided to open this space. I dedicate this space to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Message Section */}
        <section id="message" className="bg-primary px-6 py-24 lg:py-32 animate-fade">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-8 text-center">
              <Heart className="mx-auto h-10 w-10 text-primary-foreground/30 animate-scale" />
              <div className="flex flex-col gap-6 text-base leading-relaxed text-primary-foreground/80 animate-up delay-200">
                <p>
                  If you're going through a rough patch... If you're feeling lost, confused, hurt, anxious, scared... If you're dealing with something as small as a daily struggle or as big as a life-threatening situation... If a loved one is facing a challenging situation...
                </p>
                <p className="text-xl font-serif font-medium text-primary-foreground">
                  I will pray for you.
                </p>
                <p>
                  I will not offer prayers in the role of a guru or a priest. I do not claim spiritual superiority. I consider myself a fellow traveler, a brother on this mysterious, beautiful, and sometimes difficult journey of life.
                </p>
                <p>
                  This is not about religion. This is not about converting you or convincing you. This is about faith, raw, personal, heart-to-heart faith.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Submit Request */}
        <section id="submit" className="px-6 py-24 lg:py-32 animate-up delay-200">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Submit Your Request
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Every Request Is Sacred
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Your request can be large or small. Silent or desperate. Whether trivial or vital, it matters. I will hold you in prayer. With presence. With reverence. With faith.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              You can share your prayer request through the contact form, or call directly.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 animate-scale"
            >
              Share Your Prayer Request <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Closing Quote */}
        <section id="closing" className="bg-secondary px-6 py-16 text-center animate-fade">
          <blockquote className="mx-auto max-w-3xl font-serif text-xl font-medium italic leading-relaxed text-foreground sm:text-2xl text-balance">
            "If the only prayer you ever say in your whole life is 'thank you', that would suffice."
          </blockquote>
          <cite className="mt-4 block text-sm not-italic tracking-widest text-muted-foreground uppercase">
            Meister Eckhart
          </cite>
          <p className="mt-8 text-base text-foreground/80">
            With love, Paras Shah
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}
