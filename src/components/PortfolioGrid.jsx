"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function PortfolioGrid({ activeTab }) {
  const t = useTranslations('Portfolio.Proyectos');

  // --- LÓGICA DEL MODAL (GALERÍA) ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (gallery) => {
    if (gallery && gallery.length > 0) {
      setCurrentGallery(gallery);
      setCurrentIndex(0);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);
  const nextImage = () => setCurrentIndex((prev) => prev + 1);
  const prevImage = () => setCurrentIndex((prev) => prev - 1);

  // --- DATOS DE LOS PROYECTOS ---
  const projectsData = [
    { 
      key: 'proy_1', 
      thumb: '/Port1.png', 
      categoryTab: 'tab_2',
      gallery: ['/Port1-1.png', '/Port1-2.png', '/Port1-3.png', '/Port1-4.png'] 
    },
    { 
      key: 'proy_2', 
      thumb: '/Port2.png', 
      categoryTab: 'tab_2',
      gallery: ['/Port2.png']
    },
    { 
      key: 'proy_3', 
      thumb: '/Port3.png', 
      categoryTab: 'tab_2',
      link: 'https://www.behance.net/gallery/190407377/Landing-design' // Link externo
    },
    { 
      key: 'proy_4', 
      thumb: '/Port4.png', 
      categoryTab: 'tab_2',
      link: 'https://www.behance.net/gallery/190223677/Travel-Way-Web-Service' // Link externo
    },
    { 
      key: 'proy_5', 
      thumb: '/Port5.png', 
      categoryTab: 'tab_2',
      link: 'https://www.behance.net/gallery/169274663/Mobile-designMoblnij-zastosunok'
    },
    { 
      key: 'proy_6', 
      thumb: '/Port6.png', 
      categoryTab: 'tab_3', // Pestaña de E-commerce
      link: 'http://autochehol.com.ua/'
    },
    { 
      key: 'proy_7', 
      thumb: '/Port7.png', // Guardá la captura de Oasis Zen con este nombre
      categoryTab: 'tab_5', // Pestaña "Portales"
      link: 'https://oasiszen.com.ar/'
    },
    { 
      key: 'proy_8', 
      thumb: '/Port8.png', // Guardá la imagen de Golden Fleet con este nombre
      categoryTab: 'tab_3', // Pestaña "E-commerce"
      link: 'http://goldenfleet.uk/'
    }, 
    { 
      key: 'proy_9', 
      thumb: '/Port9.png', // Asegurate de guardar la imagen con este nombre
      categoryTab: 'tab_3', // Pestaña "E-commerce"
      link: 'http://sokolyne-gnizdo.com.ua/'
    },
    { 
      key: 'proy_10', 
      thumb: '/Port10.png', // Asegurate de guardar la imagen con este nombre
      categoryTab: 'tab_5', // Pestaña "Portales"
      link: 'https://atcsk.net/'
    },
    { 
      key: 'proy_11', 
      thumb: '/Port11.png', // Asegurate de guardar la imagen con este nombre
      categoryTab: 'tab_4', // Pestaña "Corporativo"
      link: 'https://teralex.net/'
    },
    { 
      key: 'proy_12', 
      thumb: '/Port12.png', // Asegurate de guardar la imagen con este nombre
      categoryTab: 'tab_5', // Pestaña "Portales"
      link: 'https://fiwc.pl/'
    }
  ];

  const filteredProjects = projectsData.filter(
    (p) => activeTab === 'tab_1' || activeTab === p.categoryTab
  );

  return (
    <>
       <section className="w-full flex justify-center bg-[#F7F7F7]">
  {/* Pasamos el pt-32 y pb-16 a este div */}
  {/* Componente inferior (Tarjetas) */}
<div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex flex-col md:flex-row pt-12 pb-16 border-l border-r border-[#D9D6D3]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[25px]">
            
            {filteredProjects.map((project) => (
              <div key={project.key} className="w-full max-w-[650px] flex flex-col shadow-sm">
                
                {/* --- FRAME SUPERIOR (Gris) --- */}
               {/* --- FRAME SUPERIOR (Gris) --- */}
                {/* CAMBIO 1: h-auto en celular, h-[360px] en desktop para que no colapse */}
                <div className="w-full h-auto md:h-[360px] bg-[#edede8] p-[30px] flex flex-col md:flex-row justify-between relative">
                  
                  {/* Textos y Botón */}
                  {/* CAMBIO 2: h-auto en celular, h-full en desktop, y agregamos gap-6 para separar */}
                  <div className="w-full md:w-[285px] flex flex-col justify-between gap-6 md:gap-0 h-auto md:h-full z-10">
                    <p className="text-[14px] font-inter font-light text-[#939390] leading-[25.9px]">
                      {t(`${project.key}.top_desc`)}
                    </p>
                    
                    {/* Renderizado Condicional del Botón */}
                    {project.link ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[146px] h-[40px] rounded-[10px] bg-[#6b9e7a] text-[#f8f8f6] font-inter font-normal text-[24px] leading-none flex items-center justify-center hover:bg-[#5a8667] transition-colors mt-auto"
                      >
                        {t(`${project.key}.btn_ver_mas`)}
                      </a>
                    ) : (
                      <button 
                        onClick={() => openGallery(project.gallery)}
                        className="w-[146px] h-[40px] rounded-[10px] bg-[#6b9e7a] text-[#f8f8f6] font-inter font-normal text-[24px] leading-none flex items-center justify-center hover:bg-[#5a8667] transition-colors mt-auto"
                      >
                        {t(`${project.key}.btn_ver_mas`)}
                      </button>
                    )}
                  </div>

                  {/* Imagen Principal (Thumb) */}
                  {/* CAMBIO 3: Agregamos 'relative' para celular y un margen superior (mt-8) */}
                  <div className="w-full md:w-[303px] h-[240px] mt-8 md:mt-0 relative md:absolute md:top-[60px] md:right-[14px] rounded-[10px] overflow-hidden shadow-md">
                    <Image
                      src={project.thumb}
                      alt="Thumbnail"
                      fill
                      sizes="(max-width: 768px) 100vw, 303px" 
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* --- FRAME INFERIOR (Blanco) --- */}
                <div className="w-full bg-white pt-[24px] px-[28px] pb-[28px] flex flex-col">
                  
                  {/* Etiqueta */}
                  <div className="self-start px-[10px] py-[3px] rounded-[2px] bg-[#18181A] flex items-center justify-center mb-4">
                    <span className="text-[12px] font-inter font-normal text-[#939390] tracking-[0.5px] leading-none">
                      {t(`${project.key}.tag_principal`)}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-[22px] font-inter font-normal text-[#18181A] leading-[26.4px] tracking-[-0.3px] mb-2">
                    {t(`${project.key}.titulo`)}
                  </h3>

                  {/* Descripción inferior */}
                  <p className="text-[13px] font-inter font-light text-[#939390] leading-[22.1px] mb-4">
                    {t(`${project.key}.bottom_desc`)}
                  </p>

                  {/* Línea divisoria y Tags inferiores */}
                  <div className="border-t border-[#dddcda] pt-[16px] flex gap-[8px] mt-auto">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="px-[7.8px] py-[2.8px] rounded-[2px] border border-[#dddcda] flex items-center justify-center">
                        <span className="text-[10px] font-inter font-light text-[#939390] leading-[17px]">
                          {t(`${project.key}.tag_${num}`)}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* MODAL DE LA GALERÍA (LIGHTBOX)            */}
      {/* ========================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          
          <button 
            onClick={closeModal}
            className="absolute top-8 right-8 text-white text-4xl hover:text-gray-300 z-50"
          >
            &times;
          </button>

          {currentIndex > 0 && (
            <button 
              onClick={prevImage}
              className="absolute left-4 lg:left-12 p-4 hover:bg-white/10 rounded-full transition-colors z-50"
            >
              <Image src="/icon-flecha.png" alt="Anterior" width={40} height={40} className="-rotate-90 filter invert opacity-70 hover:opacity-100" />
            </button>
          )}

          <div className="relative w-full max-w-[1000px] h-[60vh] lg:h-[80vh]">
            <Image
              src={currentGallery[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {currentIndex < currentGallery.length - 1 && (
            <button 
              onClick={nextImage}
              className="absolute right-4 lg:right-12 p-4 hover:bg-white/10 rounded-full transition-colors z-50"
            >
              <Image src="/icon-flecha.png" alt="Siguiente" width={40} height={40} className="rotate-90 filter invert opacity-70 hover:opacity-100" />
            </button>
          )}
        </div>
      )}
    </>
  );
}