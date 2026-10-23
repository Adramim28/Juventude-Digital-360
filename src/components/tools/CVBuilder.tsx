import React, { useState, useEffect } from 'react';
import { UserCV } from '../../types';
import { StorageService } from '../../services/storage';
import {
  FileText,
  Printer,
  Save,
  Plus,
  Trash2,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Download
} from 'lucide-react';

interface CVBuilderProps {
  onBack: () => void;
}

const DEFAULT_CV: UserCV = {
  fullName: 'Manuel Sitoe',
  professionalTitle: 'Técnico de Suporte Informático & Desenvolvedor Júnior',
  email: 'manuel.sitoe@exemplo.co.mz',
  phone: '+258 84 123 4567',
  province: 'Zambézia',
  city: 'Quelimane',
  bio: 'Jovem moçambicano dedicado à tecnologia e resolução de problemas práticos. Forte aptidão para manutenção de sistemas, apoio ao utilizador e desenvolvimento web sustentável para contextos de conectividade desafiadora.',
  education: [
    {
      school: 'Instituto Médio Politécnico de Quelimane',
      degree: 'Curso Médio Técnico em Informática',
      year: '2023 - 2025'
    }
  ],
  experience: [
    {
      company: 'Cibercafé & Serviços Digitais Zambeze',
      role: 'Assistente Técnico e Atendimento',
      period: 'Jan 2025 - Presente',
      responsibilities: 'Configuração de impressoras, apoio a utilizadores em navegação na Internet, digitação de documentos e diagnóstico de falhas de hardware.'
    }
  ],
  skills: [
    'Manutenção de Computadores',
    'HTML5 & CSS3',
    'Configuração de Redes Wi-Fi',
    'Microsoft Office (Word, Excel, PowerPoint)',
    'Atendimento ao Público'
  ],
  languages: ['Português (Nativo)', 'Inglês (Intermédio)', 'Língua Chuabo / Lomwe (Fluente)']
};

export const CVBuilder: React.FC<CVBuilderProps> = ({ onBack }) => {
  const [cv, setCv] = useState<UserCV>(() => StorageService.getSavedCV() || DEFAULT_CV);
  const [newSkill, setNewSkill] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    StorageService.saveCV(cv);
  }, [cv]);

  const handleSave = () => {
    StorageService.saveCV(cv);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const addEducation = () => {
    setCv({
      ...cv,
      education: [...cv.education, { school: '', degree: '', year: '' }]
    });
  };

  const removeEducation = (index: number) => {
    setCv({
      ...cv,
      education: cv.education.filter((_, i) => i !== index)
    });
  };

  const addExperience = () => {
    setCv({
      ...cv,
      experience: [...cv.experience, { company: '', role: '', period: '', responsibilities: '' }]
    });
  };

  const removeExperience = (index: number) => {
    setCv({
      ...cv,
      experience: cv.experience.filter((_, i) => i !== index)
    });
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;
    setCv({ ...cv, skills: [...cv.skills, newSkill.trim()] });
    setNewSkill('');
  };

  const removeSkill = (index: number) => {
    setCv({ ...cv, skills: cv.skills.filter((_, i) => i !== index) });
  };

  const addLang = () => {
    if (!newLanguage.trim()) return;
    setCv({ ...cv, languages: [...cv.languages, newLanguage.trim()] });
    setNewLanguage('');
  };

  const removeLang = (index: number) => {
    setCv({ ...cv, languages: cv.languages.filter((_, i) => i !== index) });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Controls (Hidden when printing) */}
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
            <h1 className="text-xl font-bold text-[#123A70]">Criador de Currículo Profissional</h1>
            <p className="text-xs text-slate-500">
              Formato padronizado para empresas, estágios e concursos em Moçambique
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
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
                <span>Guardar Rascunho</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#123A70] hover:bg-[#0c264a] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Exportar PDF</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Form (Hidden on Print) */}
        <div className="lg:col-span-5 space-y-6 print:hidden bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-slate-900">Preenche os teus Dados</h2>
            <span className="text-[11px] text-[#159447] font-semibold">Atualização em tempo real</span>
          </div>

          {/* Dados Pessoais */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#123A70]">1. Identificação</h3>
            <div>
              <label className="block text-slate-600 mb-1">Nome Completo</label>
              <input
                type="text"
                value={cv.fullName}
                onChange={(e) => setCv({ ...cv, fullName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
              />
            </div>
            <div>
              <label className="block text-slate-600 mb-1">Título / Cargo Pretendido</label>
              <input
                type="text"
                value={cv.professionalTitle}
                onChange={(e) => setCv({ ...cv, professionalTitle: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-600 mb-1">E-mail</label>
                <input
                  type="email"
                  value={cv.email}
                  onChange={(e) => setCv({ ...cv, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">Telefone</label>
                <input
                  type="text"
                  value={cv.phone}
                  onChange={(e) => setCv({ ...cv, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-600 mb-1">Província</label>
                <input
                  type="text"
                  value={cv.province}
                  onChange={(e) => setCv({ ...cv, province: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">Cidade / Distrito</label>
                <input
                  type="text"
                  value={cv.city}
                  onChange={(e) => setCv({ ...cv, city: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-600 mb-1">Resumo / Perfil Profissional</label>
              <textarea
                rows={3}
                value={cv.bio}
                onChange={(e) => setCv({ ...cv, bio: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300"
              />
            </div>
          </div>

          {/* Formação Académica */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#123A70]">2. Formação Académica</h3>
              <button
                type="button"
                onClick={addEducation}
                className="text-[#159447] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Adicionar</span>
              </button>
            </div>
            {cv.education.map((edu, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2 relative">
                <button
                  type="button"
                  onClick={() => removeEducation(idx)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <input
                  type="text"
                  placeholder="Instituição (Ex: Escola Secundária / UEM / Unilúrio)"
                  value={edu.school}
                  onChange={(e) => {
                    const next = [...cv.education];
                    next[idx].school = e.target.value;
                    setCv({ ...cv, education: next });
                  }}
                  className="w-full px-2 py-1.5 rounded border border-slate-300 bg-white"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Curso / Grau (Ex: 12ª Classe / Licenciatura)"
                    value={edu.degree}
                    onChange={(e) => {
                      const next = [...cv.education];
                      next[idx].degree = e.target.value;
                      setCv({ ...cv, education: next });
                    }}
                    className="w-full px-2 py-1.5 rounded border border-slate-300 bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Ano / Período (Ex: 2022 - 2024)"
                    value={edu.year}
                    onChange={(e) => {
                      const next = [...cv.education];
                      next[idx].year = e.target.value;
                      setCv({ ...cv, education: next });
                    }}
                    className="w-full px-2 py-1.5 rounded border border-slate-300 bg-white"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Experiência */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#123A70]">3. Experiência ou Estágios</h3>
              <button
                type="button"
                onClick={addExperience}
                className="text-[#159447] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Adicionar</span>
              </button>
            </div>
            {cv.experience.map((exp, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2 relative">
                <button
                  type="button"
                  onClick={() => removeExperience(idx)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Empresa / Organização"
                    value={exp.company}
                    onChange={(e) => {
                      const next = [...cv.experience];
                      next[idx].company = e.target.value;
                      setCv({ ...cv, experience: next });
                    }}
                    className="w-full px-2 py-1.5 rounded border border-slate-300 bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Função / Cargo"
                    value={exp.role}
                    onChange={(e) => {
                      const next = [...cv.experience];
                      next[idx].role = e.target.value;
                      setCv({ ...cv, experience: next });
                    }}
                    className="w-full px-2 py-1.5 rounded border border-slate-300 bg-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Período (Ex: Fev 2024 - Ago 2024)"
                  value={exp.period}
                  onChange={(e) => {
                    const next = [...cv.experience];
                    next[idx].period = e.target.value;
                    setCv({ ...cv, experience: next });
                  }}
                  className="w-full px-2 py-1.5 rounded border border-slate-300 bg-white"
                />
                <textarea
                  rows={2}
                  placeholder="Principais tarefas e responsabilidades..."
                  value={exp.responsibilities}
                  onChange={(e) => {
                    const next = [...cv.experience];
                    next[idx].responsibilities = e.target.value;
                    setCv({ ...cv, experience: next });
                  }}
                  className="w-full px-2 py-1.5 rounded border border-slate-300 bg-white"
                />
              </div>
            ))}
          </div>

          {/* Competências & Idiomas */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h3 className="font-bold text-[#123A70]">4. Competências & Idiomas</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nova competência..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                className="flex-1 px-2.5 py-1.5 rounded border border-slate-300"
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-3 py-1.5 bg-[#123A70] text-white rounded font-semibold cursor-pointer"
              >
                +
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cv.skills.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-800 rounded text-[11px]"
                >
                  {s}
                  <button
                    type="button"
                    onClick={() => removeSkill(i)}
                    className="text-slate-400 hover:text-red-500 cursor-pointer ml-1"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Novo idioma..."
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addLang())}
                className="flex-1 px-2.5 py-1.5 rounded border border-slate-300"
              />
              <button
                type="button"
                onClick={addLang}
                className="px-3 py-1.5 bg-[#159447] text-white rounded font-semibold cursor-pointer"
              >
                +
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cv.languages.map((l, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-900 border border-green-200 rounded text-[11px]"
                >
                  {l}
                  <button
                    type="button"
                    onClick={() => removeLang(i)}
                    className="text-green-600 hover:text-red-500 cursor-pointer ml-1"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Printable Clean CV Sheet */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-2xl border border-slate-300 shadow-md print:shadow-none print:border-none print:p-0 print:m-0 print:w-full">
          {/* Header */}
          <div className="border-b-2 border-[#123A70] pb-6 mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123A70] tracking-tight uppercase">
              {cv.fullName || 'O Teu Nome'}
            </h1>
            <p className="text-sm font-semibold text-[#159447] mt-1">
              {cv.professionalTitle || 'Título Profissional'}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-3">
              {cv.email && <span>{cv.email}</span>}
              {cv.phone && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{cv.phone}</span>
                </>
              )}
              {(cv.city || cv.province) && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    {cv.city ? `${cv.city}, ` : ''}
                    {cv.province}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Perfil Profissional */}
          {cv.bio && (
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#123A70] border-b border-slate-200 pb-1 mb-2">
                Perfil Profissional
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                {cv.bio}
              </p>
            </div>
          )}

          {/* Formação Académica */}
          {cv.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#123A70] border-b border-slate-200 pb-1 mb-3">
                Formação Académica
              </h2>
              <div className="space-y-3">
                {cv.education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-baseline text-xs">
                    <div>
                      <p className="font-bold text-slate-900">{edu.degree || 'Grau / Curso'}</p>
                      <p className="text-slate-600">{edu.school || 'Nome da Escola / Universidade'}</p>
                    </div>
                    <span className="text-slate-500 font-mono text-[11px] shrink-0">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experiência Profissional */}
          {cv.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#123A70] border-b border-slate-200 pb-1 mb-3">
                Experiência & Atividades Práticas
              </h2>
              <div className="space-y-4">
                {cv.experience.map((exp, i) => (
                  <div key={i} className="text-xs">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <p className="font-bold text-slate-900">{exp.role || 'Função'}</p>
                      <span className="text-slate-500 font-mono text-[11px]">{exp.period}</span>
                    </div>
                    <p className="text-[#159447] font-medium text-[11px] mb-1">{exp.company}</p>
                    {exp.responsibilities && (
                      <p className="text-slate-700 leading-relaxed">{exp.responsibilities}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Competências */}
          {cv.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#123A70] border-b border-slate-200 pb-1 mb-2">
                Competências Técnicas & Práticas
              </h2>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {cv.skills.map((skill, i) => (
                  <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded text-[11px]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Idiomas */}
          {cv.languages.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#123A70] border-b border-slate-200 pb-1 mb-2">
                Idiomas
              </h2>
              <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                {cv.languages.map((l, i) => (
                  <span key={i} className="font-medium text-[11px]">
                    {l}
                    {i < cv.languages.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Watermark in CV footer */}
          <div className="mt-8 pt-4 border-t border-slate-100 text-[10px] text-slate-600 flex justify-between items-center print:text-slate-500">
            <span>Currículo formatado através da plataforma JUVENTUDE DIGITAL 360°</span>
            <span>Moçambique · {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
