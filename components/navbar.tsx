"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The Approach", href: "/approach" },
    { name: "Services", href: "/services" },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-[#050505] border-b border-white/5 py-4" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-12 relative z-[1001]">
        
        {/* --- BRAND (Bold & Static White) --- */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-white">
            Kuldip Sutariya
          </span>
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#0071E3] font-bold">
            Digital Experience Studio
          </span>
        </Link>

        {/* --- DESKTOP NAV --- */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0071E3] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <Link 
            href="/contact" 
            className="group flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#0071E3] hover:text-white transition-all active:scale-95 shadow-lg"
          >
            Connect
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* --- MOBILE TRIGGER --- */}
        <button 
          className="lg:hidden text-white p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* --- FULL PAGE MOBILE OVERLAY --- */}
      <div 
        className={`fixed inset-0 h-screen w-full bg-[#050505] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-start justify-start h-full px-8 pt-32 gap-8">
          {[...navLinks, { name: "Connect", href: "#contact" }].map((link, i) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-bold tracking-tighter text-white hover:text-[#0071E3] transition-all duration-500 relative group ${
                isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${(i + 1) * 70}ms` }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0071E3] transition-all duration-300 group-active:w-full group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}