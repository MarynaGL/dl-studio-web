import ServicesHero from '@/components/ServicesHero';
import ServiceDesign from '@/components/ServiceDesign';
import ServiceDev from '@/components/ServiceDev';
import ServiceQA from '@/components/ServiceQA';
import ServiceEndToEnd from '@/components/ServiceEndToEnd';


// src/app/[locale]/page.js
export default async function Servicios({ params }) {
  const { locale } = await params;
  
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[#F7F7F7]">
      {/* ... el resto de tu código queda igual */}
      
      {/* 2. EL TUBO MAESTRO: Bloque blanco, centrado, máximo 1440px */}
      <div className="w-full max-w-[1440px] bg-white relative overflow-hidden shadow-sm">
        
        {/* Adentro tiramos todos los componentes, ellos heredarán este límite */}
        
       
        <ServicesHero />
        <ServiceDesign />
        <ServiceDev />
        <ServiceQA />
        <ServiceEndToEnd />
        
        
      </div>
      
    </main>  );
}