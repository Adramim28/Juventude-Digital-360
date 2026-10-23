import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSlogan = false, variant = 'light' }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-base font-bold',
    md: 'text-xl font-extrabold',
    lg: 'text-2xl font-black'
  };

  const textColor = variant === 'dark' ? 'text-white' : 'text-[#123A70]';
  const subtitleColor = variant === 'dark' ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className="flex items-center gap-3">
      {/* 360 Degree Youth, Education, Growth & Tech Symbol */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} shrink-0 drop-shadow-sm`}
        aria-label="Logotipo Juventude Digital 360°"
      >
        {/* Outer 360 dynamic orbit segments */}
        {/* Top-Right: Blue (#123A70) - Technology & Future */}
        <path
          d="M 50 8 A 42 42 0 0 1 92 50"
          stroke="#123A70"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Bottom-Right: Green (#159447) - Opportunities & Growth */}
        <path
          d="M 92 50 A 42 42 0 0 1 50 92"
          stroke="#159447"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Bottom-Left: Yellow (#FFC928) - Youth, Warmth & Energy */}
        <path
          d="M 50 92 A 42 42 0 0 1 8 50"
          stroke="#FFC928"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Top-Left: Red (#E53935) - Passion & Determination */}
        <path
          d="M 8 50 A 42 42 0 0 1 50 8"
          stroke="#E53935"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Central Core: Digital Tech Node & Rising Growth Tree / Graduation Open Wings */}
        <circle cx="50" cy="50" r="28" fill="#FFFFFF" />
        <circle cx="50" cy="50" r="26" fill="#123A70" fillOpacity="0.06" />

        {/* Dynamic Growth / Open Book & Tech Circuit */}
        <path
          d="M 33 55 C 33 46, 42 43, 50 48 C 58 43, 67 46, 67 55 L 67 65 C 58 60, 50 63, 50 63 C 50 63, 42 60, 33 65 Z"
          fill="#123A70"
        />
        {/* Growth Sprout / Tech node rising */}
        <circle cx="50" cy="34" r="5" fill="#159447" />
        <path
          d="M 50 39 L 50 48"
          stroke="#159447"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Accent Star / Innovation spark */}
        <circle cx="63" cy="36" r="2.5" fill="#FFC928" />
      </svg>

      <div className="flex flex-col">
        <div className={`leading-none tracking-tight flex items-baseline gap-1.5 ${textSizes[size]} ${textColor}`}>
          <span>JUVENTUDE DIGITAL</span>
          <span className="text-[#159447] font-black">360°</span>
        </div>
        {showSlogan && (
          <span className={`text-[11px] font-medium tracking-wide mt-1 ${subtitleColor}`}>
            Tecnologia, Conhecimento e Oportunidades
          </span>
        )}
      </div>
    </div>
  );
};
