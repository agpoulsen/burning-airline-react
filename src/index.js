import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Airline from './components/Airline';
import Airplanes from './components/Airplanes';
import Flights from './components/Flights';
import Search from './components/Search';
import User from './components/User';
import Error from './components/Error';
import NavBar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <NavBar />
      <Routes>
        <Route path='/' element={ <App /> } exact />
        <Route path='/airplanes' element={ <Airplanes />} />
        <Route path='/flights' element={ <Flights /> } />
        <Route path='/search' element={ <Search /> } />
        <Route path='/user' element={ <User /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/signup' element={ <Signup />} />
        <Route element={ <Error /> } />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
