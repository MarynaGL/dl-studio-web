import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';


export default function ServiceEndToEnd() {
  // Inicializamos el traductor apuntando a la sección CTA
  const t = useTranslations('Servicios.CTA');

  return (
    // Agregamos id="punta-a-punta" para el anclaje del menú
    <section id="punta-a-punta" className="w-full flex justify-center bg-[#F7F7F7] py-20 overflow-hidden">
      
      {/* EL TUBO MAESTRO (1440px) */}
      <div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex flex-col items-center">
        
        {/* ========================================= */}
        {/* CAJA OSCURA: CTA FINAL                    */}
        {/* ========================================= */}
        <div className="w-full max-w-[1079px] bg-[#404040] pt-24 px-10 pb-12 lg:px-20 flex flex-col items-center text-center relative">
          
          {/* Título Principal (Con soporte para salto de línea y color) */}
          <h2 className="text-[40px] lg:text-[56px] font-inter font-normal text-white leading-tight mb-8">
            {t.rich('titulo', {
              verde: (chunks) => <span className="text-[#6b9e7a] italic font-medium">{chunks}</span>,
              br: () => <br className="hidden md:block" />
            })}
          </h2>

          {/* Subtítulo / Párrafo */}
          <p className="text-[14px] font-inter font-light text-[#e4e4e4] max-w-[600px] leading-relaxed mb-16">
            {t('subtitulo')}
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            
            {/* Botón Principal (Verde) */}
            <Link 
            href="/contacto#contacto-form"className="bg-[#6b9e7a] text-white font-inter font-medium text-[16px] py-4 px-8 rounded hover:bg-[#5a8667] transition-colors">
              {t('btn_conversacion')}
            </Link>
            
            {/* Enlace Secundario */}
            <Link 
              href="/portfolio#portfolio-tabs" 
              className="text-[#939390] font-inter font-light text-[16px] flex items-center gap-2 border-b border-[#939390] pb-1 hover:text-white hover:border-white transition-colors"
            >
              {t('btn_trabajos')} <span className="text-lg leading-none">→</span>
            </Link>
          </div>

          {/* FLECHA REUTILIZABLE: Centrada al final de la caja oscura */}
          <div className="mt-8">
        
          </div>

        </div>

      </div>
    </section>
  );
}