"use client";
import React from 'react';

export default function ScrollUpArrow() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full flex justify-center mt-12 mb-[-10px] relative z-10">
      <button 
        onClick={scrollToTop}
        className="p-3 rounded-full hover:bg-white/40 transition-all cursor-pointer"
        aria-label="Volver arriba"
      >
        <img 
          src="/icon-flecha.png" 
          alt="Flecha volver arriba" 
          className="w-[18px] h-[18px] object-contain opacity-70 hover:opacity-100 transition-opacity" 
        />
      </button>
    </div>
  );
}