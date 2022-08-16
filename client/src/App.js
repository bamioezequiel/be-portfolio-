import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='app_container'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;