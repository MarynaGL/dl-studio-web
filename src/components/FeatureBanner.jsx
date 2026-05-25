// src/components/FeatureBanner.jsx

// src/components/FeatureBanner.jsx

export default function FeatureBanner() {
  
  const hoverGradient = {
    background: "linear-gradient(90deg, #6B9E7A 0%, #A7C1AF 16.35%, #E4E4E4 63.46%)"
  };

  return (
    <div className="w-full flex justify-start bg-[#F7F7F7] border-y border-[#939390] overflow-hidden">
      
      {/* Forzamos el contenedor a tener 1440px en PC para que coincida con la sección de abajo */}
      <div className="w-full max-w-[1440px] lg:min-w-[1440px] flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#939390]">
        
        {/* Caja 1: Design */}
        <div className="group relative w-full lg:w-[480px] flex-shrink-0 h-[144px] flex flex-col justify-center px-8 md:px-[60px] overflow-hidden cursor-default">
          <div 
            className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-0 group-hover:duration-500 ease-out z-0"
            style={hoverGradient}
          ></div>
          <div className="relative z-10">
            <h3 className="text-[32px] font-bold text-[#18181A]">Design</h3>
            <p className="mt-2 font-['Inter'] text-[14px] font-medium leading-none text-[#939390] group-hover:text-[#18181A] transition-colors duration-300">
              UI/UX craft
            </p>
          </div>
        </div>

        {/* Caja 2: Development */}
        <div className="group relative w-full lg:w-[480px] flex-shrink-0 h-[144px] flex flex-col justify-center px-8 md:px-[60px] overflow-hidden cursor-default">
          <div 
            className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-0 group-hover:duration-500 ease-out z-0"
            style={hoverGradient}
          ></div>
          <div className="relative z-10">
            <h3 className="text-[32px] font-bold text-[#18181A]">Development</h3>
            <p className="mt-2 font-['Inter'] text-[14px] font-medium leading-none text-[#939390] group-hover:text-[#18181A] transition-colors duration-300">
              Clean code
            </p>
          </div>
        </div>

        {/* Caja 3: QA */}
        <div className="group relative w-full lg:w-[480px] flex-shrink-0 h-[144px] flex flex-col justify-center px-8 md:px-[60px] overflow-hidden cursor-default">
          <div 
            className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-0 group-hover:duration-500 ease-out z-0"
            style={hoverGradient}
          ></div>
          <div className="relative z-10">
            <h3 className="text-[32px] font-bold text-[#18181A]">Quality</h3>
            <p className="mt-2 font-['Inter'] text-[14px] font-medium leading-none text-[#939390] group-hover:text-[#18181A] transition-colors duration-300">
              Zero bugs
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}