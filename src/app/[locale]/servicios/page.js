import ServicesHero from '@/components/ServicesHero';
import ServiceDesign from '@/components/ServiceDesign';
import ServiceDev from '@/components/ServiceDev';
import ServiceQA from '@/components/ServiceQA';
import ServiceEndToEnd from '@/components/ServiceEndToEnd';
import ServiceFooter from '@/components/ServiceFooter';

export default async function Servicios({ params }) {
  const { locale } = await params;
  
  return (
    // Quitamos el items-center del main para que no trate de centrar a la fuerza
    <main className="min-h-screen w-full flex flex-col bg-[#F7F7F7]">
      
      {/* ¡ACÁ ESTABA EL CULPABLE! 
          Le borramos el max-w-[1440px]. Ahora este contenedor maestro es 100% libre. */}
      <div className="w-full relative overflow-hidden">
        
        <ServicesHero />
        <ServiceDesign />
        <ServiceDev />
        <ServiceQA />
        <ServiceEndToEnd />
        <ServiceFooter />
        
      </div>
      
    </main>  
  );
}