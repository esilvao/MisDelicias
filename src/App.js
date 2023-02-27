import './App.css';
import { Route,Routes } from 'react-router-dom';
import Reservas from './pages/Reservas/Reservas';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Navigation from './routes/Navigation/Navigation';
import ComidaChilena from './pages/Menu/ComidaChilena/ComidaChilena';
import Product from './pages/Product/Product';
import DetalleProducto from './pages/Product/DetalleProducto';
import Register from './pages/Register/Register';
import Footer from './pages/Footer/Footer';
import Layout from './components/Layout/Layout';
import Contacto from './pages/Contacto/Contacto';
import DeliciasDelMar from './pages/Menu/DeliciasDelMar/DeliciasDelMar';
import Postres from './pages/Menu/Postres/Postres';
import {useState} from 'react'

function App() {
  const [id,setId] = useState(null)
  return (

    <div >
      <Routes>
      <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/reservas" element={<Reservas />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register setUser={setId} />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/product/:productId" element={<DetalleProducto />}/>
          <Route path="/menu/comidachilena" element={<ComidaChilena />}/>
          <Route path="/menu/deliciasdelmar" element={<DeliciasDelMar />}/>
          <Route path="/menu/postres" element={<Postres />}/>
          <Route path="/footer" element={<Footer />}/>
          <Route path="/contacto" element={<Contacto />}/>

        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
