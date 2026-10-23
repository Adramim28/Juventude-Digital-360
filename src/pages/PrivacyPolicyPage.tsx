import React from 'react';
import { ShieldCheck, Lock, Eye, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#123A70] text-xs font-bold">
          <ShieldCheck className="w-4 h-4 text-[#159447]" />
          <span>Proteção e Transparência de Dados</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#123A70]">
          Política de Privacidade e Proteção de Dados
        </h1>
        <p className="text-xs text-slate-500">
          Última atualização: {new Date().toLocaleDateString('pt-MZ')} · JUVENTUDE DIGITAL 360°
        </p>
      </div>

      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">1. Compromisso Fundamental</h2>
          <p>
            A plataforma <strong>JUVENTUDE DIGITAL 360°</strong> tem como prioridade ética a salvaguarda da privacidade e a integridade das informações partilhadas pelos jovens utilizadores de Moçambique. Não vendemos, alugamos nem cedemos dados pessoais para efeitos comerciais ou de publicidade indesejada.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">2. Dados Recolhidos e Finalidade</h2>
          <p>Os dados tratados na plataforma limitam-se estritamente ao necessário para a prestação dos serviços cívicos e educativos:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
            <li><strong>Formulários de Contacto e Parceria:</strong> Nome, e-mail, contacto telefónico opcional e teor da mensagem para fins de resposta direta.</li>
            <li><strong>Laboratório de Ideias Juvenis:</strong> Nome do projeto, província, descrição do problema e solução. Dados de autoria e contacto só são solicitados se o jovem desejar mentoria ou ligação a parceiros.</li>
            <li><strong>Criador de Currículos e Plano de Negócios:</strong> Toda a informação inserida nestas ferramentas é processada e armazenada de forma local no navegador do próprio utilizador (<em>Local Storage</em>), garantindo total controlo e privacidade.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">3. Consentimento Explícito e Divulgação de Projetos</h2>
          <p>
            Em cumprimento das diretrizes de consentimento informado, <strong>nenhuma ideia ou projeto submetido ao Laboratório de Ideias será divulgado publicamente no portal sem que o utilizador assinale explicitamente a caixa de seleção de consentimento</strong>. Caso a opção não seja ativada, a proposta permanece em arquivo estritamente confidencial para revisão interna.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">4. Ligações para Portais Oficiais Externos</h2>
          <p>
            O portal direciona os utilizadores para websites oficiais do Estado Moçambicano (como INEP, IBE, MCTES) e programas internacionais credenciados (Chevening, DAAD, Camões). Uma vez redirecionado para um portal externo, aplica-se a política de privacidade da instituição de destino.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">5. Direitos dos Jovens Titulares de Dados</h2>
          <p>
            Qualquer jovem que tenha submetido uma ideia, mensagem ou vaga tem o direito irrevogável de solicitar a consulta, retificação ou eliminação completa dos seus dados dos nossos registos através do formulário de contactos ou por comunicação direta à administração da plataforma.
          </p>
        </section>
      </div>
    </div>
  );
};
