"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MessageSquare, 
  Zap, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Menu, 
  X,
  Sparkles,
  TrendingUp,
  RotateCcw,
  Clock,
  Plus,
  Minus,
  Search,
  UserCheck,
  Award,
  BarChart3,
  Check,
  ShieldAlert
} from "lucide-react"

export default function KuldipMasterPortfolio() {
  const [loaded, setLoaded] = useState(false)
  const [formStatus, setFormStatus] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePkgMobile, setActivePkgMobile] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    setLoaded(true)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active')
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  }, [])

  const handleNextPkg = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setActivePkgMobile((prev) => (prev + 1) % 3)
      setIsFlipping(false)
    }, 300)
  }

  // Web3Forms Logic
  async function handleContactSubmit(e: any) {
    e.preventDefault();
    setFormStatus("Sending...");
    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setFormStatus("Success! I will contact you shortly.");
      e.target.reset();
    } else {
      setFormStatus("Error. Please try again.");
    }
  }

  const packages = [
    { name: "Starter Website", price: "₹9,000", desc: "Perfect for individuals beginning their online presence.", features: ["Single Professional Page", "Mobile-friendly design", "Contact & WhatsApp integration", "5-7 Days Delivery"] },
    { name: "Professional Website", price: "₹14,000", desc: "Best for growing professionals (Doctors/Institutes).", features: ["Multiple sections (Services, About, Contact)", "Structured layout for credibility", "Fast performance & clean design", "SEO Foundation"] },
    { name: "Premium Setup", price: "₹18,000", desc: "Complete professional digital presence foundation.", features: ["Full website setup", "Strong visual structure", "Guidance for online visibility", "Priority Support"] }
  ]

  const faqs = [
    { q: "Do I need technical knowledge?", a: "No. Everything is handled for you. Personally built with care so you don't have to worry about tech." },
    { q: "How long does it take?", a: "Typically 5–7 days depending on how fast we discuss your goals and content." },
    { q: "Will it work on mobile phones?", a: "Yes. Designed mobile-first to work perfectly on every smartphone." },
    { q: "Can I update it later?", a: "Yes, support can be provided whenever required to keep your site fresh." }
  ]

  const trustPoints = ["✔ No Confusion", "✔ No Complicated Process", "✔ Personally Built with Care", "✔ Fast Performance", "✔ Mobile Responsive", "✔ Honest Pricing"];

  return (
    <div className="flex flex-col bg-[#050505] text-white antialiased selection:bg-[#0071E3] selection:text-white overflow-x-hidden font-sans">
      <title>Kuldip Sutariya</title>
      
      {/* --- PREMIUM NAVBAR --- */}
      <nav className="fixed top-0 z-[100] w-full border-b border-white/5 bg-black/60 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 md:h-24 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="text-[22px] md:text-[32px] font-bold tracking-tighter hover:text-[#0071E3] transition-colors">
            Kuldip Sutariya
          </Link>
          <div className="hidden md:flex items-center gap-10 font-bold text-[11px] uppercase tracking-[0.2em] text-white/50">
            <a href="#why" className="hover:text-white transition-colors">Why Website</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="rounded-full bg-[#0071E3] px-8 py-3 text-white hover:bg-[#0077ED] transition-all font-bold">Build My Website</a>
          </div>
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_10%,#1d1d1f_0%,#000000_100%)] opacity-80" />
        <div className="relative z-10 max-w-5xl">
          <div className={`inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/5 border border-white/10 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
             <Sparkles size={14} className="text-[#0071E3]" />
             <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-white/60">Digital Architect</span>
          </div>
          <h1 className={`text-[clamp(2.4rem,8vw,5.5rem)] font-bold leading-[1.1] tracking-[-0.05em] transition-all duration-[1000ms] ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            Your work deserves a place that represents it with <span className="text-[#0071E3]">clarity and dignity.</span>
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-[18px] md:text-[22px] text-[#a1a1a6] leading-relaxed">
            Build Your Professional Website Without Technical Stress. A clean, fast, and trustworthy website for doctors, institutes, and professionals.
          </p>
          <div className="mt-14 space-y-4">
            <a href="#contact" className="group inline-flex items-center justify-center rounded-full bg-[#0071E3] px-12 py-5 text-[18px] font-bold shadow-[0_0_40px_rgba(0,113,227,0.4)] transition-all">
              Build My Website <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- AUTO SLIDER BAR (SIRS STYLE) --- */}
      <div className="bg-white/5 border-y border-white/10 py-6 overflow-hidden relative">
        <div className="flex animate-scroll whitespace-nowrap gap-16 items-center">
          {[...trustPoints, ...trustPoints, ...trustPoints].map((point, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.3em] text-white/60">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- WHY YOU NEED A WEBSITE SECTION --- */}
      <section id="why" className="px-6 py-24 md:py-40 bg-white text-black">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 mb-20 text-center">
            <h2 className="text-[36px] md:text-[56px] font-bold tracking-tighter">Why You Need a Website Today</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { t: "Verification Matters", d: "If they don't find you online, they assume you are not established." },
              { t: "Credibility Gap", d: "A simple website makes you appear more credible instantly." },
              { t: "Beyond WhatsApp", d: "WhatsApp alone is not enough anymore. People want to see your services first." },
              { t: "Opportunity Loss", d: "Serious clients choose businesses that look organized and trustworthy." },
              { t: "24/7 Representation", d: "While you are working, your website is explaining your work to new people." },
              { t: "Ownership", d: "Domain & hosting in your name. You remain the owner of your asset." }
            ].map((box, i) => (
              <div key={i} className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 p-10 rounded-[40px] bg-[#f5f5f7] border border-[#d2d2d7] hover:bg-white transition-all">
                <ShieldAlert className="text-[#0071E3] mb-6" size={32} />
                <h3 className="text-[22px] font-bold mb-4">{box.t}</h3>
                <p className="text-[#6e6e73] font-medium leading-relaxed">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION (MOBILE FLIP) --- */}
      <section id="pricing" className="px-6 py-24 md:py-40 bg-white text-black border-t border-gray-100">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-[36px] md:text-[56px] font-bold tracking-tighter mb-20">Simple Fixed Pricing.</h2>
          
          {/* MOBILE FLIP */}
          <div className="md:hidden perspective-1000 relative min-h-[520px]">
            <div className={`transition-all duration-300 transform ${isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
              <div className="bg-[#f5f5f7] p-8 rounded-[40px] border border-[#d2d2d7] text-left min-h-[460px] flex flex-col">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-[20px] font-bold tracking-tight">{packages[activePkgMobile].name}</h3>
                    <span className="text-[10px] bg-[#0071E3] text-white px-2 py-1 rounded-full uppercase font-bold tracking-widest">{activePkgMobile + 1}/3</span>
                  </div>
                  <div className="text-[48px] font-bold mb-4 tracking-tighter text-[#0071E3]">{packages[activePkgMobile].price}</div>
                  <p className="text-[#86868b] text-[14px] font-medium mb-8 leading-relaxed">{packages[activePkgMobile].desc}</p>
                  <ul className="space-y-4">
                    {packages[activePkgMobile].features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 font-semibold text-[15px]">
                        <CheckCircle2 size={18} className="text-[#0071E3]" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="mt-8 block w-full text-center py-4 rounded-full bg-[#0071E3] text-white font-bold text-[14px]">Get Started</a>
              </div>
            </div>
            <button onClick={handleNextPkg} className="mt-6 flex items-center justify-center gap-2 w-full text-[#0071E3] font-bold uppercase tracking-widest text-[11px] animate-pulse">
              <RotateCcw size={16} /> View Other Plans
            </button>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid gap-8 md:grid-cols-3 text-left">
            {packages.map((pkg, i) => (
              <div key={i} className="bg-[#f5f5f7] p-12 rounded-[45px] border border-transparent hover:border-[#d2d2d7] hover:bg-white hover:shadow-2xl transition-all flex flex-col group">
                <div className="flex-grow">
                  <h3 className="text-[22px] font-bold mb-2 group-hover:text-[#0071E3] transition-colors">{pkg.name}</h3>
                  <div className="text-[54px] font-bold mb-6 tracking-tighter">{pkg.price}</div>
                  <p className="text-[#86868b] font-medium mb-10 leading-relaxed">{pkg.desc}</p>
                  <ul className="space-y-5 mb-12">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-4 font-semibold">
                        <CheckCircle2 size={20} className="text-[#0071E3]" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="block w-full text-center py-5 rounded-full bg-[#0071E3] text-white font-bold uppercase tracking-widest hover:bg-black transition-all">Choose Plan</a>
              </div>
            ))}
          </div>
          <p className="mt-12 text-[#86868b] text-[13px] font-medium italic">Note: Domain & Hosting are purchased in your name so you remain the owner.</p>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="px-6 py-24 md:py-40 bg-[#050505]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-16 tracking-tighter">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-[30px] overflow-hidden bg-white/5 transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-7 md:p-9 text-left"
                >
                  <span className="text-[17px] md:text-[20px] font-bold tracking-tight">{faq.q}</span>
                  {openFaq === i ? <Minus className="text-[#0071E3]" /> : <Plus className="text-white/30" />}
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                  <p className="px-7 md:px-9 pb-9 text-[#a1a1a6] leading-relaxed border-t border-white/5 pt-6">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (WEB3FORMS COMPATIBLE) --- */}
      <section id="contact" className="px-6 py-24 md:py-40 bg-black text-white">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 text-left">
            <h2 className="text-[42px] md:text-[72px] font-bold tracking-tighter leading-tight mb-8">Let’s launch <br /> your site.</h2>
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="h-16 w-16 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#0071E3] transition-all"><Mail className="text-[#0071E3] group-hover:text-white" /></div>
                <div><p className="text-[11px] font-bold opacity-40 uppercase mb-1 tracking-widest text-white/50">Email</p><p className="text-[18px] md:text-[22px] font-medium tracking-tight">kuldipsutariya37@gmail.com</p></div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="h-16 w-16 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#25D366] transition-all"><MessageSquare className="text-[#25D366] group-hover:text-white" /></div>
                <div><p className="text-[11px] font-bold opacity-40 uppercase mb-1 tracking-widest text-white/50">WhatsApp</p><p className="text-[18px] md:text-[22px] font-medium tracking-tight">+91 93274 62866</p></div>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-14 rounded-[50px] border border-white/10 shadow-2xl relative">
            <form onSubmit={handleContactSubmit} className="space-y-8 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold opacity-40 uppercase tracking-widest ml-1 text-white/50">Name</label>
                  <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#0071E3] transition-all" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold opacity-40 uppercase tracking-widest ml-1 text-white/50">Profession</label>
                  <select name="profession" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#0071E3] appearance-none cursor-pointer">
                    <option value="" className="bg-black">Select Option</option>
                    <option value="Doctor" className="bg-black">Doctor / Clinic</option>
                    <option value="Educator" className="bg-black">Coaching / IELTS</option>
                    <option value="Consultant" className="bg-black">Independent Consultant</option>
                    <option value="Other" className="bg-black">Other Profession</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold opacity-40 uppercase tracking-widest ml-1 text-white/50">Goal</label>
                <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#0071E3] transition-all" placeholder="Tell me what you need..." />
              </div>
              <button type="submit" className="w-full rounded-full bg-[#25D366] py-6 text-[18px] font-bold text-white shadow-[0_20px_40px_rgba(37,211,102,0.2)] hover:bg-[#22c35e] transition-all uppercase tracking-widest active:scale-95">Send Request</button>
              {formStatus && <div className="text-center text-green-400 font-bold uppercase tracking-widest animate-pulse mt-4">{formStatus}</div>}
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-20 px-6 text-center border-t border-white/5">
        <p className="text-[11px] text-white/20 uppercase tracking-[0.5em] font-medium leading-relaxed">
          Built with clarity, sincerity, and commitment <br /> by Kuldip Sutariya
        </p>
      </footer>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .active { opacity: 1 !important; transform: translate(0, 0) !important; }
        .perspective-1000 { perspective: 1000px; }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  )
}