// WhyChoose.jsx
import dental from "../../assets/dentalthree.jpg"
import dentalimg1 from "../../assets/dentalimg1.jpeg"
import dentalimg2 from "../../assets/dentalimg3.jpeg"

export default function WhyChoose() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          {/* LEFT: Text Content */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold tracking-wide text-[rgb(66,133,244)]">
              Why Choose Our Dental Care
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-[rgb(7,31,68)] leading-[1.1]">
              Compassionate Dentistry With a <br className="hidden sm:block" />
              Personal Touch
            </h2>

            <p className="mt-6 text-[17px] leading-7 text-slate-600 max-w-2xl">
              Your smile is unique—and your care should be too. Our experienced team
              combines gentle, patient-first dentistry with advanced technology to deliver
              comfortable, efficient, and long-lasting results for every member of your family.
            </p>

            <hr className="mt-8 border-slate-200" />

            {/* Features Grid */}
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-[rgb(7,31,68)]">
                  Experienced Dentists
                </h3>
                <p className="mt-2 text-slate-600">
                  Decades of clinical expertise with a caring, detail-oriented approach.
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-[rgb(7,31,68)]">
                  Advanced Technology
                </h3>
                <p className="mt-2 text-slate-600">
                  Digital X-rays, intraoral cameras, and modern techniques for precise care.
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-[rgb(7,31,68)]">
                  Personalized Treatment Plans
                </h3>
                <p className="mt-2 text-slate-600">
                  Preventive, restorative, and cosmetic options tailored to your goals.
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-[rgb(7,31,68)]">
                  Family-Friendly & Comfortable
                </h3>
                <p className="mt-2 text-slate-600">
                  A welcoming environment with gentle care for kids, teens, adults, and seniors.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Image Collage */}
          <div className="lg:pl-8">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {/* Left column (two stacked images) */}
              <div className="space-y-6 md:space-y-8">
                <div className="relative overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-200/70">
                  <img
                    src={dental}
                    alt="Patient smiling during dental treatment"
                    className="h-48 w-full object-cover md:h-56 lg:h-60"
                    loading="lazy"
                  />
                </div>

                <div className="relative overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-200/70">
                  <img
                    src={dentalimg2 }
                    alt="Dentists preparing for a procedure"
                    className="h-56 w-full object-cover md:h-64 lg:h-72"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right column (tall image) */}
              <div className="relative overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-200/70">
                <img
                  src={dentalimg1 }
                  alt="Modern dental chair and equipment"
                  className="h-full min-h-[22rem] w-full object-cover md:min-h-[30rem]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background flourishes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[rgb(66,133,244)]/5 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-[rgb(7,31,68)]/5 blur-2xl"
      />
    </section>
  );
}
