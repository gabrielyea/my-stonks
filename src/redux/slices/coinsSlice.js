/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllCoins = createAsyncThunk('coins/fetchAllCoins', async () => {
  const response = await axios.get('https://api.coincap.io/v2/assets/?limit=100');
  return response.data.data;
});

export const coinsSlice = createSlice({
  name: 'coins',
  initialState: { entities: [], loading: 'idle', status: 'normal' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCoins.pending, (state) => {
        state.loading = 'pending';
        state.status = 'normal';
      })
      .addCase(fetchAllCoins.fulfilled, (state, action) => {
        state.entities = [...action.payload];
        state.loading = 'idle';
        state.status = 'normal';
      })
      .addCase(fetchAllCoins.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default coinsSlice.reducer;
