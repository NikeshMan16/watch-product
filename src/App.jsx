import { useState } from 'react'
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'
import Header from './components/header/header';
import Mainsection from './components/mainsection/mainsection';
import Sidebar from './components/sidebar/sidebar';
import Cart from './pages/cart/cart';
import Products from './pages/product/product';


function App() {


  return (
    <>
      <div className='App'>
        <Router>
          <Header />
          <Routes>          
            <Route path='/' />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<Products/>}/>
          </Routes>  
          <div className="main-content">
            <Mainsection />
            <Sidebar />
            

          </div>
        </Router>
      </div>
    </>

  );
};

export default App
