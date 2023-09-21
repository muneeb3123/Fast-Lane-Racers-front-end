import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSpecificCar = createAsyncThunk('cars/fetchSpecificCar', async (carID) => {
  const SPECIFIC_CAR_API = `http://127.0.0.1:3000/cars/${carID}`;
  const response = await axios.get(SPECIFIC_CAR_API);
  const specificCarArrayResponse = response.data;
  return specificCarArrayResponse;
});

const initialSpecificCarState = {
  specificCarArray: [],
  isLoadingSpecificCarArray: false,
};

const specificCarSlice = createSlice({
  name: 'carShowSlice',
  initialState: initialSpecificCarState,
  extraReducers(builder) {
    builder.addCase(fetchSpecificCar.fulfilled, (state, action) => ({
      ...state,
      specificCarArray: action.payload,
    }));
  },
});

export default specificCarSlice.reducer;
