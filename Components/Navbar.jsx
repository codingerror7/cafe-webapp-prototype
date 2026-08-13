"use client";

import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll for active links & styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const sections = ["home", "about", "menu", "gallery", "contact"];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", id: "home" },
    { label: "ABOUT US", id: "about" },
    { label: "MENU", id: "menu" },
    { label: "GALLERY", id: "gallery" },
    { label: "CONTACT", id: "contact" },
  ];

  const handleLinkClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 pt-4">
      <nav
        className={`mx-auto max-w-7xl bg-white/95 backdrop-blur-md border border-secondary/5 transition-all duration-300 px-6 md:px-10 py-3.5 rounded-full md:rounded-b-[24px] md:rounded-t-[24px] shadow-[0_4px_24px_rgba(44,30,22,0.04)] flex items-center justify-between`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home");
          }}
          className="flex items-center gap-3 group"
        >
          {/* Coffee cup leaf icon */}
          <div className="text-[#1F2E21] w-8 h-8 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <path d="M6 2v3" />
              <path d="M10 2v3" />
              <path d="M14 2v3" />
              <path d="M18 4c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3z" fill="currentColor" fillOpacity="0.25" className="text-[#1F2E21]" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif italic font-extrabold text-[20px] leading-tight text-secondary">
              Brewista
            </span>
            <span className="font-sans text-[7px] tracking-[0.3em] font-black text-secondary/65 leading-none mt-0.5">
              COFFEE HOUSE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="relative text-[11px] tracking-[0.15em] font-extrabold font-sans py-2 text-secondary/75 hover:text-primary transition-colors cursor-pointer"
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-[20%] right-[20%] h-[2px] bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-primary hover:bg-[#2b3e2d] text-white flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-extrabold font-sans tracking-wider transition-all duration-300 shadow-[0_4px_12px_rgba(31,46,33,0.15)] hover:shadow-[0_6px_16px_rgba(31,46,33,0.25)] cursor-pointer">
            ORDER ONLINE
            <FiShoppingCart className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button className="bg-primary text-white p-2.5 rounded-full cursor-pointer shadow-sm">
            <FiShoppingCart className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary p-1 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed top-[86px] left-4 right-4 bg-[#FAF6F0]/98 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 ease-out overflow-hidden z-40 border border-secondary/15 ${
          isOpen ? "max-h-[380px] py-6 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-5 px-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-[12px] tracking-[0.2em] font-extrabold py-2 w-full text-center border-b border-secondary/5 last:border-0 transition-colors ${
                activeSection === link.id ? "text-primary font-black" : "text-secondary/70 hover:text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button className="w-full bg-primary hover:bg-[#2b3e2d] text-white flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-bold font-sans tracking-widest mt-3 transition-all shadow-[0_4px_12px_rgba(31,46,33,0.15)]">
            ORDER ONLINE
            <FiShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
