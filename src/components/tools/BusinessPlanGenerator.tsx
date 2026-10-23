import React, { useState, useEffect } from 'react';
import { BusinessPlanCanvas } from '../../types';
import { StorageService } from '../../services/storage';
import {
  Rocket,
  Printer,
  Save,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';

interface BusinessPlanGeneratorProps {
  onBack: () => void;
}

const TEMPLATE_SAMPLE: BusinessPlanCanvas = {
  projectName: 'Zambeze Fresh - Sumos & Polpas Naturais Locais',
  province: 'Zambézia (Quelimane)',
  valueProposition: 'Sumos 100% naturais de frutas tropicais da província (manga, maracujá, ananás e citrinos) sem conservantes artificiais, fornecidos em embalagens higiénicas e biodegradáveis a preços justos.',
  customerSegments: 'Estudantes secundários e universitários, trabalhadores de escritórios em Quelimane, pequenas pensões e eventos comunitários.',
  channels: 'Venda direta através de quiosque solar, encomendas via WhatsApp com entrega de bicicleta local, e fornecimento a cantinas escolares.',
  revenueStreams: 'Venda de garrafas individuais de 300ml e 500ml (preço acessível em Meticais), fornecimento mensal para escritórios e venda de polpa congelada para pastelarias.',
  costStructure: 'Aquisição de fruta diretamente aos pequenos agricultores de Nicoadala e Namacurra, embalagens e garrafas retornáveis, despesas de refrigeração solar e transporte de bicicleta.',
  keyActivities: 'Seleção rigorosa de frutas locais, higienização e prensagem a frio, rotulagem manual, distribuição diária e atendimento ao cliente com simpatia.',
  keyPartners: 'Associação de camponeses locais da Zambézia, fornecedores de embalagens, Instituto de Apoio às Pequenas e Médias Empresas (IPEME) e mentores da Juventude Digital 360°.'
};

export const BusinessPlanGenerator: React.FC<BusinessPlanGeneratorProps> = ({ onBack }) => {
  const [plan, setPlan] = useState<BusinessPlanCanvas>(
    () => StorageService.getSavedBusinessPlan() || TEMPLATE_SAMPLE
  );
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    StorageService.saveBusinessPlan(plan);
  }, [plan]);

  const handleSave = () => {
    StorageService.saveBusinessPlan(plan);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const loadExample = () => {
    setPlan(TEMPLATE_SAMPLE);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top action bar */}
      <div className="print:hidden mb-8 flex flex-wrap items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Voltar"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-[#123A70]">
              Criador de Plano de Negócios Simplificado
            </h1>
            <p className="text-xs text-slate-500">
              Metodologia Business Model Canvas adaptada à realidade empreendedora de Moçambique
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={loadExample}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#FFC928]" />
            <span>Carregar Exemplo Prático</span>
          </button>

          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            {saveSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                <span className="text-[#159447]">Guardado!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4 text-slate-500" />
                <span>Guardar</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#159447] hover:bg-[#0f6e34] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Exportar PDF</span>
          </button>
        </div>
      </div>

      {/* Canvas Grid */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-md print:shadow-none print:border-none print:p-0">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#159447]">
                JUVENTUDE DIGITAL 360° · FERRAMENTA DE EMPREENDEDORISMO
              </span>
              <h2 className="text-2xl font-black text-[#123A70]">
                {plan.projectName || 'Nome do Teu Empreendimento'}
              </h2>
            </div>
            <div className="text-xs text-slate-500 text-right">
              <span className="font-semibold text-slate-800">{plan.province || 'Moçambique'}</span>
              <p>Data: {new Date().toLocaleDateString('pt-MZ')}</p>
            </div>
          </div>
        </div>

        {/* Inputs & Canvas Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {/* 1. Proposta de Valor */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[#123A70]">1. Proposta de Valor Única</span>
                <span className="text-[10px] text-blue-700 font-semibold">O Teu Diferencial</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-2">
                Que problema resolves e porque os clientes vão preferir comprar a ti?
              </p>
            </div>
            <textarea
              rows={5}
              value={plan.valueProposition}
              onChange={(e) => setPlan({ ...plan, valueProposition: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-blue-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#123A70]"
            />
          </div>

          {/* 2. Segmentos de Clientes */}
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[#159447]">2. Clientes-Alvo</span>
                <span className="text-[10px] text-emerald-700 font-semibold">Quem Compra</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-2">
                Quem são as pessoas ou empresas que têm maior necessidade do teu produto?
              </p>
            </div>
            <textarea
              rows={5}
              value={plan.customerSegments}
              onChange={(e) => setPlan({ ...plan, customerSegments: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#159447]"
            />
          </div>

          {/* 3. Canais de Venda */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-amber-900">3. Canais de Venda & Contacto</span>
                <span className="text-[10px] text-amber-700 font-semibold">Como Chegas Até Eles</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-2">
                Como os clientes descobrem, encomendam e recebem o que vendes?
              </p>
            </div>
            <textarea
              rows={5}
              value={plan.channels}
              onChange={(e) => setPlan({ ...plan, channels: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          {/* 4. Atividades Chave */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-800">4. Atividades Principais</span>
                <span className="text-[10px] text-slate-500 font-semibold">O Dia a Dia</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-2">
                Quais são as tarefas diárias essenciais para produzir e entregar o serviço?
              </p>
            </div>
            <textarea
              rows={5}
              value={plan.keyActivities}
              onChange={(e) => setPlan({ ...plan, keyActivities: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
          </div>

          {/* 5. Parceiros Chave */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-800">5. Parceiros Estratégicos</span>
                <span className="text-[10px] text-slate-500 font-semibold">Quem te Ajuda</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-2">
                Quem são os fornecedores de matéria-prima, associações ou mentores?
              </p>
            </div>
            <textarea
              rows={5}
              value={plan.keyPartners}
              onChange={(e) => setPlan({ ...plan, keyPartners: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
          </div>

          {/* 6. Fontes de Receita */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-emerald-950">6. Como Ganhas Dinheiro</span>
                <span className="text-[10px] text-emerald-800 font-bold">Fontes de Receita</span>
              </div>
              <p className="text-[11px] text-slate-600 mb-2">
                Por que produtos específicos pagam e quais os métodos de pagamento (M-Pesa, dinheiro, etc.)?
              </p>
            </div>
            <textarea
              rows={5}
              value={plan.revenueStreams}
              onChange={(e) => setPlan({ ...plan, revenueStreams: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-emerald-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#159447]"
            />
          </div>

          {/* 7. Estrutura de Custos (Full width) */}
          <div className="lg:col-span-3 p-4 rounded-xl bg-red-50/40 border border-red-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-[#E53935]">7. Estrutura de Custos & Despesas Principais</span>
              <span className="text-[10px] text-red-700 font-semibold">Despesas Essenciais</span>
            </div>
            <p className="text-[11px] text-slate-500 mb-2">
              Quais os maiores gastos para manter o negócio a funcionar? (Ex: compra de mercadoria, transporte, aluguer, saldo de dados, luz)
            </p>
            <textarea
              rows={3}
              value={plan.costStructure}
              onChange={(e) => setPlan({ ...plan, costStructure: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-red-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#E53935]"
            />
          </div>
        </div>

        {/* Footer print info */}
        <div className="mt-8 pt-4 border-t border-slate-200 text-[10px] text-slate-500 flex justify-between items-center print:text-slate-600">
          <span>Plano estruturado no Portal JUVENTUDE DIGITAL 360° · Moçambique</span>
          <span>Pronto para apresentação a incubadoras, bancos ou editais FNDS/IdeiaLab</span>
        </div>
      </div>
    </div>
  );
};
