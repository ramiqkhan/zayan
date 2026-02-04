import React from 'react';
import { Search } from 'lucide-react';
import img from '../assets/map.png';
const FindUs = () => {
  return (
    <section className="relative w-screen h-[180px] md:h-[220px] overflow-hidden group cursor-pointer">
      {/* Background Map Image with Overlay */}
      <div className="absolute inset-0 w-screen h-full">
        <img 
          src={img} 
          alt="Map Background"
          className="w-full h-full object-cover grayscale brightness-[0.3]"
        />
        {/* Blueish Dark Tint overlay */}
        <div className="absolute inset-0 bg-[#1a202c]/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 h-full">
        
        {/* Left Side: Logo & Text */}
        <div className="flex items-center gap-4">
          {/* Search Icon & FIND US Text */}
          <div className="flex items-center gap-3">
            <Search className="text-white" size={32} strokeWidth={3} />
            <h2 className="text-white text-4xl md:text-5xl font-black italic tracking-tighter uppercase">
              Find Us
            </h2>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[2px] h-12 bg-white/30 mx-4"></div>

          {/* CURE Locator Logo */}
          <div className="flex items-center">
            <span className="text-[#B4D333] text-4xl md:text-5xl font-black tracking-tighter uppercase">C</span>
            <span className="text-[#33B4D3] text-4xl md:text-5xl font-black tracking-tighter uppercase">U</span>
            <span className="text-[#D33333] text-4xl md:text-5xl font-black tracking-tighter uppercase">R</span>
            <span className="text-[#E9B433] text-4xl md:text-5xl font-black tracking-tighter uppercase">E</span>
            <span className="text-white text-3xl md:text-4xl font-light tracking-tight ml-1 lowercase">locator</span>
          </div>
        </div>

        {/* Right Side: Button */}
        <button className="bg-white text-[#1a202c] px-10 py-4 text-sm font-black tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 shadow-xl">
          Find WCC
        </button>
      </div>

      {/* Bottom subtle border */}
      <div className="absolute bottom-0 left-0 w-screen h-[4px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70"></div>
    </section>
  );
};

export default FindUs;
