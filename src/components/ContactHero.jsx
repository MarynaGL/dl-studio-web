import React from 'react';
import SectionTag from '@/components/SectionTag';
import { useTranslations } from 'next-intl';

export default function ContactHero() {
  const t = useTranslations('Contacto.Hero');

  return (
    // Fondo general blanco para contrastar con las tarjetas
    <section className="w-full flex justify-center bg-[#F7F7F7]">
  {/* Pasamos el pt-32 y pb-16 a este div */}
  <div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex flex-col pt-32 pb-16 ">  
        {/* ========================================= */}
        {/* ETIQUETA SUPERIOR (CONTACTO)              */}
        {/* ========================================= */}
        <SectionTag text={t('tag')} />

        {/* ========================================= */}
        {/* CONTENEDOR PRINCIPAL A DOS COLUMNAS       */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 w-full">
          
          {/* --- COLUMNA IZQUIERDA: Textos --- */}
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

          {/* --- COLUMNA DERECHA: Tarjetas de estadísticas --- */}
          <div className="flex flex-col gap-4 w-full lg:w-[45%] lg:mt-6">
            
            {/* Tarjeta 1 */}
            <div className="w-full bg-[#f4f4f2] px-8 py-6 flex items-center gap-8 rounded-sm">
              <span className="text-[36px] font-inter font-light text-[#6b9e7a] min-w-[90px]">
                {t('stat_1_val')}
              </span>
              <div className="flex flex-col">
                <span className="text-[14px] font-inter font-medium text-[#18181A] mb-1">
                  {t('stat_1_tit')}
                </span>
                <span className="text-[12px] font-inter font-light text-[#939390]">
                  {t('stat_1_desc')}
                </span>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="w-full bg-[#f4f4f2] px-8 py-6 flex items-center gap-8 rounded-sm">
              <span className="text-[36px] font-inter font-light text-[#6b9e7a] min-w-[90px]">
                {t('stat_2_val')}
              </span>
              <div className="flex flex-col">
                <span className="text-[14px] font-inter font-medium text-[#18181A] mb-1">
                  {t('stat_2_tit')}
                </span>
                <span className="text-[12px] font-inter font-light text-[#939390]">
                  {t('stat_2_desc')}
                </span>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="w-full bg-[#f4f4f2] px-8 py-6 flex items-center gap-8 rounded-sm">
              <span className="text-[36px] font-inter font-light text-[#6b9e7a] min-w-[90px]">
                {t('stat_3_val')}
              </span>
              <div className="flex flex-col">
                <span className="text-[14px] font-inter font-medium text-[#18181A] mb-1">
                  {t('stat_3_tit')}
                </span>
                <span className="text-[12px] font-inter font-light text-[#939390]">
                  {t('stat_3_desc')}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}