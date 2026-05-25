"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ContactFooter() {
  const t = useTranslations('Contacto.Footer');
  // Estado para manejar qué ciudad está seleccionada
  const [selectedCity, setSelectedCity] = useState('BA'); 

  return (
    <section className="w-full flex justify-center bg-[#F7F7F7]">
  {/* Pasamos el pt-32 y pb-16 a este div */}
  <div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex flex-col pt-32 pb-16 border-l border-r border-[#D9D6D3]"> {/* ... (Tu sección de "¿Qué pasa después?" se mantiene igual) ... */}

      {/* <div className="w-full py-20 px-8 lg:px-[226px]"> */}
      
        <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* MAPA INTERACTIVO */}
          <div className="w-full h-[300px] bg-[#e8e8e3] rounded-sm overflow-hidden shadow-inner">
  {selectedCity === 'BA' ? (
    // Coordenadas centro de Buenos Aires
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.30752528786!2d-58.5033383!3d-34.6157434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac74f4b2f29%3A0x6b77259695d70f9!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1716560000000"
      width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
  ) : (
    // Coordenadas centro de Lviv (fijado en el corazón de la ciudad)
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20583.50426176378!2d24.015!3d49.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c144907e1%3A0x10b64c515f38874!2sLviv%2C%20Lviv%20Oblast%2C%20Ukraine!5e0!3m2!1ses!2sar!4v1716560000000"
      width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
  )}
</div>

          {/* DIRECCIONES CLICABLES */}
          <div className="flex flex-col gap-12">
            <div>
              <h5 className="text-[10px] uppercase text-[#939390] tracking-[2px] mb-4">{t('estudio')}</h5>
              
              {/* Clickeable BA */}
              <button 
                onClick={() => setSelectedCity('BA')}
                className={`block text-[14px] font-medium mb-1 transition-colors ${selectedCity === 'BA' ? 'text-[#6b9e7a]' : 'text-[#18181A] hover:text-[#6b9e7a]'}`}
              >
                Buenos Aires, Argentina · 100% remoto y presencial
              </button>

              {/* Clickeable Lviv */}
              <button 
                onClick={() => setSelectedCity('LV')}
                className={`block text-[14px] font-medium transition-colors ${selectedCity === 'LV' ? 'text-[#6b9e7a]' : 'text-[#18181A] hover:text-[#6b9e7a]'}`}
              >
                Lviv, Ucrania · 100% remoto
              </button>
            </div>

            <div>
              <h5 className="text-[10px] uppercase text-[#939390] tracking-[2px] mb-4">{t('horario')}</h5>
              <p className="text-[14px] font-light text-[#18181A]">Lun – Vie · 9:00 – 18:00 hs</p>
              <p className="text-[14px] font-light text-[#939390]">GMT-3 (Argentina)</p>
            </div>

            <div>
              <h5 className="text-[10px] uppercase text-[#939390] tracking-[2px] mb-4">{t('tambien')}</h5>
              <div className="flex gap-4 text-[14px] font-medium text-[#6b9e7a]">
                <a href="https://www.linkedin.com/company/dise%C3%B1o-l%C3%B3gica" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                <a href="https://www.instagram.com/design.and.logic/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                <a href="https://www.behance.net/831591dc" target="_blank" rel="noopener noreferrer" className="hover:underline">Behance</a>
              </div>
            </div>
            </div>
        </div>

      </div>
      
    </section>
  );
}