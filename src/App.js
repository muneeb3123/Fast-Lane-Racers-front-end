import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { currentUser } from './redux/auth/currentUserSlice';
import './App.css';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Home from './components/home/Home';
import CarsIndex from './components/cars/CarIndex/CarIndex';
import CarShow from './components/cars/CarShow/CarShow';
import Layout from './components/layout/Layout';
import AddNewCar from './components/cars/AddNewCar/AddNewCar';
import AddReservation from './components/reservation/AddReservation';
import ReservationList from './components/reservation/ReservationList';
import CarDelete from './components/cars/CarDelete/CarDelete';

const App = () => {
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
          <Route path="/add_new_car" element={<AddNewCar />} />
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
