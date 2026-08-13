"use client";

import React from "react";

const WhyChoose = () => {
  const features = [
    {
      title: "Freshly Roasted Beans",
      description: "We carefully roast every batch to unlock rich aromas and balanced flavors.",
      // Coffee Bean Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
          <ellipse cx="12" cy="12" rx="6" ry="10" transform="rotate(-45 12 12)" />
          <path d="M12 2C12 2 9 8 12 12C15 16 12 22 12 22" />
        </svg>
      ),
    },
    {
      title: "Organic Ingredients",
      description: "Fresh milk, premium cocoa, organic ingredients, and carefully sourced products.",
      // Leaf Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 21 3c-1.5 4-2 5.5-3.1 11.2A7 7 0 0 1 11 20z" />
          <path d="M9 9.5c.6 1.8 1.8 3 3.6 3.6" />
        </svg>
      ),
    },
    {
      title: "Expert Baristas",
      description: "Our skilled baristas prepare every cup with precision and genuine passion.",
      // Coffee Cup Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <path d="M6 2v3" />
          <path d="M10 2v3" />
          <path d="M14 2v3" />
        </svg>
      ),
    },
    {
      title: "Cozy Atmosphere",
      description: "Relax, work, meet friends, or simply enjoy a peaceful coffee break.",
      // Sofa/Armchair Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
          <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
          <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
          <path d="M3 11c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2" />
          <path d="M8 18v2M16 18v2" />
        </svg>
      ),
    },
    {
      title: "Fast Service",
      description: "Quick preparation without compromising taste or presentation.",
      // Clock Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Premium Quality",
      description: "Exceptional ingredients, handcrafted beverages, and unforgettable experiences.",
      // Star Icon
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-choose" className="py-8 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header Container */}
      <div className="text-center max-w-2xl mx-auto mb-16 px-2">
        <span className="text-accent font-sans text-[10px] tracking-[0.25em] font-black uppercase block mb-3.5">
          — WHY CHOOSE US
        </span>
        
        <h2 className="font-serif font-black text-3xl md:text-4xl lg:text-[45px] leading-[1.15] text-secondary mb-5 tracking-tight">
          Crafted for Coffee Lovers,<br className="hidden sm:inline" /> Designed for Memorable Moments
        </h2>
        
        <p className="text-secondary/70 text-xs md:text-sm leading-relaxed max-w-md mx-auto">
          We believe coffee is more than just a drink—it’s an art form, a sensory journey, and a warm reason to connect.
        </p>
        <div className="h-[2px] w-12 bg-primary mx-auto mt-5 rounded-full opacity-60" />
      </div>

      {/* Feature Cards Grid (2 rows x 3 columns on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <article 
            key={index} 
            className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-secondary/5 shadow-[0_8px_30px_rgba(44,30,22,0.015)] hover:shadow-[0_12px_40px_rgba(44,30,22,0.04)] hover:-translate-y-1.5 hover:border-secondary/15 transition-all duration-300 flex flex-col items-start text-left"
          >
            {/* Organic Pebble Icon Container */}
            <div 
              className="w-12 h-12 bg-[#E2EBE5] text-primary flex items-center justify-center mb-6 transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
              style={{ borderRadius: "55% 45% 60% 40% / 40% 55% 45% 60%" }}
            >
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="font-serif font-extrabold text-[17px] text-secondary mb-2.5">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-secondary/65 text-xs leading-relaxed">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
