import React, { Component } from 'react';
import axios from 'axios';

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      flights: []
    }
  }

  componentDidMount() {
    console.log('Mounted!')
  }

  render() {
    return (
      <div className="container">
        <p>Flights coming soon</p>
      </div>
    );
  }
}

export default Flights;
