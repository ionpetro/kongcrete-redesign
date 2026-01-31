export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "/" },
      { name: "Services", href: "#services" },
      { name: "Blog", href: "/blog" },
    ],
    services: [
      { name: "Concrete Polishing", href: "#services" },
      { name: "Resurfacing", href: "#services" },
      { name: "Salt Damage Repair", href: "#services" },
      { name: "Custom Staining", href: "#services" },
    ],
  };

  return (
    <footer className="relative bg-[#0d0d0d] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img 
                src="https://kongcretemn.com/wp-content/uploads/2025/04/kongcrete-logo.png" 
                alt="Kong Crete LLC" 
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Professional concrete polishing, resurfacing, and restoration services. 
              Diamond finish, hardened performance.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-[var(--font-display)] text-white font-semibold mb-4" style={{ letterSpacing: "-0.01em" }}>Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://g.co/kgs/5Q53xxG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-[#e11d48] transition-colors duration-300 flex items-start gap-2"
                  style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                >
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  7117 Washington Ave S, Eden Prairie, MN 55344
                </a>
              </li>
              <li>
                <a
                  href="tel:6123516498"
                  className="text-sm text-zinc-500 hover:text-[#e11d48] transition-colors duration-300 flex items-center gap-2"
                  style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (612) 351-6498
                </a>
              </li>
              <li>
                <a
                  href="mailto:john@kongcretemn.com"
                  className="text-sm text-zinc-500 hover:text-[#e11d48] transition-colors duration-300 flex items-center gap-2"
                  style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  john@kongcretemn.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-[var(--font-display)] text-white font-semibold mb-4" style={{ letterSpacing: "-0.01em" }}>Business Hours</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-zinc-400">9:00AM - 5:00PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday:</span>
                <span className="text-zinc-400">Closed</span>
              </li>
            </ul>

            {/* Navigation links */}
            <h4 className="font-[var(--font-display)] text-white font-semibold mb-4 mt-8" style={{ letterSpacing: "-0.01em" }}>Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-[#e11d48] transition-colors duration-300"
                    style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[var(--font-display)] text-white font-semibold mb-4" style={{ letterSpacing: "-0.01em" }}>Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-[#e11d48] transition-colors duration-300"
                    style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            © {currentYear} Kong Crete LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-sm text-zinc-600 hover:text-[#e11d48] transition-colors duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm text-zinc-600 hover:text-[#e11d48] transition-colors duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
