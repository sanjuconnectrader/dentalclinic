import React from "react";
import { FaPhoneAlt, FaClock, FaEnvelope, FaArrowRight } from "react-icons/fa";
import dentalimg2 from "../../assets/dentaltwo.jpg"

export default function Header() {
  return (
    <header className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Hero Section with background image */}
      <div className="relative min-h-screen flex items-center justify-center py-20">
        {/* Background Image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={dentalimg2 }
            alt="Family Dental Care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071f44]/90 via-[#071f44]/80 to-[#071f44]/60"></div>
        </div>

        {/* Animated decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-white/10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full border-4 border-white/10 animate-pulse delay-300"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-white/20 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full bg-white/30 animate-bounce delay-500"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 mx-auto">
            <span className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-ping absolute"></span>
            <span className="h-2 w-2 rounded-full bg-green-400 mr-2 relative"></span>
            <p className="text-sm font-medium">Welcome to Family Dental Care</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Elevating Smiles with <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
              Expert Care
            </span> 
            {" "}and a <br className="hidden md:block" />Gentle Touch
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Experience premium dental care in a comfortable environment where your smile is our priority.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-white text-[#071f44] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center">
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="bg-[#071f44] relative z-20 py-10 lg:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Phone */}
          <div className="flex flex-col items-center text-center group">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0a2e6d] text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Need Dental Services?</p>
              <p className="text-gray-300">Call: +1 123 456 789</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center text-center group">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0a2e6d] text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <FaClock className="text-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Opening Hours</p>
              <p className="text-gray-300">Mon to Sat 08:00 - 20:00</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center group">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0a2e6d] text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <p className="font-semibold text-lg mb-1">Email Us</p>
              <p className="text-gray-300">contact@dentiaclinic.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}