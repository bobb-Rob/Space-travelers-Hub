import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getSelectField = (rockets) => {
  let newRockets = [];
  rockets.forEach((rocket) => {
    const selectedField = {};
    selectedField.id = rocket.id;
    selectedField.rocketName = rocket.rocket_name;
    selectedField.description = rocket.description;
    const [imageOne] = rocket.flickr_images;
    selectedField.flickImage = imageOne;
    selectedField.status = false;
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
  reducers: {
    reserved: (state, action) => {
      let newState = [...state];
      newState = newState.map((item) => {
        if (item.id === action.payload) {
          return { ...item, status: !item.status };
        }
        return { ...item };
      });
      return newState;
    },
  },
  extraReducers: {
    [getRockets.fulfilled]: (state, action) => [...state, ...action.payload],
  },
});

export const { reserved } = rocketSlice.actions;
export default rocketSlice.reducer;
