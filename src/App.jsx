import { useState } from 'react'
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'
import Header from './components/header/header';
import Mainsection from './components/mainsection/mainsection';
import Sidebar from './components/sidebar/sidebar';
import Cart from './pages/cart/cart';
import Products from './pages/product/product';
import Home from './pages/home/home';
import About from './pages/about/about';

function App() {


  return (
    <>
      <div className='App'>
        <Router>
          <Header />
          
            

          
          <Routes>          
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<Products/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>  
        </Router>
        </div>
      
    </>

  );
};

export default App
