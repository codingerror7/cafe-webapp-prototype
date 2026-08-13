"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  const features = [
    {
      title: "Ethically Sourced",
      description: "Responsibly sourced beans you can feel good about.",
      // Leaf icon SVG
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 21 3c-1.5 4-2 5.5-3.1 11.2A7 7 0 0 1 11 20z" />
          <path d="M9 9.5c.6 1.8 1.8 3 3.6 3.6" />
        </svg>
      ),
    },
    {
      title: "Award Winning",
      description: "Recognized for our quality and taste.",
      // Medal icon SVG
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art machines for the perfect brew.",
      // Espresso machine outline SVG
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5.5 h-5.5">
          <path d="M6 18H18" />
          <path d="M6 14h12" />
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <path d="M5 6h14a1 1 0 0 1 1 1v7H4V7a1 1 0 0 1 1-1z" />
          <path d="M12 14v4" />
        </svg>
      ),
    },
    {
      title: "Cozy Ambience",
      description: "A warm and welcoming space to relax.",
      // Steaming coffee cup SVG
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
  ];

  return (
    <section id="about" className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Content - 4 of 12 cols on desktop */}
        <div className="lg:col-span-4 flex flex-col items-start text-left pl-2">
          <span className="text-accent font-sans text-[10px] tracking-[0.25em] font-black uppercase block mb-3.5">
            — WHY CHOOSE US
          </span>
          
          <h2 className="font-serif font-black text-3xl md:text-4xl lg:text-[40px] leading-[1.12] text-secondary mb-5 tracking-tight">
            More Than <br className="hidden md:inline" /> Just Coffee
          </h2>
          
          <p className="text-secondary/70 text-xs md:text-sm leading-relaxed mb-8 max-w-sm">
            We're passionate about bringing you the best coffee experience, every single day.
          </p>

          <button className="bg-primary hover:bg-[#2b3e2d] text-white flex items-center gap-2.5 pl-6 pr-5 py-3.5 rounded-full text-[11px] font-extrabold font-sans tracking-widest transition-all duration-300 shadow-[0_4px_12px_rgba(31,46,33,0.15)] hover:shadow-[0_6px_16px_rgba(31,46,33,0.25)] hover:-translate-y-0.5 cursor-pointer uppercase">
            LEARN MORE
            <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
              <FiArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </button>
        </div>

        {/* Right Column Grid - 8 of 12 cols on desktop */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-secondary/10">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 first:pt-0 transition-transform duration-300 hover:translate-y-[-2px]">
                {/* Organic Pebble/Blob Background for Icon */}
                <div 
                  className="w-16 h-16 bg-[#E2EBE5] text-primary flex items-center justify-center mb-5 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow hover:bg-primary hover:text-white"
                  style={{ borderRadius: "55% 45% 60% 40% / 40% 55% 45% 60%" }}
                >
                  {feature.icon}
                </div>
                
                <h3 className="font-serif font-extrabold text-[15px] text-secondary mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-secondary/65 text-xs leading-relaxed max-w-[160px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
