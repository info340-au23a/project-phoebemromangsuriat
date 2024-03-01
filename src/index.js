import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'; 
import './css/style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Friends from './friends';


createRoot(
  document.getElementById('root')
).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
);