import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  error: null,
};

export const createUser = createAsyncThunk('register/fetch', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://127.0.0.1:3000/signup', {
      user: formData,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.payload;
      });
  },
});

export default registerSlice.reducer;
