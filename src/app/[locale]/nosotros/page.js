import React from 'react';
import PortfolioHero from '@/components/PortfolioHero';

// Metadata para SEO (Opcional pero recomendado)
export const metadata = {
  title: 'Portfolio | Design & Logic',
  description: 'Proyectos que hablan por sí solos. Explora nuestro trabajo en diseño, desarrollo y QA.',
};

export default function PortfolioPage() {
  return (
    <main className="w-full min-h-screen bg-[#F7F7F7]">
      {/* 1. El Hero del Portfolio que armamos con Natalia */}
      <PortfolioHero />
      
      {/* Acá abajo iremos agregando la grilla de proyectos (las tarjetas) a medida que las maquetemos */}
      
    </main>
  );
}