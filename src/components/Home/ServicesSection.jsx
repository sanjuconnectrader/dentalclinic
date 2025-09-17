import img from "../../assets/img1.jpeg"

const DNAIcon = () => (
  <svg viewBox="0 0 64 64" className="h-6 w-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 10c10 0 30 12 40 12M12 42c10 0 30-12 40-12" />
    <path d="M20 8c0 8 8 16 8 24s-8 16-8 24M36 8c0 8-8 16-8 24s8 16 8 24" />
  </svg>
);

const ITEMS = [
  {
    title: "Children and Family Dentistry",
    desc:
      "A welcoming, educational experience for kids and adults. We help young patients build great dental habits while caring for your whole family.",
    img: img,
  },
  {
    title: "Crowns / Bridges / Implant Crowns",
    desc:
      "Carefully designed restorations that match your natural teeth for function, comfort, and a beautiful smile.",
    img:img,
  },
  {
    title: "Dentures",
    desc:
      "Custom dentures that restore confidence, improve chewing and speech, and can help you look younger by supporting facial structure.",
    img: img,
  },
  {
    title: "Endodontics / Root Canals",
    desc:
      "Modern, comfortable root canal therapy using up-to-date equipment to save teeth and relieve pain.",
    img: img,
  },
  {
    title: "Fillings",
    desc:
      "Durable, natural-looking, tooth-colored (metal-free) fillings that blend seamlessly with your smile.",
    img: img,
  },
  {
    title: "Invisalign Orthodontics",
    desc:
      "Nearly invisible aligners custom-made to gently straighten teeth. Proven effective in clinics nationwide.",
    img: img,
  },
  {
    title: "Oral Surgery & Wisdom Teeth Extraction",
    desc:
      "Experienced surgical care— including wisdom teeth removal— with sedation options for a comfortable visit.",
    img: img,
  },
  {
    title: "Periodontal Disease",
    desc:
      "Targeted gum care to fight infection, protect teeth, and support overall health. Bleeding gums? It's time for a periodontal exam.",
    img: img,
  },

  {
    title: "Veneers",
    desc:
      "Cosmetic porcelain veneers designed to transform your smile with natural shape, color, and symmetry.",
    img: img,
  },
];
export default function ServicesSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-slate-900">
            SERVICES
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-cyan-600">
            <DNAIcon />
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-slate-500">
            Comprehensive care for every stage of your smile—delivered with modern
            technology and a gentle touch.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <article key={item.title} className="flex items-start gap-5 group">
              {/* Circular icon (Pexels image inside blue disc) */}
              <div className="relative shrink-0">
                <div className="h-20 w-20 rounded-full bg-cyan-600 flex items-center justify-center shadow-md ring-1 ring-cyan-700/30 group-hover:bg-cyan-700 transition-colors duration-300">
                  <img
                    src={item.img}
                    alt=""
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-white"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text block */}
              <div className="pt-1">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-600/30">
            <span>View All Services</span>
            <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Subtle background flourish */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-8 h-40 w-40 rounded-full bg-cyan-600/5 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-8 h-40 w-40 rounded-full bg-sky-500/5 blur-2xl"
      />
    </section>
  );
}