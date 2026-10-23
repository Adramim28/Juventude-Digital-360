import React, { useState, useMemo } from 'react';
import { NewsItem } from '../types';
import {
  Newspaper,
  Search,
  Calendar,
  ExternalLink,
  X,
  Info,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface NewsPageProps {
  news: NewsItem[];
  onOpenOfficialLink: (item: { title: string; sourceName: string; url: string; isExpired?: boolean }) => void;
}

const CATEGORIES = [
  'Todas',
  'Educação',
  'Oportunidades',
  'Tecnologia',
  'Zambézia & Moçambique'
];

export const NewsPage: React.FC<NewsPageProps> = ({ news, onOpenOfficialLink }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const filtered = useMemo(() => {
    return news.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCat =
        selectedCategory === 'Todas' || item.category === selectedCategory;

      return matchSearch && matchCat;
    });
  }, [news, searchTerm, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#123A70] text-xs font-bold mb-2">
            <Newspaper className="w-3.5 h-3.5 text-[#159447]" />
            <span>Atualidade Juvenil & Informação Verificada</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#123A70]">
            Notícias e Iniciativas
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Acontecimentos, editais, feiras tecnológicas e atualizações das oportunidades para os jovens na Zambézia e em todo Moçambique.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-xs shrink-0">
          <p className="font-bold text-slate-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#159447]" />
            <span>Política Anti-Desinformação:</span>
          </p>
          <p className="text-[11px] mt-0.5 leading-relaxed">
            Não publicamos rumores nem conteúdos não confirmados. Todas as notícias contêm a indicação explícita da fonte oficial.
          </p>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Pesquisar notícias e anúncios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#123A70]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#123A70] text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
          >
            <div>
              <div className="relative aspect-[16/10] bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/75 text-white text-[10px] font-bold">
                  {item.category}
                </span>
                {item.isDemonstration && (
                  <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-bold">
                    Demonstração Oficial
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Publicado em {item.publishedAt}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {item.summary}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-600 truncate max-w-[150px]">
                  {item.sourceName}
                </span>

                <button
                  onClick={() => setActiveArticle(item)}
                  className="inline-flex items-center gap-1 font-bold text-[#123A70] hover:underline cursor-pointer"
                >
                  <span>Ler Mais</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 bg-slate-100">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="px-2 py-0.5 rounded bg-blue-50 text-[#123A70] font-bold">
                {activeArticle.category}
              </span>
              <span>·</span>
              <span>{activeArticle.publishedAt}</span>
            </div>

            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug mb-3">
              {activeArticle.title}
            </h2>

            <div className="prose text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 mb-6">
              <p className="font-semibold text-slate-900">{activeArticle.summary}</p>
              <p>{activeArticle.content}</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
              <div>
                <span className="text-slate-400 block text-[11px]">Fonte Oficial Verificada:</span>
                <span className="font-semibold text-slate-800">{activeArticle.sourceName}</span>
              </div>
              <button
                onClick={() => {
                  const art = activeArticle;
                  setActiveArticle(null);
                  onOpenOfficialLink({
                    title: art.title,
                    sourceName: art.sourceName,
                    url: art.sourceUrl
                  });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#123A70] text-white text-xs font-bold cursor-pointer"
              >
                <span>Aceder à Fonte</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
