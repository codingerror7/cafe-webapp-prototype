"use client";

import React from "react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Premium Beans",
      description: "We carefully source high-quality coffee beans from trusted farms to ensure exceptional flavor in every cup.",
      // Coffee Bean outline SVG
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <ellipse cx="12" cy="12" rx="5" ry="9" transform="rotate(-45 12 12)" />
          <path d="M12 2C12 2 9 8 12 12C15 16 12 22 12 22" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Fresh Roasting",
      description: "Each batch is roasted with precision to unlock rich aromas and balanced tasting notes.",
      // Flame/Roasting outline SVG
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Perfect Grinding",
      description: "Every bean is freshly ground to preserve aroma and achieve the ideal extraction.",
      // Grinder outline SVG
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 2v3M5 5h14v4H5zM8 9v9c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V9M9 5l3-3 3 3" />
          <circle cx="12" cy="14" r="1.5" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Hand Brewing",
      description: "Our experienced baristas craft every cup using carefully refined brewing techniques.",
      // Coffee Cup outline SVG
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <path d="M6 2v3M10 2v3M14 2v3" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Served Fresh",
      description: "Your coffee is served immediately so every sip delivers maximum freshness and flavor.",
      // Mug on serving tray/saucer outline SVG
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M3 14h18M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
          <path d="M10 8h4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 px-2">
        <span className="text-accent font-sans text-[10px] tracking-[0.25em] font-black uppercase block mb-3.5">
          — OUR PROCESS
        </span>
        <h2 className="font-serif font-black text-3xl md:text-4xl lg:text-[40px] leading-[1.15] text-secondary mb-5 tracking-tight">
          From Bean to Cup,<br className="hidden sm:inline" /> Crafted with Passion
        </h2>
        <p className="text-secondary/70 text-xs md:text-sm leading-relaxed max-w-md mx-auto">
          We honor every stage of the coffee crafting journey, bringing artisanal precision and warmth to each sip.
        </p>
        <div className="h-[2px] w-12 bg-primary mx-auto mt-5 rounded-full opacity-60" />
      </div>

      {/* Horizontal Timeline Container */}
      <div className="relative w-full overflow-hidden px-1.5">
        {/* Style block to cleanly hide webkit scrollbars */}
        <style jsx="true">{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div 
          className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory flex flex-nowrap justify-start lg:justify-between gap-8 lg:gap-0 py-8 relative z-10 w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Connector Line behind numbers (Desktop) */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-[1px] bg-secondary/10 z-0 hidden lg:block" />

          {/* Connector Line behind numbers (Mobile/Tablet scrollable) */}
          <div 
            className="absolute top-[48px] h-[1.5px] bg-secondary/10 z-0 block lg:hidden"
            style={{ 
              left: "130px", 
              right: "130px",
              width: "calc(130px * 8 + 32px)" /* stretches dynamically with scrolling width */
            }} 
          />

          {steps.map((step, index) => (
            <article 
              key={index}
              className="w-[260px] sm:w-[280px] lg:w-[20%] flex-shrink-0 lg:flex-shrink flex flex-col items-center text-center snap-center relative z-10 px-3 group"
            >
              {/* Large low-opacity number */}
              <span className="font-serif font-black text-6xl md:text-7xl text-green-900 mb-3 tracking-tighter select-none transition-all duration-300 group-hover:text-primary/15 group-hover:scale-105">
                {step.number}
              </span>

              {/* Organic Pebble Icon Container */}
              <div 
                className="w-12 h-12 bg-[#E2EBE5] text-primary flex items-center justify-center mb-5 transition-all duration-300 shadow-sm group-hover:scale-105 group-hover:bg-primary group-hover:text-white"
                style={{ borderRadius: "55% 45% 60% 40% / 40% 55% 45% 60%" }}
              >
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="font-serif font-extrabold text-[16px] text-secondary mb-2 tracking-tight transition-colors duration-300 group-hover:text-primary">
                {step.title}
              </h3>

              {/* Step Description (whitespace-normal ensures it wraps correctly inside whitespace-nowrap parent) */}
              <p className="text-secondary/65 text-xs leading-relaxed max-w-[230px] whitespace-normal px-2">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
