import React from 'react';
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
    <section className="w-full bg-black">
      {/* 1. 'max-w-none' se width poori screen par phail jayegi.
          2. 'gap-0' se images ke beech ki space khatam ho jayegi (jaisa design mein hota hai).
      */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
        {items.map((item) => (
          <div 
            key={item.id} 
            // 3. Height ko h-[450px] se barakar h-[600px] ya h-[70vh] kar diya hai
            className="relative h-[500px] md:h-[650px] overflow-hidden group border-b border-white/5 md:border-r"
          >
            {/* Background Image */}
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end items-start text-white">
              <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-4 uppercase leading-none">
                {item.title}
              </h2>
              <p className="text-base font-bold mb-8 max-w-sm opacity-90 uppercase tracking-widest leading-tight">
                {item.desc}
              </p>
              <button className="border-2 border-white px-12 py-3 text-sm font-black tracking-widest hover:bg-white hover:text-black transition-all uppercase">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;