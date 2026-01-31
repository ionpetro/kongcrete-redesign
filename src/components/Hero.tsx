"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#121212]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e11d48]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#be123c]/15 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      {/* Diamond pattern overlay */}
      <div className="absolute inset-0 diamond-pattern opacity-50" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full surface mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-pulse" />
            <span className="text-sm text-zinc-400">
              Serving Twin Cities & Beyond
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", letterSpacing: "-0.02em" }}
          >
            <span className="block text-white">Diamond Finish.</span>
            <span className="block gradient-text">Hardened Performance.</span>
          </h1>

          {/* Subheadline */}
          <h2
            className={`font-[var(--font-display)] max-w-3xl text-xl sm:text-2xl text-zinc-300 font-semibold leading-relaxed mb-4 transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", letterSpacing: "-0.01em" }}
          >
            Polished Concrete Floors Built to Endure
          </h2>
          <p
            className={`max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed mb-10 transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            Welcome to <span className="text-white font-semibold">Kong Crete LLC</span>—your trusted source for professional concrete polishing, resurfacing, and restoration services. We take tired, cracked, salt-damaged, or dull concrete surfaces and transform them into glossy, high-performance floors built for strength, longevity, and unbeatable shine.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 gradient-crimson text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#e11d48]/40 hover:scale-105"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Free Estimate
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="#services"
              className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:shadow-xl hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              Explore Services
              <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 sm:gap-16 mt-20 pt-10 border-t border-white/[0.08] transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Projects Done" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold gradient-text mb-1" style={{ letterSpacing: "-0.02em" }}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#e11d48] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
