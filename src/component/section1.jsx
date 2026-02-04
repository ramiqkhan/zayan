import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from '../assets/img1-2.jpg';
import imgbc from '../assets/imgbc.jpeg';
import imgbc1 from '../assets/imgbc1.webp';
import imgbc3 from '../assets/imgbc3.webp';
import img3 from '../assets/img3.jpg';
import img55 from '../assets/img55.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      images: [imgbc], 
      buttons: [{ text: "SHOP NOW", type: "primary" }]
    },
    {
      id: 2,
      images: [img3, img1], 
      buttons: [{ text: "SHOP NOW", type: "primary" }]
    },
    {
      id: 3,
      images: [imgbc1], 
      buttons: [
        { text: "SHOP NOW", type: "primary" },
        { text: "LEARN MORE", type: "secondary" }
      ]
    },
    {
      id: 4,
      images: [imgbc3], 
      buttons: [
        { text: "SHOP NOW", type: "primary" },
        { text: "LEARN MORE", type: "secondary" }
      ]
    },
    {
      id: 5,
      images: [img55], 
      buttons: [
        { text: "SHOP NOW", type: "primary" },
        { text: "LEARN MORE", type: "secondary" }
      ]
    },
    {
      id: 6,
      images: ["https://images.unsplash.com/photo-1603909223429-69bb7101f420?q=80&w=800"], 
      buttons: [{ text: "VIEW PRODUCTS", type: "primary" }]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-black">
      {/* Slides Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative flex items-center justify-center">
            
            {/* Background Images Wrapper */}
            <div className="absolute inset-0 w-full h-full flex">
              {slide.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Slide Content"
                  className="h-full object-cover border-r border-black/5 last:border-r-0"
                  style={{ width: `${100 / slide.images.length}%` }} 
                />
              ))}
            </div>

            {/* Dark Tint for Readability */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Buttons Overlay */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              {slide.buttons.map((btn, index) => (
                <button
                  key={index}
                  className={`min-w-[180px] py-3.5 font-black tracking-[0.15em] text-xs transition-all duration-300 shadow-2xl
                    ${btn.type === "primary"
                        ? "bg-[#FF3B45] text-white hover:bg-black uppercase"
                        : "bg-black/80 text-white border border-white/50 hover:bg-white hover:text-black uppercase"
                    }`}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-2 text-white/40 hover:text-white transition-all scale-75 md:scale-100">
        <ChevronLeft size={56} strokeWidth={1} />
      </button>
      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-2 text-white/40 hover:text-white transition-all scale-75 md:scale-100">
        <ChevronRight size={56} strokeWidth={1} />
      </button>

      {/* Dots / Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-6" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;