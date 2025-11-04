import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import TestIQPage from './pages/TestIQPage';
import TestEstresPage from './pages/TestEstresPage';
import AntiProcrastinacionPage from './pages/AntiProcrastinacionPage';
import AdminPage from './pages/AdminPage';
import AccesoGuiasEstresPage from './pages/AccesoGuiasEstresPage';
import AccesoGuiasProcrastinacionPage from './pages/AccesoGuiasProcrastinacionPage';

import EstresAgudo from './pages/guides/EstresAgudo';
import EstresEpisodico from './pages/guides/EstresEpisodico';
import EstresCronico from './pages/guides/EstresCronico';
import Burnout from './pages/guides/Burnout';

import Perfeccionismo from './pages/guides/Perfeccionismo';
import MiedoAlFracaso from './pages/guides/MiedoAlFracaso';
import FaltaDeClaridad from './pages/guides/FaltaDeClaridad';
import Agotamiento from './pages/guides/Agotamiento';
import FaltaDeProposito from './pages/guides/FaltaDeProposito';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testiq" element={<TestIQPage />} />
        <Route path="/testestres" element={<TestEstresPage />} />
        <Route path="/antiprocrastinacion" element={<AntiProcrastinacionPage />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/acceso-guias-estres" element={<AccesoGuiasEstresPage />} />
        <Route path="/acceso-guias-procrastinacion" element={<AccesoGuiasProcrastinacionPage />} />

        <Route path="/guia-estres/estresagudo" element={<EstresAgudo />} />
        <Route path="/guia-estres/estresepisodico" element={<EstresEpisodico />} />
        <Route path="/guia-estres/estrescronico" element={<EstresCronico />} />
        <Route path="/guia-estres/burnout" element={<Burnout />} />

        <Route path="/guia-procrastinacion/perfeccionismo" element={<Perfeccionismo />} />
        <Route path="/guia-procrastinacion/procrastperfeccionismo" element={<Perfeccionismo />} />
        <Route path="/guia-procrastinacion/miedoalfracaso" element={<MiedoAlFracaso />} />
        <Route path="/guia-procrastinacion/procrastmiedoalfracaso" element={<MiedoAlFracaso />} />
        <Route path="/guia-procrastinacion/faltadeclaridad" element={<FaltaDeClaridad />} />
        <Route path="/guia-procrastinacion/procrastclaridad" element={<FaltaDeClaridad />} />
        <Route path="/guia-procrastinacion/agotamiento" element={<Agotamiento />} />
        <Route path="/guia-procrastinacion/procrastagotamiento" element={<Agotamiento />} />
        <Route path="/guia-procrastinacion/faltadeproposito" element={<FaltaDeProposito />} />
        <Route path="/guia-procrastinacion/procrastproposito" element={<FaltaDeProposito />} />
      </Routes>
    </Router>
  );
}

export default App;
