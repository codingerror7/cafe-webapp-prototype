"use client";

import React from "react";

const Visit = () => {
  const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175438841444!2d-73.98685412341517!3d40.74844047138769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  const visitCards = [
    {
      title: "Address",
      colSpan: "sm:col-span-2",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      content: (
        <address className="not-italic text-secondary/75 text-xs leading-relaxed font-sans">
          123 Coffee Street<br />
          Downtown District<br />
          New York, NY 10001
        </address>
      ),
    },
    {
      title: "Opening Hours",
      colSpan: "sm:col-span-2",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      content: (
        <div className="flex flex-col gap-1.5 text-xs text-secondary/75 font-sans w-full">
          <div className="flex justify-between border-b border-secondary/5 pb-1">
            <span className="font-extrabold text-secondary/90">Monday – Friday</span>
            <span>8:00 AM – 9:00 PM</span>
          </div>
          <div className="flex justify-between border-b border-secondary/5 pb-1">
            <span className="font-extrabold text-secondary/90">Saturday</span>
            <span>9:00 AM – 10:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="font-extrabold text-secondary/90">Sunday</span>
            <span>9:00 AM – 8:00 PM</span>
          </div>
        </div>
      ),
    },
    {
      title: "Call Us",
      colSpan: "sm:col-span-1",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      content: (
        <a href="tel:+15551234567" className="text-primary hover:underline text-xs font-bold font-sans">
          +1 (555) 123-4567
        </a>
      ),
    },
    {
      title: "Email",
      colSpan: "sm:col-span-1",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      content: (
        <a href="mailto:hello@brewista.com" className="text-primary hover:underline text-xs font-bold font-sans break-all">
          hello@brewista.com
        </a>
      ),
    },
    {
      title: "Parking Available",
      colSpan: "sm:col-span-2",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
        </svg>
      ),
      content: (
        <p className="text-secondary/75 text-xs leading-relaxed font-sans">
          Free customer parking available directly behind the cafe with ample space throughout the day.
        </p>
      ),
    },
  ];

  return (
    <section id="visit" className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 px-2">
        <span className="text-accent font-sans text-[10px] tracking-[0.25em] font-black uppercase block mb-3">
          — VISIT US
        </span>
        <h2 className="font-serif font-black text-3xl md:text-4xl lg:text-[45px] leading-[1.15] text-secondary mb-4 tracking-tight">
          Experience Great Coffee,<br className="hidden sm:inline" /> Right Around the Corner.
        </h2>
        <p className="text-secondary/70 text-xs md:text-sm leading-relaxed max-w-md mx-auto">
          Visit our cafe for handcrafted coffee, delicious pastries, and a warm atmosphere where every cup is made with care.
        </p>
        <div className="h-[2px] w-12 bg-primary mx-auto mt-4.5 rounded-full opacity-60" />
      </div>

      {/* Main Grid Layout (2 columns on desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Column: Information Cards & Actions (45% equivalent width) */}
        <div className="lg:col-span-5 flex flex-col gap-8">

  {/* ================= Cards ================= */}

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

    {visitCards.map((card, index) => (

      <article
        key={index}
        className={`group relative overflow-hidden rounded-[28px] border border-[#ECE7E1] bg-white/90 backdrop-blur-sm p-7 shadow-[0_20px_45px_rgba(25,25,25,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(25,25,25,.08)] hover:border-primary/20 ${card.colSpan}`}
      >

        {/* Decorative Glow */}

        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/5 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

        {/* Top Accent */}

        <div className="absolute left-0 top-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"></div>

        {/* Icon */}

        <div className="relative mb-7">

          <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div
            className="relative flex h-[72px] w-[72px] items-center justify-center bg-gradient-to-br from-[#F4F8F4] to-[#E6EFE8] text-primary border border-[#E4ECE5] shadow-md transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white"
            style={{
              borderRadius:
                "58% 42% 60% 40% / 40% 60% 40% 60%",
            }}
          >
            {card.icon}
          </div>

        </div>

        {/* Content */}

        <div className="space-y-3">

          <h3 className="font-serif text-[20px] font-black text-secondary">
            {card.title}
          </h3>

          <div className="text-[15px] leading-7 text-secondary/70">
            {card.content}
          </div>

        </div>

      </article>

    ))}

  </div>

  {/* ================= CTA ================= */}

  <div className="grid sm:grid-cols-2 gap-5">

    <a
      href="https://maps.google.com/?q=123+Coffee+Street+Downtown+New+York"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center gap-4 rounded-full bg-primary px-7 py-4 text-white shadow-[0_14px_35px_rgba(44,62,45,.22)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#2c4030] hover:shadow-[0_18px_40px_rgba(44,62,45,.32)]"
    >

      <svg
        className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894l5-2.5a1 1 0 01.894 0l6 3a1 1 0 00.894 0l5-2.5A1 1 0 0123 3.382v10.764a1 1 0 01-.553.894L17 18l-6-3a1 1 0 00-.894 0L9 20z"
        />
      </svg>

      <span className="text-xs font-bold uppercase tracking-[0.22em]">
        Get Directions
      </span>

      <svg
        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M13 5l7 7-7 7"
        />
      </svg>

    </a>

    <a
      href="tel:+15551234567"
      className="group flex items-center justify-center gap-4 rounded-full border border-secondary/15 bg-white px-7 py-4 text-secondary transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:bg-[#FCFBFA] hover:shadow-lg"
    >

      <svg
        className="h-5 w-5 text-primary transition-transform duration-500 group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22 16.92V20a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h3.09a2 2 0 012 1.72l.36 2.57a2 2 0 01-.57 1.74l-1.27 1.27a16 16 0 006.36 6.36l1.27-1.27a2 2 0 011.74-.57l2.57.36A2 2 0 0122 16.92z"
        />
      </svg>

      <span className="text-xs font-bold uppercase tracking-[0.22em]">
        Call Now
      </span>

    </a>

  </div>

</div>

        {/* Right Column: Google Maps Container (55% equivalent width) */}
        <div className="lg:col-span-7 w-full h-full min-h-[380px] lg:min-h-[480px]">
          <div className="w-full h-full bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(44,30,22,0.015)] border border-secondary/5 relative transition-all duration-300 hover:shadow-[0_12px_40px_rgba(44,30,22,0.04)] hover:border-secondary/10 min-h-[380px] lg:min-h-[480px]">
            <iframe
              src={MAP_EMBED_URL}
              className="absolute inset-0 w-full h-full border-0 rounded-[24px] md:rounded-[32px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brewista Coffee House Location Map"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Visit;
