import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './auth/currentUserSlice';
import loginUserSlice from './auth/LoginSlice';
import logoutSlice from './auth/logoutSlice';
import allCarsSlice from './cars/CarsIndexSlice';
import specificCarSlice from './cars/CarShowSlice';
import addNewCarSlice from './cars/AddNewCarSlice';
import reservationReducer from './reservation/reservationSlice';

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    loginUser: loginUserSlice,
    logout: logoutSlice,
    allCarsReducer: allCarsSlice,
    specificCarReducer: specificCarSlice,
    addNewCarReducer: addNewCarSlice,
    reservations: reservationReducer,
  },
});

export default store;
