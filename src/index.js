import React from 'react';
import ReactDOM from 'react-dom/client';
import  'bootstrap/dist/css/bootstrap.css' ;
import './index.css';
import Header from './components/header/Header';
import Banner from "./components/banner/Banner";
import Categories from "./components/categories/Categories";
import HeroMenu from "./components/hero-menu/HeroMenu";
import NavbarMenu from "./components/header/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarMenu />
    <Header />
    <Banner />
    <Categories />
    <HeroMenu />
  </React.StrictMode>
);
