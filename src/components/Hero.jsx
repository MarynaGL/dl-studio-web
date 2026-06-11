"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('HomeHero');

  const refinedLoopAnimation = {
    y: ["100vh", "-100vh"], 
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    
    <section className="w-full flex justify-center bg-[#f8f8f6] overflow-hidden">
      
      {/* Contenedor Maestro */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[60px] relative">
        
        <div className="w-full relative flex flex-col lg:flex-row items-center pt-[120px] pb-[100px] md:pb-[200px]">
        
          {/* COLUMNA IZQUIERDA */}
          <div className="relative z-10 pt-[200px] pb-[100px] max-w-2xl">
        <h1 className="font-['Inter'] font-bold text-[64px] leading-[75px] tracking-normal text-[#18181A] max-w-[700px]">
          {t('titulo_1')} <br />
          <span className="text-[#60A572]">{t('titulo_resaltado')}</span>{t('titulo_2')}
        </h1>
        
        <p className="mt-6 text-[14px] font-light leading-none text-[#939390] max-w-[488px] uppercase tracking-wide">
          {t('subtitulo')}
        </p>

        <div className="mt-10 flex items-center gap-8">
          <Link href="/portfolio#portfolio-tabs">
            <button className="bg-[#18181A] text-white px-10 py-4 rounded-xl font-bold text-[16px] hover:bg-[#60A572] transition-all duration-300">
      {t('btn_proyectos')}
    </button>
          </Link>


  {/* Botón Info */}
  <Link 
    href="/contacto" 
    className="group text-[14px] font-light text-[#939390] uppercase tracking-wide hover:text-[#60A572] transition-colors border-b-2 border-transparent hover:border-[#60A572] pb-1 flex items-center gap-1"
  >
    {t('btn_info')}
    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
  </Link>
</div>
          </div>

          {/* COLUMNA DERECHA: DL FANTASMA */}
          <div className="absolute lg:relative w-full lg:w-1/2 flex justify-end items-center pointer-events-none h-[300px] lg:h-auto mt-10 lg:mt-0 opacity-40">
            <motion.div animate={refinedLoopAnimation} className="relative flex justify-center w-full">
              <Image 
                src="/DL.png" 
                alt="Logo DL" 
                width={400} 
                height={75} 
                className="object-contain" 
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}