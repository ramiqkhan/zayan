import React from 'react';
import { Search, MapPin } from 'lucide-react';
import img from '../assets/map.png';

const FindUs = () => {
  return (
    <section className="relative w-full py-16 md:py-0 md:h-[280px] overflow-hidden group cursor-pointer bg-[#020617]">
      
      {/* Background Map with Parallax-like Tint */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={img} 
          alt="Map Background"
          className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-110 transition-transform duration-[5000ms] ease-out"
        />
        {/* Theme Consistent Bluish Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-[#020617]/80"></div>
        {/* Extra Radial Glow for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 h-full">
        
        {/* Left Side: Branding */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* Pulsing Neon Search Icon */}
            <div className="relative">
              <div className="absolute -inset-3 bg-cyan-500/30 rounded-full blur-xl animate-pulse"></div>
              <Search className="relative text-cyan-400 md:text-white group-hover:text-cyan-400 transition-colors duration-500" size={42} strokeWidth={2.5} />
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-white text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.8]">
                Find Us
              </h2>
              <p className="text-cyan-500/60 text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase mt-2 md:mt-1">
                Locate nearest retailer
              </p>
            </div>
          </div>

          {/* Styled Vertical Divider (Visible only on desktop) */}
          <div className="hidden md:block w-[1px] h-20 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent mx-4"></div>
        </div>

        {/* Right Side: Aesthetic Button */}
        <div className="relative group/btn w-full md:w-auto">
          {/* Button Glow behind */}
          <div className="absolute -inset-1 bg-cyan-500/20 rounded-sm blur opacity-0 group-hover/btn:opacity-100 transition duration-500"></div>
          
          <button className="relative w-full md:w-auto flex items-center justify-center gap-4 bg-white text-black px-10 md:px-14 py-5 md:py-4 text-[11px] md:text-[13px] font-black tracking-[0.2em] uppercase transition-all duration-300 group-hover/btn:bg-cyan-500 group-hover/btn:text-white group-hover/btn:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            <MapPin size={18} />
            <span>Find WCC Store</span>
          </button>
        </div>
      </div>

      {/* Top and Bottom Animated Borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-cyan-900 via-blue-600 to-cyan-900 opacity-40"></div>
        {/* Scanning light animation */}
        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent skew-x-[45deg] animate-scan"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateX(-200%) skewX(-45deg); }
          100% { transform: translateX(300%) skewX(-45deg); }
        }
        .animate-scan {
          animation: scan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}} />
    </section>
  );
};

export default FindUs;