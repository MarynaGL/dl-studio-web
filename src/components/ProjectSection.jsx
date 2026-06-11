import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ProjectSection = () => {
  const t = useTranslations('ProjectSection');

  return (
    <section className="w-full flex justify-center bg-[#F7F7F7] overflow-hidden relative z-10">
      
      <div className="w-full px-4 md:px-8 lg:px-24 flex flex-col pt-32 pb-16 overflow-visible relative">

        {/* 1. ELIMINAMOS LOS GAPS: Para que la matemática de los porcentajes sea exacta, sacamos el gap-8 */}
        <div className="flex flex-col lg:flex-row w-full mt-12 lg:mt-0">
          
          {/* ========================================================= */}
          {/* COLUMNA IZQUIERDA: 1/3 EXACTO DE LA PANTALLA (Coincide con "Design") */}
          {/* ========================================================= */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end -mt-[60px] lg:-mt-[160px] relative z-20"> 
            
            {/* 2. LA MAGIA DEL TRANSLATE: 
                Al mover el gráfico un 51% hacia la derecha (translate-x-[51%]), 
                su línea central queda perfectamente apoyada en la frontera del 1/3 de la pantalla. */}
            <div className="w-full max-w-[448px] lg:translate-x-[44%]">
<svg 
              className="w-full h-auto" 
              viewBox="0 0 448 525" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clipPath="url(#clip0_126_513)">
                <rect width="448" height="525" fill="white"/>
                <path d="M420 115.199H108.782V414.839H420V115.199Z" fill="#F4F2EC"/>
                <path d="M218 117H111V254H218V117Z" fill="#6B9E7A"/>
                <path d="M417.712 287.051H218.624V412.635H417.712V287.051Z" fill="#939390"/>
                <path d="M418 117H356V198H418V117Z" fill="#F5C10A"/>
                <path d="M173 347H111V413H173V347Z" fill="#939390"/>
                <path d="M353.637 117.403H305.582V196.719H353.637V117.403Z" fill="#F4F2EC"/>
                <path d="M173 287H111V347H173V287Z" fill="#404040"/>
                <path d="M111 117.403H417" stroke="#939390" strokeWidth="2" strokeLinecap="square"/>
                <path d="M1 287.051H416.5" stroke="#939390" strokeWidth="2" strokeLinecap="square"/>
                <path d="M111.07 117.5V413" stroke="#939390" strokeWidth="2" strokeLinecap="square"/>
                <path d="M218.624 -0.5V287.051" stroke="#939390" strokeWidth="2" strokeLinecap="square"/>
                <path d="M218.624 287.051V413" stroke="#939390" strokeWidth="2" strokeLinecap="square"/>
                <path d="M305.582 117.5V287.051" stroke="#939390" strokeWidth="2" strokeLinecap="square"/>
                <path d="M355.926 117.5V525" stroke="#939390" strokeWidth="2" strokeLinecap="square"/>
                <path d="M417 118V413" stroke="#939390" strokeWidth="2" strokeLinecap="square"/>
                <path d="M172.856 287.051V413" stroke="#939390" strokeWidth="2" strokeLinecap="square"/>
                <path d="M356 199H415.5" stroke="#939390" strokeWidth="2" strokeLinecap="square"/>
                <path d="M110 413H416.218" stroke="#939390" strokeWidth="2" strokeLinecap="square"/>
                
                {/* ========================================================= */}
                {/* TEXTOS TRADUCIBLES REALES (Sustituyen a los antiguos paths) */}
                {/* ========================================================= */}

                {/* 1. DISEÑO: Rotado 90 grados en sentido horario para quedar vertical*/}
                <text 
                  x="166" 
                  y="125" 
                  fill="#F8F8F6" 
                  fontFamily="Inter, sans-serif"
                  fontSize="15px"
                  fontWeight="bold"
                  letterSpacing="1px"
                  transform="rotate(90 166 125)"
                  textAnchor="start"
                >
                  {t('box_design')}
                </text>
                
                {/* 2. EXPERIENCIA: Centrado horizontalmente en la caja gris inferior */}
                <text 
                  x="343" 
                  y="406" 
                  fill="#F8F8F6" 
                  fontFamily="Inter, sans-serif"
                  fontSize="15px"
                  fontWeight="bold"
                  letterSpacing="0.5px"
                  textAnchor="middle"
                >
                  {t('box_experience')}
                </text>
                
                {/* 3. QA: Centrado perfectamente en el recuadro amarillo */}
                <text 
                  x="387" 
                  y="172" 
                  fill="#F8F8F6" 
                  fontFamily="Inter, sans-serif"
                  fontSize="15px"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {t('box_qa')}
                </text>

              </g>
              <defs>
                <clipPath id="clip0_126_513">
                  <rect width="448" height="525" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            </div>
          </div>

         {/* ========================================================= */}
          {/* COLUMNA DERECHA: 2/3 EXACTOS DE LA PANTALLA */}
          {/* ========================================================= */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center items-center mt-12 lg:mt-0">
            
            {/* TUS DOS JOYSTICKS DE PRECISIÓN: 
                1. lg:translate-x-[10%] -> Mueve el texto hacia los costados (Eje X)
                2. lg:-translate-y-[80px] -> Sube el texto hacia arriba (Eje Y)
            */}
            <div className="w-full max-w-[429px] lg:translate-x-[15%] lg:-translate-y-[80px]">
              <h2 className="font-inter font-semibold text-[24px] lg:text-[32px] leading-tight text-black mb-4">
                {t('title_start')} <br />
                <span className="text-[#6b9e7a]">{t('title_highlight')}</span>
              </h2>
              <p className="font-inter font-light text-[14px] lg:text-[16px] leading-relaxed text-black opacity-80">
                {t('description')}
              </p>
            </div>

          </div>

        </div>

        {/* FILA 2: Logo */}
        <div className="w-full flex justify-center mt-16 lg:mt-24">
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