import React, { useState } from 'react';
import { X, Send, CheckCircle2, BookOpen } from 'lucide-react';
import { StorageService } from '../../services/storage';

interface SuggestCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuggestCourseModal: React.FC<SuggestCourseModalProps> = ({ isOpen, onClose }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [entity, setEntity] = useState('');
  const [category, setCategory] = useState('Informática & Fundamentos');
  const [costType, setCostType] = useState('Gratuito com Certificado');
  const [url, setUrl] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseTitle.trim() || !entity.trim()) return;

    // Save as suggestion in contact storage so administrators can review it
    StorageService.submitContact({
      type: 'sugestao',
      name: 'Sugestão de Curso da Comunidade',
      email: 'sugestao@juventudedigital360.org.mz',
      subject: `Sugestão de Curso: ${courseTitle}`,
      message: `Entidade: ${entity}\nCategoria: ${category}\nCusto: ${costType}\nLink: ${url}\nMotivo: ${reason}`
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-green-50 text-[#159447]">
            <BookOpen className="w-6 h-6 text-[#159447]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Sugerir um Curso ou Formação</h3>
            <p className="text-xs text-slate-500">Conheces uma oportunidade educativa de qualidade?</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-[#159447] mx-auto animate-bounce" />
            <p className="text-sm font-bold text-slate-900">Sugestão Enviada com Sucesso!</p>
            <p className="text-xs text-slate-600">A nossa equipa irá analisar e verificar o conteúdo.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Nome do Curso *</label>
              <input
                type="text"
                required
                placeholder="Ex: Introdução à Programação Python"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Entidade / Plataforma *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Cisco, Coursera, Senai..."
                  value={entity}
                  onChange={(e) => setEntity(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Custo</label>
                <select
                  value={costType}
                  onChange={(e) => setCostType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white"
                >
                  <option value="Gratuito com Certificado">Gratuito com Certificado</option>
                  <option value="Gratuito">Gratuito</option>
                  <option value="Apoio Financeiro / Bolsa">Apoio Financeiro / Bolsa</option>
                  <option value="Preço Social">Preço Social</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Link de Acesso Oficial</label>
              <input
                type="url"
                placeholder="https://..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#123A70]"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Porque recomendas aos jovens?</label>
              <textarea
                rows={2}
                placeholder="Ex: É prático e tem exercícios aplicáveis..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#159447] text-white font-bold"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar Sugestão</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
