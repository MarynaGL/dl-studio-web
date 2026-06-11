import React from 'react';
import Link from 'next/link';
import SectionTag from '@/components/SectionTag';
import { useTranslations } from 'next-intl';

export default function ServicesHero() {
  const t = useTranslations('Servicios.Hero');

  const serviciosList = [
    { num: "01", name: t('item_1'), href: "#diseno" },
    { num: "02", name: t('item_2'), href: "#desarrollo" },
    { num: "03", name: t('item_3'), href: "#qa" },
    { num: "04", name: t('item_4'), href: "#punta-a-punta" }
  ];

  return (
    // 1. pt-[160px] para que tenga aire arriba y no se pegue al navbar
    <section className="w-full flex justify-center bg-[#F7F7F7] overflow-hidden pt-[120px] lg:pt-[160px] pb-16 lg:pb-24">
    
      {/* 2. px-[60px] garantiza los 60px de margen que querés a los costados */}
      <div className="w-full px-4 md:px-8 lg:px-[60px] relative">
        
        <SectionTag text={t('tag')} />

        {/* CONTENEDOR FLEX: justify-between empuja los hijos a los extremos */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-between items-start mt-10 lg:mt-12">
          
          {/* --- LADO IZQUIERDO (Ocupa el 60% de la pantalla) --- */}
          <div className="flex items-stretch w-full lg:w-[60%]">
            <div className="w-[4px] bg-[#6b9e7a] shrink-0"></div>
            
            <div className="flex flex-col justify-center py-2 pl-6 lg:pl-[40px] w-full">
              
              {/* TÍTULO: max-w-[800px] le da todo el espacio del mundo para no cortarse */}
              <h1 className="text-[40px] md:text-[50px] lg:text-[58px] font-inter font-normal leading-[1.1] tracking-[-1px] text-[#18181A] mb-8 lg:mb-10 w-full max-w-[800px]">
                {t.rich('titulo', {
                  verde: (chunks) => <span className="text-[#6b9e7a] italic">{chunks}</span>,
                  br: () => <br className="hidden sm:block" />
                })}
              </h1>
              
              <div className="border-l-[1.6px] border-[#dddcda] pl-[20px] max-w-[500px]">
                <p className="text-[14px] font-inter font-light text-[#939390] leading-[25.9px]">
                  {t('descripcion')}
                </p>
              </div>

            </div>
          </div>

          {/* --- LADO DERECHO (Ocupa el 35% de la pantalla y se alinea al final) --- */}
          <div className="w-full lg:w-[35%] flex lg:justify-end mt-12 lg:mt-0">
            {/* w-max asegura que la lista se recueste sobre el borde derecho */}
            <ul className="flex flex-col gap-6 border-l border-[#939390]/30 pl-6 md:pl-8 w-max">
              {serviciosList.map((item, index) => (
                <li key={index} className="flex items-center gap-4 group cursor-default">
                  <Link href={item.href} className="flex items-center gap-4 cursor-pointer">
                    <span className="text-[14px] font-inter text-[#939390] group-hover:text-[#6b9e7a] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[18px] md:text-[20px] font-inter font-medium text-[#404040] group-hover:text-[#6b9e7a] transition-colors whitespace-nowrap">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
       </div> 
    </section>
  );
}