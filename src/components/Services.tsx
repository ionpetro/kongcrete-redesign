"use client";

const services = [
  {
    title: "Concrete Polishing",
    description:
      "Elevate your space with our signature polished concrete finish—ideal for basements, garages, showrooms, retail stores, warehouses, and more.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    features: ["Custom gloss levels", "Basement & garage", "Commercial spaces"],
  },
  {
    title: "Resurfacing & Restoration",
    description:
      "We restore damaged concrete with a smooth, seamless resurfacing process that erases flaws and breathes new life into your floors.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    features: ["Crack repair", "Chip restoration", "Surface leveling"],
  },
  {
    title: "Salt Damage Repair",
    description:
      "Winter weather can destroy untreated concrete. Our repair service removes compromised areas and restores with a hardened, sealed finish.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: ["Winter protection", "Future resistance", "Deep restoration"],
  },
  {
    title: "Custom Staining & Finishes",
    description:
      "Looking for a more decorative finish? We offer acid staining, color tinting, and specialty sealants for unique character.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: ["Acid staining", "Color tinting", "Decorative sealants"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#161616] to-[#121212]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e11d48]/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-[#e11d48] uppercase surface rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ letterSpacing: "-0.02em" }}>
            Concrete Services That
            <span className="block gradient-text">Transform Spaces</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            From diamond polishing to salt damage repair, we offer comprehensive 
            solutions for all your concrete flooring needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-3xl bg-[#1a1a1a] border border-white/[0.08] hover:border-[#e11d48]/30 transition-all duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e11d48]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#e11d48]/10 text-[#e11d48] mb-6 group-hover:scale-110 transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="font-[var(--font-display)] text-2xl font-bold text-white mb-3 group-hover:text-[#e11d48] transition-colors duration-300" style={{ letterSpacing: "-0.01em", transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-full border border-white/[0.08]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  <svg className="w-5 h-5 text-[#e11d48]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
