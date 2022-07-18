import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/store';
import './styles/App.css';

function App() {
  const state = useSelector((state) => state.dummyReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{state}</h1>
      <button type="button" onClick={() => dispatch(increment())}>Increment</button>
      <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
