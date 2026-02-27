"use client"

import { CheckCircle2, ArrowRight, Plus, Minus } from "lucide-react"

interface PricingProps {
  hoveredCard: number | null;
  setHoveredCard: (id: number | null) => void;
  openFaq: number | null;
  setOpenFaq: (id: number | null) => void;
}

export default function Pricing({ hoveredCard, setHoveredCard, openFaq, setOpenFaq }: PricingProps) {
  const packages = [
    { 
      id: 0,
      name: "Brand Foundation", 
      price: "6,999", 
      tag: "The Essential",
      bgColor: "bg-white",
      textColor: "text-black",
      btnPrimary: "bg-[#0071E3] text-white",
      btnSecondary: "border-black/10 text-black",
      desc: "A high-performance single-page digital identity designed for maximum clarity and fast conversion.", 
      features: [
        "Strategic Single-Page Layout", 
        "Responsive Mobile Architecture", 
        "Direct Contact Integration", 
        "SEO-Ready Metadata", 
        "5-7 Days Rapid Delivery"
      ] 
    },
    { 
      id: 1,
      name: "Professional Growth", 
      price: "10,999", 
      tag: "Most Popular",
      bgColor: "bg-[#0071E3]",
      textColor: "text-white",
      btnPrimary: "bg-white text-[#0071E3]",
      btnSecondary: "border-white/20 text-white",
      desc: "A multi-dimensional digital experience built for doctors, consultants, and established firms.", 
      features: [
        "Advanced Multi-Section Flow", 
        "Identity-Driven UI Design", 
        "Optimized Speed Performance", 
        "Social & Pixel Integration", 
        "Interactive Brand Elements"
      ] 
    },
    { 
      id: 2,
      name: "Authority Suite", 
      price: "14,999", 
      tag: "Bespoke Experience",
      bgColor: "bg-[#111112]",
      textColor: "text-white",
      btnPrimary: "bg-[#0071E3] text-white",
      btnSecondary: "border-white/10 text-white",
      desc: "The ultimate digital flagship. Zero compromises on design, motion, and technical superiority.", 
      features: [
        "Premium Boutique Animation", 
        "Custom Narrative Strategy", 
        "Priority 1-on-1 Consulting", 
        "High-Security Deployment", 
        "Full Asset Ownership"
      ] 
    }
  ]

  const faqs = [
    { 
      q: "What happens after the website is launched?", 
      a: "We don't just deliver a link and disappear. We provide a post-launch walkthrough to show you how everything works, and we remain available for support and future updates to ensure your digital asset stays relevant and high-performing." 
    },
    { 
      q: "Who actually owns the website assets?", 
      a: "You do. Unlike agencies that keep you locked into their proprietary platforms, we build on open-standard technology. All accounts, domains, and hosting are set up in your name, giving you 100% ownership and control." 
    },
    { 
      q: "How long does delivery take?", 
      a: "Typically 5–7 days. We prioritize precision over rush, ensuring every section is polished and tested before launch." 
    },
    { 
      q: "Will it work on all mobile devices?", 
      a: "Absolutely. In today's world, mobile-first isn't an option—it's a requirement. Your site will feel like a native app on every smartphone." 
    }
  ]

  return (
    <div className="bg-[#f5f5f7]">
      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="px-6 md:px-20 py-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          
          <div className="max-w-4xl mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-[32px] md:text-[52px] font-bold tracking-tighter leading-tight mb-6 text-black">
              Invest in clarity. <br /> 
              <span className="text-[#0071E3]">Own your digital narrative.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#6e6e73] font-medium leading-relaxed italic">
              Standard developers build sites. We build trust-driven experiences that turn visitors into lifelong clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, i) => (
              <div 
                key={pkg.id} 
                onMouseEnter={() => setHoveredCard(pkg.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-8 md:p-12 rounded-[40px] border border-transparent transition-all duration-700 flex flex-col group animate-on-scroll opacity-0 scale-95 shadow-xl ${pkg.bgColor} ${pkg.textColor} ${
                  hoveredCard !== null && hoveredCard !== pkg.id ? 'opacity-40 grayscale-[0.5] scale-[0.98]' : 'opacity-100'
                }`} 
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="flex-grow">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 ${
                    pkg.id === 1 ? 'bg-white/20 text-white' : 'bg-black/5 text-black/40'
                  }`}>
                    {pkg.tag}
                  </span>

                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:opacity-80 transition-opacity">
                    {pkg.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-xl font-bold">₹</span>
                    <span className="text-5xl font-black tracking-tighter">{pkg.price}</span>
                  </div>

                  <p className={`text-[15px] font-medium mb-8 leading-relaxed border-b pb-8 min-h-[80px] ${pkg.id === 0 ? 'border-black/5 text-[#86868b]' : 'border-white/10 text-white/70'}`}>
                    {pkg.desc}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-[14px] font-bold leading-tight">
                        <CheckCircle2 size={18} className={pkg.id === 1 ? "text-white" : "text-[#0071E3]"} /> 
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* --- TWO BUTTON LAYOUT --- */}
                <div className="space-y-3">
                  <a 
                    href="/contact" 
                    className={`flex items-center justify-center gap-2 w-full py-5 rounded-full font-black uppercase tracking-widest text-[11px] transition-all active:scale-95 shadow-lg ${pkg.btnPrimary}`}
                  >
                    Send Inquiry
                  </a>
                  <a 
                    href="/services" 
                    className={`flex items-center justify-center gap-2 w-full py-5 rounded-full border text-[10px] font-bold uppercase tracking-widest hover:bg-current hover:invert transition-all ${pkg.btnSecondary}`}
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="px-6 md:px-20 py-24 md:py-40 bg-white text-black border-t border-black/5">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center animate-on-scroll opacity-0">
            <h2 className="text-[36px] md:text-[52px] font-bold tracking-tighter mb-4">Common Enquiries</h2>
            <div className="h-1 w-20 bg-[#0071E3] mx-auto" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="border border-black/5 rounded-[32px] overflow-hidden bg-white transition-all hover:shadow-xl animate-on-scroll opacity-0 translate-y-10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                  className="w-full flex items-center justify-between p-8 md:p-10 text-left group"
                >
                  <span className="text-[18px] md:text-[20px] font-bold tracking-tight pr-8 group-hover:text-[#0071E3] transition-colors">
                    {faq.q}
                  </span>
                  <div className={`p-3 rounded-full bg-[#f5f5f7] transition-all duration-500 ${openFaq === i ? "rotate-180 bg-[#0071E3] text-white" : "text-black/20"}`}>
                     {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${openFaq === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                  <p className="px-8 md:px-10 pb-10 text-[16px] md:text-[18px] text-[#6e6e73] leading-relaxed border-t border-black/5 pt-6 italic">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}