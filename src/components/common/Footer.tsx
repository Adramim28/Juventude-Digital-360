import React from 'react';
import { PageId } from '../../types';
import { Logo } from './Logo';
import {
  Heart,
  Globe,
  MapPin,
  Lock,
  ExternalLink,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123A70] text-white border-t border-blue-900/50 mt-16">
      {/* Top Value Banner */}
      <div className="bg-[#0c264a] py-6 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-[#FFC928]/20 text-[#FFC928]">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-white tracking-wide">
                Descobre. Aprende. Empreende. Inova.
              </p>
              <p className="text-xs text-blue-200">
                Iniciativa aberta e independente para o empoderamento dos jovens moçambicanos.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNav('guia-publicacao')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-800/80 hover:bg-blue-700 text-xs font-semibold text-blue-100 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Como Publicar no GitHub / Netlify</span>
            </button>
            <button
              onClick={() => handleNav('laboratorio')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#159447] hover:bg-[#0f6e34] text-xs font-bold text-white transition-colors cursor-pointer"
            >
              <span>Submeter Projeto</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" variant="dark" showSlogan={false} />
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-sm">
              Plataforma dedicada aos jovens, estudantes, candidatos a emprego e empreendedores de Moçambique. Iniciada com foco especial na província da Zambézia e em contínua expansão para todo o país.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-200">
              <MapPin className="w-4 h-4 text-[#FFC928] shrink-0" />
              <span>Zambézia (Quelimane) · Maputo · Todo Moçambique</span>
            </div>
            <div className="pt-2 text-xs text-blue-300 bg-blue-950/40 p-3 rounded-lg border border-blue-800/40">
              <p className="font-semibold text-white">Transparência e Ética:</p>
              <p className="mt-0.5 text-[11px] leading-relaxed">
                Todas as fontes de bolsas, vagas e editais são verificadas e ligadas às instituições oficiais correspondentes. Não recolhemos taxas para candidaturas nem cobramos pelo acesso à informação.
              </p>
            </div>
          </div>

          {/* Col 2: Oportunidades */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#FFC928]">
              Oportunidades
            </h4>
            <ul className="space-y-2 text-xs text-blue-100">
              <li>
                <button
                  onClick={() => handleNav('emprego')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <Briefcase className="w-3.5 h-3.5 text-blue-300" />
                  <span>Emprego e Estágios</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('bolsas')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-blue-300" />
                  <span>Bolsas de Estudo</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cursos')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-300" />
                  <span>Cursos e Formação</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('criar-cv')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer font-semibold text-emerald-300"
                >
                  <span>Gerador de CV Moçambicano</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Inovação e Criação */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#FFC928]">
              Inovação & Negócios
            </h4>
            <ul className="space-y-2 text-xs text-blue-100">
              <li>
                <button
                  onClick={() => handleNav('empreendedorismo')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Empreendedorismo & Financiamento
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tecnologia')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Tecnologia & Inovação
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('laboratorio')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Laboratório de Ideias Juvenis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('plano-negocio')}
                  className="hover:text-white transition-colors text-left cursor-pointer text-amber-300 font-semibold"
                >
                  Plano de Negócios Simplificado
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('noticias')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Notícias & Iniciativas
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Institucional & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#FFC928]">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs text-blue-100">
              <li>
                <button
                  onClick={() => handleNav('sobre')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Sobre Nós (Missão e Visão)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contactos')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contactos & Parcerias
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('privacidade')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('termos')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Termos de Utilização
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNav('admin')}
                  className="hover:text-white text-blue-300 flex items-center gap-1 transition-colors text-left cursor-pointer"
                >
                  <Lock className="w-3 h-3" />
                  <span>Painel Administrativo</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-blue-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
          <p>
            © {new Date().getFullYear()} JUVENTUDE DIGITAL 360°. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('privacidade')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacidade
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('termos')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('guia-publicacao')}
              className="hover:text-[#FFC928] transition-colors cursor-pointer"
            >
              Guia de Hospedagem
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
