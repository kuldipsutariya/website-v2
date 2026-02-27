"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  ArrowUpRight, 
  ChevronDown 
} from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The Approach", href: "/approach" }, 
    { name: "Services", href: "/services" },     
    { name: "Connect", href: "/contact" },       
  ];

  return (
    <footer className="bg-black text-white py-20 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 relative z-10">
        
        {/* --- BRAND SECTION --- */}
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="flex flex-col group w-fit">
            <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-white">
              Kuldip Sutariya
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-[#0071E3] font-bold">
              Digital Experience Studio
            </span>
          </Link>
          <p className="text-[#86868b] max-w-sm text-base md:text-lg leading-relaxed font-medium">
            Building calm, intelligent digital experiences that turn visitors into lifelong clients.
          </p>
        </div>

        {/* --- NAVIGATION --- */}
        <div className="border-b border-white/5 md:border-none pb-6 md:pb-0">
          <button 
            onClick={() => toggleSection('nav')}
            className="flex items-center justify-between w-full md:cursor-default"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Navigation</h4>
            <ChevronDown size={14} className={`text-white/30 md:hidden transition-transform ${openSection === 'nav' ? 'rotate-180' : ''}`} />
          </button>
          
          <ul className={`mt-6 space-y-4 text-sm font-bold transition-all duration-500 overflow-hidden md:max-h-none ${openSection === 'nav' ? 'max-h-60' : 'max-h-0 md:max-h-none'}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-white/60 hover:text-[#0071E3] transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">
            Crafted with Intention
          </p>
          <div className="h-[1px] w-8 bg-[#0071E3]/40" />
        </div>
        
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20 text-center">
          © {currentYear} Kuldip Sutariya. Delivered with responsibility.
        </p>
      </div>
    </footer>
  )
}