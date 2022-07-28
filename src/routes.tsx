import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Register from './pages/Register';

export default function AppRouter()  { 
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/adicionar' element={<Add/>} />
      <Route path='/registros' element={<Register/>} />
    </Routes>
    </Router>
  );
};