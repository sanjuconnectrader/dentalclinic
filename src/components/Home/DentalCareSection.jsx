import React, { useState, useEffect } from "react";
import img from "../../assets/dentalimg3.jpeg";

/** Simple inline icons (no extra packages) */
const IconCare = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10Z" className="opacity-90" />
    <path d="M9.5 11.5a2.5 2.5 0 0 1 5 0v1a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 12.5v-1Z" />
  </svg>
);

const IconTech = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M9 3h6M12 3v4M7 17h10M12 17v4M4 12h4M4 12a2 2 0 1 0 0-4M20 12h-4M20 12a2 2 0 1 1 0-4" />
    <rect x="7" y="7" width="10" height="10" rx="2" />
  </svg>
);

const IconFamily = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="8" cy="7" r="3" />
    <circle cx="16" cy="7" r="3" />
    <path d="M3 21v-2a5 5 0 0 1 5-5h0" />
    <path d="M21 21v-2a5 5 0 0 0-5-5h0" />
  </svg>
);

// Counter animation component for stats
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  // Format numbers with commas
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num;
  };

  return <span>{formatNumber(count)}+</span>;
};

export default function DentalCareSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden mt-30 mb-20 md:mb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2">
          {/* LEFT: image with glass card */}
          <div className="relative min-h-[420px] md:min-h-[520px] lg:min-h-[640px] group">
            {/* Background image with zoom effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={img}
                alt="Patient receiving gentle, modern dental care"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjxwYXRoIGQ9Ik0zMCAzMG0tNiAwYTYgNiAwIDEgMCAxMiAwYTYgNiAwIDEgMCAtMTIgMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30" />

            {/* Glass card with enhanced styling */}
            <div
              className={`absolute left-4 right-4 top-6 sm:left-10 sm:right-auto sm:w-[460px] lg:left-12 xl:left-16 lg:top-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="rounded-3xl bg-white/15 backdrop-blur-xl ring-1 ring-white/25 shadow-2xl p-5 sm:p-7">
                {/* item 1 */}
                <div className="flex items-start gap-4 group/item hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/25 text-white ring-1 ring-white/30 group-hover/item:bg-white/30 transition-colors duration-300">
                    <IconCare />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Truly Personalized Dentistry
                    </h3>
                    <p className="text-white/90 text-sm leading-6 mt-1">
                      Every smile is different. We listen, explain clearly, and tailor
                      treatment to your comfort and goals.
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px w-full bg-white/25" />

                {/* item 2 */}
                <div className="flex items-start gap-4 group/item hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/25 text-white ring-1 ring-white/30 group-hover/item:bg-white/30 transition-colors duration-300">
                    <IconTech />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Modern Diagnostics &amp; Tech
                    </h3>
                    <p className="text-white/90 text-sm leading-6 mt-1">
                      Digital X-rays, intraoral cameras, and gentle techniques for precise,
                      efficient care.
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px w-full bg-white/25" />

                {/* item 3 */}
                <div className="flex items-start gap-4 group/item hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/25 text-white ring-1 ring-white/30 group-hover/item:bg-white/30 transition-colors duration-300">
                    <IconFamily />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Friendly Family Care</h3>
                    <p className="text-white/90 text-sm leading-6 mt-1">
                      From first checkups to senior care, we make visits easy for every age.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced curved reflection */}
              <div className="pointer-events-none mt-3 h-6 w-44 rounded-t-[40px] bg-gradient-to-r from-white/40 via-white/20 to-white/10 blur-lg" />
            </div>
          </div>

          {/* RIGHT: text + stats */}
          <div className="relative bg-gradient-to-b from-slate-50 to-white">
            <div className="px-4 py-12 sm:py-14 md:py-16 lg:py-20 lg:px-12 xl:px-16">
              <div
                className={`transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
                  <span className="inline-flex h-5 w-5 rounded-full bg-cyan-700/20 items-center justify-center">
                    <span className="block h-2 w-2 rounded-full bg-cyan-700 animate-pulse" />
                  </span>
                  Why Patients Choose Us
                </p>

                <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                  Complete dental care designed <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-cyan-600 to-cyan-700 bg-clip-text text-transparent">
                    around you
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-[15.5px] font-semibold text-slate-800">
                  Preventive, restorative, and cosmetic options—planned to fit your
                  schedule, comfort, and budget for healthy, confident smiles.
                </p>

                <p className="mt-4 max-w-2xl text-[15.5px] leading-7 text-slate-600">
                  We emphasize prevention, clear communication, and minimally invasive
                  techniques. Expect gentle treatment, transparent guidance, and a
                  welcoming team at every visit.
                </p>
              </div>

              {/* Stats with animated counters */}
              <div
                className={`mt-10 grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="py-6 sm:py-0 sm:px-8 group hover:bg-white/50 rounded-lg transition-all duration-300 p-4 -m-4">
                  <div className="text-xs tracking-[0.18em] text-slate-500">01</div>
                  <div className="mt-3 text-4xl font-extrabold text-slate-900">
                    <Counter end={20} duration={1500} />
                  </div>
                  <div className="mt-1 text-slate-700 font-medium">Years Serving Smiles</div>
                </div>
                <div className="py-6 sm:py-0 sm:px-8 group hover:bg-white/50 rounded-lg transition-all duration-300 p-4 -m-4">
                  <div className="text-xs tracking-[0.18em] text-slate-500">02</div>
                  <div className="mt-3 text-4xl font-extrabold text-slate-900">
                    <Counter end={5} duration={2000} />
                  </div>
                  <div className="mt-1 text-slate-700 font-medium">Patients Cared For</div>
                </div>
                <div className="py-6 sm:py-0 sm:px-8 group hover:bg-white/50 rounded-lg transition-all duration-300 p-4 -m-4">
                  <div className="text-xs tracking-[0.18em] text-slate-500">03</div>
                  <div className="mt-3 text-4xl font-extrabold text-slate-900">
                    <Counter end={986} duration={2500} />
                  </div>
                  <div className="mt-1 text-slate-700 font-medium">Treatments Completed</div>
                </div>
              </div>

              {/* CTA Button */}
              <div
                className={`mt-12 transition-all duration-700 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cyan-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-cyan-800 hover:shadow-lg hover:shadow-cyan-700/30">
                  <span className="relative">Book Your Visit</span>
                  <svg
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 bottom-8 h-40 w-40 rounded-full bg-cyan-600/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/4 top-1/4 h-20 w-20 rounded-full bg-cyan-400/5 blur-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
