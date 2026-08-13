"use client";

import React from "react";
import Image from "next/image";
import { FiInstagram, FiFacebook, FiTwitter, FiGlobe, FiArrowRight } from "react-icons/fi";
import Navbar from "./Navbar.jsx";
import Menu from "./Menu.jsx";
import About from "./About.jsx";
import Process from "./Process.jsx";
import WhyChoose from "./Whychoose.jsx";
import Contact from "./Contact.jsx";
import Visit from "./Visit.jsx";
import Footer from "./Footer.jsx";
import FloatingCTA from "./Floating.jsx";

// Custom coffee bean decorative SVG
const CoffeeBean = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={`text-[#3d271d] opacity-80 filter drop-shadow-sm ${className}`}>
    <ellipse cx="50" cy="50" rx="22" ry="38" transform="rotate(-30 50 50)" />
    <path
      d="M 58 14 C 54 30 44 45 52 62 C 55 69 52 82 43 85"
      fill="none"
      stroke="#FAF6F0"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const Home = () => {


  return (
    <div className="min-h-screen bg-[#FAF6F0] text-secondary font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 max-w-7xl mx-auto"
      >
        {/* Left Organic SVG Shape */}
        <div className="absolute left-0 top-0 h-full w-[35%] pointer-events-none z-0 opacity-70 hidden lg:block select-none">
          <svg viewBox="0 0 200 600" className="h-full w-full fill-[#E2EBE5]">
            <path d="M 0,0 C 120,40 180,180 150,320 C 120,460 70,520 0,600 Z" />
          </svg>
        </div>

        {/* Top Right Organic SVG Shape */}
        <div className="absolute right-0 top-0 h-[70%] w-[30%] pointer-events-none z-0 opacity-60 hidden lg:block select-none">
          <svg viewBox="0 0 200 400" className="h-full w-full fill-[#F4ECE1]">
            <path d="M 200,0 L 50,0 C 90,100 120,200 150,300 C 170,350 185,380 200,400 Z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col items-start text-left z-10 pl-2 md:pl-4">
            <h1 className="font-serif font-black text-5xl md:text-6xl lg:text-[80px] leading-[1.08] text-secondary mb-6 tracking-tight">
              Good days <br />
              start with <br />
              <span className="text-primary italic font-normal">great coffee.</span>
            </h1>
            
            <p className="text-secondary/70 text-sm md:text-base max-w-md mb-8 leading-relaxed font-sans">
              Handcrafted coffee made from premium beans, perfectly brewed for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => {
                  const menuEl = document.getElementById("menu");
                  if (menuEl) menuEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary hover:bg-[#2b3e2d] text-white flex items-center gap-2.5 pl-6 pr-5 py-3.5 rounded-full text-[11px] font-extrabold font-sans tracking-widest transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(31,46,33,0.15)] hover:shadow-[0_6px_16px_rgba(31,46,33,0.25)] cursor-pointer"
              >
                EXPLORE MENU
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                  <FiArrowRight className="w-3 h-3 text-white" />
                </span>
              </button>
              
              <button
                onClick={() => {
                  const aboutEl = document.getElementById("about");
                  if (aboutEl) aboutEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-transparent hover:bg-secondary/5 text-secondary border border-secondary/25 hover:border-secondary px-8 py-3.5 rounded-full text-[11px] font-extrabold font-sans tracking-widest transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                OUR STORY
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FiInstagram className="w-4.5 h-4.5" />, link: "#" },
                { icon: <FiFacebook className="w-4.5 h-4.5" />, link: "#" },
                { icon: <FiTwitter className="w-4.5 h-4.5" />, link: "#" },
                { icon: <FiGlobe className="w-4.5 h-4.5" />, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-8 h-8 border border-secondary/15 hover:border-secondary text-secondary/60 hover:text-white hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-sm"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Cup Image Column */}
          <div className="lg:col-span-7 flex justify-center relative w-full mt-4 lg:mt-0">
            {/* The main coffee cup image container */}
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[550px] md:h-[520px] flex items-center justify-center">
              
              {/* Soft shadow under saucer */}
              <div className="absolute bottom-[10%] w-[75%] h-[12%] bg-[#2C1E16]/10 rounded-full blur-xl pointer-events-none" />

              {/* Main Cup Image */}
              <div className="relative w-[82%] h-[82%] z-10 transition-transform duration-700 hover:scale-[1.02]">
                <Image
                  src="/coffeemain.png"
                  alt="Brewista freshly brewed coffee cup"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Absolutely Positioned Coffee Beans */}
              <CoffeeBean className="absolute top-[3%] left-[28%] w-9 h-9 rotate-45 pointer-events-none" />
              <CoffeeBean className="absolute top-[16%] left-[12%] w-6 h-6 -rotate-12 pointer-events-none" />
              <CoffeeBean className="absolute top-[30%] left-[4%] w-8 h-8 rotate-90 pointer-events-none" />
              
              <CoffeeBean className="absolute bottom-[20%] left-[20%] w-7 h-7 -rotate-[60deg] pointer-events-none" />
              <CoffeeBean className="absolute bottom-[24%] left-[44%] w-9 h-9 rotate-12 pointer-events-none" />
              <CoffeeBean className="absolute bottom-[21%] right-[22%] w-6 h-6 rotate-45 pointer-events-none" />
              <CoffeeBean className="absolute bottom-[34%] right-[7%] w-8 h-8 -rotate-45 pointer-events-none" />
              
              <CoffeeBean className="absolute top-[6%] right-[34%] w-8 h-8 rotate-12 pointer-events-none" />
              <CoffeeBean className="absolute top-[20%] right-[18%] w-10 h-10 -rotate-[35deg] pointer-events-none" />

              {/* Coffee Ground Scatter Shadow */}
              <div className="absolute bottom-[13%] left-[18%] right-[18%] h-12 bg-[#3e271d]/6 filter blur-lg rounded-full pointer-events-none" />

              {/* Green leaf branch coming from right */}
              <div className="absolute right-[-45px] top-[14%] w-36 h-36 z-20 pointer-events-none overflow-visible">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary w-full h-full opacity-90">
                  <path d="M90,30 Q60,50 15,85" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M65,47 C55,42 45,45 42,50 C45,55 58,58 65,47 Z" fill="currentColor" fillOpacity="0.85" />
                  <path d="M50,57 C40,53 32,58 30,65 C35,68 45,68 50,57 Z" fill="currentColor" fillOpacity="0.85" />
                  <path d="M30,71 C22,68 15,73 14,80 C18,82 26,80 30,71 Z" fill="currentColor" fillOpacity="0.85" />
                  <path d="M78,38 C70,30 60,32 58,38 C60,44 72,46 78,38 Z" fill="currentColor" fillOpacity="0.85" />
                  <path d="M85,25 C82,15 72,15 68,20 C70,26 80,30 85,25 Z" fill="currentColor" fillOpacity="0.85" />
                </svg>
              </div>

              {/* "PREMIUM QUALITY BEANS" badge top right */}
              <div className="absolute right-[3%] top-[4%] bg-[#FAF6F0]/90 backdrop-blur-sm border border-secondary/15 border-dashed px-3 py-3 rounded-full flex flex-col items-center justify-center shadow-sm z-20 w-22 h-22 select-none">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#3d271d] w-4.5 h-4.5 mb-1.5 opacity-90">
                  <path d="M12 2c-.6 0-1.2.3-1.6.8l-8 10c-.5.6-.5 1.5.1 2.1l8 8c.6.5 1.5.5 2.1-.1l8-10c.5-.6.5-1.5-.1-2.1l-8-8c-.1-.1-.3-.2-.5-.3V2zm0 2.2l6.8 6.8-6.8 8.5-6.8-8.5L12 4.2z" />
                </svg>
                <span className="text-[7.5px] font-sans tracking-[0.1em] font-extrabold text-center text-secondary/80 leading-tight">
                  PREMIUM<br />QUALITY<br />BEANS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="relative z-20 px-4 md:px-8 max-w-7xl mx-auto -mt-8 md:-mt-10 mb-24">

  <div className="relative overflow-hidden rounded-[32px] border border-[#ECE7E1] bg-white shadow-[0_25px_70px_rgba(20,20,20,0.06)]">

    {/* Decorative Blur */}
    <div className="absolute -top-32 -left-24 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
    <div className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>

    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

      {/* CARD 1 */}

      <div className="group relative px-8 py-12 border-b sm:border-r sm:border-b border-[#F1ECE7] transition-all duration-500 hover:bg-[#FCFBFA]">

        <div className="relative w-fit mx-auto">

          <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-xl scale-125 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F3F8F3] to-[#E8F1EA] border border-[#E4ECE5] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition duration-500">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-primary"
            >
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <line x1="6" y1="2" x2="6" y2="4" />
              <line x1="10" y1="2" x2="10" y2="4" />
              <line x1="14" y1="2" x2="14" y2="4" />
            </svg>

          </div>

        </div>

        <h3 className="mt-8 text-center text-[18px] font-serif font-bold text-secondary">
          Quality Coffee
        </h3>

        <p className="mt-3 text-center text-[14px] leading-7 text-secondary/65 max-w-[220px] mx-auto">
          We carefully source exceptional beans from trusted farms around the world for every cup.
        </p>

      </div>

      {/* CARD 2 */}

      <div className="group relative px-8 py-12 border-b lg:border-r border-[#F1ECE7] transition-all duration-500 hover:bg-[#FCFBFA]">

        <div className="relative w-fit mx-auto">

          <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-xl scale-125 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F3F8F3] to-[#E8F1EA] border border-[#E4ECE5] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition duration-500">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-primary"
            >
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
              <path d="M12 6C12 6 9 9 9 12C9 15 12 18 12 18C12 18 15 15 15 12C15 9 12 6 12 6Z" />
            </svg>

          </div>

        </div>

        <h3 className="mt-8 text-center text-[18px] font-serif font-bold text-secondary">
          Expertly Brewed
        </h3>

        <p className="mt-3 text-center text-[14px] leading-7 text-secondary/65 max-w-[220px] mx-auto">
          Every drink is handcrafted by skilled baristas using precision brewing techniques.
        </p>

      </div>

      {/* CARD 3 */}

      <div className="group relative px-8 py-12 border-b sm:border-r lg:border-b-0 border-[#F1ECE7] transition-all duration-500 hover:bg-[#FCFBFA]">

        <div className="relative w-fit mx-auto">

          <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-xl scale-125 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F3F8F3] to-[#E8F1EA] border border-[#E4ECE5] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition duration-500">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-primary"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
            </svg>

          </div>

        </div>

        <h3 className="mt-8 text-center text-[18px] font-serif font-bold text-secondary">
          Made with Passion
        </h3>

        <p className="mt-3 text-center text-[14px] leading-7 text-secondary/65 max-w-[220px] mx-auto">
          Crafted with attention to detail, ensuring consistency and warmth in every serving.
        </p>

      </div>

      {/* CARD 4 */}

      <div className="group relative px-8 py-12 transition-all duration-500 hover:bg-[#FCFBFA]">

        <div className="relative w-fit mx-auto">

          <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-xl scale-125 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F3F8F3] to-[#E8F1EA] border border-[#E4ECE5] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition duration-500">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-primary"
            >
              <path d="M18 8H19C20.1046 8 21 8.89543 21 10V14C21 15.1046 20.1046 16 19 16H18" />
              <path d="M5 8H18V18C18 19.1046 17.1046 20 16 20H7C5.89543 20 5 19.1046 5 18V8Z" />
              <path d="M7 2L9 5" />
              <path d="M11 2L12 5" />
              <path d="M15 2L14 5" />
            </svg>

          </div>

        </div>

        <h3 className="mt-8 text-center text-[18px] font-serif font-bold text-secondary">
          Fast & Friendly
        </h3>

        <p className="mt-3 text-center text-[14px] leading-7 text-secondary/65 max-w-[220px] mx-auto">
          Enjoy quick service and genuine hospitality from the moment you walk in.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* Menu / Specials Section (Signature Collection) */}
      <Menu />

      {/* About Section (Why Choose Us) */}
      <About />

      {/* Coffee Journey / Brewing Process Section */}
      <Process />

      {/* Why Choose Our Cafe Section */}
      <WhyChoose />

      {/* Contact Section (Coffee Club Newsletter) */}
      <Contact />

      <Visit/>

      {/* Footer */}
      <Footer />

      <FloatingCTA/>
    </div>
  );
};

export default Home;
