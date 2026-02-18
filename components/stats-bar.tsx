"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "1000+", label: "Students Trained" },
  { value: "8.0+", label: "Avg. IELTS Band Score" },
  { value: "500+", label: "Success Stories" },
]

export function StatsBar() {
  const section = useScrollReveal(0.2)

  return (
    <section className="border-b border-border bg-background">
      <div
        ref={section.ref}
        className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-border sm:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center bg-background px-4 py-12 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:py-14 md:py-16 lg:py-20 ${
              section.isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: section.isVisible ? `${i * 100}ms` : "0ms" }}
          >
            <span className="font-serif text-3xl tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl">
              {stat.value}
            </span>
            <span className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[12px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
