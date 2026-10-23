import React, { useState } from 'react';
import { ContactSubmission, MozambiqueProvince } from '../types';
import { StorageService } from '../services/storage';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Handshake,
  MessageSquare,
  Sparkles,
  MapPin,
  Settings
} from 'lucide-react';

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

export const ContactsPage: React.FC = () => {
  const [formType, setFormType] = useState<ContactSubmission['type']>('mensagem');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [province, setProvince] = useState<MozambiqueProvince>('Zambézia');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMsg('Por favor preenche todos os campos obrigatórios (Nome, E-mail, Assunto e Mensagem).');
      return;
    }

    // Save to storage
    StorageService.submitContact({
      type: formType,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      province,
      subject: subject.trim(),
      message: message.trim()
    });

    setSubmitted(true);
    setErrorMsg('');
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#123A70] text-xs font-bold mb-2">
            <Mail className="w-3.5 h-3.5 text-[#159447]" />
            <span>Comunicação Direta & Apoio Comunitário</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#123A70]">
            Contactos, Sugestões e Parcerias
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Tens dúvidas, encontraste um erro num edital, queres sugerir melhorias ou propor uma parceria institucional? Fala diretamente connosco.
          </p>
        </div>

        {/* Note on real contact configuration */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-xs shrink-0">
          <p className="font-bold text-slate-900 flex items-center gap-1">
            <Settings className="w-3.5 h-3.5 text-[#123A70]" />
            <span>Configuração de Contactos:</span>
          </p>
          <p className="text-[11px] mt-0.5 leading-relaxed">
            Todas as mensagens enviadas ficam imediatamente guardadas de forma segura na caixa de entrada da administração para resposta célere.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Types & Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <h2 className="text-sm font-bold text-slate-900">Seleciona o Tipo de Contacto</h2>

            <div className="space-y-2 text-xs">
              <button
                type="button"
                onClick={() => setFormType('mensagem')}
                className={`w-full p-3 rounded-xl border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                  formType === 'mensagem'
                    ? 'border-[#123A70] bg-blue-50/70 text-[#123A70] font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <MessageSquare className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p className="leading-snug">Mensagem Geral ou Dúvida</p>
                  <p className="text-[11px] text-slate-500 font-normal">
                    Questões sobre como aceder a bolsas, vagas ou cursos.
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setFormType('correcao')}
                className={`w-full p-3 rounded-xl border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                  formType === 'correcao'
                    ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="leading-snug">Comunicar Correção ou Erro</p>
                  <p className="text-[11px] text-slate-500 font-normal">
                    Avisa-nos se um link estiver partido ou um prazo tiver mudado.
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setFormType('sugestao')}
                className={`w-full p-3 rounded-xl border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                  formType === 'sugestao'
                    ? 'border-[#159447] bg-green-50 text-green-950 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                <div>
                  <p className="leading-snug">Sugestão de Funcionalidade</p>
                  <p className="text-[11px] text-slate-500 font-normal">
                    Ideias para tornar a plataforma ainda mais útil para ti.
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setFormType('parceria')}
                className={`w-full p-3 rounded-xl border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                  formType === 'parceria'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <Handshake className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <p className="leading-snug">Proposta de Parceria Institucional</p>
                  <p className="text-[11px] text-slate-500 font-normal">
                    Empresas, ONGs, centros de formação e associações juvenis.
                  </p>
                </div>
              </button>
            </div>
          </div>

          <div className="p-5 bg-blue-50/60 rounded-2xl border border-blue-200 text-xs text-slate-700 space-y-2">
            <h3 className="font-bold text-[#123A70] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#159447]" />
              <span>Base Territorial</span>
            </h3>
            <p className="leading-relaxed">
              O projeto iniciou atividades com foco prioritário na <strong>Província da Zambézia</strong> (cidade de Quelimane, Mocuba, Gurúè e distritos circundantes), articulando com entidades de formação técnica e polos universitários.
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-[#159447] mx-auto animate-bounce" />
              <h3 className="text-xl font-bold text-slate-900">Mensagem Registada com Sucesso!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                A tua comunicação foi guardada no sistema da plataforma. A nossa equipa irá analisar e responder o mais breve possível para o e-mail indicado.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-xl bg-[#123A70] text-white text-xs font-bold cursor-pointer"
              >
                Enviar Outra Mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs text-slate-700">
              <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                {formType === 'mensagem' && 'Enviar Mensagem Geral'}
                {formType === 'correcao' && 'Comunicar Correção num Anúncio'}
                {formType === 'sugestao' && 'Submeter Sugestão'}
                {formType === 'parceria' && 'Apresentar Proposta de Parceria'}
              </h2>

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">O Teu Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Alberto Macuácua"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">E-mail para Resposta *</label>
                  <input
                    type="email"
                    required
                    placeholder="o-teu-email@exemplo.co.mz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Telefone / WhatsApp (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="+258 84 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">Província</label>
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
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Assunto *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Informação sobre edital de bolsa IBE"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Mensagem *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Escreve aqui os detalhes..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#123A70] hover:bg-[#0c264a] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Comunicação</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
