import { useState } from 'react'
import React from 'react';


import './App.css'
import Header from './components/header/header';
import Mainsection from './components/mainsection/mainsection';
import Sidebar from './components/sidebar/sidebar';
function App() {


  return (
    <>
    <div className='App'>
      <Header/>
      <div className="main-content">
      <Mainsection/>
      <Sidebar/>
      </div>
    </div>
    </>

  );
};

export default App
