"use client"

import { useEffect } from "react"
import { MoveRight, Zap, Target, Shield, Layers, PenTool, CheckCircle2, ExternalLink } from "lucide-react"

// --- COMPONENT IMPORTS ---
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function ApproachPage() {
  
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active')
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.reveal')
    animatedElements.forEach(el => observer.observe(el))
    return () => animatedElements.forEach(el => observer.unobserve(el))
  }, [])

  const steps = [
    { num: "01", title: "Understand", icon: <Target size={20} />, desc: "We begin with conversation, not software. We learn your business model, your audience, and what hasn't worked before. Only context." },
    { num: "02", title: "Define Structure", icon: <Layers size={20} />, desc: "Design without structure is decoration. We map the flow of information, deciding exactly where trust is built and where action happens naturally." },
    { num: "03", title: "Design with Restraint", icon: <PenTool size={20} />, desc: "We design only what is necessary. If an element doesn't reduce decision fatigue or guide attention intentionally, it is removed." },
    { num: "04", title: "Build with Precision", icon: <Zap size={20} />, desc: "Development is about performance. We build foundations that are fast, maintainable, and reliable across devices." },
    { num: "05", title: "Refine & Deliver", icon: <Shield size={20} />, desc: "We adjust micro-interactions and performance behavior. Small improvements create large perception shifts. The result is yours—completely." }
  ]

  return (
    <div className="bg-[#000] text-white selection:bg-[#0071E3] overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* --- PHILOSOPHY HERO --- */}
        <section className="px-6 md:px-8 pt-32 md:pt-64 pb-20 md:pb-40 max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
            <h1 className="text-[36px] sm:text-[48px] md:text-[86px] font-black tracking-tighter leading-[1] md:leading-[0.9] mb-8 md:mb-12 italic text-white">
              We don’t start with design. <br />
              <span className="text-[#0071E3] not-italic">We start with understanding.</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mt-12 md:mt-20">
              <p className="text-lg md:text-3xl text-[#86868b] leading-tight font-medium italic">
                Most websites are built backwards. They begin with colors and trends—and only later ask what the website is supposed to achieve.
              </p>
              <div className="space-y-6 text-base md:text-xl text-white/70">
                <p>Before we design anything, we ask: What should this website communicate in 5 seconds? What decision should become easier after visiting?</p>
                <p className="font-bold text-white uppercase text-[9px] md:text-[10px] tracking-[0.4em] border-l-2 border-[#0071E3] pl-6">
                  Because a website is not decoration. It is a tool for clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- THE PROCESS --- */}
        <section className="px-6 md:px-8 py-20 md:py-48 bg-[#050505] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#0071E3] mb-16 md:mb-32 text-center">Engineered Execution</h3>
            <div className="space-y-20 md:space-y-32">
              {steps.map((step, i) => (
                <div key={i} className="reveal opacity-0 translate-y-10 md:translate-y-20 transition-all duration-1000 grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="md:col-span-1 text-[32px] md:text-[42px] font-black text-white/5 leading-none">{step.num}</div>
                  <div className="md:col-span-4 flex items-center gap-3 md:gap-4 text-[#0071E3]">
                      {step.icon}
                      <h4 className="text-xl md:text-3xl font-bold tracking-tighter text-white">{step.title}</h4>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-base md:text-2xl text-[#86868b] leading-relaxed italic">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MANIFESTATION SECTION --- */}
        <section className="px-6 md:px-8 py-20 md:py-48 bg-white text-black rounded-t-[40px] md:rounded-t-[80px]">
          <div className="max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 mb-12 md:mb-20">
              <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#0071E3] mb-4 md:mb-6">Manifestation</h3>
              <h2 className="text-[32px] md:text-[64px] font-black tracking-tighter leading-[1.1]">
                We Don’t Just Show Screenshots. <br />
                <span className="opacity-30 italic">We build interactive intent.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-24">
              <div className="space-y-8 md:space-y-12 reveal opacity-0 transition-all duration-1000">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Business Presence</h4>
                  <p className="text-lg md:text-xl text-[#6e6e73] leading-relaxed italic font-medium">
                    Professional platforms engineered to explain services and convert visitors into inquiries without visual noise.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Personal Brand Platforms</h4>
                  <p className="text-lg md:text-xl text-[#6e6e73] leading-relaxed italic font-medium">
                    Digital identities designed to communicate expertise and credibility for high-value consultants and doctors.
                  </p>
                </div>
              </div>

              <div className="bg-[#f5f5f7] p-8 md:p-12 rounded-[30px] md:rounded-[40px] flex flex-col justify-center reveal opacity-0 transition-all duration-1000 border border-black/5">
                 <p className="text-xl md:text-3xl font-black tracking-tight mb-6 md:mb-8 leading-tight">
                   "If it needs explanation, it is not finished yet."
                 </p>
                 <p className="text-[9px] text-[#0071E3] uppercase font-black tracking-[0.4em]">
                   — Our Design Philosophy
                 </p>
              </div>
            </div>

            {/* --- REFINED DEMO LAYOUT: TEXT OUTSIDE IMAGE --- */}
            <div className="max-w-5xl mx-auto reveal opacity-0 transition-all duration-1000">
               {/* Header above image */}
               <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                  <div className="max-w-xl">
                    <h3 className="text-black text-2xl md:text-5xl font-black tracking-tighter mb-2">Paras Shah Academy</h3>
                    <p className="text-[#6e6e73] text-sm md:text-lg italic leading-tight">
                        Experience the interactive architecture designed for educational authority.
                    </p>
                  </div>
                  <a 
                    href="https://parasshah.co.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-fit bg-[#0071E3] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-[9px] md:text-[10px] flex items-center gap-3 hover:bg-black transition-all shadow-xl active:scale-95"
                  >
                    Live Project <ExternalLink size={14} />
                  </a>
               </div>

               {/* The Image Container */}
               <div className="group relative rounded-[30px] md:rounded-[40px] overflow-hidden bg-[#111] aspect-video md:aspect-[21/9] border border-black/5 shadow-2xl">
                  <img 
                    src="/images/p1.jpg" 
                    alt="Paras Shah Academy Portfolio Preview"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  {/* Subtle glass overlay on hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
               </div>
            </div>
          </div>
        </section>

        {/* --- CLOSING CTA --- */}
        <section className="px-6 md:px-8 py-20 md:py-48 bg-white text-black border-t border-black/5 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-2xl md:text-[52px] font-bold tracking-tighter leading-tight mb-10 md:mb-12">
              We think more deeply. <br />
              <span className="text-[#0071E3]">We build with responsibility.</span>
            </h2>
            <a href="/contact" className="inline-flex items-center gap-3 md:gap-4 bg-black text-white px-8 py-5 md:px-10 md:py-6 rounded-full text-xs md:text-sm font-black uppercase tracking-widest hover:bg-[#0071E3] transition-all active:scale-95 group shadow-2xl">
              Let's begin <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />

      <style jsx global>{`
        .reveal { transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.active { opacity: 1 !important; transform: translate(0,0) scale(1) !important; }
      `}</style>
    </div>
  )
}