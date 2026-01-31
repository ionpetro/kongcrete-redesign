import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Concrete Repair",
    description: "Restore the strength and appearance of damaged concrete with Kong Crete LLC's professional concrete repair services. Cracks, spalling, salt damage, and surface wear can compromise both safety and aesthetics. Our expert repair solutions fix these issues, extending the life of your concrete and preventing costly replacements.",
    features: [
      "Crack and surface damage restoration",
      "Spalling and salt damage repair",
      "Smoothing and leveling of worn or pitted surfaces",
    ],
    image: "/services/concrete-repair.jpeg",
  },
  {
    title: "Concrete Sealing",
    description: "Protect your investment with Kong Crete LLC's professional concrete sealing services. Unsealed concrete is vulnerable to stains, moisture, salt damage, and cracking—especially in Minnesota's harsh climate. Our industrial-grade sealants shield your floors from damage while enhancing their appearance.",
    features: [
      "Penetrating sealers for long-term protection",
      "Decorative sealers to enhance color and shine",
      "Salt and chemical resistance for garages and commercial spaces",
    ],
    image: "/services/concrete-sealing.jpeg",
  },
  {
    title: "Concrete Polishing",
    description: "Our signature service—diamond concrete polishing—turns plain or aging concrete into sleek, high-gloss surfaces that are as durable as they are beautiful. Ideal for garages, basements, showrooms, warehouses, retail spaces, and offices, polished concrete offers a modern look with minimal maintenance.",
    features: [
      "High durability and resistance to wear",
      "Improved light reflectivity",
      "Low maintenance and easy cleaning",
      "Cost-effective flooring solution",
    ],
    image: "/services/concrete-polishing.jpeg",
  },
  {
    title: "Commercial Concrete Polishing & Sealing",
    description: "Businesses trust Kong Crete LLC for durable, professional-grade commercial concrete flooring solutions. From warehouses to office lobbies, we deliver polished and sealed floors that handle heavy traffic while projecting a clean, modern aesthetic.",
    features: [
      "Retail & Offices",
      "Warehousing & Logistics",
      "Manufacturing Facilities",
      "Automotive Dealerships",
      "Hospitality & Healthcare",
    ],
    image: "/services/commercial-polishing.jpeg",
  },
  {
    title: "Terrazzo Stone Polishing & Restoration",
    description: "Revive the beauty and durability of your floors with our expert Terrazzo stone polishing and restoration services. Terrazzo requires specialized care to maintain its elegance and resist wear, stains, and damage over time. Kong Crete LLC is one of the few companies nationwide with the expertise and equipment to properly restore and protect Terrazzo surfaces.",
    features: [
      "Precision polishing for a brilliant, long-lasting finish",
      "Seamless repair of chips, cracks, and surface imperfections",
      "Advanced sealing for stain, moisture, and chemical resistance",
    ],
    image: "/services/terrazzo.png",
  },
  {
    title: "Crack Repair",
    description: "Protect your concrete surfaces with professional crack repair services from Kong Crete LLC. Left untreated, cracks can expand, allowing moisture, salt, and chemicals to cause further damage—especially in Minnesota's freeze-thaw climate. Our expert repairs restore structural integrity and appearance, preventing costly future repairs.",
    features: [
      "Flexible crack filling for long-lasting protection",
      "Seamless surface refinishing to match existing concrete",
      "Preventative sealing to block moisture, salt, and chemical intrusion",
    ],
    image: "/services/crack-repair.jpeg",
  },
  {
    title: "Residential Epoxy Flooring",
    description: "Upgrade your home with professional residential epoxy flooring by Kong Crete LLC. Epoxy provides a sleek, durable, and low-maintenance surface perfect for garages, basements, and utility rooms. Resistant to stains, moisture, and chemicals, our epoxy coatings protect your concrete while adding long-lasting beauty and functionality.",
    features: [
      "Solid color, flake, quartz, and metallic epoxy finishes",
      "Slip-resistant, chemical-resistant, and UV-stable options",
      "Ideal for garages, basements, laundry rooms, and home gyms",
    ],
    image: "/services/residential-epoxy.jpeg",
  },
  {
    title: "Commercial Polyaspartic Floor Coatings",
    description: "Protect and enhance your business floors with durable, fast-curing polyaspartic concrete coatings from Kong Crete LLC. Ideal for warehouses, retail spaces, showrooms, and industrial facilities, polyaspartic coatings offer superior abrasion resistance, chemical protection, UV stability, and rapid installation—minimizing downtime.",
    features: [
      "Fast cure times for minimal business disruption",
      "High durability against traffic, chemicals, and impacts",
      "UV-stable, slip-resistant, and customizable finishes",
    ],
    image: "/services/commercial-polyaspartic.jpeg",
  },
  {
    title: "Salt Damage Repair",
    description: "Minnesota winters are tough on concrete. Our specialized salt damage repair services target areas affected by de-icing salts and moisture intrusion, restoring structural integrity and preventing future deterioration.",
    features: [
      "Deep salt damage assessment",
      "Surface restoration and leveling",
      "Protective sealing against future damage",
    ],
    image: "/services/salt-damage.jpeg",
  },
  {
    title: "Concrete Resurfacing & Restoration",
    description: "Cracked, pitted, or spalling concrete? We provide expert concrete resurfacing to restore damaged surfaces, eliminating imperfections and extending the life of your floors. Our restoration process smooths out flaws and prepares the surface for polishing or sealing.",
    features: [
      "Surface cracks and chips",
      "Salt and freeze-thaw damage",
      "Discoloration and wear",
    ],
    image: "/services/resurfacing.jpeg",
  },
  {
    title: "Custom Decorative Concrete Finishes",
    description: "Looking to add character to your concrete floors? We offer staining, tinting, and decorative sealing options to create unique finishes that align with your design vision—perfect for showrooms, restaurants, or stylish residential spaces.",
    features: [
      "Acid staining and color tinting",
      "Decorative sealing options",
      "Custom design consultation",
    ],
    image: "/services/decorative.jpeg",
  },
];

const benefits = [
  "Enhanced Durability & Longevity",
  "Improved Aesthetics & Property Value",
  "Low-Maintenance Flooring Solutions",
  "Protection Against Salt, Stains, and Wear",
  "Eco-Friendly Polishing & Sealing Options",
  "Locally Owned and Operated in Minnesota",
];

const faqs = [
  {
    question: "How long does concrete polishing take?",
    answer: "Project timelines depend on floor size and condition, but most residential and commercial jobs are completed within 1-3 days.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free, no-obligation consultations and quotes for all services.",
  },
  {
    question: "Can you fix severely damaged concrete?",
    answer: "Absolutely. Our resurfacing and restoration services address a wide range of damage before polishing or sealing.",
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve the Twin Cities and greater Minnesota, but we're available for specialized projects, like Terrazzo polishing, nationwide.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-red-400 uppercase bg-red-400/10 rounded-full mb-6">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Kong Crete LLC – Trusted Concrete
              <span className="block gradient-text">Polishing & Restoration Experts</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-zinc-400 leading-relaxed">
              When it comes to concrete surfaces, durability and appearance matter. At Kong Crete LLC, we specialize in transforming ordinary, worn, or damaged concrete into polished, resilient, and visually stunning floors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comprehensive Concrete & Stone Services
            </h2>
            <p className="max-w-2xl mx-auto text-zinc-400">
              Our solutions are tailored to meet the needs of homeowners, businesses, and industrial facilities throughout Minnesota and beyond.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-red-400 uppercase bg-red-400/10 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Kong Crete LLC?
            </h2>
            <p className="max-w-2xl mx-auto text-zinc-400">
              With so many options for concrete services, why do homeowners, businesses, and industrial clients consistently choose Kong Crete LLC? It comes down to expertise, quality, and trust.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Specialized Expertise", desc: "We focus exclusively on polishing, sealing, and restoring concrete and stone surfaces, ensuring unmatched precision and professionalism." },
              { title: "Advanced Equipment", desc: "We use state-of-the-art diamond polishing machines, industrial sealants, and restoration tools to deliver flawless, long-lasting results." },
              { title: "Proven Track Record", desc: "Our portfolio includes successful projects across residential garages, commercial spaces, industrial facilities, and historic stone restorations." },
              { title: "Tailored Solutions", desc: "No two floors are alike. We customize every project to meet the specific needs of your surface, usage demands, and aesthetic preferences." },
              { title: "Transparent Service", desc: "We pride ourselves on clear communication, fair pricing, and delivering on our promises—earning the trust of clients throughout Minnesota." },
              { title: "Local & Nationwide", desc: "Locally owned in Minnesota, but available for specialized projects like Terrazzo polishing nationwide." },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Benefits of Working with Kong Crete LLC
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10"
              >
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-zinc-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-red-400 uppercase bg-red-400/10 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-[#0f0f0f]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Contact Kong Crete LLC for a Free Quote Today
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            If you&apos;re searching for concrete polishing, sealing services, or expert restoration, trust the team at Kong Crete LLC. We deliver high-performance flooring solutions that stand the test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:6123516498"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (612) 351-6498
            </a>
          </div>
          <p className="mt-12 text-2xl font-bold gradient-text">
            Kong Crete LLC – Polished. Protected. Perfected.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
