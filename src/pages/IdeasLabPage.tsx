import React, { useState, useRef } from 'react';
import { IdeaProject, MozambiqueProvince } from '../types';
import { StorageService } from '../services/storage';
import {
  Lightbulb,
  Send,
  ThumbsUp,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Sparkles,
  Users,
  Target
} from 'lucide-react';

interface IdeasLabPageProps {
  ideas: IdeaProject[];
  onIdeaSubmitted: (newIdea: IdeaProject) => void;
  onLikeIdea: (id: string) => void;
}

const PROVINCES: MozambiqueProvince[] = [
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
  'Niassa'
];

const AREAS = [
  'Educação',
  'Agricultura & Agronegócio',
  'Ambiente & Sustentabilidade',
  'Cultura & Artes',
  'Tecnologia',
  'Empreendedorismo Comunitário',
  'Saúde & Bem-estar'
];

export const IdeasLabPage: React.FC<IdeasLabPageProps> = ({
  ideas,
  onIdeaSubmitted,
  onLikeIdea
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  // Form State
  const [projectName, setProjectName] = useState('');
  const [area, setArea] = useState<IdeaProject['area']>('Agricultura & Agronegócio');
  const [province, setProvince] = useState<MozambiqueProvince>('Zambézia');
  const [district, setDistrict] = useState('');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [targetBeneficiaries, setTargetBeneficiaries] = useState('');
  const [resourcesNeeded, setResourcesNeeded] = useState('');
  const [projectPhase, setProjectPhase] = useState<IdeaProject['projectPhase']>('Ideia Inicial');
  const [authorName, setAuthorName] = useState('');
  const [contactEmailOrPhone, setContactEmailOrPhone] = useState('');
  const [publicConsentGiven, setPublicConsentGiven] = useState(false);

  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName.trim() || !problem.trim() || !solution.trim() || !targetBeneficiaries.trim()) {
      setErrorMessage('Por favor preenche todos os campos obrigatórios do teu projeto.');
      return;
    }

    const created = StorageService.submitIdea({
      projectName: projectName.trim(),
      area,
      province,
      district: district.trim() || undefined,
      problem: problem.trim(),
      solution: solution.trim(),
      targetBeneficiaries: targetBeneficiaries.trim(),
      resourcesNeeded: resourcesNeeded.trim() || 'Mentoria e apoio inicial de estruturação',
      projectPhase,
      authorName: authorName.trim() || undefined,
      contactEmailOrPhone: contactEmailOrPhone.trim() || undefined,
      publicConsentGiven
    });

    onIdeaSubmitted(created);
    setSubmittedSuccess(true);
    setErrorMessage('');

    // Reset fields
    setProjectName('');
    setProblem('');
    setSolution('');
    setTargetBeneficiaries('');
    setResourcesNeeded('');
    setAuthorName('');
    setContactEmailOrPhone('');
    setPublicConsentGiven(false);
  };

  const featuredIdeas = ideas.filter(
    (i) => i.status === 'aprovada_em_destaque' || i.publicConsentGiven
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero Banner with authentic image */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="p-6 sm:p-10 lg:col-span-7 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold">
              Criatividade Juvenil com Impacto Real
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#123A70] leading-tight">
              Laboratório de Ideias Juvenis 360°
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Um espaço seguro e participativo para os jovens moçambicanos apresentarem soluções locais para os desafios da sua comunidade, distrito e província.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToForm}
                className="px-5 py-2.5 rounded-xl bg-[#159447] hover:bg-[#0f6e34] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
              >
                Enviar a Minha Ideia
              </button>
              <button
                onClick={scrollToForm}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                Apresentar um Projeto
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative bg-slate-100">
            <img
              src="/src/assets/images/ideas_lab_innovation_mozambique_1792781139148.jpg"
              alt="Jovens moçambicanos num laboratório de ideias discutindo soluções comunitárias"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-6">
              <span className="text-white text-xs font-semibold">
                Ideias que Nascem na Comunidade e Transformam Vidas
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Ideas Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#159447]">
              Comunidade Ativa
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#123A70]">
              Ideias Juvenis em Destaque
            </h2>
          </div>
          <button
            onClick={scrollToForm}
            className="text-xs font-bold text-[#123A70] hover:underline cursor-pointer"
          >
            Submeter a tua ideia &rarr;
          </button>
        </div>

        {featuredIdeas.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
            <p className="text-xs text-slate-500">
              Ainda não existem ideias com consentimento público publicadas. Sê o primeiro a partilhar!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredIdeas.map((idea) => (
              <div
                key={idea.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-[#123A70]">{idea.area}</span>
                    <span className="text-slate-500 text-[11px] font-medium">
                      {idea.province} {idea.district ? `(${idea.district})` : ''}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                    {idea.projectName}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-600 mb-4">
                    <div className="bg-red-50/50 p-2.5 rounded-lg border border-red-100">
                      <p className="font-bold text-red-900 text-[11px]">Problema Identificado:</p>
                      <p className="text-slate-700 leading-relaxed text-[11px] mt-0.5 line-clamp-3">
                        {idea.problem}
                      </p>
                    </div>

                    <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100">
                      <p className="font-bold text-emerald-900 text-[11px]">Solução Proposta:</p>
                      <p className="text-slate-700 leading-relaxed text-[11px] mt-0.5 line-clamp-3">
                        {idea.solution}
                      </p>
                    </div>

                    <div className="text-[11px] text-slate-500 pt-1">
                      <span className="font-semibold text-slate-700">Beneficiários:</span> {idea.targetBeneficiaries}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-800 text-[11px]">
                      {idea.authorName || 'Autor Jovem'}
                    </p>
                    <span className="text-[10px] text-slate-400">{idea.projectPhase}</span>
                  </div>

                  <button
                    onClick={() => onLikeIdea(idea.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-amber-50 hover:text-amber-800 text-slate-700 font-bold transition-colors cursor-pointer"
                    title="Apoiar esta ideia comunitária"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-amber-500" />
                    <span>{idea.likesCount}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submission Form Section */}
      <div
        ref={formRef}
        className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6"
      >
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Lightbulb className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#123A70]">
                Apresenta a Tua Ideia ou Projeto
              </h2>
              <p className="text-xs text-slate-500">
                Preenche os campos abaixo. Respeitamos a tua autoria e privacidade.
              </p>
            </div>
          </div>
        </div>

        {submittedSuccess ? (
          <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
            <CheckCircle2 className="w-12 h-12 text-[#159447] mx-auto animate-bounce" />
            <h3 className="text-lg font-bold text-slate-900">Ideia Submetida com Sucesso!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Obrigado por contribuíres para a inovação em Moçambique! A tua proposta foi registada na plataforma e poderá ser consultada pela nossa equipa de mentores.
            </p>
            <button
              onClick={() => setSubmittedSuccess(false)}
              className="mt-4 px-4 py-2 rounded-lg bg-[#123A70] text-white text-xs font-bold cursor-pointer"
            >
              Submeter Outra Ideia
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs text-slate-700">
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-800 mb-1">Nome do Projeto *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Secador Solar de Frutas em Mocuba"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Área Temática *</label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                >
                  {AREAS.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-bold text-slate-800 mb-1">Província *</label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                >
                  {PROVINCES.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Distrito / Localidade</label>
                <input
                  type="text"
                  placeholder="Ex: Quelimane, Nicoadala, Alto Molócuè..."
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Fase do Projeto</label>
                <select
                  value={projectPhase}
                  onChange={(e) => setProjectPhase(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                >
                  <option value="Ideia Inicial">Ideia Inicial</option>
                  <option value="Pesquisa e Validação">Pesquisa e Validação</option>
                  <option value="Protótipo / Piloto">Protótipo / Piloto</option>
                  <option value="Em Atividade Inicial">Em Atividade Inicial</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Qual é o Problema que queres resolver? *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Descreve o desafio enfrentado na tua comunidade..."
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Qual é a tua Solução Proposta? *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Explica a tua ideia prática e inovadora..."
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Público Beneficiário *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: 50 jovens camponeses da comunidade..."
                  value={targetBeneficiaries}
                  onChange={(e) => setTargetBeneficiaries(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Recursos Necessários para Avançar
                </label>
                <input
                  type="text"
                  placeholder="Ex: Mentoria técnica, materiais de carpintaria..."
                  value={resourcesNeeded}
                  onChange={(e) => setResourcesNeeded(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>
            </div>

            {/* Author info (Optional) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  O Teu Nome ou Nome do Grupo (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Celso Martins"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">
                  Contacto (Telefone / WhatsApp ou E-mail - Opcional)
                </label>
                <input
                  type="text"
                  placeholder="+258 84 000 0000"
                  value={contactEmailOrPhone}
                  onChange={(e) => setContactEmailOrPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>
            </div>

            {/* Mandatory Explicit Consent Checkbox (As specified in prompt: "Pede consentimento separado antes de divulgar publicamente qualquer ideia.") */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={publicConsentGiven}
                  onChange={(e) => setPublicConsentGiven(e.target.checked)}
                  className="mt-1 rounded text-[#159447] focus:ring-[#159447] w-4 h-4 shrink-0"
                />
                <div className="text-xs leading-relaxed">
                  <span className="font-bold text-[#123A70]">
                    Consentimento de Divulgação Pública:
                  </span>{' '}
                  <span className="text-slate-700">
                    Autorizo que o resumo deste projeto seja apresentado publicamente no portal Juventude Digital 360° para visualização e apoio de outros jovens, parceiros e mentores. Se não marcar esta opção, o projeto permanecerá estritamente privado para análise interna da equipa técnica.
                  </span>
                </div>
              </label>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#159447] hover:bg-[#0f6e34] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar a Minha Ideia</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
