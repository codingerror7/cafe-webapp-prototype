"use client";

import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingCTA = () => {
  const whatsappNumber = "15551234567";
  const callNumber = "+15551234567";
  const defaultMessage = encodeURIComponent("Hello Brewista Coffee House, I would like to place an order or ask a question.");

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 sm:gap-3.5 items-end select-none">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Brewista Coffee House on WhatsApp"
        className="group relative flex items-center bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300 active:scale-95"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:opacity-75 duration-100"></span>

        <div className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out flex flex-col pr-0 group-hover:pr-3 pl-0 opacity-0 group-hover:opacity-100 font-sans text-right">
          <span className="text-xs font-extrabold tracking-wide text-white leading-tight">
            Chat with Brewista
          </span>
          <span className="text-[10px] text-white/90 font-medium">
            Coffee House
          </span>
        </div>

        <FaWhatsapp className="w-6 h-6 relative z-10 text-white" />
      </a>

      <a
        href={`tel:${callNumber}`}
        aria-label="Call Brewista Coffee House"
        className="group relative flex items-center bg-[#1F2E21] text-white p-3.5 md:p-4 rounded-full shadow-lg shadow-[#1F2E21]/30 hover:shadow-xl hover:shadow-[#1F2E21]/50 hover:scale-105 transition-all duration-300 active:scale-95"
      >
        <span className="absolute -inset-1 rounded-full bg-[#1F2E21] opacity-30 animate-ping group-hover:opacity-60 duration-1000"></span>

        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-extrabold tracking-wide pr-0 group-hover:pr-2.5 pl-0 opacity-0 group-hover:opacity-100 font-sans">
          Call Us Now
        </span>

        <FiPhoneCall className="w-5 h-5 relative z-10 text-white animate-pulse" />
      </a>
    </div>
  );
};

export default FloatingCTA;
