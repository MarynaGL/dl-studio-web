import React from 'react';

export default function SectionTag({ text }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      {/* La línea hecha con código (1px de alto, 40px de ancho, color verde) */}
      <div className="w-[40px] h-[1px] bg-[#6b9e7a]"></div>
      
      {/* El texto con la tipografía y espaciado exacto */}
      <span className="text-[#6b9e7a] font-inter font-light text-[12px] tracking-[3px] uppercase">
        {text}
      </span>
    </div>
  );
}