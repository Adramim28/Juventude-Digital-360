import React, { useState, useMemo } from 'react';
import { Scholarship } from '../types';
import {
  GraduationCap,
  Search,
  Globe,
  Calendar,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  X,
  FileCheck
} from 'lucide-react';

interface ScholarshipsPageProps {
  scholarships: Scholarship[];
  onOpenOfficialLink: (item: { title: string; sourceName: string; url: string; isExpired?: boolean }) => void;
}

const LEVELS_LIST = [
  'Todos os Graus',
  'Licenciatura',
  'Mestrado',
  'Pós-Graduação',
  'Intercâmbio / Pesquisa',
  'Técnico Profissional'
];

export const ScholarshipsPage: React.FC<ScholarshipsPageProps> = ({
  scholarships,
  onOpenOfficialLink
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('Todos os Graus');
  const [activeReqModal, setActiveReqModal] = useState<Scholarship | null>(null);

  const isExpired = (deadlineStr: string) => {
    const today = new Date().toISOString().split('T')[0];
    return deadlineStr < today;
  };

  const filtered = useMemo(() => {
    return scholarships.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.fieldOfStudy.toLowerCase().includes(searchTerm.toLowerCase());

      const matchLevel =
        selectedLevel === 'Todos os Graus' || item.level === selectedLevel;

      return matchSearch && matchLevel;
    });
  }, [scholarships, searchTerm, selectedLevel]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#159447] text-xs font-bold mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Educação Superior, Graduação & Pós-Graduação</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#123A70]">
            Bolsas de Estudo Nacionais e Internacionais
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Oportunidades de bolsas confirmadas pelo Instituto de Bolsas de Estudo (IBE), governos parceiros e programas internacionais para estudantes moçambicanos.
          </p>
        </div>

        {/* Info card */}
        <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-xs text-[#123A70] max-w-xs shrink-0">
          <p className="font-bold">Aviso Oficial:</p>
          <p className="text-[11px] text-slate-600 mt-0.5">
            As candidaturas a bolsas governamentais e de cooperação internacional são sempre gratuitas. Desconfia de intermediários que peçam pagamentos.
          </p>
        </div>
      </div>

      {/* Filters and search */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Pesquisar por país, programa (ex: IBE, Chevening, DAAD), área de estudo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#123A70]"
            />
          </div>

          <div className="w-full sm:w-64">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#123A70]"
            >
              {LEVELS_LIST.map((lvl) => (
                <option key={lvl} value={lvl}>{lvl}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>{filtered.length} programas de bolsas disponíveis</span>
          {(searchTerm || selectedLevel !== 'Todos os Graus') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLevel('Todos os Graus');
              }}
              className="text-[#123A70] hover:underline font-semibold cursor-pointer"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Scholarships Grid */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-2">
          <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
          <p className="text-sm font-bold text-slate-800">
            Nenhuma bolsa encontrada para os critérios selecionados
          </p>
          <p className="text-xs text-slate-500">
            Novos editais e acordos bilaterais de bolsas são adicionados assim que publicados pelas embaixadas e IBE.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const expired = isExpired(item.deadline);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-[#123A70] font-bold text-[11px]">
                      {item.level}
                    </span>
                    <span className="font-bold text-[#159447] text-[11px]">{item.coverage}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mb-3">{item.institution}</p>

                  <div className="space-y-2 text-xs text-slate-600 mb-4 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-semibold text-slate-800">País: {item.country}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Área de Estudo:</span>
                      <span className="text-slate-700">{item.fieldOfStudy}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Benefícios Confirmados:</span>
                      <ul className="mt-0.5 space-y-0.5">
                        {item.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-1 text-[11px] text-emerald-800">
                            <span className="font-bold">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Prazo:</span>
                    <span className={`font-mono ${expired ? 'text-red-600 font-bold' : 'text-slate-800'}`}>
                      {expired ? 'Edital Encerrado' : item.deadline}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveReqModal(item)}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Ver Requisitos
                    </button>
                    <button
                      onClick={() =>
                        onOpenOfficialLink({
                          title: item.title,
                          sourceName: item.sourceName,
                          url: item.officialUrl,
                          isExpired: expired
                        })
                      }
                      className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-[#123A70] hover:bg-[#0c264a] text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <span>Candidatar-me</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Requirements Modal */}
      {activeReqModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveReqModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="px-2 py-0.5 rounded bg-blue-50 text-[#123A70] text-xs font-bold">
                {activeReqModal.level} · {activeReqModal.country}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                {activeReqModal.title}
              </h3>
              <p className="text-xs text-slate-500">{activeReqModal.institution}</p>
            </div>

            <div className="space-y-4 text-xs text-slate-700 mb-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">Requisitos Obrigatórios</h4>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  {activeReqModal.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Notas do Programa</h4>
                <p className="text-slate-600 leading-relaxed">{activeReqModal.notes}</p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
                <span className="font-bold">Cobertura da Bolsa:</span> {activeReqModal.coverage}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => setActiveReqModal(null)}
                className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  const b = activeReqModal;
                  setActiveReqModal(null);
                  onOpenOfficialLink({
                    title: b.title,
                    sourceName: b.sourceName,
                    url: b.officialUrl,
                    isExpired: isExpired(b.deadline)
                  });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#159447] hover:bg-[#0f6e34] text-white text-xs font-bold cursor-pointer"
              >
                <span>Candidatar-me no Site Oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
