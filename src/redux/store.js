import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './auth/currentUserSlice';
import logoutSlice from './auth/logoutSlice';
import allCarsSlice from './cars/CarsIndexSlice';
import specificCarSlice from './cars/CarShowSlice';
import reservationReducer from './reservation/reservationSlice';

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    logout: logoutSlice,
    allCarsReducer: allCarsSlice,
    specificCarReducer: specificCarSlice,
    reservations: reservationReducer,
  },
});

export default store;
