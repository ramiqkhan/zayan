import React, { useState } from "react";
import { Search, Menu, X, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "ORDER NOW",
    "PRODUCTS",
    "FIND",
    "COMMUNITY",
    "MERCH",
    "HOW TO",
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-[100] py-4 transition-all duration-300">
      {/* Constant Background with Blue Shade & Glassmorphism */}
      <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,180,211,0.1)]">
        {/* Subtle Radial Blue Glow for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.15),transparent_70%)]"></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo Section */}
          <div className="group relative flex-shrink-0 cursor-pointer">
            <div className="absolute -inset-3 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500"></div>
            <svg 
              width="45" height="45" viewBox="0 0 24 24" fill="white" 
              className="relative group-hover:fill-cyan-400 transition-all duration-500 transform group-hover:scale-110"
            >
              <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" />
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="relative text-[11px] font-black tracking-[0.25em] text-cyan-100/70 hover:text-cyan-300 transition-all duration-300 group"
              >
                <span className="relative z-10">{link}</span>
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full shadow-[0_0_12px_rgba(6,182,212,1)]"></span>
              </a>
            ))}
          </div>

          {/* Utility Icons */}
          <div className="flex items-center gap-8">
            <button className="text-cyan-100/50 hover:text-cyan-400 transition-all duration-300">
              <Search size={20} strokeWidth={2.5} />
            </button>
            
            <button className="hidden sm:block relative text-cyan-100/50 hover:text-cyan-400 transition-all duration-300">
              <ShoppingBag size={20} strokeWidth={2.5} />
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)] animate-pulse"></span>
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-cyan-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden absolute top-[100%] left-0 w-full bg-[#020617] border-b border-cyan-500/20 transition-all duration-500 ease-in-out overflow-hidden
        ${isOpen ? "max-h-screen opacity-100 py-10" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col px-10 space-y-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-2xl font-black tracking-[0.2em] text-cyan-50 hover:text-cyan-400 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;