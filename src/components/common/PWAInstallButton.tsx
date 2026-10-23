import React, { useState } from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { Download, Smartphone, X, Share, PlusSquare, Check } from 'lucide-react';

interface PWAInstallButtonProps {
  variant?: 'nav' | 'mobile' | 'hero' | 'compact';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  // If already running as an installed PWA, do not show install CTA
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      setIsInstalling(true);
      await install();
      setIsInstalling(false);
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // Browser doesn't support beforeinstallprompt yet or already dismissed:
      // Show informational guide
      setShowIOSGuide(true);
    }
  };

  const buttonStyles = {
    nav: 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#123A70] border border-blue-200 text-xs font-bold transition-all shadow-2xs cursor-pointer',
    compact: 'inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 hover:bg-emerald-100 text-[#159447] text-[11px] font-bold transition-colors cursor-pointer',
    mobile: 'w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-[#123A70] text-white text-xs font-bold shadow-xs active:scale-98 transition-all cursor-pointer',
    hero: 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 hover:bg-white text-[#123A70] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all border border-slate-200 cursor-pointer'
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        disabled={isInstalling}
        className={buttonStyles[variant]}
        title="Instalar JUVENTUDE DIGITAL 360° como aplicativo no teu ecrã"
      >
        <Smartphone className="w-3.5 h-3.5 text-[#159447] shrink-0" />
        <span>{isInstalling ? 'A Instalar...' : 'Instalar no Telemóvel'}</span>
      </button>

      {/* Guide Modal for iOS or manual install */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 relative text-xs">
            <button
              onClick={() => setShowIOSGuide(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#123A70] flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5 text-[#123A70]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Instalar no Teu Telemóvel
                </h3>
                <p className="text-[11px] text-slate-500">Acesso rápido e sem gastar megabytes</p>
              </div>
            </div>

            <div className="space-y-3 text-slate-700 leading-relaxed mb-5">
              {isIOS ? (
                <>
                  <p className="font-semibold text-slate-900">
                    Instalação no iPhone ou iPad (Safari):
                  </p>
                  <ol className="space-y-2 list-decimal list-inside bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <li className="flex items-start gap-2">
                      <Share className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Toca no botão <strong>Partilhar</strong> na barra do Safari (ícone com quadrado e seta).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PlusSquare className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                      <span>Desce e clica em <strong>"Adicionar ao Ecrã Principal"</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Clica em <strong>Adicionar</strong> no canto superior direito.</span>
                    </li>
                  </ol>
                </>
              ) : (
                <>
                  <p className="font-semibold text-slate-900">
                    Instalação no Android / Chrome:
                  </p>
                  <ol className="space-y-2 list-decimal list-inside bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <li>Abre o menu do navegador (três pontinhos no canto superior).</li>
                    <li>Clica em <strong>"Instalar aplicação"</strong> ou <strong>"Adicionar ao ecrã inicial"</strong>.</li>
                    <li>Confirma para que o ícone oficial apareça junto das tuas aplicações.</li>
                  </ol>
                </>
              )}

              <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-900 text-[11px]">
                <strong>Vantagem:</strong> O portal passa a funcionar mesmo sem rede de internet, permitindo consultar vagas e criar currículos offline.
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2.5 rounded-xl bg-[#123A70] hover:bg-[#0c264a] text-white font-bold transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
};
