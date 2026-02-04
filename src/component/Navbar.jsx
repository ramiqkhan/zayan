import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";

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
    <nav className="w-screen sticky top-0 left-0 z-50 bg-white border-b border-gray-200 relative">
      <div className="w-full px-4 md:px-10">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="black">
              <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" />
            </svg>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[13px] font-black tracking-widest text-black hover:text-gray-500 transition"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={22} strokeWidth={2.5} />
            </button>

            {/* Toggle Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-screen bg-white border-b shadow-lg z-40">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-lg font-black tracking-widest text-black border-b border-gray-100 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
