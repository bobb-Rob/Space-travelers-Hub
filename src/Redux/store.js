import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';

const logger = reduxLogger().createLogger();

const dummyReducer = (state = 0, action) => {
  if (action.type === 'dummy') {
    return state;
  }
  return state;
};

const store = configureStore({
  reducer: {
    dummyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
