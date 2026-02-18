"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    title: "IELTS Coaching",
    tagline: "Get your desired bands on the first attempt.",
    description:
      "A proven, comprehensive approach to IELTS preparation that goes beyond test tricks—building genuine English proficiency and exam confidence.",
    image: "/images/ielts-coaching.jpg",
    accent: "#0c0c0c",
    href: "/services/ielts-coaching",
  },
  {
    title: "Speak to Prosper",
    tagline: "The ultimate key to living a confident life.",
    description:
      "Transform your public speaking and communication abilities. Learn to express your ideas with clarity, conviction, and charisma.",
    image: "/images/speak-to-prosper.jpg",
    accent: "#1a1a2e",
    href: "/services/speak-to-prosper",
  },
  {
    title: "The Eighth Wonder",
    tagline: "A little can change a lot.",
    description:
      "Discover the compounding power of small, consistent improvements in communication that lead to extraordinary personal and professional growth.",
    image: "/images/eighth-wonder.jpg",
    accent: "#1e1e1e",
    href: "/services/the-eighth-wonder",
  },
  {
    title: "The Magic of Human Connection",
    tagline: "Build Trust. Influence with Integrity. Create Deep Impact.",
    description:
      "Learn to forge meaningful connections through authentic communication. Master the art of trust-building and ethical influence.",
    image: "/images/human-connection.jpg",
    accent: "#0f1419",
    href: "/services/the-magic-of-human-connection",
  },
  {
    title: "Prayer with Paras",
    tagline: "When you can’t carry it alone, let someone pray with you.",
    description:
      "A space of solace and collective strength, where shared intention and compassionate support help lighten life’s heaviest moments.",
    image: "/images/prayer-with-paras.jpg",
    accent: "#1a1612",
    href: "/services/prayer-with-paras",
  },
  {
    title: "The Magic of your Sub-conscious Mind",
    tagline: "Unlock the Hidden Power of Your Subconscious.",
    description:
      "Explore the extraordinary capabilities of your subconscious mind and learn techniques to harness its power for personal transformation.",
    image: "/images/subconscious-mind.jpg",
    accent: "#121218",
    href: "/services/the-magic-of-your-subconscious-mind",
  },
]

export function Services() {
  const heading = useScrollReveal(0.1)
  const slider = useScrollReveal(0.05)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    containScroll: "trimSnaps",
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section id="services" className="bg-[var(--dark)] px-0 py-20 sm:py-28 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        {/* Heading + controls */}
        <div
          ref={heading.ref}
          className={`mb-12 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between md:mb-16 transition-all duration-700 ease-out ${
            heading.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-white/25 sm:text-[11px]">
              Services & Programs
            </p>
            <h2 className="max-w-md font-serif text-[clamp(1.6rem,3.5vw,3.2rem)] leading-[1.1] tracking-[-0.025em] text-white">
              <span className="text-balance">
                Carefully crafted experiences for real transformation.
              </span>
            </h2>
          </div>

          {/* Desktop arrow controls */}
          <div className="hidden gap-3 sm:flex">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={slider.ref}
        className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          slider.isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <div className="overflow-hidden pl-5 sm:pl-8 lg:pl-[max(calc((100vw-1400px)/2+64px),64px)]" ref={emblaRef}>
          <div className="flex gap-5 md:gap-6">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className="relative min-w-0 flex-[0_0_82%] sm:flex-[0_0_52%] md:flex-[0_0_38%] lg:flex-[0_0_30%] group"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.06]">
                  {/* Image */}
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-transparent opacity-60" />
                    {/* Number badge */}
                    <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                      <span className="text-[11px] font-medium text-white/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-serif text-lg tracking-[-0.01em] text-white sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[12px] italic text-white/30 sm:text-[13px]">
                      {service.tagline}
                    </p>
                    <p className="mt-4 flex-1 text-[13px] leading-[1.8] text-white/40 sm:text-[14px]">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/30 transition-colors duration-300 group-hover:text-white/70">
                      <span>Learn More</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-10 flex justify-center gap-1.5 sm:mt-12">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-[2px] rounded-full transition-all duration-500 ${
                i === selectedIndex ? "w-8 bg-white/60" : "w-4 bg-white/12"
              }`}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile controls */}
        <div className="mt-6 flex justify-center gap-3 sm:hidden">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 disabled:opacity-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 disabled:opacity-20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  )
}
