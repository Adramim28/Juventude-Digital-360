import React from 'react';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { WifiOff, ShieldCheck } from 'lucide-react';

export const OfflineBanner: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-[#123A70] text-white p-4 rounded-2xl shadow-2xl border-2 border-[#FFC928] animate-in slide-in-from-bottom-4 duration-200">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-amber-400/20 text-[#FFC928] shrink-0">
          <WifiOff className="w-5 h-5 text-[#FFC928]" />
        </div>
        <div className="text-xs space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-white">Modo Offline Ativo</span>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          </div>
          <p className="text-blue-100 leading-relaxed text-[11px]">
            Estás sem ligação à Internet. O portal continua totalmente funcional a partir do Service Worker: podes consultar oportunidades guardadas, criar currículos e estruturar planos de negócio sem gastar saldo.
          </p>
        </div>
      </div>
    </div>
  );
};
