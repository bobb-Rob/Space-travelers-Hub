import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getSelectField = (rockets) => {
  let newRockets = [];
  rockets.forEach((rocket) => {
    const selectedField = {};
    selectedField.id = rocket.id;
    selectedField.name = rocket.rocket_name;
    selectedField.type = rocket.rocket_type;
    const [imageOne] = rocket.flickr_images;
    selectedField.flickr_images = imageOne;
    newRockets = [...newRockets, selectedField];
  });
  return newRockets;
};

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const rockets = await response.json();
    return getSelectField(rockets);
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
