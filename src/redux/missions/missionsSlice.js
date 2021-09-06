/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllMissions = createAsyncThunk('missions/fetchAllMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const newArr = response.data.map((miss) => ({
    mission_name: miss.mission_name,
    mission_id: miss.mission_id,
    reserved: false,
    description: miss.description,
  }));
  return newArr;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    toggle: (state, action) => {
      const found = (
        state.entities.find((mission) => mission.mission_id === action.payload));
      found.reserved = !found.reserved;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMissions.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchAllMissions.fulfilled, (state, action) => {
        state.entities = [...action.payload];
        state.loading = 'idle';
      });
  },
});

export const { toggle } = missionsSlice.actions;
export default missionsSlice.reducer;
