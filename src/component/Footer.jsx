import React from "react";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white font-sans border-t border-gray-100">
      
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between gap-12">
        
        {/* Left Section: Logo + Links */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Logo */}
          <div className="flex flex-col gap-2">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="black">
              <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" />
            </svg>
            <h2 className="text-xl font-black tracking-tighter uppercase italic">
              WEST COAST 
              <span className="text-[10px] align-top">®</span>
            </h2>
          </div>

          {/* Navigation Links Column 1 */}
          <div className="flex flex-col gap-4 text-sm font-bold tracking-widest text-black">
            <a href="#" className="hover:opacity-60 transition-opacity uppercase">Products</a>
            <a href="#" className="hover:opacity-60 transition-opacity uppercase">Find</a>
            <a href="#" className="hover:opacity-60 transition-opacity uppercase">Retailer Signup</a>
          </div>

          {/* Navigation Links Column 2 */}
          <div className="flex flex-col gap-4 text-sm font-bold tracking-widest text-black">
            <a href="#" className="hover:opacity-60 transition-opacity uppercase">Contact Us</a>
            <a href="#" className="hover:opacity-60 transition-opacity uppercase">Careers</a>
            <a href="#" className="hover:opacity-60 transition-opacity uppercase">Order WCC</a>
          </div>
        </div>

        {/* Right Section: Stay Connected */}
        <div className="mt-12 md:mt-0 flex flex-col gap-6 max-w-sm">
          <div className="relative">
            <h3 className="text-3xl font-black tracking-tighter uppercase italic">
              Stay Connected
            </h3>
            <div className="w-full h-[2px] mt-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,black_5px,black_10px)]"></div>
          </div>

          <p className="text-xs text-gray-600 font-medium leading-relaxed">
            Sign up for the WCC newsletter for promos, deals, and news.
          </p>

          <button className="w-fit border-2 border-black px-12 py-2 text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-all">
            SIGN UP
          </button>

          {/* Social Icons */}
          <div className="flex gap-4 items-center">
            <Instagram size={20} fill="black" className="cursor-pointer hover:opacity-60" />
            <Youtube size={20} fill="black" className="cursor-pointer hover:opacity-60" />
            <Facebook size={20} fill="black" className="cursor-pointer hover:opacity-60" />
            <Twitter size={20} fill="black" className="cursor-pointer hover:opacity-60" />
          </div>
        </div>
      </div>

      {/* Black Bottom Bar */}
      <div className="w-full bg-black text-white py-8 px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-4">
          <p className="text-[10px] tracking-widest font-bold opacity-80">
            © 2025 TRILLI, LLC. ALL RIGHTS RESERVED
          </p>
          <p className="text-[10px] tracking-widest font-bold opacity-80">
            LIC. NO. C11-0001932-LIC
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-[10px] font-bold tracking-widest uppercase opacity-90">
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Privacy Notice for California Consumers</a>
            <a href="#" className="hover:underline">Prop 65 Warnings</a>
            <a href="#" className="hover:underline">Notice at Collection</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
