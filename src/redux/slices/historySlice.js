/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHistory = createAsyncThunk('history/fetchHistory', async (coin) => {
  const response = await axios.get(`https://api.coincap.io/v2/assets/${coin}/history?interval=d1`);
  return response.data.data;
});

export const historySlice = createSlice({
  name: 'history',
  initialState: { entities: [], loading: 'idle', status: 'normal' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.loading = 'pending';
        state.status = 'normal';
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.entities = [...action.payload];
        state.loading = 'idle';
        state.status = 'normal';
      })
      .addCase(fetchHistory.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default historySlice.reducer;
