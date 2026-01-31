"use client";

const features = [
  {
    title: "Diamond Finish Technology",
    description:
      "Using high-grade diamond abrasives, we polish your concrete to a brilliant, glass-like finish that's as tough as it is beautiful.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Sealed for Strength",
    description:
      "Every floor is sealed for enhanced resistance to moisture, salt damage, abrasions, and staining—perfect for Minnesota's harsh winters.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Hardened for Longevity",
    description:
      "Our proprietary hardening process strengthens the surface, extending the life of your concrete while improving wear resistance.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Fast, Clean, Professional",
    description:
      "We work quickly and efficiently with minimal disruption. Our skilled crew leaves every site spotless.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#121212]" />
      
      {/* Large gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e11d48]/5 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-[#e11d48] uppercase surface rounded-full mb-4">
            Why Kong Crete
          </span>
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ letterSpacing: "-0.02em" }}>
            Built for the
            <span className="gradient-text"> Long Haul</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            We don&apos;t just polish concrete—we harden performance, seal in strength, 
            and deliver unmatched durability.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl bg-[#1a1a1a] border border-white/[0.08] hover:border-[#e11d48]/20 transition-all duration-500 overflow-hidden" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e11d48]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }} />
                
                {/* Icon */}
                <div className="relative text-[#e11d48] mb-6 transform group-hover:scale-110 transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="relative font-[var(--font-display)] text-xl font-bold text-white mb-3" style={{ letterSpacing: "-0.01em" }}>
                  {feature.title}
                </h3>
                <p className="relative text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 gradient-crimson transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 p-2 rounded-full bg-[#1a1a1a] border border-white/[0.08]">
            <div className="flex -space-x-3 pl-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border-2 border-[#121212] flex items-center justify-center text-xs font-bold text-zinc-400"
                >
                  {["JD", "MK", "AR", "TS"][i - 1]}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-[#e11d48]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-zinc-400">
                Trusted by <span className="text-white font-semibold">500+</span> customers
              </span>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              Join Them
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
