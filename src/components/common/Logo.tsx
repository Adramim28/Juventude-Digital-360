import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  variant?: 'light' | 'dark';
  hideText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSlogan = false,
  variant = 'light',
  hideText = false
}) => {
  const imageSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
    xl: 'w-24 h-24 sm:w-28 sm:h-28'
  };

  const textSizes = {
    sm: 'text-sm sm:text-base font-bold',
    md: 'text-base sm:text-lg lg:text-xl font-extrabold',
    lg: 'text-xl sm:text-2xl font-black',
    xl: 'text-2xl sm:text-3xl font-black'
  };

  const textColor = variant === 'dark' ? 'text-white' : 'text-[#123A70]';
  const subtitleColor = variant === 'dark' ? 'text-blue-200' : 'text-slate-600';

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      {/* Official JUVENTUDE DIGITAL 360° Logo Image */}
      <img
        src="/assets/aistudio/file_00000000c7f88211936bb871f48c42f4_2b735ac9.png"
        alt="Logotipo Oficial JUVENTUDE DIGITAL 360°"
        className={`${imageSizes[size]} object-contain shrink-0 drop-shadow-sm select-none transition-transform hover:scale-105`}
        loading="eager"
        referrerPolicy="no-referrer"
      />

      {!hideText && (
        <div className="flex flex-col justify-center">
          <div className={`leading-none tracking-tight flex items-baseline gap-1.5 ${textSizes[size]} ${textColor}`}>
            <span className="whitespace-nowrap">JUVENTUDE DIGITAL</span>
            <span className="text-[#159447] font-black tracking-normal">360°</span>
          </div>
          {showSlogan && (
            <span className={`text-[11px] font-medium tracking-wide mt-1 ${subtitleColor}`}>
              Tecnologia, Conhecimento e Oportunidades
            </span>
          )}
        </div>
      )}
    </div>
  );
};
