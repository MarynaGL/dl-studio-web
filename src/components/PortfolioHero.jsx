import React from 'react';
import SectionTag from '@/components/SectionTag';
import { useTranslations } from 'next-intl';

export default function PortfolioHero() {
  // Inicializamos el traductor apuntando a la sección correcta
  const t = useTranslations('Portfolio.Hero');

  return (
    // Fondo general y márgenes de la sección
     <section className="w-full flex justify-center bg-[#F7F7F7]">
  {/* Pasamos el pt-32 y pb-16 a este div */}
  <div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex flex-col pt-32 pb-0 border-l border-r border-[#D9D6D3]"> {/* ... (Tu sección de "¿Qué pasa después?" se mantiene igual) ... */}

        
        {/* ========================================= */}
        {/* ETIQUETA SUPERIOR (Trabajo Seleccionado)  */}
        {/* ========================================= */}
       <SectionTag text={t('tag')} />

        {/* ========================================= */}
        {/* CONTENEDOR PRINCIPAL                      */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-0 w-full relative">
          
          {/* LADO IZQUIERDO: Título y Párrafo */}
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

          {/* LADO DERECHO: Grid de Estadísticas (Caja de 440px x 230px) */}
          <div className="w-full lg:w-[440px] bg-[#edede8] grid grid-cols-2 grid-rows-2 lg:mt-[77px] shrink-0">
            
            {/* Dato 1 */}
            <div className="flex flex-col p-8 lg:p-10 border-b border-r border-[#dddcda]/70">
              <span className="text-[42px] font-inter font-normal leading-none tracking-[-2px] text-[#18181A] mb-2">
                {t('stat_1_val')}
              </span>
              <span className="text-[11px] font-inter font-light text-[#939390] leading-[18.7px] tracking-[0.3px]">
                {t('stat_1_text')}
              </span>
            </div>

            {/* Dato 2 */}
            <div className="flex flex-col p-8 lg:p-10 border-b border-[#dddcda]/70">
              <span className="text-[42px] font-inter font-normal leading-none tracking-[-2px] text-[#18181A] mb-2">
                {t('stat_2_val')}
              </span>
              <span className="text-[11px] font-inter font-light text-[#939390] leading-[18.7px] tracking-[0.3px]">
                {t('stat_2_text')}
              </span>
            </div>

            {/* Dato 3 */}
            <div className="flex flex-col p-8 lg:p-10 border-r border-[#dddcda]/70">
              <span className="text-[42px] font-inter font-normal leading-none tracking-[-2px] text-[#18181A] mb-2">
                {t('stat_3_val')}
              </span>
              <span className="text-[11px] font-inter font-light text-[#939390] leading-[18.7px] tracking-[0.3px]">
                {t('stat_3_text')}
              </span>
            </div>

            {/* Dato 4 */}
            <div className="flex flex-col p-8 lg:p-10">
              <span className="text-[42px] font-inter font-normal leading-none tracking-[-2px] text-[#18181A] mb-2">
                {t('stat_4_val')}
              </span>
              <span className="text-[11px] font-inter font-light text-[#939390] leading-[18.7px] tracking-[0.3px]">
                {t('stat_4_text')}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}