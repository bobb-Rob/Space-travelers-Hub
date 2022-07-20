import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducer from './mission';

const store = configureStore({
  reducer: {
    missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
