import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sapato from './pages/Sapato/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Sapato/>
  </React.StrictMode>
);

