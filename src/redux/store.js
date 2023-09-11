import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './auth/signupSlice';

const store = configureStore({
  reducer: {
    signup: registerSlice,
  },
});

export default store;
