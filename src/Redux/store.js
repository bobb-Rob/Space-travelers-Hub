import { configureStore } from "@reduxjs/toolkit";

const dummyReducer = (state = 0, action) => {
  return state;
}

const store = configureStore({
  reducer: {
    dummyReducer: dummyReducer
  }
})




export default store;