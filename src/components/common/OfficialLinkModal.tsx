import React from 'react';
import { ExternalLink, ShieldCheck, AlertCircle, X } from 'lucide-react';

interface OfficialLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sourceName: string;
  url: string;
  isExpired?: boolean;
}

export const OfficialLinkModal: React.FC<OfficialLinkModalProps> = ({
  isOpen,
  onClose,
  title,
  sourceName,
  url,
  isExpired
}) => {
  if (!isOpen) return null;

  const handleProceed = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-blue-50 text-[#123A70] border border-blue-100">
            <ShieldCheck className="w-6 h-6 text-[#159447]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              Aceder ao Portal Oficial
            </h3>
            <p className="text-xs text-slate-500">Ligação externa verificada</p>
          </div>
        </div>

        <div className="space-y-3 mb-5">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
            <p className="font-semibold text-slate-800 line-clamp-2">{title}</p>
            <p className="mt-1 text-slate-500 font-medium">Entidade / Fonte: {sourceName}</p>
          </div>

          {isExpired ? (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 text-xs text-red-800">
              <AlertCircle className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Aviso de Prazo Expirado:</span> Esta convocatória atingiu o prazo limite. Podes consultar o portal oficial para verificar os resultados ou novas datas da próxima fase.
              </div>
            </div>
          ) : (
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-start gap-2 text-xs text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Aviso de Segurança:</span> As candidaturas a bolsas públicas e vagas legítimas em Moçambique são 100% gratuitas. Nunca efetues pagamentos por formulários de candidatura ou exames de recrutamento.
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Voltar
          </button>
          <button
            onClick={handleProceed}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#123A70] hover:bg-[#0c264a] text-xs font-bold text-white transition-colors shadow-xs cursor-pointer"
          >
            <span>Ir para o Site Oficial</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
