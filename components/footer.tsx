const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Book", href: "/services/the-ielts-magic-book" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
]

const servicesLinks = [
  { href: "/services/ielts-coaching", label: "IELTS Coaching" },
  { href: "/services/speak-to-prosper", label: "Speak to Prosper" },
  { href: "/services/the-eighth-wonder", label: "The Eighth Wonder" },
  { href: "/services/the-magic-of-human-connection", label: "The Magic of Human Connection" },
  { href: "/services/prayer-with-paras", label: "Prayer with Paras" },
  { href: "/services/the-magic-of-your-subconscious-mind", label: "The Magic of Your Subconscious Mind" },
]

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/theparashah?igshid=ZDdkNTZiNTM%3D" },
  { label: "Facebook", href: "https://www.facebook.com/theparashah" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/theparashah/?originalSubdomain=in" },
  { label: "YouTube", href: "https://www.youtube.com/@theparashah" },
]

export function Footer() {
  return (
    <footer className="bg-[var(--dark)] px-6 py-16 sm:px-10 sm:py-20 md:py-24 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        {/* Top section */}
        <div className="mb-16 flex flex-col gap-10 md:mb-20 md:flex-row md:items-start md:justify-between">
          
          {/* Brand */}
          <div>
            <a href="/" className="font-serif text-2xl tracking-[-0.02em] text-white sm:text-3xl">
              Paras Shah
            </a>
            <p className="mt-3 max-w-xs text-[14px] leading-[1.7] text-white/30">
              Elevating Human Beings to the Next Level through the power of communication, connection, and personal transformation.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20 md:gap-24">
            
            {/* Check This */}
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/20">
                Check This
              </p>
              <nav className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[14px] text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services & Products */}
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/20">
                Services & Products
              </p>
              <nav className="flex flex-col gap-3">
                {servicesLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[14px] text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-white/20">
                Social
              </p>
              <nav className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.07]" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-[12px] text-white/20">
            {"\u00A9"} {new Date().getFullYear()} Paras Shah. All rights reserved.
          </p>
          <p className="text-[12px] text-white/20">
            We can help you TRANSFORM
          </p>
        </div>
      </div>
    </footer>
  )
}
