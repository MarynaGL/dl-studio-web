import React from 'react';
import { useTranslations } from 'next-intl';

export default function PortfolioTabs({ activeTab, setActiveTab }) {
  // Inicializamos las traducciones apuntando a las solapas del Portfolio
  const t = useTranslations('Portfolio.Tabs');

  // Definimos la lista de solapas basándonos en las llaves del JSON
  const tabsList = [
    { key: 'tab_1' },
    { key: 'tab_2' },
    { key: 'tab_3' },
    { key: 'tab_4' },
    { key: 'tab_5' }
  ];

  return (
     <section className="w-full flex justify-center bg-[#F7F7F7]">
  {/* Pasamos el pt-32 y pb-16 a este div */}
  <div className="w-full px-4 md:px-8 lg:px-[60px] flex flex-col relative">
        
        {/* Contenedor de las solapas con la línea gris de base */}
        <div className="flex items-center gap-8 lg:gap-12 border-b border-[#dddcda]">
          
          {tabsList.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)} // Mandamos la llave del JSON
              className={`pb-4 text-[14px] font-inter transition-colors relative cursor-pointer ${
                activeTab === tab.key
                  ? 'text-[#18181A] font-medium' // Estilo activo (oscuro)
                  : 'text-[#939390] font-light hover:text-[#18181A]' // Estilo inactivo (gris)
              }`}
            >
              {t(tab.key)} {/* Reemplazo mágico de la traducción */}
              
              {/* Línea verde indicadora */}
              {activeTab === tab.key && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#6b9e7a]"></div>
              )}
            </button>
          ))}
          
        </div>

      </div>
    </section>
  );
}