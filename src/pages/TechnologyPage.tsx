import React, { useState } from 'react';
import { TechToolGuide, PageId } from '../types';
import {
  Cpu,
  ShieldAlert,
  Code2,
  Globe,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Lock,
  Smartphone,
  Share2
} from 'lucide-react';

interface TechnologyPageProps {
  guides: TechToolGuide[];
  onNavigate: (page: PageId) => void;
  onOpenOfficialLink: (item: { title: string; sourceName: string; url: string; isExpired?: boolean }) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({
  guides,
  onNavigate,
  onOpenOfficialLink
}) => {
  const [expandedId, setExpandedId] = useState<string | null>('tech-1');
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredGuides = guides.filter(
    (g) => activeCategory === 'Todas' || g.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Top Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-900 text-xs font-bold mb-2">
            <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            <span>Futuro Digital, IA e Cibersegurança</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-[#123A70]">
            Tecnologia e Inovação 360°
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Domina a inteligência artificial, aprende a construir o teu primeiro site gratuito, protege as tuas contas de carteiras móveis e utiliza ferramentas digitais que aceleram a tua carreira.
          </p>
        </div>

        {/* 4 Functional Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={() => setActiveCategory('Inteligência Artificial')}
            className="px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-bold transition-colors cursor-pointer"
          >
            Aprender IA
          </button>
          <button
            onClick={() => onNavigate('guia-publicacao')}
            className="px-3.5 py-2 rounded-xl bg-[#159447] hover:bg-[#0f6e34] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
          >
            Criar Primeiro Site
          </button>
          <button
            onClick={() => onNavigate('laboratorio')}
            className="px-3.5 py-2 rounded-xl bg-[#123A70] hover:bg-[#0c264a] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Partilhar uma Inovação
          </button>
        </div>
      </div>

      {/* Cyber Security & Anti-Fraud Alert Box (Critical for Mozambique Context) */}
      <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-300 space-y-3">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0" />
          <h2 className="text-base font-bold text-amber-950">
            Alerta de Segurança Digital: Protege as Tuas Contas em Moçambique
          </h2>
        </div>
        <p className="text-xs text-amber-900 leading-relaxed">
          Muitos jovens são alvo de esquemas que pedem códigos de SMS de verificação, transferências adiantadas de M-Pesa para exames de recrutamento fictícios ou promessas de bolsas com custos de registo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="bg-white/80 p-3 rounded-xl border border-amber-200">
            <span className="font-bold text-amber-900 block mb-1">1. PIN de Carteira Móvel</span>
            <p className="text-slate-600 text-[11px]">
              O teu PIN do M-Pesa, e-Mola ou mKesh é pessoal e intransmissível. Nenhuma operadora liga a pedir o PIN para "atualizar o sistema".
            </p>
          </div>
          <div className="bg-white/80 p-3 rounded-xl border border-amber-200">
            <span className="font-bold text-amber-900 block mb-1">2. Código de 6 Dígitos WhatsApp</span>
            <p className="text-slate-600 text-[11px]">
              Nunca envies o código de 6 dígitos que chega por SMS a terceiros. É assim que contas são roubadas para pedir dinheiro a familiares.
            </p>
          </div>
          <div className="bg-white/80 p-3 rounded-xl border border-amber-200">
            <span className="font-bold text-amber-900 block mb-1">3. Vagas de Trabalho Reais</span>
            <p className="text-slate-600 text-[11px]">
              Nenhuma empresa idónea ou ministério cobra taxas para submissão de currículo ou realização de entrevistas de emprego.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter Bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto text-xs">
        {[
          'Todas',
          'Inteligência Artificial',
          'Criação de Sites',
          'Segurança na Internet',
          'Ferramentas Digitais'
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#123A70] text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Guides List (Interactive Accordion) */}
      <div className="space-y-4">
        {filteredGuides.map((guide) => {
          const isExpanded = expandedId === guide.id;
          return (
            <div
              key={guide.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-shadow"
            >
              <div
                onClick={() => toggleExpand(guide.id)}
                className="p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-[#123A70]">{guide.category}</span>
                    <span>·</span>
                    <span className="text-[#159447] font-semibold text-[11px]">
                      {guide.isFree ? '100% Gratuito' : 'Acesso Livre'}
                    </span>
                    <span>·</span>
                    <span className="text-slate-400 text-[11px]">{guide.difficulty}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{guide.title}</h3>
                  <p className="text-xs text-slate-500 max-w-3xl">{guide.summary}</p>
                </div>

                <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4 text-xs text-slate-700">
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#123A70] uppercase tracking-wider text-[11px]">
                      Passos Práticos de Aplicação:
                    </h4>
                    <div className="space-y-2">
                      {guide.practicalSteps.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-2.5 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => onNavigate('guia-publicacao')}
                      className="text-xs font-bold text-[#123A70] hover:underline cursor-pointer"
                    >
                      Aceder ao Tutorial Completo de Alojamento Gratuito &rarr;
                    </button>

                    {guide.toolUrl && (
                      <button
                        onClick={() =>
                          onOpenOfficialLink({
                            title: guide.title,
                            sourceName: 'Ferramenta Digital',
                            url: guide.toolUrl!
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#123A70] hover:bg-[#0c264a] text-white text-xs font-bold cursor-pointer"
                      >
                        <span>Abrir Ferramenta Externa</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
