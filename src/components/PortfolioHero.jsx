import React from 'react';
import SectionTag from '@/components/SectionTag';
import { useTranslations } from 'next-intl';

export default function PortfolioHero() {
  const t = useTranslations('Portfolio.Hero');

  return (
    // Bajamos la sección con pt-[120px] lg:pt-[160px] para que no se choque con el navbar
    <section className="w-full flex justify-center bg-[#F7F7F7] overflow-hidden pt-[120px] lg:pt-[160px] pb-16">
      
      {/* CORRECCIÓN: Eliminamos max-w-[1440px] y los bordes. Ahora usa w-full con px-[60px] exactos */}
      <div className="w-full px-4 md:px-8 lg:px-[60px] flex flex-col relative">
        
        {/* ENVOLVEMOS EL TAG AQUÍ PARA DARLE ESPACIO Y SEGURIDAD */}
        <div className="w-full flex justify-start mb-8">
           <SectionTag text={t('tag')} />
        </div>

        {/* CONTENEDOR FLEX PRINCIPAL: justify-between empuja los hijos a los extremos */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start mt-4 lg:mt-6">
          
          {/* LADO IZQUIERDO */}
          <div className="flex-1 flex w-full">
            
            {/* LÍNEA VERDE VERTICAL */}
            <div className="w-[4px] bg-[#6b9e7a] shrink-0 h-auto self-stretch mr-8"></div>

            {/* CONTENEDOR DE TÍTULO Y DESCRIPCIÓN */}
            <div className="flex flex-col py-2 flex-1">
              
              {/* TÍTULO */}
              <h1 className="text-[36px] md:text-[48px] lg:text-[58px] font-inter font-normal leading-[1.1] tracking-[-1px] text-[#18181A] mb-8 lg:mb-12 w-full lg:w-max">
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

          {/* LADO DERECHO: Caja de Estadísticas empujada a la derecha */}
          <div className="mt-12 lg:mt-0 flex lg:justify-end shrink-0 w-full lg:w-[440px]">
            <div className="w-full bg-[#edede8] grid grid-cols-2 grid-rows-2">
              
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
      </div>
    </section>
  );
}