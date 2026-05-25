"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Asegurate de tener este import arriba
import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('Projects');
  
  // Usamos un código interno ('ar' o 'ua') en lugar del nombre del país para que no se rompa al traducir
  const [selectedCountry, setSelectedCountry] = useState('ar');

  const contactData = {
    ar: { phone: "+54911 3058 3475", location: t('loc_ar') },
    ua: { phone: "+380 98 964 1643", location: t('loc_ua') }
  };

  const stats = [
    { number: "10", text: t('stat_1_text') },
    { number: "15+", text: t('stat_2_text') },
    { number: "6", text: t('stat_3_text') },
    { number: "100%", text: t('stat_4_text') }
  ];

  const projects = [
    { id: 1, img: "/img1.png", link: "https://atcsk.net/" },
    { id: 2, img: "/img2.png", link: "https://oasiszen.com.ar/" },
    { id: 3, img: "/img3.png", link: "http://sokolyne-gnizdo.com.ua/" },
  ];

  const features = [
    {
      icon: "/icon-compu.png",
      title: t('feat_1_title'),
      desc: t('feat_1_desc')
    },
    {
      icon: "/icon-conex.png",
      title: t('feat_2_title'),
      desc: t('feat_2_desc')
    },
    {
      icon: "/icon-nodos.png",
      title: t('feat_3_title'),
      desc: t('feat_3_desc')
    }
  ];

  const socials = [
    { name: "Instagram", icon: "/icon-insta.png", link: "https://www.instagram.com/design.and.logic/" },
    { name: "Facebook", icon: "/icon-fb.png", link: "https://www.facebook.com/profile.php?id=61588932251182" },
    { name: "LinkedIn", icon: "/icon-in.png", link: "https://www.linkedin.com/company/dise%C3%B1o-l%C3%B3gica" },
    { name: "Behance", icon: "/icon-be.png", link: "https://www.behance.net/831591dc" },
  ];

  return (
     <section className="w-full flex justify-center bg-[#F7F7F7]">
  {/* Pasamos el pt-32 y pb-16 a este div */}
  <div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex flex-col pt-32 pb-16 border-l border-r border-[#D9D6D3]"> {/* ... (Tu sección de "¿Qué pasa después?" se mantiene igual) ... */}

        
        {/* ENCABEZADO */}
        <div className="mb-16">
          <h2 className="text-[40px] font-bold text-black mb-4 font-inter tracking-tight">{t('header_title')}</h2>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end pb-4 relative">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] text-[#939390] font-light max-w-[586px] font-inter leading-relaxed">
                {t('header_desc')}
              </p>
              <button className="text-[#6b9e7a] text-[14px] flex items-center gap-2 hover:opacity-80 transition-opacity w-max mt-[32px]">
                {t('btn_detalles')} 
                <Image src="/icon.png" alt="Flecha Detalles" width={11} height={12} className="object-contain" />
              </button>
            </div>
            <div className="hidden lg:block w-[50px] h-[50px] rounded-full bg-[#6b9e7a] mb-2 mr-[50px]"></div>
            <div className="absolute bottom-0 left-0 w-full max-w-[1320px] border-b border-[#939390]"></div>
          </div>
        </div>

        {/* ESTADÍSTICAS */}
        <div className="w-full max-w-[1320px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 py-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-[48px] font-bold text-[#6b9e7a] font-inter leading-none mb-4">{stat.number}</span>
              <span className="text-[14px] font-semibold text-black font-inter max-w-[200px] leading-tight">{stat.text}</span>
            </div>
          ))}
        </div>

        {/* GALERÍA DE PROYECTOS */}
        <div className="w-full max-w-[1320px] mt-[128px] h-auto lg:h-[324px] flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0">
          {projects.map((proj) => (
            <div key={proj.id} className="relative w-full lg:w-[427px] h-[292px] bg-[#e4e4e4] overflow-hidden group">
              <Image src={proj.img} alt={`Proyecto ${proj.id}`} fill sizes="(max-width: 1024px) 100vw, 427px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="absolute bottom-[2.07px] right-[6.63px] w-[24px] h-[18.66px] z-10 hover:opacity-70 transition-opacity">
                <Image src="/icon-work.png" alt="Ver proyecto" fill sizes="24px" className="object-contain" />
              </a>
            </div>
          ))}
        </div>

        {/* CARACTERÍSTICAS */}
        <div className="w-full max-w-[1320px] mt-[128px] h-auto lg:h-[340px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          {features.map((feat, index) => (
            <div key={index} className="w-full lg:w-[427px] flex flex-col h-full relative">
              <div className="relative w-[150px] h-[150px] mx-auto mb-8 lg:mb-0">
                <Image src={feat.icon} alt={feat.title} fill sizes="150px" className="object-contain" />
              </div>
              <div className="mt-auto flex flex-col">
                <h3 className="text-[14px] font-inter font-medium text-[#404040] mb-4">{feat.title}</h3>
                <p className="text-[14px] font-inter font-medium text-[#939390] leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTACTO / SOLICITUD */}
        <div className="w-full max-w-[1320px] mt-[150px] mb-20 flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-0">
          <div className="w-full lg:w-[646px] flex flex-col">
            <h2 className="text-[40px] font-inter font-bold text-black leading-[55px] max-w-[643px]">
              {t('contact_title')}
            </h2>
            <div className="mt-[40px] flex flex-col gap-6 w-full max-w-[495px]">
              <p className="text-[14px] font-inter font-light text-[#939390] leading-relaxed">
                {t('contact_desc_1')}
              </p>
              <p className="text-[14px] font-inter font-light text-[#939390] leading-relaxed">
                {t('contact_desc_2')}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end mt-10 lg:mt-0">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Botón Argentina */}
              <button 
                onClick={() => setSelectedCountry('ar')} 
                className={`w-[201px] h-[64px] rounded-[10px] border-[1.4px] text-[24px] font-inter transition-all ${selectedCountry === 'ar' ? 'border-[#6b9e7a] text-[#6b9e7a] bg-[#f8f8f6]' : 'border-[#18181A] text-[#404040] hover:bg-gray-100'}`}
              >
                {t('country_ar')}
              </button>
              {/* Botón Ucrania */}
              <button 
                onClick={() => setSelectedCountry('ua')} 
                className={`w-[201px] h-[64px] rounded-[10px] border-[1.4px] text-[24px] font-inter transition-all ${selectedCountry === 'ua' ? 'border-[#6b9e7a] text-[#6b9e7a] bg-[#f8f8f6]' : 'border-[#18181A] text-[#404040] hover:bg-gray-100'}`}
              >
                {t('country_ua')}
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-6 w-full lg:w-[420px]">
              <div className="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#404040" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span className="text-[14px] font-inter font-light text-[#939390]">{contactData[selectedCountry].phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#404040" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="text-[14px] font-inter font-light text-[#939390]">design.and.logic.studio@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#404040" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="text-[14px] font-inter font-light text-[#939390]">{contactData[selectedCountry].location}</span>
              </div>
            </div>
            <Link  href="/contacto#contacto-form"
             className="mt-12 w-[236px] h-[40px] rounded-[10px] border-[1.4px] border-[#18181A] flex items-center justify-center text-[24px] font-inter text-[#404040] hover:bg-[#18181A] hover:text-white transition-colors">
              
              {t('btn_solicitud')}
            
              </Link>
          </div>
        </div>

        {/* LÍNEA SEPARADORA DEL FOOTER */}
        <div className="w-full max-w-[1320px] border-b border-[#939390] mt-10"></div>

        {/* FOOTER / REDES SOCIALES */}
        <div className="w-full max-w-[1320px] mt-10 mb-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          {socials.map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-[11px] group"
            >
              <div className="relative w-[40px] h-[40px]">
                <Image 
                  src={social.icon} 
                  alt={social.name} 
                  fill 
                  sizes="40px" 
                  className="object-contain group-hover:opacity-70 transition-opacity" 
                />
              </div>
              <span className="text-[24px] font-inter font-normal text-[#939390] group-hover:text-[#6b9e7a] transition-colors">
                {social.name}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}