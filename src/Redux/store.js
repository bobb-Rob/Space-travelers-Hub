// import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './mission';

// const store = configureStore({
//   reducer: {
//     missionReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });

const rootReducer = combineReducers({
  missions: missionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
