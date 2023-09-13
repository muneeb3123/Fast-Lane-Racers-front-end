import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './auth/currentUserSlice';
import logoutSlice from './auth/logoutSlice';
import allCarsSlice from './cars/CarsIndexSlice';

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    logout: logoutSlice,
    allCarsReducer: allCarsSlice,
  },
});

export default store;
