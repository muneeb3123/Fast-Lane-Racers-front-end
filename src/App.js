import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './component/auth/Login';
import SignUp from './component/auth/SignUp';
import Home from './component/home/Home';
import { currentUser } from './redux/auth/currentUserSlice';
import CarsIndex from './component/cars/CarIndex/CarIndex';
import CarShow from './component/cars/CarShow/CarShow';
import Layout from './component/layout/Layout';
import AddReservation from './component/reservation/AddReservation';
import ReservationList from './component/reservation/ReservationList';
import CarDelete from './component/cars/CarDelete/CarDelete';

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
          <Route path="/cars/:id/add/reservation" element={<AddReservation />} />
          <Route path="/my-reservations" element={<ReservationList />} />
          <Route path="/addcar" element={<h1>Add car here</h1>} />
          <Route path="/removecar" element={<CarDelete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
