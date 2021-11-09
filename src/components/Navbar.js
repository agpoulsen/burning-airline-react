import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/airplanes'>Airplanes</Link>
      <Link to='/flights'>Flights</Link>
      <Link to='/search'>Search</Link>
      <Link to='/user'>User</Link>
    </div>
  );
}

export default NavBar;
