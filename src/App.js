import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation1 from './component/cards/Reservation1';
import Reservation from './component/cards/Reservation';
import Layout from './component/layout/Layout';
import Home from './component/Home';


function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservation1" element={<Reservation1 />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
