import s from './styles/App.module.css';
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Loading from "./components/Loading/Loading"

// Inicializar GA4
const TRACKING_ID = "G-K4PTNFWE94"; 
ReactGA.initialize(TRACKING_ID);

// Lazy load de secciones pesadas
const CmdConsole = lazy(() => import('./pages/CmdConsole/CmdConsole'));
const Home = lazy(() => import("./pages/Home/Home"));
const FlashcardSection = lazy(() => import("./pages/FlashcardSection/FlashcardSection"));
const About = lazy(() => import("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogDetail = lazy(() => import("./components/BlogDetail/BlogDetail"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Services = lazy(() => import("./pages/Services/Services"));


// Componente para tracking de pageviews
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null; 
}

function App() {
  return (
    <div className={s.app_container}>
      <BrowserRouter>
        <AnalyticsTracker />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flashcard" element={<FlashcardSection />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/laboratory" element={<CmdConsole />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog/:id" element={<BlogDetail />} /> 
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
