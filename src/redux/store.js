import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './auth/currentUserSlice';
import logoutSlice from './auth/logoutSlice';
import allCarsSlice from './cars/CarsIndexSlice';
import specificCarSlice from './cars/CarShowSlice';

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    logout: logoutSlice,
    allCarsReducer: allCarsSlice,
    specificCarReducer: specificCarSlice,
  },
});

export default store;
