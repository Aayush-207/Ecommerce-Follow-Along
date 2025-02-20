//eslint-disable-next-line
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import { Home, LoginPage, MyProducts } from './Routes/route.js';
import { SignupPage } from './Routes/route.js';
import {CreateProduct} from './Routes/route.js'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/product' element={<CreateProduct/>}></Route>
        <Route path='/product/:id' element={<CreateProduct/>}></Route>
        <Route path='/my-product' element={<MyProducts/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
