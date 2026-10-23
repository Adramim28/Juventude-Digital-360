import React, { useState, useMemo } from 'react';
import { Course } from '../types';
import {
  BookOpen,
  Search,
  ExternalLink,
  Award,
  Clock,
  Globe,
  PlusCircle,
  Wifi,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface CoursesPageProps {
  courses: Course[];
  onOpenSuggestModal: () => void;
  onOpenOfficialLink: (item: { title: string; sourceName: string; url: string; isExpired?: boolean }) => void;
}

const CATEGORIES = [
  'Todas as Categorias',
  'Informática & Fundamentos',
  'Inglês',
  'Design Gráfico',
  'Fotografia & Vídeo',
  'Marketing Digital',
  'Programação & Web',
  'Inteligência Artificial',
  'Gestão & Negócios'
];

export const CoursesPage: React.FC<CoursesPageProps> = ({
  courses,
  onOpenSuggestModal,
  onOpenOfficialLink
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas as Categorias');
  const [certificateOnly, setCertificateOnly] = useState(false);

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchSearch =
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.entity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory =
        selectedCategory === 'Todas as Categorias' || c.category === selectedCategory;

      const matchCert = !certificateOnly || c.certificateConfirmed;

      return matchSearch && matchCategory && matchCert;
    });
  }, [courses, searchTerm, selectedCategory, certificateOnly]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Capacitação Contínua & Competências Digitais</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#123A70]">
            Cursos e Formação Gratuita
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Aprende competências do mercado atual: informática, programação, inglês, marketing digital, IA e gestão, com certificações confirmadas e de livre acesso.
          </p>
        </div>

        <button
          onClick={onOpenSuggestModal}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#159447] hover:bg-[#0f6e34] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Sugerir um Curso</span>
        </button>
      </div>

      {/* Low-data Tips for Mozambican youth */}
      <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-[#123A70] flex items-start gap-3">
        <Wifi className="w-5 h-5 text-[#123A70] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Dica de Poupança de Megabytes:</span> Quase todos os cursos abaixo permitem descarregar módulos de texto e transcrições em PDF em horários de menor custo (como pacotes noturnos ou fins de semana de operadoras) para estudar offline no telemóvel sem gastar saldo continuamente.
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Pesquisar por tema (ex: marketing, python, redes, inglês)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#123A70]"
            />
          </div>

          <div className="w-full md:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#123A70]"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
          <label className="flex items-center gap-2 cursor-pointer font-medium select-none">
            <input
              type="checkbox"
              checked={certificateOnly}
              onChange={(e) => setCertificateOnly(e.target.checked)}
              className="rounded text-[#159447] focus:ring-[#159447] w-4 h-4"
            />
            <span>Mostrar apenas com certificado gratuito confirmado</span>
          </label>

          <span className="text-slate-500 font-medium">
            {filteredCourses.length} cursos encontrados
          </span>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-[#123A70]">{course.category}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#159447] text-[11px] font-bold">
                  {course.costType}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                {course.title}
              </h3>
              <p className="text-xs font-semibold text-slate-600 mb-3">{course.entity}</p>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {course.description}
              </p>

              <div className="space-y-1.5 text-xs text-slate-500 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Duração: {course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>Idioma: {course.language} · Nível: {course.level}</span>
                </div>
                {course.certificateConfirmed && (
                  <div className="flex items-start gap-1.5 text-emerald-800 pt-0.5">
                    <Award className="w-3.5 h-3.5 text-[#159447] shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight font-medium">
                      {course.certificateDetails}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <span className="text-[11px] text-slate-400">Plataforma Externa Oficial</span>
              <button
                onClick={() =>
                  onOpenOfficialLink({
                    title: course.title,
                    sourceName: course.entity,
                    url: course.platformUrl
                  })
                }
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-[#123A70] hover:bg-[#0c264a] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <span>Começar a Aprender</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
