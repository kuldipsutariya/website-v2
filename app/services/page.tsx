"use client"

import { useState, useEffect } from "react"
import { 
  CheckCircle2, 
  ArrowRight, 
  Minus, 
  Plus, 
  Zap, 
  Target, 
  Layers, 
  Code2, 
  Smartphone,
  Gauge,
  Search,
  MessageSquare,
  ShieldCheck,
  Globe,
  MonitorSmartphone,
  Server,
  Cpu,
  MousePointerClick,
  Terminal,
  MoveRight
} from "lucide-react"

// --- COMPONENT IMPORTS ---
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active')
      })
    }, observerOptions)

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const packages = [
    { 
      id: "01",
      name: "Brand Foundation", 
      price: "6,999", 
      tag: "The Essential",
      bgColor: "bg-white",
      textColor: "text-black",
      accent: "text-[#0071E3]",
      desc: "A high-performance single-page digital identity designed for maximum clarity and fast conversion.", 
      longDesc: "Ideal for startups and solo professionals who need to move from 'invisible' to 'established' instantly. We focus on a high-impact single-page architecture that answers every client question before they even ask it. This isn't just a landing page; it's your digital business card engineered to convert.",
      features: [
        "Strategic Single-Page Layout", 
        "Responsive Mobile Architecture", 
        "Direct Contact Integration", 
        "SEO-Ready Metadata", 
        "5-7 Days Rapid Delivery",
        "Performance Tuning",
        "Social Media Linking"
      ] 
    },
    { 
      id: "02",
      name: "Professional Growth", 
      price: "10,999", 
      tag: "Most Popular",
      bgColor: "bg-[#0071E3]",
      textColor: "text-white",
      accent: "text-white",
      desc: "A multi-dimensional digital experience built for doctors, consultants, and established firms.", 
      longDesc: "When your business is too complex for a single page, you need a multi-section narrative flow. This tier allows us to separate your expertise, your services, and your case studies into a cohesive authority-building journey. We map the user experience to ensure trust is built at every scroll.",
      features: [
        "Advanced Multi-Section Flow", 
        "Identity-Driven UI Design", 
        "Optimized Speed Performance", 
        "Social & Pixel Integration", 
        "Interactive Brand Elements",
        "Consultation Form Setup",
        "Domain & Hosting Guidance"
      ] 
    },
    { 
      id: "03",
      name: "Authority Suite", 
      price: "14,999", 
      tag: "Bespoke Experience",
      bgColor: "bg-[#111112]",
      textColor: "text-white",
      accent: "text-[#0071E3]",
      desc: "The ultimate digital flagship. Zero compromises on design, motion, and technical superiority.", 
      longDesc: "Reserved for those who demand the absolute best. This is a boutique digital experience featuring custom animations, deep narrative strategy sessions, and a technical foundation built for 100% ownership. We build a foundation that is fast, maintainable, and reliable for long-term growth.",
      features: [
        "Premium Boutique Animation", 
        "Custom Narrative Strategy", 
        "Priority 1-on-1 Consulting", 
        "High-Security Deployment", 
        "Full Asset Ownership",
        "Advanced SEO Roadmap",
        "Ongoing Technical Support"
      ] 
    }
  ]

  const technicalPillars = [
    { icon: <Cpu size={32} />, title: "Precision Code", detail: "Clean, maintainable Next.js architecture designed to age well." },
    { icon: <Globe size={32} />, title: "Global CDN", detail: "Content delivered instantly via global edge networks." },
    { icon: <Server size={32} />, title: "Static Generation", detail: "Blazing fast load times with pre-rendered pages." },
    { icon: <Terminal size={32} />, title: "SEO Ready", detail: "Semantic HTML and metadata structured for visibility." }
  ]

  return (
    <div className="bg-black text-white selection:bg-[#0071E3] overflow-x-hidden font-sans">
      <Navbar />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="px-6 md:px-8 pt-40 md:pt-64 pb-20 max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
            <h1 className="text-[42px] md:text-[86px] font-black tracking-tighter leading-[0.9] mb-12 italic">
              Digital Services & <br />
              <span className="text-[#0071E3] not-italic">Premium Investment.</span>
            </h1>
            <div className="max-w-4xl space-y-8">
                <p className="text-2xl md:text-4xl text-white font-bold tracking-tight leading-tight">
                    Most people think they are paying for pages or code. They are not. <br />
                    <span className="text-[#86868b]">They are investing in how their business is understood.</span>
                </p>
                <p className="text-xl md:text-2xl text-[#86868b] leading-tight font-medium italic">
                    We don't build pages; we architect professional trust.
                </p>
            </div>
          </div>
        </section>

        {/* --- TECHNICAL PILLARS GRID --- */}
        <section className="px-6 md:px-8 py-20 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalPillars.map((pillar, i) => (
              <div key={i} className="reveal opacity-0 translate-y-10 transition-all duration-700 p-8 rounded-3xl border border-white/10 hover:border-[#0071E3]/50 transition-colors">
                <div className="text-[#0071E3] mb-6">{pillar.icon}</div>
                <h4 className="text-xl font-bold mb-3 tracking-tight">{pillar.title}</h4>
                <p className="text-sm text-[#86868b] leading-relaxed font-medium">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- VERTICAL DETAILED INVESTMENT BOXES --- */}
        <section id="pricing" className="px-6 md:px-8 py-24 md:py-48 bg-[#f5f5f7] rounded-t-[60px] md:rounded-t-[100px]">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-3xl mb-24 reveal opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-black text-[32px] md:text-[56px] font-black tracking-tighter leading-tight">
                Select your level of <br />
                <span className="text-[#0071E3]">Digital Authority.</span>
              </h2>
            </div>

            {packages.map((pkg, i) => (
              <div 
                key={i} 
                className={`reveal opacity-0 translate-y-20 transition-all duration-1000 flex flex-col lg:flex-row gap-8 md:gap-16 p-8 md:p-20 rounded-[50px] shadow-2xl border border-black/5 ${pkg.bgColor} ${pkg.textColor}`}
              >
                {/* Identity Sidebar */}
                <div className="lg:w-1/3 flex flex-col justify-between">
                  <div>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${pkg.id === "02" ? 'bg-white/20 text-white' : 'bg-black/5 text-black/40'}`}>
                      {pkg.tag}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-2xl font-bold">₹</span>
                      <span className="text-6xl md:text-7xl font-black tracking-tighter">{pkg.price}</span>
                    </div>
                  </div>
                  
                  <a 
                    href="/contact" 
                    className={`flex items-center justify-center gap-3 w-full py-6 rounded-full font-black uppercase tracking-widest text-[11px] transition-all active:scale-95 shadow-xl ${pkg.id === "02" ? 'bg-white text-[#0071E3]' : 'bg-[#0071E3] text-white'}`}
                  >
                    Start Project Inquiry <ArrowRight size={16} />
                  </a>
                </div>

                {/* Content Breakdown */}
                <div className="lg:w-2/3 flex flex-col justify-center space-y-10">
                  <div className="space-y-4">
                    <h4 className={`text-[10px] font-black uppercase tracking-[0.4em] ${pkg.accent}`}>Strategic Context</h4>
                    <p className="text-xl md:text-2xl leading-relaxed italic font-medium opacity-80">
                      {pkg.longDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-10 border-t border-current/10">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm md:text-base font-bold tracking-tight">
                        <CheckCircle2 size={20} className={pkg.accent} />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <div className={`p-6 rounded-2xl flex items-center gap-4 ${pkg.id === "02" ? "bg-white/10" : "bg-black/5"}`}>
                    <Zap size={20} className={pkg.accent} />
                    <p className="text-xs font-black uppercase tracking-widest">Typical Deployment: 1–2 Weeks</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- RELIABILITY & INFRASTRUCTURE --- */}
        <section className="px-6 md:px-8 py-32 md:py-56 bg-white text-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="reveal opacity-0 -translate-x-10 transition-all duration-1000">
                <h3 className="text-[#0071E3] text-[10px] font-black uppercase tracking-[0.5em] mb-6">Reliability</h3>
                <h2 className="text-[36px] md:text-[64px] font-black tracking-tighter leading-tight mb-8">
                  Built for ownership. <br /> Not subscription.
                </h2>
                <p className="text-xl text-[#6e6e73] leading-relaxed italic font-medium mb-12">
                  Unlike generic agencies that lock you into monthly fees, we build on open-standard technology. 
                  When the project is finished, you hold 100% of the asset. No licensing traps.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Uptime", val: "99.9%" },
                    { label: "Performance", val: "100/100" },
                    { label: "Device Support", val: "Omni" },
                    { label: "Maintenance", val: "Fixed" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 bg-[#f5f5f7] rounded-3xl border border-black/5">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0071E3] mb-2">{stat.label}</p>
                      <p className="text-2xl font-black">{stat.val}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative reveal opacity-0 translate-x-10 transition-all duration-1000">
                <div className="bg-[#111] p-10 md:p-16 rounded-[60px] text-white shadow-3xl">
                  <ShieldCheck size={48} className="text-[#0071E3] mb-8" />
                  <h4 className="text-3xl font-bold tracking-tight mb-6 italic">The Investment Guarantee</h4>
                  <ul className="space-y-6">
                    {[
                      "Strategy-first planning before code",
                      "Full source code ownership",
                      "Strategic post-launch support"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-white/70 font-bold text-sm">
                        <CheckCircle2 size={18} className="text-[#0071E3] mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="px-6 md:px-8 py-24 md:py-48 bg-[#f5f5f7] text-black border-y border-black/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[36px] md:text-[52px] font-black tracking-tighter mb-16 text-center italic">Common Enquiries</h2>
            <div className="space-y-4">
              {[
                { 
                  q: "What happens after the website is launched?", 
                  a: "We don't just deliver a link. We provide a post-launch walkthrough to show you how everything works, and we remain available for support to ensure your digital asset stays relevant." 
                },
                { 
                  q: "Who actually owns the website assets?", 
                  a: "You do. All accounts, domains, and hosting are set up in your name, giving you 100% ownership and control from day one." 
                },
                { 
                  q: "How long does delivery take?", 
                  a: "Typically 1 to 2 weeks. We prioritize precision over rush, ensuring every section is polished and tested before launch." 
                },
                { 
                  q: "Do you provide technical support?", 
                  a: "Affirmative. We offer guidance during and after launch to help you manage your new digital identity efficiently." 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-[32px] border border-black/5 overflow-hidden shadow-sm">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-8 text-left flex justify-between items-center group">
                    <span className="text-lg md:text-xl font-bold tracking-tight group-hover:text-[#0071E3] transition-colors">{faq.q}</span>
                    <div className={`p-2 rounded-full transition-all ${openFaq === i ? "bg-[#0071E3] text-white rotate-180" : "bg-black/5 text-black/20"}`}>
                      {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  <div className={`transition-all duration-500 overflow-hidden ${openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="p-8 pt-0 text-[#6e6e73] italic text-lg leading-relaxed border-t border-black/5 font-medium">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CONVERSION --- */}
        <section className="px-6 md:px-8 py-32 md:py-56 bg-white text-black text-center">
          <div className="max-w-4xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-[42px] md:text-[80px] font-black tracking-tighter leading-none mb-12">
              Own your <br />
              <span className="text-[#0071E3]">Digital Identity.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="/contact" className="inline-flex items-center gap-4 bg-black text-white px-12 py-7 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#0071E3] transition-all group shadow-2xl">
                Start Project Inquiry <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
              </a>
              <a href="/approach" className="text-black/40 hover:text-black font-black uppercase tracking-widest text-[10px] transition-colors flex items-center gap-2">
                View Our Approach <MoveRight size={14} />
              </a>
            </div>
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