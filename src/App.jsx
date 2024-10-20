import { useState } from 'react'
import React from 'react';


import './App.css'
import Header from './components/header/header';
import Mainsection from './components/mainsection/mainsection';
function App() {


  return (
    <>
    <div className='App'>
      <Header/>
      <Mainsection/>
    </div>
    </>

  );
};

export default App
