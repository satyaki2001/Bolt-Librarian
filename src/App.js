import React, {useState} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';



function App() {
  return (
<div className='App'>
<Routes>
  <Route path='/' element={<Home />} />
  <Route index element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
</Routes>


{/*<Home />
<About />
<Contact />*/}

</div>
  );
}

export default App;
