import React from 'react';
import { Search, MapPin } from 'lucide-react';
import img from '../assets/map.png';

const FindUs = () => {
  return (
    <section className="relative w-full h-[200px] md:h-[250px] overflow-hidden group cursor-pointer bg-black">
      
      {/* Background Map with Parallax-like Tint */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={img} 
          alt="Map Background"
          className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 transition-transform duration-[3000ms] ease-out"
        />
        {/* Deep Blueish Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#05111a]/90 to-black/80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
        
        {/* Left Side: Branding */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4">
            {/* Pulsing Neon Search Icon */}
            <div className="relative">
              <div className="absolute -inset-2 bg-cyan-500/40 rounded-full blur-md animate-pulse"></div>
              <Search className="relative text-white" size={38} strokeWidth={2.5} />
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
              Find Us
            </h2>
          </div>

          {/* Styled Vertical Divider */}
          <div className="hidden md:block w-[1px] h-16 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent mx-2"></div>

          {/* CURE Locator with Glow */}
          <div className="flex flex-col items-start">
            <div className="flex items-center text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              <span className="text-[#B4D333] drop-shadow-[0_0_8px_rgba(180,211,51,0.4)]">C</span>
              <span className="text-[#33B4D3] drop-shadow-[0_0_8px_rgba(51,180,211,0.4)]">U</span>
              <span className="text-[#D33333] drop-shadow-[0_0_8px_rgba(211,51,51,0.4)]">R</span>
              <span className="text-[#E9B433] drop-shadow-[0_0_8px_rgba(233,180,51,0.4)]">E</span>
              <span className="text-white/40 text-2xl md:text-3xl font-light tracking-widest ml-2 lowercase">locator</span>
            </div>
          </div>
        </div>

        {/* Right Side: Aesthetic Button */}
        <div className="relative group/btn">
          {/* Button Glow behind */}
          <div className="absolute -inset-1 bg-cyan-500/20 rounded-lg blur opacity-0 group-hover/btn:opacity-100 transition duration-500"></div>
          
          <button className="relative flex items-center gap-3 bg-white text-black px-12 py-4 text-[12px] font-black tracking-[0.25em] uppercase transition-all duration-300 group-hover/btn:bg-cyan-500 group-hover/btn:text-white">
            <MapPin size={16} />
            Find WCC
          </button>
        </div>
      </div>

      {/* Top and Bottom Animated Borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full h-[4px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-60"></div>
        {/* Scanning light animation */}
        <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[45deg] animate-[scan_3s_infinite]"></div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-150%) skewX(-45deg); }
          100% { transform: translateX(350%) skewX(-45deg); }
        }
      `}</style>
    </section>
  );
};

export default FindUs;