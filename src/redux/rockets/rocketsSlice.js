/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllRockets = createAsyncThunk('rockets/fetchAllRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  const data = (response.data).map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    reserved: false,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));
  return data;
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    reserve: (state, action) => {
      const rocketToReserve = state.entities.find((rockets) => rockets.id === action.payload);
      rocketToReserve.reserved = !rocketToReserve.reserved;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRockets.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchAllRockets.fulfilled, (state, action) => {
        state.entities = [...action.payload];
        state.loading = 'idle';
      });
  },
});

export const { reserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
