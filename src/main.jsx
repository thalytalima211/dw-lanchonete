import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'; // Painel administrativo
import PublicMenu from './components/PublicMenu.jsx'; // Versão pública (você pode criar esse componente)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />             {/* Painel admin */}
        <Route path="/menu" element={<PublicMenu />} />  {/* Versão pública */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
