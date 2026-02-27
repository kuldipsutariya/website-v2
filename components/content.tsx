"use client"

import { 
  ShieldCheck, 
  Globe, 
  Zap, 
  Search, 
  UserCheck, 
  TrendingUp, 
  Clock, 
  ShieldAlert 
} from "lucide-react"

interface ContentProps {
  hoveredCard: number | null;
  setHoveredCard: (id: number | null) => void;
}

export default function Content({ hoveredCard, setHoveredCard }: ContentProps) {
  return (
    <>
      {/* --- PHILOSOPHY SECTION --- */}
<section id="philosophy" className="px-6 md:px-20 py-24 md:py-56 bg-white text-black overflow-hidden">
  <div className="mx-auto max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
      
      {/* Left Column: Heading */}
      <div className="animate-on-scroll opacity-0 -translate-x-5 md:-translate-x-20 transition-all duration-1000">
         <h2 className="text-[32px] sm:text-[42px] md:text-[72px] font-bold leading-[1.1] tracking-tighter mb-8 text-black">
           Most websites try too hard. <br /> 
           <span className="text-[#0071E3]">The right ones don’t have to.</span>
         </h2>
         <div className="h-1 w-20 bg-[#0071E3] rounded-full" />
      </div>

      {/* Right Column: Body Text (Gap Removed) */}
      <div className="animate-on-scroll opacity-0 translate-x-5 md:translate-x-20 transition-all duration-1000 delay-300">
         <div className="flex flex-col">
           {/* Removed space-y classes to eliminate gaps between paragraphs */}
           <p className="text-[19px] sm:text-[22px] md:text-[30px] text-[#1d1d1f] font-semibold leading-snug">
             You don’t need another flashy website. You need a website that explains you clearly, feels effortless to use, and quietly converts visitors into clients.
           </p>
           <p className="text-[17px] sm:text-[18px] md:text-[20px] text-[#86868b] leading-relaxed font-medium italic mt-4">
             No clutter. No confusion. No trend-chasing. Just clarity, structure, and thoughtful execution.
           </p>
         </div>
         
         <div className="pt-10">
            <span className="text-[15px] md:text-[18px] font-black uppercase tracking-[0.25em] border-l-4 border-[#0071E3] pl-5 py-1">
              That’s what we build.
            </span>
         </div>
      </div>

    </div>
  </div>
</section>
      {/* --- VALUE BLOCK --- */}
      <section className="py-40 bg-[#050505] border-y border-white/5 text-center px-6 md:px-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000_100%)] opacity-50" />
        <div className="relative z-10 max-w-5xl mx-auto animate-on-scroll opacity-0 scale-95 transition-all duration-1000">
           <h2 className="text-[32px] md:text-[64px] font-bold tracking-tight mb-8">We provide value. <br /> We charge for it.</h2>
           <p className="text-lg md:text-xl text-[#a1a1a6] leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
             And we never compromise on either. Every project receives full attention, real thinking, and purposeful execution.
           </p>
           <div className="flex justify-center items-center gap-10 md:gap-24 text-white">
              {[
                { icon: <ShieldCheck size={32}/>, label: "Integrity" },
                { icon: <Globe size={32}/>, label: "Scalability" },
                { icon: <Zap size={32}/>, label: "Precision" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group">
                  <div className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#0071E3] group-hover:bg-white/10 transition-all duration-500">
                    <div className="text-[#0071E3]">{item.icon}</div>
                  </div>
                  <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold text-white/40 group-hover:text-white transition-colors">{item.label}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- WHAT YOU RECEIVE (SERVICES) --- */}
      <section id="services" className="px-6 md:px-20 py-24 md:py-56 bg-white text-black">
        <div className="mx-auto max-w-7xl">
          
          {/* Header Section */}
          <div className="mb-16 md:mb-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-[32px] sm:text-[42px] md:text-[72px] font-bold tracking-tighter leading-[1.1] mb-6">
              What You Actually <br className="hidden md:block" /> Receive
            </h2>
            <p className="text-[17px] md:text-[22px] text-[#6e6e73] max-w-2xl font-medium leading-relaxed">
              We translate complex features into meaningful outcomes for your professional digital presence.
            </p>
          </div>
          
          {/* Animated Grid of 6 Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { id: 1, icon: <Search size={24}/>, t: "Strategy-First Design", d: "We plan how your website should think before we design how it should look." },
              { id: 2, icon: <Zap size={24}/>, t: "Fast, Modern Development", d: "Built using clean, scalable technology that performs reliably across all browsers." },
              { id: 3, icon: <UserCheck size={24}/>, t: "Human-Centered Experience", d: "Visitors don’t get impressed. They get comfortable. That’s what builds trust." },
              { id: 4, icon: <TrendingUp size={24}/>, t: "Built to Perform", d: "Every section has a role. Every element has intention. No decorative fluff." },
              { id: 5, icon: <Clock size={24}/>, t: "Made to Last", d: "No redesign cycles every 12 months. Your digital foundation stays strong and relevant." },
              { id: 6, icon: <ShieldAlert size={24}/>, t: "Full Ownership", d: "Domain and hosting in your name. You remain the absolute owner of your digital asset." }
            ].map((box, i) => (
              <div 
                key={box.id} 
                onMouseEnter={() => setHoveredCard(box.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 p-8 md:p-10 rounded-[32px] bg-[#f5f5f7] border border-transparent hover:bg-white hover:border-[#0071E3]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] group ${
                  hoveredCard !== null && hoveredCard !== box.id ? 'opacity-40 scale-[0.98]' : 'opacity-100'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Icon Circle */}
                <div className="mb-6 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#0071E3] shadow-sm group-hover:bg-[#0071E3] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {box.icon}
                </div>
                
                <h3 className="text-xl md:text-[22px] font-bold mb-4 tracking-tight group-hover:text-[#0071E3] transition-colors duration-300">
                  {box.t}
                </h3>
                
                <p className="text-[15px] md:text-[17px] text-[#6e6e73] font-medium leading-relaxed group-hover:text-black transition-colors duration-300">
                  {box.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}