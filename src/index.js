import React from 'react';
import ReactDOM from 'react-dom/client';
import  'bootstrap/dist/css/bootstrap.css' ;
import './index.css';
import Header from './components/header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
