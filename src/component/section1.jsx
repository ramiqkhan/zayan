import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import img1 from '../assets/img1-2.jpg';
import imgbc from '../assets/imgbc.jpeg';
import imgbc1 from '../assets/imgbc1.webp';
import imgbc3 from '../assets/imgbc3.webp';
import img3 from '../assets/img3.jpg';
import img55 from '../assets/img55.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, images: [imgbc], buttons: [{ text: "SHOP NOW", type: "primary" }] },
    { id: 2, images: [img3, img1], buttons: [{ text: "SHOP NOW", type: "primary" }] },
    { id: 3, images: [imgbc1], buttons: [{ text: "SHOP NOW", type: "primary" }, { text: "LEARN MORE", type: "secondary" }] },
    { id: 4, images: [imgbc3], buttons: [{ text: "SHOP NOW", type: "primary" }, { text: "LEARN MORE", type: "secondary" }] },
    { id: 5, images: [img55], buttons: [{ text: "SHOP NOW", type: "primary" }, { text: "LEARN MORE", type: "secondary" }] },
    { id: 6, images: ["https://images.unsplash.com/photo-1603909223429-69bb7101f420?q=80&w=800"], buttons: [{ text: "VIEW PRODUCTS", type: "primary" }] }
  ];

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[85vh] sm:h-[750px] min-h-[500px] overflow-hidden bg-[#050505]">
      
      {/* Slides Track */}
      <div
        className="flex transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative flex items-center justify-center">
            
            {/* Background Images with Adaptive Grid */}
            <div className="absolute inset-0 w-full h-full flex flex-col sm:flex-row overflow-hidden">
              {slide.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className="h-full relative overflow-hidden flex-1"
                >
                  <img
                    src={img}
                    alt="Slide Content"
                    className="h-full w-full object-cover transition-transform duration-[15000ms] scale-110 animate-slow-zoom"
                    style={{ objectPosition: 'center center' }}
                  />
                  {/* Bluish Depth Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#020617]/20 to-[#020617]/80"></div>
                </div>
              ))}
            </div>

            {/* Content Overlay - Centered for Mobile */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-6 w-full max-w-lg text-center">
              {/* Glow behind content */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full -z-10"></div>
              
              {/* Responsive Buttons Container */}
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                {slide.buttons.map((btn, index) => (
                  <button
                    key={index}
                    className={`group relative w-full sm:w-[220px] py-4 font-black tracking-[0.25em] text-[10px] sm:text-[11px] transition-all duration-500 overflow-hidden
                      ${btn.type === "primary"
                          ? "bg-white text-black hover:text-white"
                          : "bg-transparent text-white border border-white/20 hover:border-cyan-400 backdrop-blur-sm"
                      }`}
                  >
                    {btn.type === "primary" && (
                      <span className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform duration-500 group-hover:translate-y-0"></span>
                    )}
                    
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {btn.text} 
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on very small screens for better UI */}
      <button 
        onClick={prevSlide} 
        className="hidden md:flex absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 group p-4 border border-white/10 rounded-full backdrop-blur-md hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
      >
        <ChevronLeft size={24} className="text-white/40 group-hover:text-cyan-400 group-hover:-translate-x-1 transition-all" />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="hidden md:flex absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 group p-4 border border-white/10 rounded-full backdrop-blur-md hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
      >
        <ChevronRight size={24} className="text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
      </button>

      {/* Responsive Indicators - Bigger hit area for touch */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group py-4 px-1 flex items-center justify-center"
          >
            <div className={`transition-all duration-500 rounded-full ${
              currentSlide === index 
                ? "h-6 w-[3px] bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,1)]" 
                : "h-3 w-[2px] bg-white/30 group-hover:bg-white/60"
            }`} />
          </button>
        ))}
      </div>

      {/* Bottom Fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020617] to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default HeroSlider;