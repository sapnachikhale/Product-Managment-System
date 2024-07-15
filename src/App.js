import './App.css';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';
import Login from './components/Login';
import Nav from './components/Nav';
import Private from './components/Private';
import ProductList from './components/ProductList';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateProduct from './components/UpdateProduct';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Private />}>
            <Route path='/product' element={<ProductList/>}></Route>
            <Route path='/addproduct' element={<AddProduct/>}></Route>
            <Route path='/update/:id' element={<UpdateProduct/>}></Route>
          </Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
