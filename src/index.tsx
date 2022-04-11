import React from 'react';
import ReactDOM from 'react-dom';
import StoreProvider from './context/StoreProvider';
import App from './App';
import './index.css';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);