"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Image from "next/image"

export function BookSection() {
  const visual = useScrollReveal(0.1)
  const content = useScrollReveal(0.1)

  return (
    <section
      id="book"
      className="
        overflow-hidden bg-background px-5
        pt-20 pb-10
        sm:px-8 sm:pt-28 sm:pb-12
        md:pt-36 md:pb-16
        lg:px-16 lg:pt-44 lg:pb-20
      "
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14 lg:gap-20">
          
          {/* Book Image */}
          <div
            ref={visual.ref}
            className={`md:col-span-5 lg:col-span-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visual.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative mx-auto max-w-[280px] sm:max-w-xs">
              <div className="absolute -inset-6 rounded-2xl bg-foreground/[0.03] blur-2xl" />

              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)]">
                <Image
                  src="/images/book-cover.jpg"
                  alt="The IELTS Magic Book"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-6 text-center">
                <span className="inline-block rounded-full bg-foreground/[0.05] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  #1 Bestseller
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={content.ref}
            className={`md:col-span-7 lg:col-span-8 transition-all delay-150 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              content.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              The Book
            </p>

            <h2 className="mb-8 font-serif text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.025em]">
              The IELTS Magic Book
            </h2>

            <p className="mb-5 text-[16px] font-medium leading-[1.7] text-foreground/80">
              Does IELTS intimidate you? Here is the much-required respite you were looking for.
            </p>

            <p className="mb-4 text-[15px] leading-[1.9] text-muted-foreground">
              Very few books teach you how to conquer your mind before preparing for the test — which determines your future.
            </p>

            <p className="mb-10 text-[15px] leading-[1.9] text-muted-foreground">
              This bestseller helps you build clarity, confidence, and the mindset required for real success.
            </p>

            <a
              href="https://www.amazon.in/IELTS-Magic-Your-Success-Paras/dp/9359807486"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-foreground px-9 py-3.5 text-[12px] font-medium uppercase tracking-[0.08em] text-primary-foreground transition-all duration-300 hover:bg-foreground/85 hover:shadow-lg"
            >
              Get the Book
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
