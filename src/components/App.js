import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

import Airline from './Airline';
import Airplanes from './Airplanes';
import Flights from './Flights';
import Search from './Search';
import User from './User';
import Error from './Error';
import NavBar from './Navbar'


class App extends Component {

  render() {
    return (
      <main>
        


      </main>
    );
  }
}

// function App() {
//   return (
//     <main>
//       <Routes>
//         <Route path='/' component={ Airline } exact />
//         <Route path='/airplanes' component={ Airplanes } />
//         <Route path='/flights' component={ Flights } />
//         <Route path='/search' component={ Search } />
//         <Route path='/user' component={ User } />
//         <Route component={ Error } />
//       </Routes>
//       <NavBar />
//     </main>
//   );
// };



export default App;
