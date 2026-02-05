import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import img31 from '../assets/sec31.jpg';
import img32 from '../assets/sec32.jfif';
import img33 from '../assets/sec33.jpg';

const ImageGrid = () => {
  const items = [
    {
      id: 1,
      title: "ALWAYS OBSESSED",
      desc: "We only make the finest products that we, the proud connoisseurs, would smoke ourselves.",
      image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?q=80&w=800",
      btn: "LEARN MORE"
    },
    {
      id: 2,
      title: "FRESHNESS MATTERS",
      desc: "Cuz that’s how you get the most amazing out-of-this-world high.",
      image: img33,
      btn: "LEARN MORE"
    },
    {
      id: 3,
      title: "CUREB APPAREL",
      desc: "Available now online! Shop the latest drops.",
      image: img32,
      btn: "SHOP NOW"
    },
    {
      id: 4,
      title: "VIBE WITH US",
      desc: "Be the first to know about our upcoming events, news, products, merch drops and more",
      image: img31,
      btn: "VIBE WITH US"
    }
  ];

  return (
    <section className="w-full bg-[#050505] overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="relative h-[550px] md:h-[700px] overflow-hidden group border-b border-white/5 md:border-r border-cyan-900/20"
          >
            {/* Background Image with Duotone Filter */}
            <div className="absolute inset-0 w-full h-full bg-cyan-900 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-[1.5s] ease-out grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-75"
              />
              {/* Cyan Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20 opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
            </div>
            
            {/* Aesthetic Corner Accent */}
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <ArrowUpRight className="text-cyan-400" size={32} />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-10 md:p-20 flex flex-col justify-end items-start text-white z-10">
              
              {/* Animated Line Tag */}
              <div className="w-12 h-[2px] bg-cyan-500 mb-6 transition-all duration-500 group-hover:w-24 group-hover:shadow-[0_0_10px_rgba(6,182,212,1)]"></div>

              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6 uppercase leading-[0.85] group-hover:text-cyan-50 transition-colors duration-500">
                {item.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h2>

              <p className="text-[13px] font-bold mb-10 max-w-[320px] text-gray-400 uppercase tracking-[0.15em] leading-relaxed group-hover:text-white transition-colors duration-500">
                {item.desc}
              </p>

              {/* Custom Aesthetic Button */}
              <button className="group/btn relative px-10 py-4 overflow-hidden border border-white/20 transition-all duration-300">
                <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover/btn:w-full"></span>
                <span className="relative text-[11px] font-black tracking-[0.3em] uppercase text-white group-hover/btn:text-black">
                  {item.btn}
                </span>
                
                {/* Neon Glow on Hover */}
                <div className="absolute -inset-1 bg-cyan-500/0 group-hover/btn:bg-cyan-500/20 blur-lg transition-all"></div>
              </button>
            </div>

            {/* Grid Numbering (Optional Aesthetic Touch) */}
            <span className="absolute top-10 left-10 text-[10px] font-black text-white/10 tracking-widest">
              0{item.id} / 04
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;