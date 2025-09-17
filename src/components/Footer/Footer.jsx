import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";

/* Simple gradient tooth mark */
const ToothLogo = ({ className = "h-7 w-7" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="toothGrad2" x1="0" x2="1">
        <stop offset="0%" stopColor="#79d2ff" />
        <stop offset="100%" stopColor="#3aa0ff" />
      </linearGradient>
    </defs>
    <path
      fill="url(#toothGrad2)"
      d="M32 6c8.3 0 15 6.7 15 15 0 3.3-1.1 6.9-2.4 9.8-2.8 6.2-4.4 13.9-6 22-.6 2.6-3.8 2.8-4.9.6-1.6-3-2.8-6.1-3.4-9.5-.1-.7-1.1-.7-1.2 0-.6 3.4-1.8 6.5-3.4 9.5-1.1 2.2-4.3 2-4.9-.6-1.6-8.1-3.2-15.8-6-22C18.1 27 17 24.3 17 21 17 12.7 23.7 6 32 6Z"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#0e2131] text-slate-300 overflow-hidden overflow-x-clip">
      {/* Background texture + DECORATIONS WRAPPED & CLIPPED */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="https://images.pexels.com/photos/5355840/pexels-photo-5355840.jpeg"
          alt=""
          className="h-full w-full object-cover opacity-[0.05] block"
          loading="lazy"
        />
        {/* keep glows inside a clipped wrapper so they can't cause horizontal overflow */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 translate-x-1/4 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand + blurb + socials */}
          <div className="lg:pr-4">
            <div className="flex items-center gap-2">
              <ToothLogo />
              <span className="text-2xl font-semibold tracking-tight text-white">
                Dentalclinic
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300/90">
              Dentalclinic blends compassionate care with modern technology to make
              every visit comfortable and effective—helping our neighbors keep healthy,
              confident smiles for life.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-100 ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-100 ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-100 ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-100 ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <FaYoutube className="text-sm" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-100 ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <FaXTwitter className="text-sm" />
              </a>
            </div>

            {/* View All Services Button */}
            <div className="mt-6">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Column: Clinic */}
          <div className="lg:pl-2">
            <h4 className="text-white font-semibold text-base">Clinic</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="transition hover:text-white block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white block py-1">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition hover:text-white block py-1">
                  Smile Gallery
                </Link>
              </li>
              <li>
                <Link to="/team" className="transition hover:text-white block py-1">
                  Our Dentists
                </Link>
              </li>
              <li>
                <Link to="/patients" className="transition hover:text-white block py-1">
                  Patient Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Services */}
          <div className="lg:pl-2">
            <h4 className="text-white font-semibold text-base">Popular Treatments</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/family-dentistry" className="transition hover:text-white block py-1">
                  Family Dentistry
                </Link>
              </li>
              <li>
                <Link to="/cosmetic" className="transition hover:text-white block py-1">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/implants" className="transition hover:text-white block py-1">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link to="/invisalign" className="transition hover:text-white block py-1">
                  Invisalign® Aligners
                </Link>
              </li>
              <li>
                <Link to="/root-canal" className="transition hover:text-white block py-1">
                  Root Canal Therapy
                </Link>
              </li>
              <li>
                <Link to="/gum-care" className="transition hover:text-white block py-1">
                  Gum &amp; Periodontal Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Contact */}
          <div className="md:col-span-2 lg:col-span-1 lg:pl-2">
            <h4 className="text-white font-semibold text-base">Get in Touch</h4>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-cyan-300 ring-1 ring-white/15 mt-0.5">
                  <FiMapPin className="text-sm" />
                </span>
                <div>
                  <div className="font-semibold text-white">Visit Our Clinic</div>
                  <div className="text-slate-300/90 mt-0.5">
                    5410 Pacific Ave, Tacoma, WA 98408
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-cyan-300 ring-1 ring-white/15 mt-0.5">
                  <FiPhone className="text-sm" />
                </span>
                <div>
                  <div className="font-semibold text-white">Call Us</div>
                  <div className="text-slate-300/90 mt-0.5">+1 (253) 555-0148</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-cyan-300 ring-1 ring-white/15 mt-0.5">
                  <FiMail className="text-sm" />
                </span>
                <div>
                  <div className="font-semibold text-white">Send a Message</div>
                  <div className="text-slate-300/90 mt-0.5">hello@dentalclinic.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
            <p>© {new Date().getFullYear()} Dentalclinic Group. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="transition hover:text-white">
                Terms
              </Link>
              <Link to="/privacy" className="transition hover:text-white">
                Privacy
              </Link>
              <Link to="/accessibility" className="transition hover:text-white">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
