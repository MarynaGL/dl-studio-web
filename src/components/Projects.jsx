"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ScrollUpArrow from './ScrollUpArrow';

export default function Projects() {
  const t = useTranslations('Projects');
  
  const [selectedCountry, setSelectedCountry] = useState('ar');

  const contactData = {
    ar: { phone: "+54911 3058 3475", location: t('loc_ar') },
    ua: { phone: "+380 98 964 1643", location: t('loc_ua') }
  };

  const stats = [
    { number: "10+", text: t('stat_1_text') },
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
    { icon: "/icon-compu.png", title: t('feat_1_title'), desc: t('feat_1_desc') },
    { icon: "/icon-conex.png", title: t('feat_2_title'), desc: t('feat_2_desc') },
    { icon: "/icon-nodos.png", title: t('feat_3_title'), desc: t('feat_3_desc') }
  ];

  return (
    <section className="w-full flex justify-center bg-[#F7F7F7] overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-24 flex flex-col pt-24 pb-16 relative">
        
        {/* ENCABEZADO */}
        <div className="mb-10 w-full">
          <div className="flex justify-between items-center w-full mb-4">
            <h2 className="text-[32px] md:text-[40px] font-bold text-black font-inter tracking-tight">
              {t('header_title')}
            </h2>
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#6b9e7a] flex-shrink-0"></div>
          </div>
          
          <div className="flex flex-col pb-6 relative">
            <p className="text-[14px] text-[#939390] font-light max-w-[586px] font-inter leading-relaxed">
              {t('header_desc')}
            </p>
            <Link 
              href="/portfolio" 
              className="text-[#6b9e7a] text-[14px] flex items-center gap-2 hover:opacity-80 transition-opacity w-max mt-4"
            >
              {t('btn_detalles')} 
              <Image src="/icon.png" alt="Flecha Detalles" width={11} height={12} className="object-contain"/>
            </Link>
            
            <div className="absolute bottom-0 left-0 w-full border-b border-[#939390]"></div>
          </div>
        </div>

        {/* ESTADÍSTICAS */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10 py-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="text-[40px] md:text-[48px] font-bold text-[#6b9e7a] font-inter leading-none mb-2 md:mb-4">{stat.number}</span>
              <span className="text-[14px] font-semibold text-black font-inter max-w-[200px] leading-tight">{stat.text}</span>
            </div>
          ))}
        </div>

        {/* GALERÍA DE PROYECTOS */}
        <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((proj) => (
            <div key={proj.id} className="w-full flex flex-col group">
              <div className="relative w-full aspect-[427/292] bg-[#e4e4e4] overflow-hidden border border-[#e4e4e4]">
                <Image src={proj.img} alt={`Proyecto ${proj.id}`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="w-full flex justify-end mt-3 pr-2">
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="relative w-[24px] h-[18.66px] hover:opacity-70 transition-opacity">
                  <Image src="/icon-work.png" alt="Ver proyecto" fill sizes="24px" className="object-contain" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CARACTERÍSTICAS (Sitios, Comunicación...) */}
        <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {features.map((feat, index) => (
            <div key={index} className="w-full flex flex-col items-start text-left">
              <div className="w-full flex justify-center mb-6">
                <div className="relative w-30 h-[120px]">
                  <Image src={feat.icon} alt={feat.title} fill sizes="120px" className="object-contain" />
                </div>
              </div>
              <h3 className="text-[16px] font-inter font-bold text-[#18181A] mb-3">{feat.title}</h3>
              <p className="text-[14px] font-inter font-light text-[#939390] leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* CONTACTO / SOLICITUD */}
        <div className="w-full mt-24 mb-16 flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 relative">
          
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-[32px] md:text-[40px] font-inter font-bold text-black leading-[1.2] max-w-[643px]">
              {t('contact_title')}
            </h2>
            <div className="mt-8 flex flex-col gap-6 w-full max-w-[495px]">
              <p className="text-[14px] font-inter font-light text-[#939390] leading-relaxed">
                {t('contact_desc_1')}
              </p>
              <p className="text-[14px] font-inter font-light text-[#939390] leading-relaxed">
                {t('contact_desc_2')}
              </p>
            </div>
          </div>

            
          {/* Selector de Países y Datos */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => setSelectedCountry('ar')} 
                className={`w-full sm:w-[201px] h-[64px] rounded-[10px] border-[1.4px] text-[20px] lg:text-[24px] font-inter transition-all ${selectedCountry === 'ar' ? 'border-[#6b9e7a] text-[#6b9e7a] bg-[#f8f8f6]' : 'border-[#18181A] text-[#404040] hover:bg-gray-100'}`}
              >
                {t('country_ar')}
              </button>
              <button 
                onClick={() => setSelectedCountry('ua')} 
                className={`w-full sm:w-[201px] h-[64px] rounded-[10px] border-[1.4px] text-[20px] lg:text-[24px] font-inter transition-all ${selectedCountry === 'ua' ? 'border-[#6b9e7a] text-[#6b9e7a] bg-[#f8f8f6]' : 'border-[#18181A] text-[#404040] hover:bg-gray-100'}`}
              >
                {t('country_ua')}
              </button>
            </div>

            {/* Bloque de Contacto con el botón integrado */}
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
              
              <div className="mt-4">
                <Link href="/contacto">
                  <button className="border-2 border-[#18181A] px-8 py-2 rounded-lg text-sm font-medium text-[#18181A] hover:bg-[#60A572] hover:border-[#60A572] hover:text-white transition-all duration-300">
                    {t('btn_solicitud')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* La flecha hacia arriba se queda como cierre elegante de la sección */}
        <ScrollUpArrow />

      </div>
    </section>
  );
}