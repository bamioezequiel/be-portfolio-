import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import CmdConsole from './components/CmdConsole/CmdConsole';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className='app_container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/about' element={ <AboutMe /> } />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/console" element={<CmdConsole />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
