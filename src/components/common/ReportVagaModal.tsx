import React, { useState } from 'react';
import { X, Send, CheckCircle2, Briefcase } from 'lucide-react';
import { MozambiqueProvince, Opportunity } from '../../types';
import { StorageService } from '../../services/storage';

interface ReportVagaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newOpp: Opportunity) => void;
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
  'Niassa',
  'Nacional / Todo o País',
  'Remoto'
];

export const ReportVagaModal: React.FC<ReportVagaModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [entity, setEntity] = useState('');
  const [province, setProvince] = useState<MozambiqueProvince>('Zambézia');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState<Opportunity['category']>('Tecnologia');
  const [opportunityType, setOpportunityType] = useState<Opportunity['opportunityType']>('Estágio Profissional');
  const [requirementsText, setRequirementsText] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [officialUrl, setOfficialUrl] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [sourceName, setSourceName] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !entity.trim() || !deadline) {
      setErrorMsg('Por favor preenche o título da vaga, entidade contratante e o prazo.');
      return;
    }

    const reqs = requirementsText
      .split('\n')
      .map((r) => r.trim())
      .filter((r) => r.length > 0);

    const newRecord = StorageService.addOpportunity({
      title: title.trim(),
      entity: entity.trim(),
      location: province,
      city: city.trim() || undefined,
      category,
      opportunityType,
      requirements: reqs.length > 0 ? reqs : ['Requisitos a consultar no edital oficial'],
      description: description.trim() || 'Oportunidade comunicada pela comunidade de jovens.',
      deadline,
      sourceName: sourceName.trim() || 'Comunicação Direta de Empregador / Comunidade',
      officialUrl: officialUrl.trim() || 'https://inep.gov.mz/',
      howToApply: contactEmail
        ? `Enviar candidatura para ${contactEmail.trim()}`
        : 'Consultar o link oficial para instruções detalhadas.',
      contactEmail: contactEmail.trim() || undefined,
      isVerified: true
    });

    setSubmitted(true);
    onSuccess(newRecord);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-blue-50 text-[#123A70]">
            <Briefcase className="w-6 h-6 text-[#123A70]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Comunicar uma Nova Vaga</h3>
            <p className="text-xs text-slate-500">
              Ajuda outros jovens moçambicanos a encontrar oportunidades reais
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#159447] mx-auto animate-bounce" />
            <h4 className="text-base font-bold text-slate-900">Vaga Registada com Sucesso!</h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              A oportunidade foi inserida na listagem local com o carimbo oficial verificado. Obrigado por fortalecer a nossa comunidade jovem!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Título da Vaga *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Técnico de TI Júnior"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Empresa / Instituição *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Empresa Local Quelimane"
                  value={entity}
                  onChange={(e) => setEntity(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Província *</label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value as MozambiqueProvince)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70] bg-white"
                >
                  {PROVINCES.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Distrito / Cidade</label>
                <input
                  type="text"
                  placeholder="Ex: Quelimane, Mocuba..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tipo de Oportunidade</label>
                <select
                  value={opportunityType}
                  onChange={(e) => setOpportunityType(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70] bg-white"
                >
                  <option value="Estágio Profissional">Estágio Profissional</option>
                  <option value="Emprego Tempo Inteiro">Emprego Tempo Inteiro</option>
                  <option value="Meio Período">Meio Período</option>
                  <option value="Trabalho Remoto">Trabalho Remoto</option>
                  <option value="Programa Trainee">Programa Trainee</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Prazo de Candidatura *</label>
                <input
                  type="date"
                  required
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Área / Categoria</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70] bg-white"
                >
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Administração">Administração</option>
                  <option value="Educação">Educação</option>
                  <option value="Agricultura">Agricultura</option>
                  <option value="Finanças">Finanças</option>
                  <option value="Saúde">Saúde</option>
                  <option value="Comunicação">Comunicação</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Requisitos Principais (um por linha)
              </label>
              <textarea
                rows={3}
                placeholder="Ex: 12ª Classe ou superior&#10;Residência na Zambézia&#10;Noções de informática"
                value={requirementsText}
                onChange={(e) => setRequirementsText(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Link Oficial do Anúncio</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={officialUrl}
                  onChange={(e) => setOfficialUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">E-mail para Candidatura</label>
                <input
                  type="email"
                  placeholder="recrutamento@empresa.co.mz"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#159447] hover:bg-[#0f6e34] text-white font-bold cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Publicar Vaga</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
