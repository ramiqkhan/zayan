import React from "react";
import { Instagram, Youtube, Facebook, Twitter, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#020617] font-sans border-t border-cyan-500/20 text-white overflow-hidden">
      
      {/* Subtle Background Theme Shade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.1),transparent_70%)]"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row justify-between gap-16">
        
        {/* Left Section: Logo + Links */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-32">
          
          {/* Logo & Brand */}
          <div className="flex flex-col gap-4 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-cyan-500/15 blur-2xl rounded-full opacity-100 group-hover:bg-cyan-500/30 transition-all duration-500"></div>
              <svg width="65" height="65" viewBox="0 0 24 24" fill="white" className="relative group-hover:fill-cyan-400 transition-colors duration-300 transform group-hover:scale-105">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black tracking-tighter uppercase italic leading-none text-cyan-50">
              WEST COAST 
              <span className="text-cyan-500 text-[12px] align-top ml-1">®</span>
            </h2>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-6">
            <div className="flex flex-col gap-4 text-[12px] font-black tracking-[0.25em] text-cyan-100/40">
              <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Products</a>
              <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Find</a>
              <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Retailer Signup</a>
            </div>
            <div className="flex flex-col gap-4 text-[12px] font-black tracking-[0.25em] text-cyan-100/40">
              <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Contact Us</a>
              <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Careers</a>
              <a href="#" className="hover:text-cyan-400 transition-colors uppercase">Order WCC</a>
            </div>
          </div>
        </div>

        {/* Right Section: Stay Connected */}
        <div className="relative flex flex-col gap-8 max-w-md w-full">
          <div className="relative">
            <h3 className="text-4xl font-black tracking-tighter uppercase italic bg-gradient-to-r from-white via-cyan-100 to-cyan-500/50 bg-clip-text text-transparent">
              Stay Connected
            </h3>
            <div className="w-full h-[2px] mt-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-transparent rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)]"></div>
          </div>

          <p className="text-[13px] text-cyan-100/50 font-medium leading-relaxed tracking-wide">
            Join the elite. Sign up for the WCC newsletter for exclusive promos, drops, and news.
          </p>

          <div className="flex gap-2">
             <button className="group relative overflow-hidden bg-cyan-50 px-10 py-3 text-sm font-black tracking-[0.2em] text-black transition-all">
                <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform duration-300 group-hover:translate-x-0"></span>
                <span className="relative uppercase flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                    Sign Up <Send size={14} />
                </span>
             </button>
          </div>

          {/* Social Icons with Theme Glow */}
          <div className="flex gap-6 items-center">
            {[Instagram, Youtube, Facebook, Twitter].map((Icon, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -inset-2 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Icon size={22} className="relative text-cyan-100/30 group-hover:text-cyan-400 cursor-pointer transition-all transform group-hover:-translate-y-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- REFINED BOTTOM LEGAL BAR --- */}
      <div className="relative w-full bg-[#030a1a] border-t border-cyan-500/10 py-10 px-6">
        {/* Extra Bottom Glow Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col items-center text-center gap-8">
          
          {/* Logo or Iconic Mark (Optional small version) */}
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

          <div className="flex flex-col gap-3 opacity-40 hover:opacity-100 transition-all duration-700">
            <p className="text-[10px] tracking-[0.4em] font-bold text-cyan-50 uppercase">
              © 2025 TRILLI, LLC. ALL RIGHTS RESERVED
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,1)]"></span>
              <p className="text-[10px] tracking-[0.4em] font-bold text-cyan-100/60 uppercase">
                LIC. NO. C11-0001932-LIC
              </p>
            </div>
          </div>

          {/* Legal Links with Hover Underline Effect */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[9px] font-black tracking-[0.25em] uppercase text-cyan-100/20">
            {["Terms of Use", "Privacy Policy", "Prop 65 Warnings", "Notice at Collection"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="relative group py-1 hover:text-cyan-400 transition-all duration-300"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-500/50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;