import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className='app_container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/aboutme' element={ <AboutMe /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
