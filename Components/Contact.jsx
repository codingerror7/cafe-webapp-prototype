"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing! Your 10% discount code has been sent to ${email}`);
    setEmail("");
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Dark Green Banner Wrapper */}
      <div className="bg-primary rounded-[28px] md:rounded-[36px] p-8 md:p-12 text-white relative overflow-hidden border border-white/5 shadow-xl transition-all duration-500 hover:shadow-2xl">
        
        {/* Decorative Leaf Outline Background (Right side) */}
        <div className="absolute right-0 top-0 bottom-0 opacity-[0.03] pointer-events-none w-[35%] flex items-center justify-center select-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-white">
            <path d="M10,90 Q40,50 80,10" strokeLinecap="round" />
            <path d="M45,45 C35,38 25,40 22,46 C25,52 38,55 45,45 Z" fill="currentColor" fillOpacity="0.3" />
            <path d="M30,55 C20,50 12,55 10,62 C15,65 25,65 30,55 Z" fill="currentColor" fillOpacity="0.3" />
            <path d="M60,30 C52,22 42,24 40,30 C42,36 54,38 60,30 Z" fill="currentColor" fillOpacity="0.3" />
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 relative z-10">
          
          {/* Left Column: Circular Photo & Badge */}
          <div className="relative flex-shrink-0 w-36 h-36 md:w-44 md:h-44 transition-transform duration-500 hover:scale-102">
            {/* Circular Coffee Cup Frame */}
            <div className="w-full h-full rounded-full border-[6px] border-white/10 overflow-hidden relative shadow-md">
              <Image
                src="/coffee2.jpg" // Represents cappuccino / latte cup & saucer
                alt="Cafe Croissant & Coffee Club"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Overlapping 10% OFF Badge */}
            <div className="absolute -top-2 -left-2 bg-white text-secondary rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg border border-secondary/5 z-20 transition-transform duration-300 hover:scale-105 select-none">
              <span className="font-serif font-black text-lg leading-none text-secondary">
                10%
              </span>
              <span className="font-sans font-black text-[9px] leading-none text-secondary mt-0.5">
                OFF
              </span>
              <span className="font-sans text-[5.5px] tracking-wider text-center text-secondary/60 leading-none mt-1.5 font-black max-w-[55px] uppercase">
                YOUR FIRST ORDER
              </span>
            </div>
          </div>

          {/* Middle Column: Text Details */}
          <div className="flex-grow text-center lg:text-left max-w-xl">
            {/* Email Icon & Join Label */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-3.5">
              <FiMail className="w-4 h-4 text-[#DEBA90] opacity-90" />
              <span className="text-[#DEBA90] font-sans text-[10px] tracking-[0.25em] font-black uppercase">
                JOIN OUR COFFEE CLUB
              </span>
            </div>
            
            {/* Title */}
            <h2 className="font-serif font-extrabold text-2xl md:text-3xl lg:text-[34px] leading-snug mb-3.5 tracking-tight">
              Get Exclusive Offers <br className="hidden sm:inline" /> & Coffee Tips
            </h2>
            
            {/* Description */}
            <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4 max-w-md mx-auto lg:mx-0 font-sans">
              Sign up for our newsletter and enjoy special deals, new arrivals, and more!
            </p>
            
            {/* Footer spam note */}
            <span className="text-[10px] text-white/40 italic">
              No spam, unsubscribe anytime.
            </span>
          </div>

          {/* Right Column: Input Form */}
          <div className="w-full lg:w-auto flex-shrink-0 relative z-20">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full sm:max-w-md mx-auto lg:w-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-secondary placeholder-secondary/50 font-sans text-xs px-6 py-4 rounded-full outline-none focus:ring-2 focus:ring-[#DEBA90] w-full sm:w-64 md:w-72 lg:w-64 transition-all shadow-sm"
              />
              <button
                type="submit"
                className="bg-[#DEBA90] hover:bg-[#d6b083] text-secondary font-sans text-[11px] font-black tracking-widest px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer uppercase whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
