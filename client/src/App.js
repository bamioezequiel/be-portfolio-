import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className='app_container'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/resume' element={ <Resume /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
