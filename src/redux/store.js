import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './auth/currentUserSlice';
import loginUserSlice from './auth/LoginSlice';
import signupSlice from './auth/registerSlice';
import logoutSlice from './auth/logoutSlice';
import allCarsSlice from './cars/CarsIndexSlice';
import specificCarSlice from './cars/CarShowSlice';
import addNewCarSlice from './cars/AddNewCarSlice';
import reservationReducer from './reservation/reservationSlice';

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    loginUser: loginUserSlice,
    signupUser: signupSlice,
    logout: logoutSlice,
    allCarsReducer: allCarsSlice,
    specificCarReducer: specificCarSlice,
    addNewCarReducer: addNewCarSlice,
    reservations: reservationReducer,
  },
});

export default store;
