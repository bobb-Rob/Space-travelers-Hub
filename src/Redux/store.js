// import { configureStore, createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './mission';

// const initialState = 0;

// const dummySlicer = createSlice({
//   name: 'dummy',
//   initialState,
//   reducers: {
//     increment: (state) => state + 1,
//     decrement: (state) => state - 1,
//   },
// });

// export const { increment, decrement } = dummySlicer.actions;
// const dummyReducer = dummySlicer.reducer;

// const store = configureStore({
//   reducer: {
//     dummyReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });

const rootReducer = combineReducers({
  missions: missionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
