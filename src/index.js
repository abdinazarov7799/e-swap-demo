import React from 'react';
import ReactDOM from 'react-dom/client';
import  'bootstrap/dist/css/bootstrap.css' ;
import './index.css';
import Header from './components/header/Header';
import Banner from "./components/banner/Banner";
import Categories from "./components/categories/Categories";
import Menu from "./components/hero-menu/HeroMenu";
import HeroMenu from "./components/hero-menu/HeroMenu";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Categories />
    <HeroMenu />
  </React.StrictMode>
);
