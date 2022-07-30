import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Register from './pages/Register';
import NavBar from './components/Nav';

export default function AppRouter()  { 
  return (
    <> 
      <div>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/add' element={<Add/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};