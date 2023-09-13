import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllCars = createAsyncThunk('cars/fetchAllCars', async () => {
  const ALL_CARS_API = 'http://127.0.0.1:3000/cars';
  const response = await axios.get(ALL_CARS_API);
  const allCarsArrayResponse = response.data;
  return allCarsArrayResponse;
});

const initialAllCarsState = {
  allCarsArray: [],
  isLoadingAllCarsArray: false,
};

const allCarsSlice = createSlice({
  name: 'carsIndexSlice',
  initialState: initialAllCarsState,
  extraReducers(builder) {
    builder.addCase(fetchAllCars.fulfilled, (state, action) => ({
      ...state,
      allCarsArray: action.payload,
    }));
  },
});

export default allCarsSlice.reducer;
