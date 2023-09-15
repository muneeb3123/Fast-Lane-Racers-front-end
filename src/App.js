import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation1 from './component/cars/CarIndex';
// import Reservation from './component/cards/Reservation';
import Layout from './component/layout/Layout';
import Home from './component/Home';
import Details from './component/details/Details';


function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          
          <Route path="/reservation1" element={<Reservation1 />} />
          <Route path="/details/:name" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
