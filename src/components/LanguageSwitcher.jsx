"use client";

import { usePathname, useRouter } from 'next/navigation';

// Cambiamos 'flag' por 'country' para buscar la imagen exacta
const locales = [
  { code: 'es', name: 'ES', country: 'ar' },
  { code: 'en', name: 'EN', country: 'gb' }, // gb = Great Britain
  { code: 'ru', name: 'RU', country: 'ru' },
  { code: 'uk', name: 'UA', country: 'ua' }  // ua = Ukraine
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname?.split('/')[1] || 'es';
  const activeLocale = locales.find(l => l.code === currentLocale) || locales[0];

  const switchLocale = (newLocale) => {
    if (!pathname) return;
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="relative group cursor-pointer">
      
      {/* 1. EL BOTÓN VISIBLE (Gatillo) */}
      <div className="flex items-center gap-2 text-[14px] font-inter text-[#939390] hover:text-[#18181A] transition-colors py-2">
        {/* Traemos la imagen de la bandera */}
        <img 
          src={`https://flagcdn.com/w20/${activeLocale.country}.png`} 
          alt={`${activeLocale.name} flag`}
          className="w-4 h-auto rounded-[2px]"
        />
        <span className="uppercase font-medium">{activeLocale.name}</span>
      </div>

      {/* 2. EL MENÚ DESPLEGABLE */}
      <div className="absolute right-0 top-full pt-4 hidden group-hover:block w-[120px] z-50">
        <div className="flex flex-col bg-white border border-[#939390]/20 shadow-sm rounded-sm overflow-hidden">
          {locales.map((loc) => (
            <button
              key={loc.code}
              onClick={() => switchLocale(loc.code)}
              className={`flex items-center justify-between px-4 py-3 text-left text-[12px] font-inter hover:bg-[#F7F7F7] transition-colors ${
                currentLocale === loc.code ? 'text-[#6b9e7a] font-bold' : 'text-[#404040]'
              }`}
            >
              <span>{loc.name}</span>
              <img 
                src={`https://flagcdn.com/w20/${loc.country}.png`} 
                alt={`${loc.name} flag`}
                className="w-4 h-auto rounded-[2px] opacity-80"
              />
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
}