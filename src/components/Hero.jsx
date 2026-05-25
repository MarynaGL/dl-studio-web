"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function Hero() {
  // Conectamos el diccionario de esta sección
  const t = useTranslations('HomeHero');
  
  // Animación de bucle vertical
  const refinedLoopAnimation = {
    y: [500, -500], 
    transition: {
      duration: 8,
      times: [0, 0.4, 0.8, 0.9, 1.0],
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <section className="w-full flex justify-center bg-[#f8f8f6]">
      
      {/* Contenedor Maestro de 1440px */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[60px] relative">
      
      {/* Columna Izquierda: Texto y Botones */}
      <div className="relative z-10 pt-[200px] pb-[100px] max-w-2xl">
        <h1 className="font-['Inter'] font-bold text-[64px] leading-[55px] tracking-normal text-[#18181A] max-w-[700px]">
          {t('titulo_1')} <br />
          <span className="text-[#60A572]">{t('titulo_resaltado')}</span>{t('titulo_2')}
        </h1>
        
        <p className="mt-6 text-[14px] font-light leading-none text-[#939390] max-w-[488px] uppercase tracking-wide">
          {t('subtitulo')}
        </p>

        <div className="mt-10 flex items-center gap-8">
          <Link href="/portfolio#portfolio-tabs">
            <button className="bg-[#18181A] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2a2a2d] transition-all">
              {t('btn_proyectos')}
            </button>
          </Link>

          <Link 
            href="/contacto" 
            className="text-[14px] font-light leading-none text-[#939390] uppercase tracking-wide hover:text-[#18181A] transition-colors border-b border-transparent hover:border-[#18181A]"
          >
            {t('btn_info')}
          </Link>
        </div>
      </div>
      </div> 

      {/* Columna Derecha: Animación por especificaciones del diseñador */}
      <div className="md:col-span-2 flex justify-end items-center h-[500px]">
        {/* Contenedor-frame:
            - bg-transparent (transparente)
            - py-[20px] (márgenes arriba y abajo)
            - overflow-hidden (para que el logo desaparezca en los bordes)
        */}
        <div className="relative h-full w-full py-[20px] overflow-hidden flex justify-center bg-transparent">
          <motion.div animate={refinedLoopAnimation} className="relative">
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

    </section>
  );
}