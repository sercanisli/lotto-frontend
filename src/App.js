import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import SuperLoto from './components/SuperLoto';
import SayisalLoto from './components/SayisalLoto';
import OnNumara from './components/OnNumara';
import SansTopu from './components/SansTopu';
import SuperLotoList from './components/SuperLotoList';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='sayisalloto' exact element={<SayisalLoto />} />
        <Route path='superloto' exact element={<SuperLoto/>} />
        <Route path='onnumara' exact element={<OnNumara />} />
        <Route path='sanstopu' exact element={<SansTopu />} />
      </Routes>
      <SuperLotoList />
    </div>
  );
}

export default App;
