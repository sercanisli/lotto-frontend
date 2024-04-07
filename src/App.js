import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import SuperLoto from './components/SuperLoto';
import SayisalLoto from './components/SayisalLoto';
import OnNumara from './components/OnNumara';
import SansTopu from './components/SansTopu';
import Footer from './components/Footer';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Login from './features/authentication/Login';
import RequireAuth from './features/authentication/RequireAuth';
import WinningNumbers from './components/WinningNumbers';
import Admin from './components/Admin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* public routes */}
        <Route path='/' exact element={<Home />}/>
        <Route path='sayisalloto' exact element={<SayisalLoto />} />
        <Route path='superloto' exact element={<SuperLoto/>} />
        <Route path='onnumara' exact element={<OnNumara />} />
        <Route path='sanstopu' exact element={<SansTopu />} />
        <Route path='login' exact element={<Login />}/>
        <Route path='winningnumbers' exact element={<WinningNumbers />} />
        <Route path='admin' exact element={<Admin />}/>

        {/* protected routes */}
        <Route element={<RequireAuth />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
