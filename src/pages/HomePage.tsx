import React, { useState } from 'react';
import { PageId, Opportunity, Scholarship, Course, NewsItem, IdeaProject } from '../types';
import {
  Search,
  Briefcase,
  GraduationCap,
  BookOpen,
  Rocket,
  Cpu,
  Lightbulb,
  Mail,
  ChevronRight,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ThumbsUp,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  opportunities: Opportunity[];
  scholarships: Scholarship[];
  courses: Course[];
  news: NewsItem[];
  ideas: IdeaProject[];
  onOpenOfficialLink: (item: { title: string; sourceName: string; url: string; isExpired?: boolean }) => void;
  onLikeIdea: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  opportunities,
  scholarships,
  courses,
  news,
  ideas,
  onOpenOfficialLink,
  onLikeIdea
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Route search to employment or courses if matched
    onNavigate('emprego');
  };

  // Check if deadline is expired
  const isExpired = (deadlineStr: string) => {
    const today = new Date().toISOString().split('T')[0];
    return deadlineStr < today;
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-[#123A70] text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#159447]" />
                <span>Zambézia & Moçambique · Portal Oficial Juvenil</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#123A70] tracking-tight leading-[1.15] text-balance">
                O teu futuro começa com uma oportunidade!
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                Descobre oportunidades de emprego, bolsas de estudo, formação, empreendedorismo e inovação para jovens em Moçambique.
              </p>

              {/* Slogan Pill Strip */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="text-[#123A70]">Descobre</span>
                <span className="text-slate-300">·</span>
                <span className="text-[#159447]">Aprende</span>
                <span className="text-slate-300">·</span>
                <span className="text-[#FFC928] text-amber-600">Empreende</span>
                <span className="text-slate-300">·</span>
                <span className="text-[#E53935]">Inova</span>
              </div>

              {/* Global Search Bar */}
              <form onSubmit={handleSearchSubmit} className="relative max-w-xl">
                <div className="flex items-center rounded-xl bg-white border-2 border-slate-200 shadow-sm focus-within:border-[#123A70] transition-all p-1.5">
                  <Search className="w-5 h-5 text-slate-400 ml-3 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Pesquisar vagas, bolsas (IBE, Chevening), cursos ou província..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none py-2 bg-transparent"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#123A70] hover:bg-[#0c264a] text-white text-xs sm:text-sm font-bold shrink-0 transition-colors cursor-pointer"
                  >
                    Pesquisar
                  </button>
                </div>
              </form>

              {/* Primary Functional Buttons Specified in Brief */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <button
                  onClick={() => onNavigate('emprego')}
                  className="px-4 py-2.5 rounded-lg bg-[#123A70] hover:bg-[#0c264a] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
                >
                  Explorar Oportunidades
                </button>
                <button
                  onClick={() => onNavigate('bolsas')}
                  className="px-4 py-2.5 rounded-lg bg-[#159447] hover:bg-[#0f6e34] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
                >
                  Encontrar Bolsas
                </button>
                <button
                  onClick={() => onNavigate('cursos')}
                  className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
                >
                  Aprender Gratuitamente
                </button>
                <button
                  onClick={() => onNavigate('laboratorio')}
                  className="px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                >
                  Enviar uma Ideia
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] sm:aspect-[4/3] bg-slate-100">
                <img
                  src="/src/assets/images/hero_african_youth_tech_1792781137538.jpg"
                  alt="Jovens moçambicanos colaborando com tecnologia num centro digital"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] font-bold text-[#FFC928] uppercase tracking-wider">
                    Zambézia Digital & Moçambique
                  </span>
                  <p className="text-sm font-bold mt-1">
                    Capacitando os jovens com as competências do presente e do futuro.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:left-4 bg-white rounded-xl p-3 shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-[#159447] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6 text-[#159447]" />
                </div>
                <div className="text-xs">
                  <p className="font-extrabold text-slate-900">Fontes Verificadas</p>
                  <p className="text-slate-500 text-[11px]">Sem taxas ocultas nem burlas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Functional Direct Action Buttons Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Acesso Rápido às Áreas Principais
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            <button
              onClick={() => onNavigate('emprego')}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-blue-50/60 hover:bg-blue-100/70 text-[#123A70] transition-colors text-center cursor-pointer group"
            >
              <Briefcase className="w-5 h-5 mb-1.5 text-[#123A70] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold leading-tight">Procurar Emprego</span>
            </button>

            <button
              onClick={() => onNavigate('bolsas')}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-green-50/60 hover:bg-green-100/70 text-[#159447] transition-colors text-center cursor-pointer group"
            >
              <GraduationCap className="w-5 h-5 mb-1.5 text-[#159447] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold leading-tight">Encontrar Bolsas</span>
            </button>

            <button
              onClick={() => onNavigate('cursos')}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-amber-50/60 hover:bg-amber-100/70 text-amber-900 transition-colors text-center cursor-pointer group"
            >
              <BookOpen className="w-5 h-5 mb-1.5 text-amber-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold leading-tight">Aprender Grátis</span>
            </button>

            <button
              onClick={() => onNavigate('empreendedorismo')}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-emerald-50/60 hover:bg-emerald-100/70 text-[#159447] transition-colors text-center cursor-pointer group"
            >
              <Rocket className="w-5 h-5 mb-1.5 text-[#159447] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold leading-tight">Criar Negócio</span>
            </button>

            <button
              onClick={() => onNavigate('tecnologia')}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-indigo-50/60 hover:bg-indigo-100/70 text-indigo-900 transition-colors text-center cursor-pointer group"
            >
              <Cpu className="w-5 h-5 mb-1.5 text-indigo-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold leading-tight">Explorar Tech</span>
            </button>

            <button
              onClick={() => onNavigate('laboratorio')}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-amber-50/80 hover:bg-amber-100 text-amber-950 transition-colors text-center cursor-pointer group"
            >
              <Lightbulb className="w-5 h-5 mb-1.5 text-amber-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold leading-tight">Enviar Ideia</span>
            </button>

            <button
              onClick={() => onNavigate('criar-cv')}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-blue-50/60 hover:bg-blue-100/70 text-[#123A70] transition-colors text-center cursor-pointer group"
            >
              <Sparkles className="w-5 h-5 mb-1.5 text-[#123A70] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold leading-tight">Criar o Meu CV</span>
            </button>

            <button
              onClick={() => onNavigate('contactos')}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors text-center cursor-pointer group"
            >
              <Mail className="w-5 h-5 mb-1.5 text-slate-600 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold leading-tight">Contactar Equipa</span>
            </button>
          </div>
        </div>
      </section>

      {/* Secção 1: Oportunidades Recentes de Emprego & Estágios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-[#159447]">
              Inserção Profissional
            </span>
            <h2 className="text-2xl font-black text-[#123A70]">Oportunidades e Estágios Recentes</h2>
          </div>
          <button
            onClick={() => onNavigate('emprego')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123A70] hover:underline cursor-pointer"
          >
            <span>Ver Todas as Vagas</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {opportunities.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600">
              Novas oportunidades de emprego e estágios estão a ser recolhidas e verificadas. Volta em breve!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.slice(0, 3).map((opp) => {
              const expired = isExpired(opp.deadline);
              return (
                <div
                  key={opp.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow relative"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-[#123A70]">{opp.category}</span>
                      <span>{opp.opportunityType}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug line-clamp-2">
                      {opp.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-600 mb-3">{opp.entity}</p>

                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{opp.location} {opp.city ? `(${opp.city})` : ''}</span>
                      </div>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span className={expired ? 'text-red-600 font-bold' : ''}>
                          {expired ? 'Expirou' : `Prazo: ${opp.deadline}`}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {opp.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onNavigate('emprego')}
                      className="text-xs font-semibold text-[#123A70] hover:underline cursor-pointer"
                    >
                      Ver Detalhes
                    </button>
                    <button
                      onClick={() =>
                        onOpenOfficialLink({
                          title: opp.title,
                          sourceName: opp.sourceName,
                          url: opp.officialUrl,
                          isExpired: expired
                        })
                      }
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#123A70] text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
                    >
                      <span>Anúncio Oficial</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Secção 2: Bolsas em Destaque */}
      <section className="bg-blue-50/50 py-12 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-[#123A70]">
                Educação Superior & Intercâmbio
              </span>
              <h2 className="text-2xl font-black text-[#123A70]">Bolsas de Estudo em Destaque</h2>
            </div>
            <button
              onClick={() => onNavigate('bolsas')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#159447] hover:underline cursor-pointer"
            >
              <span>Explorar Todas as Bolsas</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.slice(0, 3).map((scholarship) => {
              const expired = isExpired(scholarship.deadline);
              return (
                <div
                  key={scholarship.id}
                  className="bg-white rounded-2xl border border-blue-100 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="px-2 py-0.5 rounded bg-blue-100/80 text-[#123A70] font-bold text-[11px]">
                        {scholarship.level}
                      </span>
                      <span className="font-semibold text-emerald-700">{scholarship.coverage}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                      {scholarship.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-600 mb-3">{scholarship.institution}</p>

                    <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="font-semibold text-slate-800">País de acolhimento: {scholarship.country}</p>
                      <p className="text-[11px] text-slate-500">
                        {scholarship.benefits.slice(0, 2).join(' · ')}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-slate-500">
                      {expired ? <span className="text-red-600 font-bold">Encerrada</span> : `Até ${scholarship.deadline}`}
                    </span>
                    <button
                      onClick={() =>
                        onOpenOfficialLink({
                          title: scholarship.title,
                          sourceName: scholarship.sourceName,
                          url: scholarship.officialUrl,
                          isExpired: expired
                        })
                      }
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#159447] hover:bg-[#0f6e34] text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <span>Candidatura Oficial</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secção 3: Cursos Gratuitos com Certificado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-amber-600">
              Capacitação Acessível
            </span>
            <h2 className="text-2xl font-black text-[#123A70]">Cursos Gratuitos para Jovens</h2>
          </div>
          <button
            onClick={() => onNavigate('cursos')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123A70] hover:underline cursor-pointer"
          >
            <span>Ver Todos os Cursos</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.slice(0, 4).map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <span className="text-[11px] font-bold text-[#159447] block mb-1">
                  {course.costType}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3">{course.entity}</p>
                <p className="text-xs text-slate-600 line-clamp-3 mb-3 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">{course.duration}</span>
                <button
                  onClick={() =>
                    onOpenOfficialLink({
                      title: course.title,
                      sourceName: course.entity,
                      url: course.platformUrl
                    })
                  }
                  className="font-bold text-[#123A70] hover:underline cursor-pointer"
                >
                  Começar &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Secção 4: Laboratório de Ideias Juvenis Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#123A70] to-[#0c264a] rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFC928]/20 text-[#FFC928] text-xs font-bold">
                Inovação Comunitária da Zambézia
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Laboratório de Ideias Juvenis 360°
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Tens uma solução para agricultura, educação, ambiente ou tecnologia na tua localidade? Apresenta o teu projeto e conecta-te a mentores e parceiros.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('laboratorio')}
                  className="px-5 py-2.5 rounded-xl bg-[#159447] hover:bg-[#0f6e34] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  Enviar a Minha Ideia
                </button>
                <button
                  onClick={() => onNavigate('laboratorio')}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Ver Ideias em Destaque
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ideas
                .filter((i) => i.status === 'aprovada_em_destaque')
                .slice(0, 2)
                .map((idea) => (
                  <div
                    key={idea.id}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-blue-200 mb-2">
                        <span className="font-semibold text-[#FFC928]">{idea.area}</span>
                        <span>{idea.province}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-2 leading-snug line-clamp-2">
                        {idea.projectName}
                      </h4>
                      <p className="text-xs text-blue-100 line-clamp-3 leading-relaxed mb-4">
                        {idea.solution}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                      <span className="text-[11px] text-blue-200">{idea.authorName || 'Jovem Inovador'}</span>
                      <button
                        onClick={() => onLikeIdea(idea.id)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/20 hover:bg-white/30 text-white font-bold transition-colors cursor-pointer"
                      >
                        <ThumbsUp className="w-3.5 h-3.5 text-[#FFC928]" />
                        <span>{idea.likesCount}</span>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secção 5: Notícias e Notificações Oficiais */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-slate-500">
              Informação Verificada
            </span>
            <h2 className="text-2xl font-black text-[#123A70]">Notícias e Iniciativas</h2>
          </div>
          <button
            onClick={() => onNavigate('noticias')}
            className="text-xs font-bold text-[#123A70] hover:underline cursor-pointer"
          >
            Ver Todas as Notícias &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/10] bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/70 text-white text-[10px] font-bold">
                  {item.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-slate-600 block mb-1">
                    Publicado em {item.publishedAt}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium truncate max-w-[140px]">
                    {item.sourceName}
                  </span>
                  <button
                    onClick={() => onNavigate('noticias')}
                    className="font-bold text-[#123A70] hover:underline cursor-pointer shrink-0"
                  >
                    Ler Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chamada Final à Ação & Participação Juvenil */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-amber-950">
              Conheces uma oportunidade na tua província?
            </h3>
            <p className="text-xs sm:text-sm text-amber-800 mt-1 max-w-xl">
              Ajuda a espalhar a palavra. Comunica uma vaga de emprego, estágio ou curso para ser verificado e publicado gratuitamente no portal.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contactos')}
              className="px-4 py-2.5 rounded-xl bg-white border border-amber-300 text-amber-950 text-xs sm:text-sm font-bold hover:bg-amber-100/70 transition-colors cursor-pointer"
            >
              Contactar Equipa
            </button>
            <button
              onClick={() => onNavigate('emprego')}
              className="px-5 py-2.5 rounded-xl bg-[#123A70] hover:bg-[#0c264a] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              Comunicar uma Vaga
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
