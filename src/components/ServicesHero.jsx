import React from 'react';
import Link from 'next/link';
import SectionTag from '@/components/SectionTag';
import { useTranslations } from 'next-intl';

export default function ServicesHero() {
  // Inicializamos el traductor apuntando a la sección Hero de Servicios
  const t = useTranslations('Servicios.Hero');

  // Construimos la lista mezclando los links fijos con los textos traducidos
  const serviciosList = [
    { num: "01", name: t('item_1'), href: "#diseno" },
    { num: "02", name: t('item_2'), href: "#desarrollo" },
    { num: "03", name: t('item_3'), href: "#qa" },
    { num: "04", name: t('item_4'), href: "#punta-a-punta" }
  ];

  return (
    // 1. Fondo general igual al Hero de la Home
    <section className="w-full flex justify-center bg-[#F7F7F7] min-h-[791px] overflow-hidden pt-32 pb-16">
    
    {/* 2. Contenedor Maestro de 1440px */}
    <div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex flex-col">
      
      {/* --- ETIQUETA SUPERIOR IZQUIERDA --- */}
      <SectionTag text={t('tag')} />

        {/* --- CONTENIDO PRINCIPAL (Headline y Lista) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full ">
          
          {/* LADO IZQUIERDO: El gran Título */}
          <div className="flex w-full lg:w-auto">
            {/* Línea verde lateral (4px de ancho) */}
            <div className="w-[4px] bg-[#6b9e7a] shrink-0 min-h-[390px]"></div>
            
            {/* Contenedor del texto (Desplazado 64px a la izquierda y 60px arriba) */}
            <div className="flex flex-col pt-[60px] pb-10 pl-8 lg:pl-[64px] max-w-[500px]">
              
              {/* Título (Con soporte para salto de línea y color) */}
              <h1 className="text-[48px] lg:text-[58px] font-inter font-normal leading-[1.1] tracking-[-1px] text-[#18181A] mb-12">
                {t.rich('titulo', {
                  verde: (chunks) => <span className="text-[#6b9e7a] italic">{chunks}</span>,
                  br: () => <br />
                })}
              </h1>
              
              {/* Párrafo con borde izquierdo */}
              <div className="border-l-[1.6px] border-[#dddcda] pl-[20px]">
                <p className="text-[14px] font-inter font-light text-[#939390] leading-[25.9px]">
                  {t('descripcion')}
                </p>
              </div>

            </div>
          </div>

          {/* LADO DERECHO: Lista de servicios */}
          <div className="relative mt-20 lg:mt-0">
            
            {/* Lista Vertical */}
            <ul className="flex flex-col gap-6 border-l border-[#939390]/30 pl-8">
              {serviciosList.map((item, index) => (
                <li key={index} className="flex items-center gap-4 group cursor-default">
                  <Link href={item.href} className="flex items-center gap-4 cursor-pointer">
                    <span className="text-[14px] font-inter text-[#939390] group-hover:text-[#6b9e7a] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[18px] font-inter font-medium text-[#404040] group-hover:text-[#6b9e7a] transition-colors">
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