import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super();
    this.state ={
      userPresent: false
    };
  }

  render() {
    return (
      <div class='Navbar'>
        <Link to='/'>Home</Link>
        <Link to='/airplanes'>Airplanes</Link>
        <Link to='/flights'>Flights</Link>
        <Link to='/search'>Search</Link>
        <Link to='/user'>User</Link>
        <Link to='/Signup'>Sign Up</Link>
        <Link to='/Login'>Log In</Link>
      </div>
    );
  }
}

export default NavBar;
