import React, { useState } from 'react';
import { ArrowLeft, Globe, Terminal, CheckCircle2, Copy, AlertTriangle, ShieldCheck } from 'lucide-react';

interface PublishingGuideProps {
  onBack: () => void;
}

export const PublishingGuide: React.FC<PublishingGuideProps> = ({ onBack }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="flex items-center gap-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <button
          onClick={onBack}
          className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#159447]">
            Guia Prático e Gratuito
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-[#123A70]">
            Como Publicar o JUVENTUDE DIGITAL 360° na Internet
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Instruções passo a passo priorizando hospedagem gratuita sem custos ocultos
          </p>
        </div>
      </div>

      {/* Free Hosting Transparency Card */}
      <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-2">
        <div className="flex items-center gap-2 font-bold text-sm text-[#159447]">
          <ShieldCheck className="w-5 h-5 text-[#159447]" />
          <span>Compromisso de Custo Zero (100% Gratuito)</span>
        </div>
        <p className="leading-relaxed">
          Tanto o <strong>Netlify</strong> como o <strong>GitHub Pages</strong> oferecem planos gratuitos generosos que cobrem perfeitamente este portal: certificado SSL HTTPS automático gratuito, largura de banda mensal de até 100GB e proteção contra ataques. Não é necessário cartão de crédito nem pagamento inicial.
        </p>
        <p className="text-[11px] text-emerald-800">
          * Custos opcionais futuros: apenas se quiseres registrar um domínio personalizado (ex: <code>juventudedigital360.co.mz</code> através do Centro de Informática da UEM / CIUEM cerca de 1.500 a 2.500 MT/ano, ou um domínio <code>.org</code> cerca de 10-12 USD/ano). Se usares o endereço gratuito fornecido pelo Netlify ou GitHub, o custo é <strong>0 MT para sempre</strong>.
        </p>
      </div>

      {/* Method 1: Netlify Deploy (Recommended for fastest result) */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#123A70] text-white flex items-center justify-center font-bold text-sm">
              1
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Opção A: Publicação no Netlify (Recomendado)
              </h2>
              <p className="text-xs text-slate-500">Mais simples e com suporte nativo para React e Vite</p>
            </div>
          </div>
          <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-md font-bold text-[11px]">
            Mais Rápido
          </span>
        </div>

        <ol className="space-y-4 text-xs text-slate-700 list-decimal list-inside leading-relaxed">
          <li className="pl-1">
            <strong>Gera a pasta de produção:</strong> Abre o teu terminal na pasta do projeto e executa o comando de compilação:
            <div className="mt-2 relative">
              <pre className="p-3 bg-slate-900 text-emerald-400 rounded-lg font-mono text-xs overflow-x-auto">
                npm run build
              </pre>
              <button
                onClick={() => copyToClipboard('npm run build', 'cmd-build')}
                className="absolute top-2 right-2 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
              >
                {copiedId === 'cmd-build' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              Isto criará uma pasta chamada <code>dist</code> contendo todos os ficheiros HTML, CSS e JavaScript otimizados.
            </p>
          </li>

          <li className="pl-1">
            <strong>Acede ao Netlify:</strong> Entra em <a href="https://www.netlify.com" target="_blank" rel="noreferrer" className="text-[#123A70] underline font-semibold">netlify.com</a> e cria uma conta gratuita (podes usar a tua conta GitHub ou Google).
          </li>

          <li className="pl-1">
            <strong>Método Arrasta e Larga (Drag & Drop):</strong> Na tua página principal do Netlify, arrasta a pasta <code>dist</code> gerada diretamente para a área indicada na janela do navegador.
          </li>

          <li className="pl-1">
            <strong>Ou método de Integração Contínua com GitHub:</strong> Clica em <em>"Add new site" &gt; "Import an existing project"</em>, seleciona o teu repositório GitHub. O Netlify detetará automaticamente:
            <ul className="list-disc list-inside mt-1 ml-4 text-[11px] text-slate-600">
              <li>Build command: <code>npm run build</code></li>
              <li>Publish directory: <code>dist</code></li>
            </ul>
          </li>

          <li className="pl-1">
            <strong>Site no ar!</strong> O teu portal recebe imediatamente um endereço seguro como <code>https://juventude-digital-360.netlify.app</code> que podes partilhar por WhatsApp com todos os jovens de Moçambique.
          </li>
        </ol>
      </div>

      {/* Method 2: GitHub Pages */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#159447] text-white flex items-center justify-center font-bold text-sm">
              2
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Opção B: Publicação no GitHub Pages
              </h2>
              <p className="text-xs text-slate-500">Hospedagem direta a partir do teu repositório de código aberto</p>
            </div>
          </div>
          <span className="px-2.5 py-1 bg-blue-100 text-[#123A70] rounded-md font-bold text-[11px]">
            Código Aberto
          </span>
        </div>

        <ol className="space-y-4 text-xs text-slate-700 list-decimal list-inside leading-relaxed">
          <li className="pl-1">
            <strong>Cria o repositório no GitHub:</strong> Acede a <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#123A70] underline font-semibold">github.com</a> e cria um novo repositório chamado <code>juventude-digital-360</code>.
          </li>

          <li className="pl-1">
            <strong>Instala o pacote auxiliar gh-pages (ou usa GitHub Actions):</strong>
            <div className="mt-2 relative">
              <pre className="p-3 bg-slate-900 text-emerald-400 rounded-lg font-mono text-xs overflow-x-auto">
                npm install -D gh-pages
              </pre>
              <button
                onClick={() => copyToClipboard('npm install -D gh-pages', 'cmd-gh')}
                className="absolute top-2 right-2 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
              >
                {copiedId === 'cmd-gh' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </li>

          <li className="pl-1">
            <strong>Adiciona os scripts ao teu <code>package.json</code>:</strong>
            <pre className="mt-2 p-3 bg-slate-900 text-slate-200 rounded-lg font-mono text-[11px]">
{`"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}`}
            </pre>
          </li>

          <li className="pl-1">
            <strong>Executa o deploy:</strong>
            <div className="mt-2 relative">
              <pre className="p-3 bg-slate-900 text-emerald-400 rounded-lg font-mono text-xs overflow-x-auto">
                npm run deploy
              </pre>
              <button
                onClick={() => copyToClipboard('npm run deploy', 'cmd-deploy')}
                className="absolute top-2 right-2 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
              >
                {copiedId === 'cmd-deploy' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </li>

          <li className="pl-1">
            <strong>Ativa o GitHub Pages:</strong> Nas definições do teu repositório (<em>Settings &gt; Pages</em>), seleciona a branch <code>gh-pages</code> e clica em Guardar. O teu site estará acessível em <code>https://o-teu-utilizador.github.io/juventude-digital-360/</code>.
          </li>
        </ol>
      </div>

      {/* Summary Box */}
      <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-[#123A70] flex items-start gap-3">
        <Globe className="w-5 h-5 text-[#123A70] shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-sm text-slate-900">Dica para a Juventude da Zambézia e Moçambique</h4>
          <p className="mt-1 leading-relaxed text-slate-700">
            Este portal foi concebido para ser extremamente leve e rápido, consumindo poucos megabytes de dados nos telemóveis móveis (Movitel, Vodacom e Tmcel). Não requer servidores pagos nem custos mensais recorrentes para manter as oportunidades acessíveis.
          </p>
        </div>
      </div>
    </div>
  );
};
