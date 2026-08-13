"use client";

import React from "react";
import Image from "next/image";
import { FiPlus, FiArrowRight } from "react-icons/fi";

const Menu = () => {
  const cards = [
    {
      id: "espresso",
      name: "Espresso",
      price: "$2.50",
      description: "Bold and intense shot of pure delight.",
      image: "/coffee1.jpg",
    },
    {
      id: "cappuccino",
      name: "Cappuccino",
      price: "$3.50",
      description: "Smooth espresso with steamed milk foam.",
      image: "/coffee2.jpg",
    },
    {
      id: "iced-latte",
      name: "Iced Latte",
      price: "$3.75",
      description: "Chilled espresso with milk over ice.",
      image: "/coffee3.jpg",
    },
  ];

  return (
    <section id="menu" className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* 4-column Grid System on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* Dark Green Signature Container (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 bg-primary border border-white/5 rounded-[28px] md:rounded-[36px] p-6 md:p-8 flex flex-col justify-between text-white relative overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.005]">
          
          {/* Subtle leaves drawing in background */}
          <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none w-56 h-56 select-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-white">
              <path d="M10,90 Q40,50 90,10 M50,50 Q70,30 90,30" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M30,70 C40,65 50,65 60,70" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 md:gap-8 items-center h-full">
            {/* Left Content column */}
            <div className="sm:col-span-6 flex flex-col justify-between h-full min-h-[220px] relative z-10">
              <div>
                <span className="text-accent font-sans text-[10px] tracking-[0.25em] font-black uppercase block mb-3.5">
                  — OUR SIGNATURE
                </span>
                
                <h2 className="font-serif font-extrabold text-3xl lg:text-[36px] leading-[1.12] text-white mb-4 tracking-tight">
                  Explore Our<br />Coffee Collection
                </h2>
                
                <p className="text-white/70 text-xs leading-relaxed mb-6 max-w-[220px]">
                  From rich espressos to creamy lattes, find your perfect cup.
                </p>
              </div>

              <div>
                <button 
                  onClick={() => {
                    const contactEl = document.getElementById("contact");
                    if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#FAF6F0] hover:bg-[#FAF6F0]/90 text-secondary flex items-center gap-2.5 px-5.5 py-3 rounded-full text-[11px] font-extrabold font-sans tracking-widest transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  VIEW FULL MENU
                  <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <FiArrowRight className="w-3.5 h-3.5 text-primary" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Espresso Card column */}
            <div className="sm:col-span-6 flex justify-center relative z-10 w-full">
              {/* Coffee Card 1: Espresso */}
              <div className="bg-white rounded-2xl p-3.5 shadow-md border border-secondary/5 flex flex-col justify-between w-full max-w-[230px] text-secondary transition-all duration-300 hover:shadow-lg">
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3.5 shadow-sm">
                  <Image
                    src={cards[0].image}
                    alt={cards[0].name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Info */}
                <div className="px-1 pb-1">
                  <h3 className="font-serif font-black text-[16px] mb-1.5 text-secondary">
                    {cards[0].name}
                  </h3>
                  <p className="text-secondary/60 text-[11px] leading-relaxed mb-3.5 min-h-[32px]">
                    {cards[0].description}
                  </p>
                  
                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-extrabold text-sm text-secondary">
                      {cards[0].price}
                    </span>
                    <button className="w-7.5 h-7.5 rounded-full bg-primary hover:bg-[#2b3e2d] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow">
                      <FiPlus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coffee Card 2: Cappuccino */}
        <div className="bg-white rounded-[28px] md:rounded-[36px] p-4.5 border border-secondary/5 flex flex-col justify-between shadow-[0_8px_30px_rgba(44,30,22,0.02)] hover:shadow-[0_12px_45px_rgba(44,30,22,0.05)] hover:-translate-y-1 transition-all duration-300">
          <div>
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-sm">
              <Image
                src={cards[1].image}
                alt={cards[1].name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Info */}
            <div className="px-1">
              <h3 className="font-serif font-black text-lg mb-1.5 text-secondary">
                {cards[1].name}
              </h3>
              <p className="text-secondary/60 text-xs leading-relaxed mb-4 min-h-[36px]">
                {cards[1].description}
              </p>
            </div>
          </div>
          
          {/* Price & Action */}
          <div className="px-1 flex items-center justify-between">
            <span className="font-sans font-extrabold text-base text-secondary">
              {cards[1].price}
            </span>
            <button className="w-8 h-8 rounded-full bg-primary hover:bg-[#2b3e2d] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow">
              <FiPlus className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Coffee Card 3: Iced Latte */}
        <div className="bg-white rounded-[28px] md:rounded-[36px] p-4.5 border border-secondary/5 flex flex-col justify-between shadow-[0_8px_30px_rgba(44,30,22,0.02)] hover:shadow-[0_12px_45px_rgba(44,30,22,0.05)] hover:-translate-y-1 transition-all duration-300">
          <div>
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-sm">
              <Image
                src={cards[2].image}
                alt={cards[2].name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Info */}
            <div className="px-1">
              <h3 className="font-serif font-black text-lg mb-1.5 text-secondary">
                {cards[2].name}
              </h3>
              <p className="text-secondary/60 text-xs leading-relaxed mb-4 min-h-[36px]">
                {cards[2].description}
              </p>
            </div>
          </div>
          
          {/* Price & Action */}
          <div className="px-1 flex items-center justify-between">
            <span className="font-sans font-extrabold text-base text-secondary">
              {cards[2].price}
            </span>
            <button className="w-8 h-8 rounded-full bg-primary hover:bg-[#2b3e2d] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow">
              <FiPlus className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Menu;
