import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const rockets = await response.json();
    return rockets;
  },
);

const initialState = [];

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => [...state, ...action.payload],
  },
});

export default rocketSlice.reducer;
