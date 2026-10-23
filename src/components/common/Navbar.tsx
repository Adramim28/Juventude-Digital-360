import React, { useState } from 'react';
import { PageId } from '../../types';
import { Logo } from './Logo';
import { PWAInstallButton } from './PWAInstallButton';
import {
  Menu,
  X,
  Briefcase,
  GraduationCap,
  BookOpen,
  Rocket,
  Cpu,
  Lightbulb,
  Newspaper,
  Info,
  Mail,
  ShieldCheck,
  FileText,
  Lock,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isAdmin: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const primaryNavItems: Array<{ id: PageId; label: string; icon: React.ReactNode }> = [
    { id: 'inicio', label: 'Início', icon: null },
    { id: 'emprego', label: 'Emprego', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'bolsas', label: 'Bolsas', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'cursos', label: 'Cursos', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'empreendedorismo', label: 'Negócios', icon: <Rocket className="w-4 h-4" /> },
    { id: 'tecnologia', label: 'Tecnologia', icon: <Cpu className="w-4 h-4" /> },
    { id: 'laboratorio', label: 'Ideias 360°', icon: <Lightbulb className="w-4 h-4" /> }
  ];

  const secondaryNavItems: Array<{ id: PageId; label: string; icon: React.ReactNode }> = [
    { id: 'noticias', label: 'Notícias & Iniciativas', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'sobre', label: 'Sobre Nós', icon: <Info className="w-4 h-4" /> },
    { id: 'contactos', label: 'Contactos & Parcerias', icon: <Mail className="w-4 h-4" /> },
    { id: 'privacidade', label: 'Política de Privacidade', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'termos', label: 'Termos de Utilização', icon: <FileText className="w-4 h-4" /> }
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4 lg:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNav('inicio')}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#123A70] rounded-lg cursor-pointer"
            aria-label="Ir para a página inicial da Juventude Digital 360"
          >
            <Logo size="md" />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700">
            {primaryNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 rounded-md transition-colors whitespace-nowrap shrink-0 text-sm font-semibold cursor-pointer ${
                    isActive
                      ? 'text-[#123A70] bg-blue-50/80 shadow-xs'
                      : 'hover:text-[#123A70] hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors whitespace-nowrap text-sm font-semibold cursor-pointer ${
                  secondaryNavItems.some((s) => s.id === currentPage)
                    ? 'text-[#123A70] bg-blue-50/80'
                    : 'text-slate-700 hover:text-[#123A70] hover:bg-slate-100'
                }`}
                aria-expanded={moreDropdownOpen}
              >
                <span>Mais</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {moreDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                >
                  {secondaryNavItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#123A70] hover:bg-blue-50 transition-colors text-left cursor-pointer"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                  <div className="my-1 border-t border-slate-100" />
                  <button
                    onClick={() => handleNav('admin')}
                    className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-500 hover:text-[#123A70] hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>{isAdmin ? 'Painel de Gestão (Ativo)' : 'Área Administrativa'}</span>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Primary Action, PWA Install & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <PWAInstallButton variant="nav" />

            <button
              onClick={() => handleNav('laboratorio')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#159447] hover:bg-[#0f6e34] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all whitespace-nowrap cursor-pointer active:scale-98"
            >
              <Lightbulb className="w-4 h-4 text-[#FFC928]" />
              <span>Enviar Ideia</span>
            </button>

            {/* Admin indicator badge if logged in */}
            {isAdmin && (
              <button
                onClick={() => handleNav('admin')}
                className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold hover:bg-amber-100 cursor-pointer"
                title="Administração autenticada"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Admin</span>
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#123A70] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto px-4 py-5 space-y-4">
          {/* Mobile PWA Install Card */}
          <div className="p-1">
            <PWAInstallButton variant="mobile" />
          </div>

          <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#123A70]">JUVENTUDE DIGITAL 360°</p>
              <p className="text-[11px] text-slate-600">Zambézia & Moçambique</p>
            </div>
            <button
              onClick={() => handleNav('laboratorio')}
              className="px-3 py-1.5 rounded-md bg-[#159447] text-white text-xs font-bold"
            >
              Enviar Ideia
            </button>
          </div>

          <div className="space-y-1">
            <p className="text-[11px] font-bold tracking-wider uppercase text-slate-600 px-3 py-1">
              Oportunidades Principais
            </p>
            {primaryNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors text-left cursor-pointer ${
                  currentPage === item.id
                    ? 'bg-[#123A70] text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-1">
            <p className="text-[11px] font-bold tracking-wider uppercase text-slate-600 px-3 py-1">
              Institucional & Suporte
            </p>
            {secondaryNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors text-left cursor-pointer ${
                  currentPage === item.id
                    ? 'bg-slate-100 text-[#123A70] font-bold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
            <button
              onClick={() => handleNav('admin')}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isAdmin ? 'Painel de Administração' : 'Acesso de Gestão'}</span>
            </button>
            <p className="text-[11px] text-center text-slate-600 mt-1">
              Descobre. Aprende. Empreende. Inova.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
