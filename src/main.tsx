import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register Service Worker for offline capability & automatic updates
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('Novo conteúdo disponível no portal JUVENTUDE DIGITAL 360°');
  },
  onOfflineReady() {
    console.log('JUVENTUDE DIGITAL 360° está pronto para funcionar offline!');
  },
});

createRoot(document.getElementById('root')!).render(<App />);
