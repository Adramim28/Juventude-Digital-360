import React from 'react';
import { FileText, ShieldAlert, Award } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#123A70] text-xs font-bold">
          <FileText className="w-4 h-4 text-[#123A70]" />
          <span>Regras e Transparência de Utilização</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#123A70]">
          Termos e Condições de Utilização
        </h1>
        <p className="text-xs text-slate-500">
          Vigência: 2026 / 2027 · Plataforma JUVENTUDE DIGITAL 360° Moçambique
        </p>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">1. Objeto e Natureza da Plataforma</h2>
          <p>
            O <strong>JUVENTUDE DIGITAL 360°</strong> é um serviço informativo e comunitário de acesso livre, sem fins lucrativos, criado para reunir oportunidades de emprego, bolsas de estudo, cursos gratuitos e fomento ao empreendedorismo juvenil em Moçambique, com ênfase na Zambézia e expansão nacional.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">2. Gratuidade Absoluta de Acesso</h2>
          <p>
            O acesso a todas as secções da plataforma, incluindo o Criador de Currículos, o Criador de Planos de Negócio, a consulta de bolsas e o Laboratório de Ideias, é <strong>100% gratuito</strong>. Nenhuma pessoa ou entidade está autorizada a cobrar taxas em nome da Juventude Digital 360°.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">3. Propriedade Intelectual das Ideias dos Jovens</h2>
          <p>
            Todas as ideias, protótipos e modelos de negócio submetidos ao <strong>Laboratório de Ideias Juvenis</strong> pertencem integral e exclusivamente aos respetivos autores e criadores. A submissão à plataforma confere apenas autorização para exibição comunitária (quando consentida) com vista a obter apoios, mentoria e visibilidade, sem qualquer cessão de direitos de exploração comercial.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">4. Veracidade e Exoneração de Responsabilidade</h2>
          <p>
            A equipa empenha todos os esforços razoáveis para verificar a autenticidade de editais, links de concursos e vagas antes da publicação. Contudo, as decisões finais de recrutamento, atribuição de bolsas de estudo e admissão em cursos cabem unicamente às respetivas entidades promotoras oficiais. Recomendamos vivamente a consulta dos regulamentos oficiais através dos links disponibilizados.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">5. Conduta dos Utilizadores</h2>
          <p>
            É estritamente vedada a submissão de anúncios falsos, esquemas de burla financeira (pirâmides, pedidos de adiantamento de dinheiro), linguagem discriminatória ou conteúdos que violem as leis da República de Moçambique. Infrações resultarão na remoção imediata e bloqueio preventivo.
          </p>
        </section>
      </div>
    </div>
  );
};
