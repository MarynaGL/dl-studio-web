import React from 'react';
import { useTranslations } from 'next-intl';

export default function ContactSteps() {
  // Asegurate de usar el namespace donde tenés guardados estos textos en tu es.json
  const t = useTranslations('ContactSteps'); 

  // Armamos el array mapeando las variables de tu archivo de traducciones
  const steps = [
    { num: '01', title: t('step1_title'), desc: t('step1_desc') },
    { num: '02', title: t('step2_title'), desc: t('step2_desc') },
    { num: '03', title: t('step3_title'), desc: t('step3_desc') },
    { num: '04', title: t('step4_title'), desc: t('step4_desc') },
  ];

  return (
    // Mantenemos el pb-32 para dar respiro antes del Footer global
    <section className="w-full flex justify-center bg-[#F7F7F7]">
      <div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex flex-col md:flex-row items-stretch  bg-[#f7f7f7]">
      
        
        {/* LA CAJA BEIGE/GRIS CLARO DEL DISEÑO */}
        <div className="w-full bg-[#F4F4F2] p-10 lg:p-16 mt-20">
          
          {/* ETIQUETA SUPERIOR ("¿QUÉ PASA DESPUÉS?") */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#939390] font-inter font-light text-[10px] md:text-[11px] tracking-[2px] uppercase">
              {t('tag')}
            </span>
            {/* Línea horizontal sutil que acompaña al tag */}
            <div className="w-[60px] h-[1px] bg-[#dddcda]"></div>
          </div>

          {/* GRILLA DE 4 PASOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                // A partir del segundo elemento, agregamos el borde izquierdo interno
                className={`flex flex-col ${index !== 0 ? 'lg:border-l border-[#dddcda] lg:pl-10' : 'lg:pr-10'}`}
              >
                {/* Número gigante y fino */}
                <span className="text-[40px] md:text-[48px] font-inter font-light text-[#dddcda] mb-6">
                  {step.num}
                </span>
                
                {/* Título en negrita */}
                <h4 className="text-[14px] font-inter font-medium text-[#18181A] mb-3">
                  {step.title}
                </h4>
                
                {/* Descripción en gris claro */}
                <p className="text-[13px] font-inter font-light text-[#939390] leading-[1.7]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}