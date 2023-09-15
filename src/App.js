import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Home from './components/home/Home';
import { currentUser } from './redux/auth/currentUserSlice';
import CarsIndex from './component/cars/CarIndex';
import CarShow from './components/cars/CarShow';
import Layout from './component/layout/Layout';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Toaster position="top-center" duration="4000" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cars" element={<CarsIndex />} />
          <Route path="/cars/:id" element={<CarShow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
