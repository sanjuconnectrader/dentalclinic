// FAQSection.jsx
import React, { useState } from "react";

/** Chevron icon */
const Chevron = ({ open }) => (
  <svg
    className={`h-4 w-4 transition-transform duration-200 ${
      open ? "rotate-180" : "rotate-0"
    }`}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M6 8l4 4 4-4" />
  </svg>
);

const faqs = [
  {
    q: "How often should I visit the dentist?",
    a: "Most patients benefit from a checkup and cleaning every 6 months. Your dentist may recommend a different interval based on your oral health, gum condition, orthodontic treatment, or medical history.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call the clinic immediately. For a knocked-out tooth, gently rinse and try to place it back in the socket or keep it in milk. For severe pain or swelling, apply a cold compress and seek urgent care.",
  },
  {
    q: "Do you offer services for kids?",
    a: "Yes. We provide gentle pediatric care, preventive sealants, fluoride treatments, and education to help kids build healthy habits in a comfortable setting.",
  },
  {
    q: "What are my options for replacing missing teeth?",
    a: "Common options include dental implants, bridges, and dentures. Your dentist will evaluate bone health, adjacent teeth, and your goals to recommend the best solution.",
  },
  {
    q: "Is teeth whitening safe?",
    a: "Professional whitening under dental supervision is safe for most people. We assess your enamel and gums first and choose an appropriate treatment strength to minimize sensitivity.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative overflow-hidden mt-30 py-16 md:py-24">
      {/* subtle decorative Pexels image behind the left heading */}
      <img
        src="https://images.pexels.com/photos/4269691/pexels-photo-4269691.jpeg"
        alt=""
        className="pointer-events-none absolute -left-24 top-1/3 hidden h-72 w-72 -translate-y-1/2 rounded-full object-cover opacity-[0.08] blur-sm md:block"
        loading="lazy"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-[minmax(320px,520px)_1fr] lg:gap-20 lg:px-8">
        {/* LEFT: Section heading */}
        <div className="relative">
          <p className="text-sm font-semibold text-[rgb(66,133,244)]">
            Everything You Need to Know
          </p>
          <h2 className="mt-3 text-4xl leading-[1.05] font-extrabold text-[rgb(7,31,68)] sm:text-5xl">
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>

        {/* RIGHT: Accordion */}
        <div className="w-full">
          <ul className="divide-y divide-slate-200">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <span className="text-[17px] font-semibold text-slate-800 group-hover:text-[rgb(7,31,68)]">
                      {item.q}
                    </span>
                    <span className="text-[rgb(7,31,68)]">
                      <Chevron open={isOpen} />
                    </span>
                  </button>

                  {/* Answer panel */}
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-slate-600">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* bottom border to match screenshot rhythm */}
          <div className="mt-2 h-px w-full bg-slate-200" />
        </div>
      </div>
    </section>
  );
}
