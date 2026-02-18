"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Image from "next/image"

export function Content()  {
  const heading = useScrollReveal(0.1)
  const quote = useScrollReveal(0.1)
  const portrait = useScrollReveal(0.1)
  const body = useScrollReveal(0.1)
  const pillars = useScrollReveal(0.05)

  return (
    <section id="content" className="overflow-hidden">
      {/* WHY US */}
      <div className="bg-background px-5 py-20 sm:px-8 sm:py-28 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1100px]">
          <div
            ref={heading.ref}
            className={`mb-6 transition-all duration-700 ${
              heading.isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              So, Why Us?
            </p>
          </div>

          <div
            ref={quote.ref}
            className={`transition-all duration-1000 ${
              quote.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {/* KEEP THESE QUOTES */}
            <blockquote className="font-serif text-[clamp(1.6rem,4.5vw,4rem)] leading-[1.12] tracking-[-0.025em] text-foreground">
              "Give a man a fish, and you feed him for the day. Teach a man how
              to fish, and you feed him for a lifetime."
            </blockquote>

            <p className="mt-8 text-[15px] leading-[1.9] text-muted-foreground md:text-lg">
              "If you aim higher than you expect, you could reach higher than you dreamed."
            </p>

            {/* ADD YOUR NEW MESSAGE AFTER QUOTES */}
            <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-foreground/70 md:text-lg">
              <p>
                British Billionaire Richard Branson rightly said that one must
                not underestimate their capabilities. Most of the time, the
                problem that hinders our growth is that we fail to realize the
                immense potential we are born with. We provide you with that
                gentle nudge that will change your life, not by doing something
                dramatic but by helping you tap into your potential.
              </p>

              <p>
                We do what we say. We have set high benchmarks for ourselves so
                that we aim nothing short of turning our students and attendees
                into the best speakers, master communicators, and effective human
                beings. In addition, our carefully curated study material and
                thorough guidance help our students build conviction and
                confidence to perform their best when they are actually on the
                field.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PARAS SHAH PROFILE */}
      <div className="bg-[var(--warm)] px-5 py-20 sm:px-8 sm:py-28 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-start gap-12 md:grid-cols-12 lg:gap-20">
            {/* Portrait */}
            <div
              ref={portrait.ref}
              className={`md:col-span-5 lg:col-span-4 transition-all duration-1000 ${
                portrait.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/images/paras-portrait.jpg"
                  alt="Paras Shah"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="font-serif text-xl">Paras Shah</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Communication Coach · Author · Mentor
                </p>
              </div>
            </div>

            {/* FULL BIO (REPLACEMENT TEXT) */}
            <div
              ref={body.ref}
              className={`md:col-span-7 lg:col-span-8 transition-all delay-150 duration-1000 ${
                body.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div className="max-w-2xl space-y-6 text-[14px] leading-[1.9] text-foreground/70 md:text-base">
                <p>
                  He holds a Masters in Accounting, and is a Certified Practicing
                  Accountant (CPA Australia). Born in India, Paras later moved to
                  Australia in 2006 to explore new world and possibilities, and
                  now he is an Australian Citizen.
                </p>

                <p>
                  Having worked in varied industries like finance, communication
                  and computers, Paras has done brief assignments with giant
                  organizations like HSBC, Acer Computers, AAPT (the third
                  largest telecommunication company in Australia and New
                  Zealand), and Patni Computers India.
                </p>

                <p>
                  Paras is currently Head of India Operation in an Australian
                  Company which is the largest non-for-profit organization of
                  Australia.
                </p>

                <p>
                  He is a passionate and voracious reader, with many mentors and
                  heroes in his life, namely Bob Proctor, Anthony Robbins,
                  Dr. John Demartini, Steve Jobs, Warren Buffett, and great sages
                  of India. He has been trained by world class leaders and great
                  human beings, who have taught him life’s invaluable lessons.
                </p>

                <p>
                  To find answers to penetrating questions of life, such as the
                  meaning of life and its purpose, he went to Rishikesh (Gateway
                  to The Himalayas) and lived there for two months in an Ashram
                  and had extensive and insightful conversations with enlightened
                  saints and sages.
                </p>

                <p>
                  He is a perfect blend for delivering soft skills trainings and
                  industry talks to students and professionals.
                </p>

                <div className="pt-8 border-t border-foreground/10">
                  <p className="font-serif text-[clamp(1.4rem,3vw,2.6rem)]">
                    We can help you <em className="text-foreground/40 not-italic">TRANSFORM</em>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ORIGINAL FULL PILLARS — NOT SHORTENED */}
      <div className="bg-background px-5 py-20 sm:px-8 sm:py-28 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div
            ref={pillars.ref}
            className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3"
          >
            {[
              {
                number: "01",
                title: "Communication",
                body: "Communication is all about— WHAT you say and HOW you say it. We help enhance this core skill to ensure that our students can excel in whatever field they set their eyes on. We help students understand that communication is much more than a transfer of information and how they can utilize this tool to achieve desired success.",
                detail:
                  "We provide Comprehensive Practice that covers all the significant areas of language. Don’t leave any blind spots.",
              },
              {
                number: "02",
                title: "Relationship",
                body: "Communication skills are vital for sailing through personal and professional relationships. We help our students learn how to build stronger and deeper bonds with people around, using a simple tool that is freely available to all of us— COMMUNICATION.",
                detail:
                  "Relationships can be layered, and so is the language. It can build or break them. We help you understand the nuance underneath the word.",
              },
              {
                number: "03",
                title: "Life",
                body: "Your life changes when you realize that you are much more capable than you ever thought. We help you realize your hidden potential and inspire you to chase your dreams. In the process, we also equip you with the necessary tools like communication skills and cognitive thinking to achieve your goals.",
                detail:
                  "It’s a big wide world out there. Going far in life may include going to the far corners of the world. Make it possible by developing your skills in all areas of your life.",
              },
            ].map((pillar, i) => (
              <div
                key={pillar.title}
                className={`group flex flex-col bg-background p-10 transition-all duration-700 ${
                  pillars.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 140}ms` }}
              >
                <span className="mb-8 font-serif text-4xl text-foreground/10">
                  {pillar.number}
                </span>

                <h3 className="mb-4 font-serif text-2xl">{pillar.title}</h3>

                <p className="mb-8 text-[14px] leading-[1.9] text-muted-foreground">
                  {pillar.body}
                </p>

                <div className="border-t border-border/60 pt-5">
                  <p className="text-[13px] italic text-muted-foreground/45">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
