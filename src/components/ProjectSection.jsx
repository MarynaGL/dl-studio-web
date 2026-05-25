import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ProjectSection = () => {
  const t = useTranslations('ProjectSection');

  return (
    <section className="w-full flex justify-center bg-[#F7F7F7]">
      
      {/* Contenedor Maestro */}
      <div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex flex-col pt-32 pb-16 border-l border-r border-[#D9D6D3]">

        {/* ========================================================= */}
        {/* FILA 1: Gráfico (Izq) y Texto (Der) */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start w-full">
          
          {/* COLUMNA IZQUIERDA: GRUPO CAJA GRIS */}
          <div className="relative w-[448px] max-w-full h-[570px] flex-shrink-0 bg-[#e4e4e4] overflow-visible">
            
            {/* Fondo Base */}
            <div className="absolute top-[115.2px] left-[108.78px] w-[311.22px] h-[299.64px] bg-[#f4f2ec]"></div>

            {/* 1. CAJAS DE COLORES Y GRISES */}
            <div className="absolute top-[117px] left-[111px] w-[108px] h-[137px] bg-[#6b9e7a] flex items-center justify-center">
               <span className="absolute top-[21px] text-white font-inter text-[20px] rotate-[90deg] tracking-wider uppercase lg:normal-case">
                 {t('box_design')}
               </span>
            </div>

            <div className="absolute top-[287px] left-[111px] w-[62px] h-[60px] bg-[#404040]"></div>
            <div className="absolute top-[347px] left-[111px] w-[62px] h-[66px] bg-[#939390]"></div>

            <div className="absolute top-[117px] left-[356px] w-[62px] h-[82px] bg-[#f5c10a] flex items-center justify-center">
               <span className="text-white font-inter font-bold">{t('box_qa')}</span>
            </div>

            <div className="absolute top-[288.05px] left-[218.62px] w-[199.09px] h-[125.58px] bg-[#939390] flex items-end justify-end p-3">
               <span className="text-white font-inter text-[19px] font-medium tracking-wide">
                 {t('box_experience')}
               </span>
            </div>

            {/* 2. VECTORES (Líneas Divisorias) */}
            <div className="absolute top-[-0.5px] left-[218.62px] w-[2px] h-[287.55px] bg-[#939390]"></div>
            <div className="absolute top-[118px] left-[417px] w-[2px] h-[295px] bg-[#939390]"></div>
            <div className="absolute top-[117.5px] left-[111.07px] w-[2px] h-[295.5px] bg-[#939390]"></div>
            <div className="absolute top-[117.5px] left-[305.58px] w-[2px] h-[169.55px] bg-[#939390]"></div>
            <div className="absolute top-[287.05px] left-[172.86px] w-[2px] h-[125.95px] bg-[#939390]"></div>
            <div className="absolute top-[287.05px] left-[1px] w-[415.5px] h-[2px] bg-[#939390]"></div>
            <div className="absolute top-[117.4px] left-[111px] w-[306px] h-[2px] bg-[#939390]"></div>
            <div className="absolute top-[413px] left-[111px] w-[307.22px] h-[2px] bg-[#939390]"></div>
            <div className="absolute top-[198px] left-[356px] w-[60px] h-[2px] bg-[#939390]"></div>
            <div className="absolute top-[117.5px] left-[355.93px] w-[2px] h-[407.5px] bg-[#939390]"></div>
          </div>
      
          {/* COLUMNA DERECHA: Bloque de Texto */}
          <div className="w-full max-w-[429px] mt-10 lg:mt-[120px] px-4 lg:px-0">
            <h2 className="font-inter font-semibold text-[24px] leading-tight text-black mb-4">
              {t('title_start')} <br />
              <span className="text-[#6b9e7a]">{t('title_highlight')}</span>
            </h2>
            <p className="font-inter font-light text-[14px] leading-relaxed text-black opacity-80">
              {t('description')}
            </p>
          </div>

        </div>

        {/* ========================================================= */}
        {/* FILA 2: Logo Diseño & Lógica (Ubicación exacta según Figma) */}
        {/* ========================================================= */}
        <div className="w-full flex justify-center mt-16 lg:mt-[80px]">
          <Image 
            src="/DisenoAndLogica.png" 
            alt="Diseño y Lógica Logo" 
            width={1324} 
            height={91} 
            className="w-full max-w-[1324px] h-auto object-contain opacity-100"
          />
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;