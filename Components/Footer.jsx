"use client";

import React from "react";
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiGlobe } from "react-icons/fi";

const Footer = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#18110D] text-white/80 font-sans relative">
      
      {/* Wavy top transition curve */}
      <div className="w-full overflow-hidden leading-none bg-[#FAF6F0] -mt-1 select-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[45px] md:h-[60px] text-[#18110D] fill-current"
        >
          <path d="M0,30 C150,90 350,110 600,70 C850,30 1050,80 1200,20 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-8 relative z-10">
        
        {/* Main Footer columns grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 pb-12">
          
          {/* Column 1: Brand Info (3.5 of 12 cols on desktop) */}
          <div className="lg:col-span-3.5 flex flex-col items-start gap-4 pr-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-white w-9 h-9 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <path d="M6 2v3" />
                  <path d="M10 2v3" />
                  <path d="M14 2v3" />
                  <path d="M18 4c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3z" fill="currentColor" fillOpacity="0.2" className="text-green-500" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif italic font-extrabold text-[22px] leading-tight text-white">
                  Brewista
                </span>
                <span className="font-sans text-[8px] tracking-[0.25em] font-semibold text-white/50 leading-none mt-0.5">
                  COFFEE HOUSE
                </span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-white/60 text-xs leading-relaxed max-w-sm font-sans">
              Great coffee, good vibes, and a whole lot of passion. Brewed fresh for you.
            </p>
          </div>

          {/* Column 2: Quick Links (2 of 12 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <h3 className="font-sans text-[10px] tracking-[0.2em] font-black uppercase text-[#DEBA90]">
              QUICK LINKS
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-white/60 font-sans">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Our Menu", id: "menu" },
                { label: "Gallery", id: "gallery" },
                { label: "Contact", id: "contact" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-white hover:translate-x-0.5 transition-all duration-300 cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help & Support (2 of 12 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <h3 className="font-sans text-[10px] tracking-[0.2em] font-black uppercase text-[#DEBA90]">
              HELP & SUPPORT
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-white/60 font-sans">
              {["FAQs", "Shipping & Delivery", "Returns", "Privacy Policy", "Terms & Conditions"].map(
                (item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white hover:translate-x-0.5 transition-all duration-300 block">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4: Contact Us (2.5 of 12 cols) */}
          <div className="lg:col-span-2.5 flex flex-col items-start gap-4">
            <h3 className="font-sans text-[10px] tracking-[0.2em] font-black uppercase text-[#DEBA90]">
              CONTACT US
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-white/60 font-sans">
              <li className="flex items-start gap-2.5">
                <FiPhone className="w-3.5 h-3.5 mt-0.5 text-[#DEBA90] flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMail className="w-3.5 h-3.5 mt-0.5 text-[#DEBA90] flex-shrink-0" />
                <span className="break-all">hello@brewista.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMapPin className="w-3.5 h-3.5 mt-0.5 text-[#DEBA90] flex-shrink-0" />
                <span className="leading-relaxed">
                  123 Coffee Street, Brew City, BC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us (2 of 12 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <h3 className="font-sans text-[10px] tracking-[0.2em] font-black uppercase text-[#DEBA90]">
              FOLLOW US
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { icon: <FiInstagram className="w-3 h-3" />, link: "#" },
                { icon: <FiFacebook className="w-3 h-3" />, link: "#" },
                { icon: <FiTwitter className="w-3 h-3" />, link: "#" },
                { icon: <FiGlobe className="w-3 h-3" />, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-7 h-7 border border-white/15 hover:border-white text-white/60 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/5 hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright centered section */}
        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col items-center justify-center gap-2 text-xs text-white/40">
          <div className="flex items-center gap-2 justify-center">
            {/* Small leaf icon details */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5 text-[#DEBA90]/80">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
            </svg>
            <span className="font-sans tracking-wide">© 2024 Brewista Coffee House. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
