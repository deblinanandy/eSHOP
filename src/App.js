import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Products from './Components/Products';
import Contact from './Components/Contact';
import About from './Components/About';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cart from "./cart/Cart";
function App() {
  return (
   <>
       
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<><Navbar/><Home/></>}/>
  <Route path='/product' element={<><Navbar/><Home/><Product/></>}/>
  <Route path='/product/:id' element={<><Navbar/><Products/></>}/>
  <Route path='/contact' element={<><Navbar/><Contact/></>}/>
  <Route path='/about' element={<><Navbar/><About/></>}/>
  
  <Route path='/cart' element={<><Navbar/><Cart/></>}/>
 </Routes>
 
 </BrowserRouter>

   </>
  );
}

export default App;
