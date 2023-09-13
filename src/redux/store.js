import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './auth/currentUserSlice';
import logoutSlice from './auth/logoutSlice';

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    logout: logoutSlice,
  },
});

export default store;
