"use client"

import { useEffect, useState } from "react"

// Modular Components
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import Hero from "@/components/hero"
import Content from "@/components/content"
import Pricing from "@/components/pricing"

export default function KuldipMasterPortfolio() {
  const [loaded, setLoaded] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setLoaded(true)
    const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active')
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))
    return () => animatedElements.forEach(el => observer.unobserve(el))
  }, [])

  return (
    <>
      <Navbar />
      
      <div className="flex flex-col bg-[#000] text-white antialiased selection:bg-[#0071E3] selection:text-white overflow-x-hidden pt-20">
        
        <Hero loaded={loaded} />

        <Content hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />

        <Pricing 
          hoveredCard={hoveredCard} 
          setHoveredCard={setHoveredCard} 
          openFaq={openFaq} 
          setOpenFaq={setOpenFaq} 
        />

        {/* The Contact section has been removed from here. 
            If you create a separate Contact.tsx file, you can import and place it here. */}

        <Footer />
      </div>

      <Chatbot />

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .active { opacity: 1 !important; transform: translate(0, 0) !important; scale: 1 !important; }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 30s linear infinite; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #0071E3; }
      `}</style>
    </>
  )
}