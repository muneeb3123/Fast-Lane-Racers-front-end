import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ALL_CARS_API = 'http://127.0.0.1:3000/cars';

export const deleteCar = createAsyncThunk('car/deleteCar', async (id) => {
  const response = await axios.delete(`${ALL_CARS_API}/${id}`);
  return response.data;
});

export const fetchAllCars = createAsyncThunk('cars/fetchAllCars', async () => {
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
    builder.addCase(deleteCar.fulfilled, (state, action) => ({
      ...state,
      allCarsArray: state.allCarsArray.filter((car) => car.id !== action.payload),
    }));
    builder.addCase(fetchAllCars.pending, (state) => ({
      ...state,
      isLoadingAllCarsArray: true,
    }));
    builder.addCase(fetchAllCars.fulfilled, (state, action) => ({
      ...state,
      isLoadingAllCarsArray: false,
      allCarsArray: action.payload,
    }));
  },
});

export default allCarsSlice.reducer;
