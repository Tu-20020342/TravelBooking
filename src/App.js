import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import RegisterForm from './pages/component/form/registerForm/RegisterForm';
import LoginForm from './pages/component/form/loginForm/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotels/:id' element={<Hotel/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
