import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { Content } from "@/components/content"
import { Services } from "@/components/services"
import { BookSection } from "@/components/book-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Content />
      <Services />
      <BookSection />
      <Footer />
    </main>
  )
}
