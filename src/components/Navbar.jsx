"use client"; // <-- MUY IMPORTANTE: Esto le dice a Next.js que este componente tiene interactividad

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl'; // 1. Importamos el motor
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar()

 {
  // 2. Conectamos la sección "Navbar" de tus JSON
  const t = useTranslations('Navbar');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center bg-[#F7F7F7] fixed top-0 left-0 z-50 shadow-sm">
    {/* Contenedor Maestro para el Navbar */}
    <div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex justify-between items-center h-[90px]">
        
        {/* 1. Logo Section */}
        <div className="flex items-center gap-6">
          <div className="h-[64px] w-[2.5px] bg-[#60A572]"></div>
          
          <Link href="/" className="flex items-center gap-4 group">
            <Image 
              src="/Vector.png" 
              alt="Logo DL" 
              width={85}   
              height={64}  
              className="object-contain transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* 2. Links de Navegación */}
        <div className="hidden md:flex items-center space-x-12">
          
          <Link href="/servicios" className="text-sm font-normal text-[#939390] hover:text-[#18181A] transition-colors">
            {t('servicios')}
          </Link>
          
          <Link href="/portfolio" className="text-sm font-normal text-[#939390] hover:text-[#18181A] transition-colors">
            {t('galeria')}
          </Link>
          
          <Link href="/contacto" className="text-sm font-normal text-[#939390] hover:text-[#18181A] transition-colors">
            {t('contactos')}
          </Link>
          
        </div>
         

        {/* 3. Botón de Acción */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link 
            href="/contacto" 
            className="border border-[#18181A] px-8 py-2 rounded-lg text-sm font-medium text-[#18181A] hover:bg-[#18181A] hover:text-white transition-all duration-300"
          >
            {t('btn_contacto')} {/* Reemplazo mágico */}
          </Link>
        </div>
        <button 
    className="block md:hidden p-2 text-[#18181A] z-[60] relative"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // <-- ESTO HACE LA MAGIA
  >
    {isMobileMenuOpen ? (
      // Ícono de "X" (Cerrar)
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    ) : (
      // Ícono de Hamburguesa (Abrir)
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )}
  </button>
  

      </div>
      {/* --- MENÚ DESPLEGABLE MOBILE --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#F7F7F7] z-[55] flex flex-col pt-[120px] px-8 md:hidden h-screen overflow-y-auto">
          
          {/* Enlaces de navegación (Reemplazá con tus rutas exactas) */}
          <div className="flex flex-col gap-8 text-[32px] font-inter font-light tracking-[-1px] text-[#18181A]">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/servicios" onClick={() => setIsMobileMenuOpen(false)}>Servicios</Link>
            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
            <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
          </div>

          <div className="mt-auto pb-12 flex flex-col gap-6">
            {/* Acá podés poner tu selector de idiomas para mobile */}
            <div className="w-full h-[1px] bg-[#dddcda]"></div>
            
            <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full py-4 border border-[#18181A] rounded-[4px] text-[#18181A] font-inter text-[14px]">
                Iniciar Proyecto
              </button>
            </Link>
          </div>
          
        </div>
      )}
    </nav>
  );
}