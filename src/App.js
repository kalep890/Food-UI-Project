
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Menu from './Components/Menu';
import Order from './Components/Order'
import Review from './Components/Review';
import Map from './Components/Map';
import Team from './Components/Team';
import Footer from './Components/Footer';

function App() {
  return (
 
    <>
    <Nav/>
    <Gallery/>
    <About/>
    <Menu/>
    <Order/>
    <Review/>
    <Map/>
    <Team/>
    <Footer/>
    </>
  );
}

export default App;
