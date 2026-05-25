"use client";
import React, { useState } from 'react';
import PortfolioHero from '@/components/PortfolioHero';
import PortfolioTabs from '@/components/PortfolioTabs';
import PortfolioGrid from '@/components/PortfolioGrid';
import ScrollUpArrow from '@/components/ScrollUpArrow'; // 1. Importamos la flecha existente

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('tab_1');

  return (
    <main className="w-full min-h-screen bg-[#F7F7F7] flex flex-col">
      
      {/* Hero Principal */}
      <PortfolioHero />
      
      {/* Solapas de filtrado */}
      <PortfolioTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Grilla con los 12 proyectos */}
      <PortfolioGrid activeTab={activeTab} />
      
      {/* CONTENEDOR DE LA FLECHA: Centrado abajo de todo con aire visual */}
      <div className="w-full flex justify-center pb-20">
        <ScrollUpArrow />
      </div>
      
    </main>
  );
}