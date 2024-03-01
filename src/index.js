import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'; 
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

createRoot(
  document.getElementById('root')
).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
);