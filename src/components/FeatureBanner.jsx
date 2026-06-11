"use client";

import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function FeatureBanner() {
  const t = useTranslations('FeatureBanner');
  
  const hoverGradient = {
    background: "linear-gradient(90deg, #6B9E7A 0%, #A7C1AF 16.35%, #E4E4E4 63.46%)"
  };

  const features = [
    {
      id: 'design',
      href: '/servicios#diseno',
      title: t('design_title'),
      subtitle: t('design_subtitle')
    },
    {
      id: 'development',
      href: '/servicios#desarrollo',
      title: t('dev_title'),
      subtitle: t('dev_subtitle')
    },
    {
      id: 'quality',
      href: '/servicios#calidad',
      title: t('qa_title'),
      subtitle: t('qa_subtitle')
    }
  ];

  return (
    <div className="w-full flex justify-center bg-[#F7F7F7] overflow-hidden border-t border-b border-[#939390]">
      
      {/* 1. LIQUID DESIGN: Sacamos el max-w-[1440px] para que las líneas divisorias fluyan al 100% */}
      <div className="w-full flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#939390]">
        
        {features.map((feature) => (
          <Link key={feature.id} href={feature.href} className="group flex-1 w-full lg:w-auto">
            
            {/* 2. FLEX-1: Esta es la clase mágica. Reemplaza al w-1/3 y fuerza partes exactamente iguales */}
            {/* 3. Padding ajustado para que el texto respire bien sin importar el tamaño del monitor */}
            <div className="relative h-[144px] flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden cursor-pointer">
              <div 
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-0 group-hover:duration-500 ease-out z-0"
                style={hoverGradient}
              ></div>
              <div className="relative z-10">
                <h3 className="text-[32px] font-bold text-[#18181A]">
                  {feature.title}
                </h3>
                <p className="mt-2 font-['Inter'] text-[14px] font-medium leading-none text-[#939390] group-hover:text-[#18181A] transition-colors duration-300">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}