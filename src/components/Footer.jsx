
import React from 'react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full bg-[#18181A] text-[#939390] py-8 px-8 lg:px-[226px] border-t border-[#2c2c2f]">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* TEXTO DE COPYRIGHT */}
        <span className="text-[12px] font-inter font-light">
          {t('copyright')}
        </span>

        {/* ENLACES LEGALES FUTUROS (COMENTADOS POR AHORA) */}
        {/* <div className="flex gap-6 text-[12px] font-inter font-light">
          <a href="#" className="hover:text-[#6b9e7a] transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-[#6b9e7a] transition-colors">Política de Privacidad</a>
        </div> 
        */}

      </div>
    </footer>
  );
}