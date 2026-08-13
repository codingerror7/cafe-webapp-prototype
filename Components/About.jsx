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
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 px-4 md:px-8 scroll-mt-24"
    >
      {/* Background Decorations */}
      <div className="absolute -top-32 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ECE7DF] blur-3xl opacity-70"></div>

      <div className="relative max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* ================= LEFT ================= */}

          <div className="lg:col-span-4">

            <div className="flex items-center gap-4 mb-7">
              <span className="w-14 h-[2px] bg-primary"></span>

              <span className="uppercase tracking-[0.35em] text-[13px] font-black text-accent">
                Why Choose Us
              </span>
            </div>

            <h2 className="font-serif text-[42px] md:text-[50px] leading-[1.05] font-black text-secondary">
              More Than
              <br />
              Just Coffee
            </h2>

            <p className="mt-7 text-secondary/70 leading-8 text-[15px] max-w-md">
              Every cup tells a story of craftsmanship, carefully selected beans,
              precision brewing, and warm hospitality. We don't simply serve coffee
              — we create memorable experiences worth coming back for.
            </p>

            {/* Stats */}

            <div className="flex gap-10 mt-10">

              <div>
                <h3 className="font-serif text-3xl font-black text-primary">
                  15+
                </h3>
                <p className="text-sm text-secondary/60 mt-1">
                  Coffee Origins
                </p>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-black text-primary">
                  98%
                </h3>
                <p className="text-sm text-secondary/60 mt-1">
                  Happy Guests
                </p>
              </div>

            </div>

            {/* CTA */}

            <button className="group mt-12 inline-flex items-center gap-4 bg-primary hover:bg-[#2d4031] text-white rounded-full px-7 py-4 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">

              <span className="uppercase tracking-[0.22em] text-xs font-bold">
                Discover Our Story
              </span>

              <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition">
                <FiArrowRight className="w-4 h-4" />
              </span>

            </button>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="lg:col-span-8">

            <div className="relative rounded-[36px] bg-white border border-[#ECE7E1] shadow-[0_30px_80px_rgba(20,20,20,.05)] overflow-hidden">

              {/* decorative glow */}

              <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 blur-3xl rounded-full"></div>

              <div className="relative grid sm:grid-cols-2 lg:grid-cols-4">

                {features.map((feature, index) => (

                  <div
                    key={index}
                    className="group relative px-8 py-12 border-b sm:border-r border-[#F1ECE7] last:border-r-0 lg:last:border-r-0 last:border-b-0 transition-all duration-500 hover:bg-[#FCFBFA]"
                  >

                    {/* icon */}

                    <div className="relative mb-8">

                      <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                      <div
                        className="relative w-18 h-18 mx-auto flex items-center justify-center text-primary bg-gradient-to-br from-[#F4F8F4] to-[#E7EFE8] border border-[#E3EBE5] shadow-md transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white"
                        style={{
                          width: "72px",
                          height: "72px",
                          borderRadius:
                            "58% 42% 60% 40% / 40% 60% 40% 60%",
                        }}
                      >
                        {feature.icon}
                      </div>

                    </div>

                    <h3 className="font-serif text-[18px] font-bold text-secondary text-center">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-center text-[14px] leading-7 text-secondary/65">
                      {feature.description}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
