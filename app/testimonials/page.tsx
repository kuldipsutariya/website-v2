"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Play, Quote, Star, ExternalLink } from "lucide-react"
import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

// YouTube embed component
function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="group/play relative aspect-video w-full overflow-hidden rounded-2xl bg-foreground/5"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 group-hover/play:bg-foreground/30 transition-colors duration-300">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card/90 shadow-lg transition-transform duration-300 group-hover/play:scale-110">
          <Play className="ml-1 h-6 w-6 text-foreground" />
        </div>
      </div>
    </button>
  )
}

// Written testimonials
const writtenTestimonials = [
  {
    quote:
      "I learned from Paras Sir that you must not look at your mobile and talk to someone simultaneously. It isn’t very respectful. The other thing is that I need to slow down when I speak. All the lessons I learned from him will not only help me survive college life but will remain with me throughout my life. I love you, Sir.",
    name: "Dr. Akash Mendha",
    role: "",
    rating: 5,
  },
  {
    quote:
      "Paras Sir has inspired me because he demonstrated through his life story that it is possible. I was not a confident public speaker, but he encouraged me. He supported all of us through and through. I am grateful to him. He has many plus points; he never gives up, is polite and understanding, and still keeps learning. Even when I pointed out his mistake, he took it sportingly. Thank you, Sir.",
    name: "Krisha Gandhi",
    role: "MBBS",
    rating: 5,
  },
  {
    quote:
      "Thank you, Paras Sir, for grooming all the skills I was not good at. Now, I don’t feel nervous when speaking in front of any number of people. Thank you again for allowing me to discuss diverse topics, not to mention personal matters. The personality that came from those discussions is excellent. I feel privileged to learn so many things from you. I needed it.",
    name: "Nancy Gor",
    role: "MBBS Student",
    rating: 5,
  },
  {
    quote:
      "Mr. Paras Shah is my guide, mentor, and teacher. I met him through a familiar friend. Initially, I did not know about the IELTS exam; however, he explained every module in detail. After our introduction lecture, I learned that I am good at the Listening and Reading modules but face challenges in Writing and Reading. In writing, I could not generate ideas or even write a paragraph. He guided me sentence by sentence and paragraph by section. I was able to write my first essay after fifteen days. We studied band nine essays like a scientist and developed a solid structure. I also overcame all the challenges in the speaking module as well. All in all, I got my desired, sorry, more than expected result. Thank you.",
    name: "Parth Padmaraj",
    role: "Student, IELTS Coaching",
    rating: 5,
  },
]

// Video testimonials with all your provided links
const videoReviews = [
  {
    name: "Dr. Yashika Kain",
    videoId: "bEgdMaS5R8s",
    description: "Her transformative experience with Paras Sir's coaching.",
  },
  {
    name: "Parth Padmaraj, USA",
    videoId: "I_RPyhwu6nk",
    description: "How IELTS coaching helped achieve his dream score.",
  },
  {
    name: "Dr. Nancy Gor",
    videoId: "K29f8gyIVG8",
    description: "Talks about personality development and its impact.",
  },
  {
    name: "Dr Akash Mendha",
    videoId: "boNBvkxUF2A",
    description: "Shares their learning experience and success story.",
  },
  {
    name: "Krisha Gandhi",
    videoId: "nsg7ic2ttLY",
    description: "Discusses how mentorship changed their approach to learning.",
  },
  {
    name: "Vaibhav Mishra",
    videoId: "oHmTFex8Atg",
    description: "Reflects on the confidence gained through expert guidance.",
  },
  {
    name: "Dev Moradiya",
    videoId: "Vw3_8f2SF7k",
    description: "Explains how the program helped them achieve their target score.",
  },
  {
    name: "Prachi Rajgor",
    videoId: "12-Kc47dwvs",
    description: "Shares insights and takeaways from the training received.",
  },
]

export default function TestimonialsPage() {
  const heading = useScrollReveal(0.1)
  const cards = useScrollReveal(0.05)

  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Testimonials
          </p>
          <h1 className="font-serif text-5xl font-bold sm:text-6xl lg:text-7xl">
            Voices of Transformation
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Hear from students and professionals whose lives were changed through mentorship.
          </p>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Written Reviews
            </p>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              What Students Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {writtenTestimonials.map((t, i) => (
              <div
                key={t.name}
                ref={cards.ref}
                className={`group flex flex-col justify-between rounded-2xl border border-border p-8 transition-all duration-700 hover:shadow-lg ${
                  cards.isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: cards.isVisible ? `${i * 80}ms` : "0ms" }}
              >
                <div>
                  <Quote className="mb-6 h-8 w-8 text-foreground/20" />
                  <p className="text-base leading-relaxed text-foreground/80">{t.quote}</p>
                </div>
                <div className="mt-8 flex flex-col gap-1 border-t border-current/10 pt-6">
                  <div className="flex gap-1 mb-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews Button */}
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/search?sca_esv=8ee66ad7f9d1d3dd&sxsrf=ANbL-n4KLkpmE3MOzmoav8A6mg4vVLABmg:1771398015668&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcIaJJcwuQOI8eruwpqkYcgdwR5Jf6RhfiNuyjxD_xvMJ-DCo5tQebkXIi9IT4tN9x4XJXemZ6_IzpH5c1_ipjaDAY43vJSsz3fjSTM28PnIjAwIsg%3D%3D&q=Paras+Shah+Academy+Reviews&sa=X&ved=2ahUKEwiy2-rru-KSAxXXhK8BHZ79PNgQ0bkNegQINxAH&biw=1470&bih=835&dpr=2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary hover:shadow-md"
            >
              See More on Google Reviews
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="bg-primary px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Play className="h-4 w-4 text-primary-foreground/60" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
                Video Reviews
              </p>
            </div>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl text-primary-foreground">
              Watch Their Stories
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videoReviews.map((video) => (
              <div
                key={video.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 transition-all duration-300 hover:border-primary-foreground/20 hover:shadow-lg"
              >
                <YouTubeEmbed videoId={video.videoId} title={`${video.name} - Testimonial`} />
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="text-sm font-semibold text-primary-foreground">{video.name}</h3>
                  <p className="text-xs leading-relaxed text-primary-foreground/60">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
