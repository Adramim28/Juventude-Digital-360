import React from 'react';
import { PageId } from '../types';
import { Logo } from '../components/common/Logo';
import {
  Compass,
  Eye,
  CheckCircle,
  Users,
  Shield,
  Heart,
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Brand Hero */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex justify-center">
          <Logo size="lg" showSlogan={true} />
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-[#123A70] tracking-tight">
          Sobre o Projeto JUVENTUDE DIGITAL 360°
        </h1>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
          Uma plataforma digital aberta, independente e comunitária, desenhada para aproximar os jovens de Moçambique das oportunidades que transformam trajetórias de vida.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-[#123A70] text-xs font-bold">
          <MapPin className="w-4 h-4 text-[#159447]" />
          <span>Foco Inicial: Província da Zambézia · Expansão: Todo Moçambique</span>
        </div>
      </div>

      {/* Missão, Visão e Compromisso */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Missão */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#123A70] flex items-center justify-center font-bold">
            <Compass className="w-6 h-6 text-[#123A70]" />
          </div>
          <h2 className="text-xl font-black text-[#123A70]">A Nossa Missão</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Facilitar o acesso de todos os jovens moçambicanos à informação rigorosa, ao conhecimento prático e às oportunidades reais de emprego, bolsas de estudo, capacitação profissional e empreendedorismo sustentável.
          </p>
        </div>

        {/* Visão */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#159447] flex items-center justify-center font-bold">
            <Eye className="w-6 h-6 text-[#159447]" />
          </div>
          <h2 className="text-xl font-black text-[#123A70]">A Nossa Visão</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Tornar o portal uma referência digital de excelência e utilidade pública para os jovens de Moçambique, servindo de ponte entre as aspirações da juventude e o ecossistema educativo e económico do país.
          </p>
        </div>
      </div>

      {/* Os Nossos Valores */}
      <div className="space-y-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159447]">
            Princípios Orientadores
          </span>
          <h2 className="text-2xl font-black text-[#123A70]">Os Nossos Valores</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <span className="font-black text-[#123A70] text-lg">01. Inclusão</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Oportunidades devem estar ao alcance de todos os jovens, independentemente da província, género, condição financeira ou capacidade técnica inicial.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <span className="font-black text-[#159447] text-lg">02. Inovação</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Uso inteligente e criativo da tecnologia digital para resolver os problemas reais das famílias e comunidades moçambicanas.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <span className="font-black text-amber-600 text-lg">03. Transparência</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Verificação escrupulosa das fontes oficiais. Tolerância zero para anúncios fraudulentos, cobranças indevidas ou promessas enganosas.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <span className="font-black text-[#123A70] text-lg">04. Aprendizagem Contínua</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Incentivo ao auto-didatismo, partilha de saberes e desenvolvimento de competências digitais e técnicas com relevância no mercado.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <span className="font-black text-[#159447] text-lg">05. Participação Juvenil</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Os jovens não são apenas consumidores de informação, mas sim cocriadores e agentes de mudança ativa na sociedade.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <span className="font-black text-red-600 text-lg">06. Responsabilidade</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Compromisso ético com a segurança de dados, privacidade e respeito pela legislação moçambicana de proteção de dados.
            </p>
          </div>
        </div>
      </div>

      {/* Nota de Transparência sobre o Estado do Projeto */}
      <div className="p-8 rounded-3xl bg-amber-50/80 border-2 border-amber-200 space-y-4">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-amber-700 shrink-0" />
          <h3 className="text-lg font-bold text-amber-950">
            Declaração de Transparência & Estado do Projeto
          </h3>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
          <p>
            O portal <strong>JUVENTUDE DIGITAL 360°</strong> encontra-se em fase de <strong>desenvolvimento e consolidação contínua</strong>.
          </p>
          <p>
            Em cumprimento escrupuloso dos padrões de integridade e honestidade intelectual, <strong>não reivindicamos parcerias institucionais formalizadas que ainda não foram celebradas</strong>. Todas as referências a entidades públicas (como ministérios, IBE, INEP) ou plataformas internacionais (como Google, Cisco, DAAD, British Council) dizem respeito exclusivamente a programas e editais públicos de livre acesso por elas disponibilizados para a sociedade.
          </p>
          <p>
            Se representas uma instituição pública, ONG, cooperativa ou empresa em Moçambique e desejas colaborar formalmente connosco, contacta-nos através do canal de propostas de parceria.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('contactos')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#123A70] hover:bg-[#0c264a] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            <span>Propor Parceria ou Apoio Institucional</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
