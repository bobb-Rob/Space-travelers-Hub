import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { getRockets } from './Redux/Rockets/rockets';
import store from './Redux/store';
import { getMission } from './Redux/mission';
import App from './App';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

store.dispatch(getRockets());
store.dispatch(getMission());

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
