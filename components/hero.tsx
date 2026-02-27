"use client"

import { Sparkles, ArrowRight } from "lucide-react"

interface HeroProps {
  loaded: boolean;
}

export default function Hero({ loaded }: HeroProps) {
  const sliderSentences = [
    "When people understand you clearly, they choose you naturally.",
    "Crafted with intention. Delivered with responsibility.",
    "Clean code. Purposeful design. Measurable results."
  ];

  return (
    <>
      {/* Adjusted min-h and removed excess top padding (pt-0) */}
      <section className="relative flex min-h-[80svh] flex-col items-center justify-center text-center px-6 overflow-hidden pt-0">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,#1a1a1a_0%,#000_100%)]" />
        
        <div className="relative z-10 max-w-6xl -mt-10 md:-mt-20">
          {/* Studio Badge - Reduced mb-6 to mb-4 to kill extra gap above headline */}
          <div className={`inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Sparkles size={14} className="text-[#0071E3]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">
              Digital Experience Studio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-[clamp(2.2rem,7vw,5rem)] font-bold leading-[1.1] tracking-[-0.04em] mb-10 transition-all duration-[1500ms] ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            Websites shouldn’t just exist. <br />
            <span className="bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent">
              They should move people.
            </span>
          </h1>

          {/* Value Subtext */}
          <div className={`mt-10 mx-auto max-w-3xl transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[17px] md:text-[21px] text-[#a1a1a6] leading-relaxed font-medium tracking-tight">
              We design calm, intelligent digital experiences that <br className="hidden md:block" /> 
              earn trust before asking for attention.
            </p>
          </div>

          {/* Call to Action Area */}
          <div className={`mt-12 flex flex-col items-center gap-8 transition-all duration-1000 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
            <a 
              href="/contact" 
              className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-[16px] md:text-[18px] font-bold text-black shadow-[0_15px_40px_rgba(255,255,255,0.08)] transition-all hover:bg-[#0071E3] hover:text-white hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                Start Your Project 
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            </a>
          </div>
        </div>
      </section>

      {/* --- RESPONSIVE SLIDER TICKER --- */}
      <div className="bg-white/5 border-y border-white/5 py-10 overflow-hidden relative">
        <div className="flex animate-responsive-scroll whitespace-nowrap gap-20 items-center">
          {[...sliderSentences, ...sliderSentences, ...sliderSentences, ...sliderSentences].map((point, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-[14px] md:text-[16px] font-bold tracking-tight text-white/40 hover:text-[#0071E3] transition-colors uppercase italic">
                {point}
              </span>
              <div className="w-12 h-[1px] bg-[#0071E3]/40" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollMain {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-responsive-scroll { 
          animation: scrollMain 18s linear infinite; 
        }

        @media (max-width: 768px) {
          .animate-responsive-scroll { 
            animation: scrollMain 12s linear infinite; 
          }
        }

        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .group:hover .animate-shimmer { 
          animation: shimmer 2s infinite; 
        }
      `}</style>
    </>
  );
}