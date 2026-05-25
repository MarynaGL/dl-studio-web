import { useTranslations } from 'next-intl'; // 1. Importamos el motor de idiomas
import React from 'react';
import ScrollUpArrow from './ScrollUpArrow';

export default function ServiceDev() {
    const t = useTranslations('Servicios.Desarrollo');
  return (
    <section id="desarrollo" className="w-full flex justify-center bg-[#f8f8f6] py-20 overflow-hidden">
      <div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex flex-col">
        
        {/* LÍNEA SEPARADORA SUPERIOR Y ETIQUETA */}
        <div className="w-full border-t border-[#939390]/30 pt-4 flex items-center gap-2 mb-10">
          <span className="text-[14px] font-inter font-light text-[#939390] uppercase tracking-widest">
            {t('tag')} {/* Reemplazo mágico */}
          </span>
          <div className="w-12 h-[1px] bg-[#939390]/50"></div>
        </div>

        {/* HEADER DE LA SECCIÓN */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full mb-16">
          <span className="text-[120px] lg:text-[180px] font-inter font-bold text-[#e4e4e4] leading-none select-none">
            02
          </span>
          <p className="text-[14px] font-inter font-light text-[#939390] max-w-[350px] leading-relaxed mb-6 lg:mb-12">
            {t('intro')}
          </p>
        </div>

        {/* TÍTULO PRINCIPAL (Separado en 3 partes para mantener el diseño) */}
        <h2 className="text-[48px] lg:text-[64px] font-inter font-bold text-[#18181A] leading-[1.1] tracking-tight max-w-[900px] mb-20">
          {t('titulo_inicio')} <span className="text-[#6b9e7a] italic font-medium">{t('titulo_resaltado')}</span>{t('titulo_fin')}
        </h2>

        {/* CAJA OSCURA: EL PROBLEMA */}
        <div className="w-full bg-[#404040] p-10 lg:p-16 flex flex-col mb-20">
          <div className="flex items-center gap-2 mb-10">
            <span className="text-[14px] font-inter font-medium text-[#6b9e7a]">{t('problema_tag')}</span>
            <div className="w-16 h-[1px] bg-[#6b9e7a]"></div>
          </div>
          
          <h3 className="text-[20px] font-inter font-bold text-white mb-6">
            {t('problema_titulo')}
          </h3>
          <p className="text-[14px] lg:text-[16px] font-inter font-light text-[#e4e4e4] leading-relaxed max-w-[1000px]">
            {t('problema_desc')}
          </p>
        </div>

        {/* ENFOQUE TÉCNICO */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-12">
            <span className="text-[14px] font-inter font-light text-[#939390]">{t('enfoque_tag')}</span>
            <div className="w-20 h-[1px] bg-[#939390]/50"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#939390]/30 border-y border-[#939390]/30">
            
            <div className="flex flex-col p-8 lg:p-12 lg:pl-0">
              <span className="text-[64px] font-inter font-bold text-[#e4e4e4] leading-none mb-6">01</span>
              <h4 className="text-[16px] font-inter font-bold text-[#18181A] mb-6">{t('enfoque.paso1_tit')}</h4>
              <p className="text-[14px] font-inter font-light text-[#939390] leading-relaxed">
                {t('enfoque.paso1_desc')}
              </p>
            </div>

            <div className="flex flex-col p-8 lg:p-12">
              <span className="text-[64px] font-inter font-bold text-[#e4e4e4] leading-none mb-6">02</span>
              <h4 className="text-[16px] font-inter font-bold text-[#18181A] mb-6">{t('enfoque.paso2_tit')}</h4>
              <p className="text-[14px] font-inter font-light text-[#939390] leading-relaxed">
                {t('enfoque.paso2_desc')}
              </p>
            </div>

            <div className="flex flex-col p-8 lg:p-12 lg:pr-0">
              <span className="text-[64px] font-inter font-bold text-[#e4e4e4] leading-none mb-6">03</span>
              <h4 className="text-[16px] font-inter font-bold text-[#18181A] mb-6">{t('enfoque.paso3_tit')}</h4>
              <p className="text-[14px] font-inter font-light text-[#939390] leading-relaxed">
                {t('enfoque.paso3_desc')}
              </p>
            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* PROPUESTA FIGMA TO CODE                   */}
        {/* ========================================= */}
        {/* 1. CAJA GRIS PRINCIPAL: Le quitamos el flex-row y la dejamos como flex-col puro */}
        <div className="w-full bg-[#e4e4e4] p-10 lg:pt-16 lg:px-16 lg:pb-8 flex flex-col relative">
          
          {/* 2. CONTENEDOR DE LAS COLUMNAS (Este es el div nuevo que agrupa izquierda y derecha) */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 w-full">
            
            {/* Lado Izquierdo */}
            <div className="w-full lg:w-1/2 flex flex-col pr-0 lg:pr-16">
              <span className="text-[14px] font-inter font-light text-[#939390] mb-6">{t('figma_tag')}</span>
              <h4 className="text-[18px] font-inter font-bold text-[#18181A] mb-6">{t('figma_tit')}</h4>
              <p className="text-[14px] font-inter font-light text-[#939390] leading-relaxed">
                {t('figma_desc')}
              </p>
            </div>

            {/* Lado Derecho (Línea divisoria y Entregables) */}
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row">
              <div className="hidden lg:block w-[1px] bg-[#939390]/30 mr-16 h-full"></div>
              
              <div className="flex flex-col w-full">
                <span className="text-[14px] font-inter font-light text-[#939390] mb-8">{t('entregables_tit')}</span>
                
                <div className="flex flex-col gap-4">
                  <div className="bg-white px-6 py-4 flex items-center gap-4">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#e4e4e4] border border-[#939390]"></div>
                    <span className="text-[14px] font-inter font-light text-[#939390]">{t('entregable_1')}</span>
                  </div>
                  
                  <div className="bg-white px-6 py-4 flex items-center gap-4">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#e4e4e4] border border-[#939390]"></div>
                    <span className="text-[14px] font-inter font-light text-[#939390]">{t('entregable_2')}</span>
                  </div>

                  <div className="bg-white px-6 py-4 flex items-center gap-4">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#e4e4e4] border border-[#939390]"></div>
                    <span className="text-[14px] font-inter font-light text-[#939390]">{t('entregable_3')}</span>
                  </div>
                </div>
              </div>
            </div>

          </div> {/* FIN DEL CONTENEDOR DE COLUMNAS */}
          
          {/* 3. FLECHA CENTRADA: Queda por fuera del contenedor de columnas, pero dentro de la caja gris */}
          <ScrollUpArrow />
          
        </div>

      </div>
    </section>
  );
}