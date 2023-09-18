import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './auth/currentUserSlice';
import logoutSlice from './auth/logoutSlice';
import allCarsSlice from './cars/CarsIndexSlice';
import specificCarSlice from './cars/CarShowSlice';
import addNewCarSlice from './cars/AddNewCarSlice';

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    logout: logoutSlice,
    allCarsReducer: allCarsSlice,
    specificCarReducer: specificCarSlice,
    addNewCarReducer: addNewCarSlice,
  },
});

export default store;
