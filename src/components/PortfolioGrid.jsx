"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// =========================================================
// SUB-COMPONENTE: Tarjeta Individual con Carrusel Propio
// =========================================================
const ProjectCard = ({ project, t, openModal }) => {
  // Si el proyecto tiene galería la usamos, sino armamos un array con la imagen principal
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.thumb];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones para avanzar y retroceder el carrusel (inline)
  const nextImage = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); // Evita que se abra el modal al hacer clic en la flecha
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Evita que se abra el modal al hacer clic en la flecha
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex flex-col shadow-sm">
      
      {/* --- FRAME SUPERIOR (Gris) --- */}
      <div className="w-full h-auto md:min-h-[360px] bg-[#edede8] p-6 lg:p-[30px] flex flex-col md:flex-row justify-between gap-6 lg:gap-8 relative overflow-hidden">
        
        {/* Textos y Botón */}
        <div className="flex-1 flex flex-col justify-between h-auto z-10 w-full md:pr-4">
          <p className="text-[14px] font-inter font-light text-[#939390] leading-[25.9px] mb-6 md:mb-0">
            {t(`${project.key}.top_desc`)}
          </p>
          
          {/* BOTÓN "VER MÁS" */}
          <a 
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[146px] h-[40px] rounded-[8px] bg-[#f8f8f6] border border-[#939390] text-[#404040] font-inter font-normal text-[16px] leading-none flex items-center justify-center hover:bg-[#6b9e7a] hover:border-[#6b9e7a] hover:text-[#f8f8f6] transition-all duration-300 md:mt-auto"
          >
            {t(`${project.key}.btn_ver_mas`)}
          </a>
        </div>

        {/* --- CARRUSEL DE IMÁGENES --- */}
        <div 
          onClick={() => openModal(images, currentIndex)}
          className="w-full md:w-[260px] xl:w-[303px] h-[240px] flex-shrink-0 relative rounded-[10px] overflow-hidden shadow-md group bg-[#e4e4e4] cursor-pointer md:mt-[30px]"
        >
          <Image
            src={images[currentIndex]}
            alt={`Proyecto ${project.key} - Imagen ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 303px" 
            className="object-cover transition-opacity duration-300 group-hover:scale-105"
          />
          
          {/* Controles del Carrusel */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/70 rounded-full text-white text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
              >
                &#10094;
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/70 rounded-full text-white text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
              >
                &#10095;
              </button>
              <div className="absolute bottom-3 left-0 w-full flex justify-center gap-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                {images.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-[6px] h-[6px] rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {/* --- FRAME INFERIOR (Blanco) --- */}
      <div className="w-full bg-white pt-[24px] px-[28px] pb-[28px] flex flex-col">
        <span className="text-[12px] font-inter font-normal text-[#939390] tracking-[0.5px] uppercase mb-4 block">
          {t(`${project.key}.tag_principal`)}
        </span>
        <h3 className="text-[22px] font-inter font-normal text-[#18181A] leading-[26.4px] tracking-[-0.3px] mb-2">
          {t(`${project.key}.titulo`)}
        </h3>
        <p className="text-[13px] font-inter font-light text-[#939390] leading-[22.1px] mb-4">
          {t(`${project.key}.bottom_desc`)}
        </p>
        
        {/* Tags inferiores */}
        <div className="border-t border-[#dddcda] pt-[16px] flex gap-[8px] mt-auto">
          {[1, 2, 3].map((num) => (
            <div key={num} className="px-[7.8px] py-[2.8px] rounded-[4px] border border-[#dddcda] flex items-center justify-center">
              <span className="text-[10px] font-inter font-light text-[#939390] leading-[17px]">
                {t(`${project.key}.tag_${num}`)}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};


// =========================================================
// COMPONENTE PRINCIPAL: Grilla
// =========================================================
export default function PortfolioGrid({ activeTab }) {
  const t = useTranslations('Portfolio.Proyectos');

  // --- LÓGICA DEL MODAL FLOTANTE ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (gallery, startIndex) => {
    setCurrentGallery(gallery);
    setModalIndex(startIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const nextModalImage = () => setModalIndex((prev) => prev + 1);
  const prevModalImage = () => setModalIndex((prev) => prev - 1);

  // --- DATOS DE LOS PROYECTOS ---
  const projectsData = [
    
    { 
      key: 'proy_7', 
      thumb: '/Port7.png', 
      categoryTab: 'tab_5',
      gallery: ['/Port7-1.png','/Port7-2.png', '/Port7-3.png'],
      link: 'https://oasiszen.com.ar/'
    },
    { 
      key: 'proy_2', 
      thumb: '/Port2.png', 
      categoryTab: 'tab_2',
      gallery: ['/Port2-1.png','/Port2-2.png', '/Port2-3.png', '/Port2-4.png'],
      link: 'https://www.behance.net/gallery/190702783/Sounds-sleep-app' 
    },
    { 
      key: 'proy_3', 
      thumb: '/Port3.png', 
      categoryTab: 'tab_2',
      gallery: ['/Port3.png', '/Port3-2.png', '/Port3-3.png'],
      link: 'https://www.behance.net/gallery/190407377/Landing-design'
    },
    { 
      key: 'proy_4', 
      thumb: '/Port4.png', 
      categoryTab: 'tab_2',
      gallery: ['/Port4-1.png','/Port4-2.png', '/Port4-3.png', '/Port4-4.png'],
      link: 'https://www.behance.net/gallery/190223677/Travel-Way-Web-Service'
    },
    { 
      key: 'proy_5', 
      thumb: '/Port5.png', 
      categoryTab: 'tab_2',
      gallery: ['/Port5-1.png','/Port5-2.png', '/Port5-3.png'],
      link: 'https://www.behance.net/gallery/169274663/Mobile-designMoblnij-zastosunok'
    },
    { 
      key: 'proy_6', 
      thumb: '/Port6.png', 
      categoryTab: 'tab_3',
      gallery: ['/Port6-1.png','/Port6-2.png', '/Port6-3.png'],
      link: 'http://autochehol.com.ua/'
    },
    { 
      key: 'proy_1', 
      thumb: '/Port1.png', 
      categoryTab: 'tab_2',
      gallery: ['/Port1-1.png', '/Port1-2.png', '/Port1-3.png', '/Port1-4.png'],
      link: 'https://www.behance.net/gallery/159586143/Tattoo-Studio-Web-Design' 
    },
    
    { 
      key: 'proy_8', 
      thumb: '/Port8.png', 
      categoryTab: 'tab_3',
      gallery: ['/Port8-1.png','/Port8-2.png', '/Port8-3.png'],
      link: 'http://goldenfleet.uk/'
    }, 
    { 
      key: 'proy_9', 
      thumb: '/Port9.png', 
      categoryTab: 'tab_3',
      gallery: ['/Port9-1.png','/Port9-2.png', '/Port9-3.png'],
      link: 'http://sokolyne-gnizdo.com.ua/'
    },
    { 
      key: 'proy_10', 
      thumb: '/Port10.png', 
      categoryTab: 'tab_5',
      gallery: ['/Port10-1.png','/Port10-2.png', '/Port10-3.png'],
      link: 'https://atcsk.net/'
    },
    { 
      key: 'proy_11', 
      thumb: '/Port11.png', 
      categoryTab: 'tab_4',
      gallery: ['/Port11-1.png','/Port11-2.png', '/Port11-3.png'],
      link: 'https://teralex.net/'
    },
    { 
      key: 'proy_12', 
      thumb: '/Port12.png', 
      categoryTab: 'tab_5',
      gallery: ['/Port12-1.png','/Port12-2.png', '/Port12-3.png'],
      link: 'https://fiwc.pl/'
    }
  ];

  const filteredProjects = projectsData.filter(
    (p) => activeTab === 'tab_1' || activeTab === p.categoryTab
  );

  return (
    <>
      <section className="w-full flex justify-center bg-[#F7F7F7]">
        <div className="w-full px-4 md:px-8 lg:px-[60px] flex flex-col md:flex-row pt-12 pb-16">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-[25px]">
            
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.key} 
                project={project} 
                t={t} 
                openModal={openModal} 
              />
            ))}

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* MODAL DE LA GALERÍA (LIGHTBOX)            */}
      {/* ========================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          
          <button 
            onClick={closeModal}
            className="absolute top-8 right-8 text-white text-4xl hover:text-gray-300 z-[110]"
          >
            &times;
          </button>

          {modalIndex > 0 && (
            <button 
              onClick={prevModalImage}
              className="absolute left-4 lg:left-12 p-4 hover:bg-white/10 rounded-full transition-colors z-[110]"
            >
              <Image src="/icon-flecha.png" alt="Anterior" width={40} height={40} className="-rotate-90 filter invert opacity-70 hover:opacity-100" />
            </button>
          )}

          <div className="relative w-full max-w-[1000px] h-[60vh] lg:h-[80vh]">
            <Image
              src={currentGallery[modalIndex]}
              alt={`Imagen ampliada ${modalIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {modalIndex < currentGallery.length - 1 && (
            <button 
              onClick={nextModalImage}
              className="absolute right-4 lg:right-12 p-4 hover:bg-white/10 rounded-full transition-colors z-[110]"
            >
              <Image src="/icon-flecha.png" alt="Siguiente" width={40} height={40} className="rotate-90 filter invert opacity-70 hover:opacity-100" />
            </button>
          )}
        </div>
      )}
    </>
  );
}