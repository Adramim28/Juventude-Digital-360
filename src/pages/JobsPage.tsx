import React, { useState, useMemo } from 'react';
import { Opportunity, MozambiqueProvince } from '../types';
import {
  Briefcase,
  Search,
  Filter,
  MapPin,
  Calendar,
  ExternalLink,
  PlusCircle,
  FileText,
  AlertCircle,
  CheckCircle2,
  X,
  Share2
} from 'lucide-react';

interface JobsPageProps {
  opportunities: Opportunity[];
  onOpenReportModal: () => void;
  onNavigateToCV: () => void;
  onOpenOfficialLink: (item: { title: string; sourceName: string; url: string; isExpired?: boolean }) => void;
}

const PROVINCES_LIST: Array<string> = [
  'Todas as Províncias',
  'Zambézia',
  'Maputo Cidade',
  'Maputo Província',
  'Sofala',
  'Nampula',
  'Tete',
  'Manica',
  'Gaza',
  'Inhambane',
  'Cabo Delgado',
  'Niassa',
  'Nacional / Todo o País',
  'Remoto'
];

const CATEGORIES_LIST = [
  'Todas as Áreas',
  'Tecnologia',
  'Administração',
  'Educação',
  'Finanças',
  'Agricultura',
  'Saúde',
  'Comunicação'
];

export const JobsPage: React.FC<JobsPageProps> = ({
  opportunities,
  onOpenReportModal,
  onNavigateToCV,
  onOpenOfficialLink
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('Todas as Províncias');
  const [selectedCategory, setSelectedCategory] = useState('Todas as Áreas');
  const [selectedType, setSelectedType] = useState('Todos os Tipos');
  const [activeJobDetails, setActiveJobDetails] = useState<Opportunity | null>(null);

  const isExpired = (deadlineStr: string) => {
    const today = new Date().toISOString().split('T')[0];
    return deadlineStr < today;
  };

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      const matchSearch =
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.entity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchProvince =
        selectedProvince === 'Todas as Províncias' ||
        opp.location === selectedProvince ||
        (selectedProvince === 'Zambézia' && opp.location.includes('Zambézia'));

      const matchCategory =
        selectedCategory === 'Todas as Áreas' || opp.category === selectedCategory;

      const matchType =
        selectedType === 'Todos os Tipos' || opp.opportunityType === selectedType;

      return matchSearch && matchProvince && matchCategory && matchType;
    });
  }, [opportunities, searchTerm, selectedProvince, selectedCategory, selectedType]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#123A70] text-xs font-bold mb-2">
            <Briefcase className="w-3.5 h-3.5 text-[#159447]" />
            <span>Inserção no Mercado de Trabalho em Moçambique</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#123A70]">
            Emprego, Estágios e Trainee
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Vagas verificadas com ligação direta aos anúncios oficiais e editais de recrutamento. Prioridade para oportunidades na Zambézia e âmbito nacional.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={onNavigateToCV}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#123A70]" />
            <span>Criar o Meu CV</span>
          </button>
          <button
            onClick={onOpenReportModal}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#159447] hover:bg-[#0f6e34] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Comunicar uma Vaga</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Pesquisar por título, empresa, competência..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#123A70]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 shrink-0">
            {/* Province select */}
            <select
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#123A70]"
            >
              {PROVINCES_LIST.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            {/* Category select */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#123A70]"
            >
              {CATEGORIES_LIST.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Type select */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#123A70]"
            >
              <option value="Todos os Tipos">Todos os Tipos</option>
              <option value="Estágio Profissional">Estágio Profissional</option>
              <option value="Emprego Tempo Inteiro">Emprego Tempo Inteiro</option>
              <option value="Meio Período">Meio Período</option>
              <option value="Trabalho Remoto">Trabalho Remoto</option>
              <option value="Programa Trainee">Programa Trainee</option>
            </select>
          </div>
        </div>

        {/* Results counter and reset */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>
            {filteredOpportunities.length}{' '}
            {filteredOpportunities.length === 1 ? 'vaga encontrada' : 'vagas encontradas'}
          </span>
          {(searchTerm ||
            selectedProvince !== 'Todas as Províncias' ||
            selectedCategory !== 'Todas as Áreas' ||
            selectedType !== 'Todos os Tipos') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedProvince('Todas as Províncias');
                setSelectedCategory('Todas as Áreas');
                setSelectedType('Todos os Tipos');
              }}
              className="text-[#123A70] hover:underline font-semibold cursor-pointer"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Opportunities List */}
      {filteredOpportunities.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
          <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            Nenhuma oportunidade corresponde aos filtros selecionados
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Novas oportunidades de emprego e estágios verificadas serão adicionadas regularmente. Se a tua instituição tiver uma vaga disponível, clica em "Comunicar uma Vaga".
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenReportModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#159447] text-white text-xs font-bold"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Comunicar uma Vaga Agora</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOpportunities.map((opp) => {
            const expired = isExpired(opp.deadline);
            return (
              <div
                key={opp.id}
                className={`bg-white rounded-2xl border p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative ${
                  expired ? 'border-red-200 bg-red-50/20' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-[#123A70]">{opp.category}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold">
                      {opp.opportunityType}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-1">
                    {opp.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#159447] mb-3">{opp.entity}</p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>
                        {opp.location} {opp.city ? `(${opp.city})` : ''}
                      </span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span className={expired ? 'text-red-600 font-bold' : ''}>
                        {expired ? 'Prazo Expirado' : `Prazo: ${opp.deadline}`}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {opp.description}
                  </p>

                  {/* Requirements preview */}
                  <div className="mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Requisitos Chave:
                    </p>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {opp.requirements.slice(0, 2).map((req, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#159447] font-bold mt-0.5">•</span>
                          <span className="line-clamp-1">{req}</span>
                        </li>
                      ))}
                      {opp.requirements.length > 2 && (
                        <li className="text-[11px] text-slate-400">
                          + {opp.requirements.length - 2} outros requisitos no anúncio
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveJobDetails(opp)}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
                  >
                    Ver Detalhes
                  </button>

                  <button
                    onClick={() =>
                      onOpenOfficialLink({
                        title: opp.title,
                        sourceName: opp.sourceName,
                        url: opp.officialUrl,
                        isExpired: expired
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#123A70] hover:bg-[#0c264a] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>Consultar Anúncio Oficial</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Details Modal */}
      {activeJobDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveJobDetails(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="px-2 py-0.5 rounded bg-blue-50 text-[#123A70] text-xs font-bold">
                {activeJobDetails.category} · {activeJobDetails.opportunityType}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                {activeJobDetails.title}
              </h2>
              <p className="text-xs font-semibold text-[#159447]">{activeJobDetails.entity}</p>
            </div>

            <div className="space-y-4 text-xs text-slate-700 mb-6">
              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div>
                  <span className="text-slate-400 block text-[11px]">Localização:</span>
                  <span className="font-semibold text-slate-800">
                    {activeJobDetails.location} {activeJobDetails.city ? `(${activeJobDetails.city})` : ''}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Prazo limite:</span>
                  <span className="font-semibold text-slate-800">{activeJobDetails.deadline}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Descrição da Função</h4>
                <p className="leading-relaxed text-slate-600">{activeJobDetails.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Requisitos Exigidos</h4>
                <ul className="space-y-1 list-disc list-inside text-slate-600">
                  {activeJobDetails.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                <h4 className="font-bold text-[#123A70] mb-0.5">Como Concorrer</h4>
                <p className="text-slate-700">{activeJobDetails.howToApply}</p>
                {activeJobDetails.contactEmail && (
                  <p className="font-semibold text-[#123A70] mt-1">
                    E-mail: {activeJobDetails.contactEmail}
                  </p>
                )}
              </div>

              <div className="text-[11px] text-slate-400">
                Fonte verificada: {activeJobDetails.sourceName} · Publicado em {activeJobDetails.publishedAt}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setActiveJobDetails(null)}
                className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  const opp = activeJobDetails;
                  setActiveJobDetails(null);
                  onOpenOfficialLink({
                    title: opp.title,
                    sourceName: opp.sourceName,
                    url: opp.officialUrl,
                    isExpired: isExpired(opp.deadline)
                  });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#123A70] hover:bg-[#0c264a] text-white text-xs font-bold cursor-pointer"
              >
                <span>Aceder ao Anúncio Oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
