import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducers from './Rockets/rockets';

const store = configureStore({
  reducer: {
    rocketReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
