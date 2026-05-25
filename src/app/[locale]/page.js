import Hero from '@/components/Hero';
import FeatureBanner from '@/components/FeatureBanner';
import ProjectSection from '@/components/ProjectSection';
import Projects from '@/components/Projects';

// src/app/[locale]/page.js
export default async function Home({ params }) {
  const { locale } = await params;
  // ... tu código de la Home
  // ... resto de tu código ...

  return (
    // 1. El fondo general (gris claro) ocupa toda la pantalla
    <main className="min-h-screen w-full flex flex-col items-center bg-[#F7F7F7]">
      
      {/* 2. EL TUBO MAESTRO: Bloque blanco, centrado, máximo 1440px */}
      <div className="w-full max-w-[1440px] bg-white relative overflow-hidden shadow-sm">
        
        {/* Adentro tiramos todos los componentes, ellos heredarán este límite */}
        <Hero />
        <FeatureBanner />
        <ProjectSection />
        <Projects />
        
      </div>
      
    </main>
  );
}