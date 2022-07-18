import { configureStore } from '@reduxjs/toolkit';

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
});

export default store;
