import React, { useState } from 'react';
import {
  Opportunity,
  Scholarship,
  Course,
  NewsItem,
  IdeaProject,
  ContactSubmission,
  PageId,
  MozambiqueProvince
} from '../types';
import { StorageService } from '../services/storage';
import {
  Lock,
  Unlock,
  Briefcase,
  GraduationCap,
  BookOpen,
  Newspaper,
  Lightbulb,
  Mail,
  Trash2,
  CheckCircle,
  Plus,
  Download,
  RotateCcw,
  KeyRound,
  ExternalLink,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

interface AdminPageProps {
  onNavigate: (page: PageId) => void;
  opportunities: Opportunity[];
  scholarships: Scholarship[];
  courses: Course[];
  news: NewsItem[];
  ideas: IdeaProject[];
  contacts: ContactSubmission[];
  onDataChanged: () => void;
  isAdmin: boolean;
  setIsAdmin: (status: boolean) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({
  onNavigate,
  opportunities,
  scholarships,
  courses,
  news,
  ideas,
  contacts,
  onDataChanged,
  isAdmin,
  setIsAdmin
}) => {
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<
    'vagas' | 'bolsas' | 'cursos' | 'noticias' | 'ideias' | 'mensagens'
  >('mensagens');

  // Change PIN modal state
  const [showPinModal, setShowPinModal] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [pinChangeSuccess, setPinChangeSuccess] = useState(false);

  // New Opportunity Form State inside Admin
  const [showAddOpp, setShowAddOpp] = useState(false);
  const [oppTitle, setOppTitle] = useState('');
  const [oppEntity, setOppEntity] = useState('');
  const [oppLocation, setOppLocation] = useState<MozambiqueProvince>('Zambézia');
  const [oppCategory, setOppCategory] = useState<Opportunity['category']>('Tecnologia');
  const [oppType, setOppType] = useState<Opportunity['opportunityType']>('Estágio Profissional');
  const [oppDeadline, setOppDeadline] = useState('');
  const [oppUrl, setOppUrl] = useState('');
  const [oppDesc, setOppDesc] = useState('');

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const currentPin = StorageService.getAdminPin();
    if (pinInput === currentPin) {
      StorageService.setAdminLoggedIn(true);
      setIsAdmin(true);
      setLoginError('');
      setPinInput('');
    } else {
      setLoginError('PIN incorreto. Tenta novamente.');
    }
  };

  const handleLogout = () => {
    StorageService.setAdminLoggedIn(false);
    setIsAdmin(false);
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.trim().length >= 4) {
      StorageService.setAdminPin(newPin.trim());
      setPinChangeSuccess(true);
      setTimeout(() => {
        setPinChangeSuccess(false);
        setShowPinModal(false);
        setNewPin('');
      }, 1500);
    }
  };

  const handleDeleteOpp = (id: string) => {
    if (window.confirm('Tens a certeza que desejas remover esta oportunidade?')) {
      StorageService.deleteOpportunity(id);
      onDataChanged();
    }
  };

  const handleDeleteScholarship = (id: string) => {
    if (window.confirm('Tens a certeza que desejas remover esta bolsa?')) {
      StorageService.deleteScholarship(id);
      onDataChanged();
    }
  };

  const handleDeleteCourse = (id: string) => {
    if (window.confirm('Tens a certeza que desejas remover este curso?')) {
      StorageService.deleteCourse(id);
      onDataChanged();
    }
  };

  const handleDeleteIdea = (id: string) => {
    if (window.confirm('Tens a certeza que desejas remover esta ideia?')) {
      StorageService.deleteIdea(id);
      onDataChanged();
    }
  };

  const handleApproveIdea = (id: string) => {
    StorageService.updateIdeaStatus(id, 'aprovada_em_destaque');
    onDataChanged();
  };

  const handleDeleteContact = (id: string) => {
    StorageService.deleteContact(id);
    onDataChanged();
  };

  const handleMarkRead = (id: string) => {
    StorageService.markContactRead(id);
    onDataChanged();
  };

  const handleAddOppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!oppTitle || !oppEntity || !oppDeadline) return;

    StorageService.addOpportunity({
      title: oppTitle,
      entity: oppEntity,
      location: oppLocation,
      category: oppCategory,
      opportunityType: oppType,
      requirements: ['Consultar o anúncio oficial para todos os requisitos'],
      description: oppDesc || 'Vaga publicada pela administração da plataforma.',
      deadline: oppDeadline,
      sourceName: 'Publicação Direta da Administração',
      officialUrl: oppUrl || 'https://inep.gov.mz/',
      howToApply: 'Consultar o link oficial.',
      isVerified: true
    });

    setShowAddOpp(false);
    setOppTitle('');
    setOppEntity('');
    setOppDeadline('');
    setOppUrl('');
    setOppDesc('');
    onDataChanged();
  };

  const exportBackupJSON = () => {
    const data = {
      opportunities,
      scholarships,
      courses,
      news,
      ideas,
      contacts,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_juventudedigital360_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleResetDefaults = () => {
    if (
      window.confirm(
        'Atenção: Isto irá repor todas as oportunidades, bolsas e cursos para os valores originais verificados. Continuar?'
      )
    ) {
      StorageService.resetAllData();
      onDataChanged();
    }
  };

  // If not logged in: show Login Form
  if (!isAdmin) {
    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#123A70] flex items-center justify-center mx-auto border border-blue-100">
            <Lock className="w-8 h-8 text-[#123A70]" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">Área Administrativa</h1>
            <p className="text-xs text-slate-500 mt-1">
              Acesso reservado para gestão e atualização do portal JUVENTUDE DIGITAL 360°
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs text-left">
            {loginError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                {loginError}
              </div>
            )}

            <div>
              <label className="block font-bold text-slate-800 mb-1">
                PIN ou Chave de Acesso
              </label>
              <input
                type="password"
                placeholder="Introduz o PIN..."
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70] text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-[#123A70] hover:bg-[#0c264a] text-white font-bold transition-colors cursor-pointer"
            >
              Entrar no Painel
            </button>
          </form>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 text-left">
            <span className="font-bold text-slate-700">Dica de Acesso Inicial:</span>
            <p className="mt-0.5">O PIN padrão pré-configurado é: <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-900 font-bold">admin360</code>. Podes alterá-lo assim que entrares.</p>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard Content
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Admin Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#159447] text-xs font-bold mb-2">
            <ShieldCheck className="w-4 h-4 text-[#159447]" />
            <span>Sessão de Gestão Ativa</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#123A70]">
            Painel de Administração 360°
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Gere vagas, bolsas, aprova ideias submetidas pela comunidade e responde a mensagens.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowPinModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Alterar PIN</span>
          </button>

          <button
            onClick={exportBackupJSON}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar Dados (JSON)</span>
          </button>

          <button
            onClick={handleResetDefaults}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-red-200 text-xs font-semibold text-red-700 hover:bg-red-50 cursor-pointer"
            title="Repor dados originais"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Repor</span>
          </button>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
          >
            <Unlock className="w-3.5 h-3.5" />
            <span>Sair</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs">
        {[
          { id: 'mensagens', label: `Mensagens & Parcerias (${contacts.filter(c => !c.isRead).length} novas)`, icon: <Mail className="w-4 h-4" /> },
          { id: 'ideias', label: `Ideias Juvenis (${ideas.length})`, icon: <Lightbulb className="w-4 h-4" /> },
          { id: 'vagas', label: `Vagas (${opportunities.length})`, icon: <Briefcase className="w-4 h-4" /> },
          { id: 'bolsas', label: `Bolsas (${scholarships.length})`, icon: <GraduationCap className="w-4 h-4" /> },
          { id: 'cursos', label: `Cursos (${courses.length})`, icon: <BookOpen className="w-4 h-4" /> },
          { id: 'noticias', label: `Notícias (${news.length})`, icon: <Newspaper className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#123A70] text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab: Mensagens */}
      {activeTab === 'mensagens' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">
              Mensagens, Sugestões e Propostas de Parceria Recebidas
            </h2>
            <span className="text-xs text-slate-500">{contacts.length} comunicações registadas</span>
          </div>

          {contacts.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
              Nenhuma mensagem recebida ainda. Quando um utilizador enviar uma sugestão ou contacto, aparecerá aqui.
            </div>
          ) : (
            <div className="space-y-3">
              {contacts.map((c) => (
                <div
                  key={c.id}
                  className={`p-5 rounded-2xl border transition-colors ${
                    c.isRead ? 'bg-white border-slate-200' : 'bg-blue-50/50 border-blue-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
                        {c.type}
                      </span>
                      <span className="font-bold text-slate-900">{c.name}</span>
                      <span className="text-slate-500">({c.email})</span>
                      {c.phone && <span className="text-slate-500">· Tel: {c.phone}</span>}
                    </div>
                    <span className="text-slate-400 text-[11px] font-mono">{c.submittedAt.split('T')[0]}</span>
                  </div>

                  <h3 className="text-sm font-bold text-[#123A70] mb-1">{c.subject}</h3>
                  <p className="text-xs text-slate-700 whitespace-pre-line leading-relaxed mb-4 bg-slate-50/80 p-3 rounded-lg border border-slate-100">
                    {c.message}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <span className="text-slate-400 text-[11px]">Província: {c.province || 'Não especificada'}</span>
                    <div className="flex items-center gap-2">
                      {!c.isRead && (
                        <button
                          onClick={() => handleMarkRead(c.id)}
                          className="px-3 py-1 rounded bg-[#159447] text-white font-bold text-[11px] cursor-pointer"
                        >
                          Marcar como Lida
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteContact(c.id)}
                        className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab: Ideias */}
      {activeTab === 'ideias' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">
              Ideias Submetidas no Laboratório de Inovação
            </h2>
            <span className="text-xs text-slate-500">{ideas.length} ideias no total</span>
          </div>

          <div className="space-y-4">
            {ideas.map((idea) => (
              <div
                key={idea.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-[#123A70] font-bold text-[11px]">
                      {idea.area}
                    </span>
                    <span className="text-slate-500">Província: {idea.province}</span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      idea.status === 'aprovada_em_destaque' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {idea.status === 'aprovada_em_destaque' ? 'Em Destaque Público' : 'Em Revisão'}
                    </span>
                  </div>
                  <span className="text-slate-400">{idea.submittedAt}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900">{idea.projectName}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div>
                    <span className="font-bold text-slate-700 block mb-0.5">Problema:</span>
                    <p className="text-slate-600">{idea.problem}</p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block mb-0.5">Solução:</span>
                    <p className="text-slate-600">{idea.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
                  <div className="text-slate-500">
                    <span>Autor: {idea.authorName || 'Anónimo'}</span> ·{' '}
                    <span>Contacto: {idea.contactEmailOrPhone || 'Não facultado'}</span> ·{' '}
                    <span>Apoios: {idea.likesCount}</span> ·{' '}
                    <span className={idea.publicConsentGiven ? 'text-green-600 font-bold' : 'text-slate-400'}>
                      {idea.publicConsentGiven ? 'Consentimento Público: SIM' : 'Consentimento Público: NÃO'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {idea.status !== 'aprovada_em_destaque' && (
                      <button
                        onClick={() => handleApproveIdea(idea.id)}
                        className="px-3 py-1 rounded-lg bg-[#159447] text-white font-bold text-xs cursor-pointer"
                      >
                        Aprovar para Destaque
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteIdea(idea.id)}
                      className="p-1.5 text-red-500 hover:text-red-700 cursor-pointer"
                      title="Eliminar Ideia"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Vagas */}
      {activeTab === 'vagas' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Vagas de Emprego e Estágios</h2>
            <button
              onClick={() => setShowAddOpp(!showAddOpp)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#159447] text-white text-xs font-bold cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Adicionar Vaga</span>
            </button>
          </div>

          {showAddOpp && (
            <form onSubmit={handleAddOppSubmit} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
              <h3 className="font-bold text-slate-900">Nova Oportunidade</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Título da vaga..."
                  value={oppTitle}
                  onChange={(e) => setOppTitle(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-slate-300 bg-white"
                />
                <input
                  type="text"
                  required
                  placeholder="Empresa / Instituição..."
                  value={oppEntity}
                  onChange={(e) => setOppEntity(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-slate-300 bg-white"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <select
                  value={oppLocation}
                  onChange={(e) => setOppLocation(e.target.value as any)}
                  className="px-3 py-2 rounded-lg border border-slate-300 bg-white"
                >
                  <option value="Zambézia">Zambézia</option>
                  <option value="Maputo Cidade">Maputo Cidade</option>
                  <option value="Sofala">Sofala</option>
                  <option value="Nampula">Nampula</option>
                  <option value="Nacional / Todo o País">Nacional / Todo o País</option>
                  <option value="Remoto">Remoto</option>
                </select>
                <input
                  type="date"
                  required
                  value={oppDeadline}
                  onChange={(e) => setOppDeadline(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-slate-300 bg-white"
                />
                <input
                  type="url"
                  placeholder="Link oficial https://..."
                  value={oppUrl}
                  onChange={(e) => setOppUrl(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-slate-300 bg-white"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Descrição resumida..."
                value={oppDesc}
                onChange={(e) => setOppDesc(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddOpp(false)}
                  className="px-3 py-1.5 rounded-lg border border-slate-300"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#123A70] text-white font-bold"
                >
                  Guardar Vaga
                </button>
              </div>
            </form>
          )}

          <div className="space-y-3">
            {opportunities.map((opp) => (
              <div
                key={opp.id}
                className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs"
              >
                <div>
                  <h4 className="font-bold text-slate-900">{opp.title}</h4>
                  <p className="text-slate-500">
                    {opp.entity} · {opp.location} · Prazo: {opp.deadline}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteOpp(opp.id)}
                  className="text-red-500 hover:text-red-700 p-2 cursor-pointer"
                  title="Eliminar"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Bolsas */}
      {activeTab === 'bolsas' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Bolsas de Estudo Verificadas</h2>
            <span className="text-xs text-slate-500">{scholarships.length} programas</span>
          </div>

          <div className="space-y-3">
            {scholarships.map((s) => (
              <div
                key={s.id}
                className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs"
              >
                <div>
                  <h4 className="font-bold text-slate-900">{s.title}</h4>
                  <p className="text-slate-500">
                    {s.institution} · {s.level} · {s.country} · Prazo: {s.deadline}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteScholarship(s.id)}
                  className="text-red-500 hover:text-red-700 p-2 cursor-pointer"
                  title="Eliminar"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Cursos */}
      {activeTab === 'cursos' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Cursos e Formações</h2>
            <span className="text-xs text-slate-500">{courses.length} cursos</span>
          </div>

          <div className="space-y-3">
            {courses.map((c) => (
              <div
                key={c.id}
                className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs"
              >
                <div>
                  <h4 className="font-bold text-slate-900">{c.title}</h4>
                  <p className="text-slate-500">
                    {c.entity} · {c.category} · {c.costType}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteCourse(c.id)}
                  className="text-red-500 hover:text-red-700 p-2 cursor-pointer"
                  title="Eliminar"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Notícias */}
      {activeTab === 'noticias' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Notícias e Comunicados Oficiais</h2>
            <span className="text-xs text-slate-500">{news.length} artigos</span>
          </div>

          <div className="space-y-3">
            {news.map((n) => (
              <div
                key={n.id}
                className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs"
              >
                <div>
                  <h4 className="font-bold text-slate-900">{n.title}</h4>
                  <p className="text-slate-500">
                    {n.sourceName} · {n.publishedAt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Change PIN Modal */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm">Definir Novo PIN de Acesso</h3>
            {pinChangeSuccess ? (
              <div className="p-3 bg-green-50 text-green-800 rounded-lg text-xs font-bold">
                PIN alterado com sucesso!
              </div>
            ) : (
              <form onSubmit={handleChangePin} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-600 mb-1">Novo PIN (mínimo 4 caracteres)</label>
                  <input
                    type="password"
                    required
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPinModal(false)}
                    className="px-3 py-1.5 rounded-lg border border-slate-300"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-[#123A70] text-white font-bold"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
