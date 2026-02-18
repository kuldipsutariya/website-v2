"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

export function Contact() {
  const heading = useScrollReveal(0.1)
  const form = useScrollReveal(0.1)
  const info = useScrollReveal(0.1)

  return (
    <section id="Contact" className="bg-background px-6 py-24 sm:px-10 sm:py-32 md:py-40 lg:px-16 lg:py-48">
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`mb-16 transition-all duration-700 ease-out sm:mb-20 md:mb-24 ${
            heading.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-muted-foreground sm:text-[12px]">
            Get in Touch
          </p>
          <h2 className="max-w-lg font-serif text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-foreground">
            <span className="text-balance">
              Ready to begin your transformation?
            </span>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-[1.85] text-muted-foreground sm:text-base">
            Whether you are preparing for IELTS, looking to enhance your communication skills, or seeking personal growth&mdash;we are here to help.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16 lg:gap-24">
          {/* Contact form */}
          <div
            ref={form.ref}
            className={`md:col-span-7 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              form.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="name" className="text-[12px] uppercase tracking-[0.15em] text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="rounded-lg border border-border bg-transparent px-5 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/40 transition-all duration-300 focus:border-foreground/30 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="email" className="text-[12px] uppercase tracking-[0.15em] text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-lg border border-border bg-transparent px-5 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/40 transition-all duration-300 focus:border-foreground/30 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="subject" className="text-[12px] uppercase tracking-[0.15em] text-muted-foreground">
                  Interested In
                </label>
                <select
                  id="subject"
                  className="rounded-lg border border-border bg-transparent px-5 py-3.5 text-[15px] text-foreground transition-all duration-300 focus:border-foreground/30 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled className="text-muted-foreground">Select a program</option>
                  <option value="ielts">IELTS Coaching</option>
                  <option value="speaking">Speak to Prosper</option>
                  <option value="eighth">The Eighth Wonder</option>
                  <option value="connection">The Magic of Human Connection</option>
                  <option value="prayer">Prayer with Paras</option>
                  <option value="subconscious">The Magic of your Sub-conscious Mind</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="text-[12px] uppercase tracking-[0.15em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your goals..."
                  className="resize-none rounded-lg border border-border bg-transparent px-5 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/40 transition-all duration-300 focus:border-foreground/30 focus:outline-none"
                />
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-foreground px-10 py-4 text-[13px] font-medium tracking-[0.04em] text-primary-foreground transition-all duration-300 hover:bg-foreground/85 hover:shadow-lg sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact info */}
          <div
            ref={info.ref}
            className={`md:col-span-5 transition-all delay-200 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              info.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-8 rounded-xl border border-border bg-secondary/40 p-8 sm:p-10">
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground/[0.04]">
                  <Mail className="h-5 w-5 text-foreground/50" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-[0.15em] text-muted-foreground">Email</p>
                  <a
                    href="mailto:contact@parasshah.co.in"
                    className="mt-1 inline-block text-[15px] text-foreground transition-colors duration-300 hover:text-muted-foreground"
                  >
                    contact@parasshah.co.in
                  </a>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground/[0.04]">
                  <Phone className="h-5 w-5 text-foreground/50" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-[0.15em] text-muted-foreground">Phone</p>
                  <a
                    href="tel:+91 9601386066"
                    className="mt-1 inline-block text-[15px] text-foreground transition-colors duration-300 hover:text-muted-foreground"
                  >
                    +91 9601386066
                  </a>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground/[0.04]">
                  <MapPin className="h-5 w-5 text-foreground/50" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-[0.15em] text-muted-foreground">Location</p>
                  <p className="mt-1 text-[15px] text-foreground">
                    Urvi International
L-702 Sarjan Towers, Nr. Shubhash Chowk, Memnagar, Ahmedabad - 380053

                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <a
                href="https://parasshah.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg bg-foreground/[0.03] p-5 transition-all duration-300 hover:bg-foreground/[0.06]"
              >
                <div>
                  <p className="text-[13px] font-medium text-foreground">Visit Official Website</p>
                  <p className="mt-0.5 text-[12px] text-muted-foreground">parasshah.co.in</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:text-foreground" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
