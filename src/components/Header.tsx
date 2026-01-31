"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark py-4"
          : "bg-transparent py-6"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center">
          <img 
            src="https://kongcretemn.com/wp-content/uploads/2025/04/kongcrete-logo.png" 
            alt="Kong Crete LLC" 
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-5 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 group"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#e11d48] group-hover:w-full transition-all duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }} />
            </a>
          ))}
          <a
            href="tel:6123516498"
            className="ml-4 px-6 py-2.5 bg-[#e11d48] text-white font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-[#e11d48]/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (612) 351-6498
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-dark transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-zinc-400 hover:text-white transition-colors duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:6123516498"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 px-6 py-3 bg-[#e11d48] text-white font-semibold text-center rounded-full flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (612) 351-6498
          </a>
        </nav>
      </div>
    </header>
  );
}
