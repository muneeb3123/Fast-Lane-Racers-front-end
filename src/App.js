import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reservation1 from './component/cards/Reservation1';
import Reservation from './component/cards/Reservation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservation1" element={<Reservation1 />} /> 
      </Routes>
    </Router>
  );
}

export default App;
