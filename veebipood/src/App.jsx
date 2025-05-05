import './App.css'
import { Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import Esindused from './pages/Esindused';
import Kinkekaart from './pages/Kinkekaart';
import Seaded from './pages/Seaded';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';
import LisaToode from './pages/LisaToode';

function App() {


  return (
    <>
        <Menu />

        <Routes>
          <Route path='/' element={ <Avaleht /> } />
          <Route path='/esindused' element={ <Esindused /> } />
          <Route path='/osta-kinkekaart' element={ <Kinkekaart /> } />
          <Route path='/ostukorv' element={ <Ostukorv /> } />
          <Route path='/seaded' element={ <Seaded /> } />
          <Route path='/lisa-toode' element={ <LisaToode /> } />
          <Route path='/*' element={ <NotFound /> } />
        </Routes>
    </>
  )
}

export default App
