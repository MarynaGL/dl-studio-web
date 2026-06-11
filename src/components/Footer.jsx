import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  // Mudamos las redes sociales acá
  const socials = [
    { name: "Instagram", icon: "/icon-insta.png", link: "https://www.instagram.com/design.and.logic/" },
    { name: "Facebook", icon: "/icon-fb.png", link: "https://www.facebook.com/profile.php?id=61588932251182" },
    { name: "LinkedIn", icon: "/icon-in.png", link: "https://www.linkedin.com/company/dise%C3%B1o-l%C3%B3gica" },
    { name: "Behance", icon: "/icon-be.png", link: "https://www.behance.net/831591dc" },
  ];

  return (
    <footer className="w-full flex flex-col items-center overflow-hidden">
      
      {/* 1. FRANJA DE REDES SOCIALES (Fondo Claro) */}
      <div className="w-full bg-[#F7F7F7] flex justify-center pt-10 pb-10">
        <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[60px] flex flex-col">
          
          {/* Línea Separadora */}
          <div className="w-full border-t border-[#939390]/30 mb-10"></div>
          
          {/* Iconos */}
          <div className="w-full flex justify-between items-center">
            {socials.map((social, index) => (
              <div key={index} className="flex-1 flex justify-center">
                <a 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-[11px] group"
                >
                  <div className="relative w-[30px] h-[30px] md:w-[40px] md:h-[40px]">
                    <Image 
                      src={social.icon} 
                      alt={social.name} 
                      fill 
                      sizes="40px" 
                      className="object-contain group-hover:opacity-70 transition-opacity" 
                    />
                  </div>
                  <span className="hidden sm:block text-[18px] md:text-[24px] font-inter font-normal text-[#939390] group-hover:text-[#6b9e7a] transition-colors">
                    {social.name}
                  </span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 2. FRANJA DE COPYRIGHT (Fondo Oscuro) */}
      <div className="w-full bg-[#18181A] text-[#939390] py-6 border-t border-[#2c2c2f] flex justify-center">
        <span className="text-[12px] font-inter font-light">
          {t('copyright')}
        </span>
      </div>

    </footer>
  );
}