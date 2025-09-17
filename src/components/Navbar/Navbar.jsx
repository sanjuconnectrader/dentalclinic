import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ToothLogo = ({ className = "w-7 h-7" }) => (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
        <defs>
            <linearGradient id="toothBlue" x1="0" x2="1">
                <stop offset="0%" stopColor="#5b8cf5" />
                <stop offset="100%" stopColor="#3b6de8" />
            </linearGradient>
        </defs>
       
    </svg>
);

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about" },
        { label: "Service", to: "/services" },
        { label: "Our Doctors", to: "/doctors" },
        { label: "Location's", to: "/location" },
        { label: "Patient Forms", to: "/forms" },
        { label: "Contact", to: "/contact" },
    ];

    return (
        <header
            className={[
                "sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70",
                scrolled ? "shadow-sm" : "shadow-none",
            ].join(" ")}
            role="banner"
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main">
                <div className="flex h-16 items-center justify-between">
                    {/* left: logo */}
                    <Link to="/" className="flex items-center gap-2 shrink-0">
                        <ToothLogo />
                        <span className="text-2xl font-semibold tracking-tight">
                            <span className="sr-only">Dental Clinic</span>
                            <span aria-hidden className="text-black">Den</span>
                            <span aria-hidden className="text-black">tal Clinic</span>
                        </span>
                    </Link>

                    {/* center: desktop nav */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <ul className="flex items-center gap-8">
                            {links.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.to}
                                        className="inline-flex items-center text-[rgb(7,31,68)] font-semibold hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* right: cta + hamburger */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/appointment"
                            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[rgb(66,133,244)] px-4 py-2 text-white font-semibold shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(66,133,244)]"
                        >
                            Book Appointment
                        </Link>

                        <button
                            type="button"
                            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            aria-label="Toggle navigation"
                            aria-expanded={open}
                            onClick={() => setOpen((v) => !v)}
                        >
                            {/* hamburger / close */}
                            <span className="relative block h-5 w-5">
                                <span
                                    className={[
                                        "absolute left-0 top-0 h-0.5 w-5 bg-gray-800 transition-transform",
                                        open ? "translate-y-2 rotate-45" : "",
                                    ].join(" ")}
                                />
                                <span
                                    className={[
                                        "absolute left-0 top-2 h-0.5 w-5 bg-gray-800 transition-opacity",
                                        open ? "opacity-0" : "opacity-100",
                                    ].join(" ")}
                                />
                                <span
                                    className={[
                                        "absolute left-0 top-4 h-0.5 w-5 bg-gray-800 transition-transform",
                                        open ? "-translate-y-2 -rotate-45" : "",
                                    ].join(" ")}
                                />
                            </span>
                        </button>
                    </div>
                </div>

                {/* mobile menu */}
                <div
                    className={[
                        "lg:hidden overflow-hidden transition-[max-height] duration-300",
                        open ? "max-h-96" : "max-h-0",
                    ].join(" ")}
                >
                    <ul className="pb-4 pt-2 space-y-1">
                        {links.map((item) => (
                            <li key={item.label}>
                                <Link
                                    to={item.to}
                                    className="flex items-center rounded-lg px-3 py-2 text-[rgb(7,31,68)] font-semibold hover:bg-gray-50"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Link
                                to="/appointment"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-[rgb(66,133,244)] px-4 py-2 text-white font-semibold shadow-sm hover:opacity-95"
                                onClick={() => setOpen(false)}
                            >
                                Book Appointment
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
