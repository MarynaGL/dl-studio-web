import Hero from '@/components/Hero';
import FeatureBanner from '@/components/FeatureBanner';
import ProjectSection from '@/components/ProjectSection';
import Projects from '@/components/Projects';
import { getTranslations } from 'next-intl/server';

// Esta función mágica le dice a Google de qué trata tu página en cada idioma
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('titulo'),
    description: t('descripcion'),
    // Esto genera etiquetas para redes sociales (cuando pasas el link por WhatsApp)
    openGraph: {
      title: t('titulo'),
      description: t('descripcion'),
      url: 'https://www.designandlogic.com',
      siteName: 'Diseño & Lógica',
      type: 'website',
      images: ['/Vector.png'],
    },
  };
}
// src/app/[locale]/page.js
export default async function Home({ params }) {
  const { locale } = await params;
  
  return (
    // 1. El fondo general (gris claro) ocupa toda la pantalla. 
    // Le sacamos el flex-col items-center porque los componentes ya se centran solos.
    <main className="min-h-screen w-full bg-[#F7F7F7]">
      
      {/* 2. ADIÓS AL TUBO MAESTRO */}
      {/* Tiramos los componentes directamente acá. Como cada uno ya tiene 
          su propio max-w-[1440px] por dentro, la web va a quedar perfectamente 
          centrada, pero los fondos van a respirar hasta los bordes del monitor. */}
      
      <Hero />
      <FeatureBanner />
      <ProjectSection />
      <Projects />
        
    </main>
  );
}