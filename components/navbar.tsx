"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services & Products", href: "#services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
]

const services = [
  { href: "/services/ielts-coaching", label: "IELTS Coaching" },
  { href: "/services/speak-to-prosper", label: "Speak to Prosper" },
  { href: "/services/the-eighth-wonder", label: "The Eighth Wonder" },
  { href: "/services/the-magic-of-human-connection", label: "The Magic of Human Connection" },
  { href: "/services/prayer-with-paras", label: "Prayer with Paras" },
  { href: "/services/the-magic-of-your-subconscious-mind", label: "The Magic of Your Subconscious Mind" },
  { href: "/services/the-ielts-magic-book", label: "The IELTS Magic Book" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
  }, [mobileOpen])

  const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} onClick={() => setMobileOpen(false)}>
      {children}
    </Link>
  )

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[var(--dark)]/90 backdrop-blur-2xl border-b border-white/[0.06] py-3"
            : "bg-transparent py-5 lg:py-7"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-16">
          <Link href="/" className="relative z-[60] flex flex-col">
            <span className="font-serif text-xl tracking-[-0.02em] text-white sm:text-[22px]">
              Paras Shah
            </span>
            <span className="mt-0.5 text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
              Transformation Happens Here
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((link) => {
              if (link.label === "Services & Products") {
                return (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="text-[11.5px] uppercase tracking-[0.16em] text-white/50 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </button>

                    <div
                      className={`absolute top-full mt-2 w-56 rounded-xl bg-[var(--dark)] p-3 shadow-2xl transition-all duration-300 ${
                        servicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block rounded-lg px-4 py-2 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <NavItem key={link.label} href={link.href}>
                  <span className="text-[11.5px] uppercase tracking-[0.16em] text-white/50 transition-colors duration-300 hover:text-white">
                    {link.label}
                  </span>
                </NavItem>
              )
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <div className="flex w-6 flex-col items-end gap-[5px]">
              <span
                className={`block h-[1.5px] bg-white transition-all duration-500 ${
                  mobileOpen ? "w-6 translate-y-[3px] rotate-45" : "w-6"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white transition-all duration-500 ${
                  mobileOpen ? "w-6 -translate-y-[3px] -rotate-45" : "w-4"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[55] bg-[var(--dark)] transition-all duration-600 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-start justify-center px-8 sm:px-14">
          <p className="mb-10 text-[10px] uppercase tracking-[0.35em] text-white/20">Navigation</p>

          {navLinks.map((link) => {
            if (link.label === "Services & Products") {
              return (
                <div key={link.label} className="w-full">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="block w-full py-3 text-[2rem] font-serif leading-tight text-white"
                  >
                    {link.label}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-3 pl-6 text-[1.8rem] text-white/70 hover:text-white"
                        onClick={() => {
                          setMobileOpen(false)
                          setMobileServicesOpen(false)
                        }}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <NavItem key={link.label} href={link.href}>
                <span className="block py-3 font-serif text-[2rem] leading-tight tracking-[-0.02em] text-white sm:text-[2.8rem]">
                  {link.label}
                </span>
              </NavItem>
            )
          })}
        </div>
      </div>
    </>
  )
}
