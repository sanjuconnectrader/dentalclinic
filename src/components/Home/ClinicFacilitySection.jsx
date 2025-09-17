import img from "../../assets/img1.jpeg"

const ToothMark = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 text-cyan-400"
    fill="currentColor"
  >
    <path d="M12 2c3.7 0 6.7 3 6.7 6.6 0 1.5-.5 3.1-1.1 4.3-1.3 2.9-2.1 6.4-2.9 10-.3 1.1-1.6 1.3-2.1.3-.7-1.3-1.2-2.7-1.4-4.2-.1-.3-.5-.3-.6 0-.2 1.5-.7 2.9-1.4 4.2-.5 1-1.8.8-2.1-.3-.8-3.6-1.6-7.1-2.9-10C5.8 11.7 5.3 10.1 5.3 8.6 5.3 5 8.3 2 12 2z" />
  </svg>
);

export default function ClinicFacilitySection() {
  return (
    <section className="relative overflow-hidden bg-[#0c3a45] text-white">
      {/* subtle grid at the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.16) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        {/* Top row */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="flex flex-col">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-cyan-300">
              <ToothMark />
              <span>Our Facilities &amp; Amenities</span>
            </p>

            <h2 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl">
              Comfort, precision, and safety—<br className="hidden sm:block" /> all in one modern clinic
            </h2>

            <p className="mt-6 max-w-2xl text-[15.5px] leading-7 text-white/80">
              We designed our practice around you. From welcoming, calming spaces to
              advanced equipment and strict safety protocols, every detail supports a
              gentle experience and consistently high-quality dental outcomes.
            </p>
          </div>

          {/* Right: video/image card */}
          <div className="lg:justify-self-end">
            <div className="relative w-full max-w-[640px] overflow-hidden rounded-[28px] ring-1 ring-white/15 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]">
              <img
                src={img}
                alt="Modern dental operatory with ergonomic chair and clean instrumentation"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
              {/* Play button */}
              <button
                type="button"
                className="group absolute inset-0 grid place-items-center"
                aria-label="Play a short tour of our clinic"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white/70 backdrop-blur-md transition group-hover:bg-white/80">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#0c3a45]">
                    <path d="M9 7l8 5-8 5V7z" fill="currentColor" stroke="none" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom features */}
        <div className="relative mt-12 grid gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 */}
          <div className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500 font-bold text-white ring-1 ring-white/25 group-hover:bg-cyan-600 transition-colors duration-300">
              1
            </span>
            <div>
              <h3 className="text-lg font-semibold">Patient Comfort &amp; Care</h3>
              <p className="mt-2 text-white/80">
                Cozy treatment rooms, gentle techniques, and clear communication to
                ease anxiety and make every visit feel effortless.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500 font-bold text-white ring-1 ring-white/25 group-hover:bg-cyan-600 transition-colors duration-300">
              2
            </span>
            <div>
              <h3 className="text-lg font-semibold">Advanced Dental Technology</h3>
              <p className="mt-2 text-white/80">
                Digital imaging and modern instrumentation support accurate diagnosis,
                minimally invasive treatment, and faster, more comfortable visits.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500 font-bold text-white ring-1 ring-white/25 group-hover:bg-cyan-600 transition-colors duration-300">
              3
            </span>
            <div>
              <h3 className="text-lg font-semibold">Sterilization &amp; Safety Protocols</h3>
              <p className="mt-2 text-white/80">
                Hospital-grade sterilization, meticulous instrument handling, and
                evidence-based guidelines to help keep you protected at every step.
              </p>
            </div>
          </div>
        </div>

        {/* View All Facilities Button */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-600/30">
            <span>View All Facilities</span>
            <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}