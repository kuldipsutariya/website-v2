"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

const heroSlides = [
  { title: "IELTS Coaching", subtitle: "Get your desired bands on the first attempt" },
  { title: "Speak to Prosper", subtitle: "The ultimate key to living a confident life" },
  { title: "The Eighth Wonder", subtitle: "A little can change a lot" },
]

export function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[var(--dark)]">
      {/* Clean Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-28 pb-16 text-center sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          
          {/* Overline */}
          <p
            className={`mb-8 text-[10px] uppercase tracking-[0.6em] text-white/30 sm:text-[11px] md:mb-10 ${
              loaded ? "animate-hero-reveal" : "opacity-0"
            }`}
          >
            Communication Coach · Author · Mentor
          </p>

          {/* Main Heading */}
          <h1
            className={`font-serif text-[clamp(2.6rem,7.5vw,7rem)] leading-[1.02] tracking-[-0.035em] text-white ${
              loaded ? "animate-hero-reveal delay-200" : "opacity-0"
            }`}
          >
            Elevating Human
            <br className="hidden sm:block" />
            Beings to the
            <br />
            <em className="not-italic text-white/50">Next Level</em>
          </h1>

          {/* Subtitle */}
          <p
            className={`mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-white/35 sm:text-base md:mt-10 md:max-w-lg ${
              loaded ? "animate-hero-reveal delay-400" : "opacity-0"
            }`}
          >
            Helping you master communication, build deeper relationships,
            and transform your life.
          </p>

          {/* Rotating Programs */}
          <div
            className={`mt-14 flex justify-center md:mt-16 ${
              loaded ? "animate-hero-reveal delay-500" : "opacity-0"
            }`}
          >
            <div className="relative h-14 w-full max-w-md overflow-hidden sm:h-12">
              {heroSlides.map((slide, i) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    i === activeSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-white/60 sm:text-[13px]">
                    {slide.title}
                  </p>
                  <p className="mt-1 text-[12px] text-white/30 sm:text-[13px]">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div
            className={`mt-6 flex justify-center gap-2 ${
              loaded ? "animate-hero-reveal delay-600" : "opacity-0"
            }`}
          >
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-[2px] rounded-full transition-all duration-500 ${
                  i === activeSlide ? "w-10 bg-white/70" : "w-5 bg-white/15"
                }`}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-14 ${
              loaded ? "animate-hero-reveal delay-700" : "opacity-0"
            }`}
          >
            <a
              href="#services"
              className="rounded-full bg-white px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--dark)] transition hover:scale-[1.03]"
            >
              Explore Programs
            </a>

            <a
              href="/about"
              className="rounded-full border border-white/15 px-10 py-4 text-[12px] font-medium uppercase tracking-[0.1em] text-white/70 transition hover:border-white/30 hover:text-white"
            >
              Know More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`relative z-10 flex justify-center pb-10 ${
          loaded ? "animate-fade-in delay-1200" : "opacity-0"
        }`}
      >
        <a href="#about" className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/20">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce text-white/20" />
        </a>
      </div>
    </section>
  )
}
