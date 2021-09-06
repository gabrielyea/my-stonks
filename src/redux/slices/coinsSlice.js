/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllCoins = createAsyncThunk('missions/fetchAllCoins', async () => {
  const response = await axios.get('https://api.coincap.io/v2/assets/?limit=10');
  return response.data.data;
});

export const coinsSlice = createSlice({
  name: 'coins',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCoins.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchAllCoins.fulfilled, (state, action) => {
        state.entities = [...action.payload];
        state.loading = 'idle';
      });
  },
});

export default coinsSlice.reducer;
