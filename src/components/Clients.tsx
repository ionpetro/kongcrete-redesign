"use client";

const clientTypes = [
  {
    title: "Homeowners",
    description: "Revitalize worn garage floors, basements, and patios with stunning polished finishes.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "General Contractors",
    description: "Partner with us for reliable, high-quality concrete finishing on your construction projects.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Retail & Commercial",
    description: "Create stunning showroom floors that impress customers and withstand heavy foot traffic.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: "Industrial Facilities",
    description: "Heavy-duty flooring solutions for warehouses, manufacturing, and automotive facilities.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Property Managers",
    description: "Maintain beautiful, durable floors across your commercial and residential properties.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: "Automotive",
    description: "Chemical-resistant, easy-to-clean floors perfect for showrooms and service areas.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#151515] to-[#121212]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-[#e11d48] uppercase surface rounded-full mb-4">
            Who We Serve
          </span>
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ letterSpacing: "-0.02em" }}>
            Residential &<span className="gradient-text"> Commercial</span>
            <span className="block">Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Whether you&apos;re upgrading your garage or renovating a warehouse, 
            Kong Crete delivers high-performance flooring that makes a lasting impression.
          </p>
        </div>

        {/* Clients grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientTypes.map((client, index) => (
            <div
              key={client.title}
              className="group relative p-6 rounded-2xl bg-[#1a1a1a] border border-white/[0.08] hover:border-[#e11d48]/20 transition-all duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#e11d48]/10 flex items-center justify-center text-[#e11d48] group-hover:scale-110 transition-transform duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  {client.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-[var(--font-display)] text-lg font-semibold text-white mb-1 group-hover:text-[#e11d48] transition-colors duration-300" style={{ letterSpacing: "-0.01em", transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}>
                    {client.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location banner */}
        <div className="mt-20 relative overflow-hidden rounded-3xl gradient-crimson p-8 sm:p-12">
          <div className="absolute inset-0 diamond-pattern opacity-30" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-semibold">Eden Prairie, Minnesota</span>
              </div>
              <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>
                Serving the Twin Cities & Beyond
              </h3>
              <p className="text-white/80">
                Proudly serving homeowners and businesses throughout the Twin Cities metro area.
              </p>
            </div>
            
            <a
              href="#contact"
              className="flex-shrink-0 px-8 py-4 bg-white text-black font-semibold rounded-full hover:shadow-xl hover:shadow-white/30 transform hover:scale-105 transition-all duration-300"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
