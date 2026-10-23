import React, { useState } from 'react';
import { EntrepreneurshipProgram, PageId } from '../types';
import {
  Rocket,
  Search,
  ExternalLink,
  Target,
  DollarSign,
  Building2,
  FileSpreadsheet,
  CheckCircle2,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

interface EntrepreneurshipPageProps {
  programs: EntrepreneurshipProgram[];
  onNavigate: (page: PageId) => void;
  onOpenOfficialLink: (item: { title: string; sourceName: string; url: string; isExpired?: boolean }) => void;
}

export const EntrepreneurshipPage: React.FC<EntrepreneurshipPageProps> = ({
  programs,
  onNavigate,
  onOpenOfficialLink
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('Todos');

  const filtered = programs.filter(
    (p) => filterCategory === 'Todos' || p.category === filterCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Hero Banner */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="p-6 sm:p-10 lg:col-span-7 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-[#159447] text-xs font-bold">
              Iniciativa Económica & Negócios Próprios
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#123A70] leading-tight">
              Empreendedorismo e Financiamento
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Do rascunho da ideia ao primeiro cliente em Moçambique: programas de incubação, linhas de crédito rural, concursos e ferramentas práticas para criar negócios sustentáveis.
            </p>

            {/* 4 Functional Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('plano-negocio')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#159447] hover:bg-[#0f6e34] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Criar Plano de Negócios</span>
              </button>

              <button
                onClick={() => setFilterCategory('Incubadora')}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                Encontrar Apoio
              </button>

              <button
                onClick={() => setFilterCategory('Programa de Financiamento')}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                Ver Financiamentos
              </button>

              <button
                onClick={() => onNavigate('laboratorio')}
                className="px-4 py-2.5 rounded-xl bg-[#123A70] hover:bg-[#0c264a] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                Apresentar Projeto
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative bg-slate-100">
            <img
              src="/src/assets/images/youth_entrepreneur_african_1792781138353.jpg"
              alt="Jovem empreendedora moçambicana em Quelimane liderando o seu negócio"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
              <span className="text-white text-xs font-semibold">
                Casos Reais: Mulheres e Jovens a Inovar na Zambézia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Guiding Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#123A70] flex items-center justify-center font-bold">
            1
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Ideação & Validação</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Identifica um problema real na tua comunidade (alimentação, energia, transporte, educação) e testa se os vizinhos pagariam pela solução.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-green-50 text-[#159447] flex items-center justify-center font-bold">
            2
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Estruturação Financeira</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Calcula com rigor todos os custos diretos, preço de venda e margem. Nunca mistures o dinheiro pessoal com o saldo da empresa.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            3
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Formalização Progressiva</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Inicia o negócio de forma enxuta e avança para a obtenção de NUIT, certidão de registo e licença simples quando houver vendas consistentes.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            4
          </div>
          <h3 className="font-bold text-slate-900 text-sm">Financiamento e Aceleração</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Candidata-te a fundos verificados (FNDS, IdeiaLab, concursos bancários) com dados claros de vendas e impacto social comprovado.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto text-xs">
        {['Todos', 'Incubadora', 'Programa de Financiamento', 'Aceleração'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilterCategory(tab)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors whitespace-nowrap cursor-pointer ${
              filterCategory === tab
                ? 'bg-[#123A70] text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Programs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#159447] font-bold text-[11px]">
                  {item.category}
                </span>
                <span className="text-slate-500 font-medium">{item.location}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs font-semibold text-[#123A70] mb-3">{item.organization}</p>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="space-y-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-4">
                <div>
                  <span className="text-slate-400 block text-[11px]">Tipo de Apoio / Fundo:</span>
                  <span className="font-semibold text-slate-800">{item.fundingAmountOrSupport}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Público Alvo:</span>
                  <span className="text-slate-700">{item.targetAudience}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Estado das Candidaturas:</span>
                  <span className="text-amber-800 font-medium">{item.deadlineOrStatus}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Verificado em Moçambique</span>
              <button
                onClick={() =>
                  onOpenOfficialLink({
                    title: item.title,
                    sourceName: item.organization,
                    url: item.officialUrl
                  })
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#123A70] hover:bg-[#0c264a] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <span>Consultar Portal Oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
