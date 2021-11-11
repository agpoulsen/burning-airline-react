import React, { Component } from 'react';
import axios from 'axios';
import '../index.css'

const SERVER_URL = 'http://localhost:3000/flights.json';

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      // TODO:replace this via AJAX from the flights server
      flights: []
    };
    this.saveFlight = this.saveFlight.bind(this);
  }

// REACT COMPONENT LIFECYCLE

  componentDidMount() {
    console.log('Mounted!')
  
  }




  saveFlight(flight_number, origin, destination, date, plane, seat) {
    const flight = {
      id: Math.random(),
      flight_number: flight_number,
      origin: origin,
      destination: destination,
      date: date,
      plane: plane,
      seat: seat
    };

      const flights = [...this.state.flights, flight];
      this.setState({flights: flights});
  }


  render() {
    return (
      <div className="container">
        <h1>Flights List </h1>

        <FlightForm onSubmit={ this.saveFlight }/>

        <FlightList flights={ this.state.flights} />
      </div>
    );
  }
}

class FlightForm extends Component {
  constructor() {
    super();
    this.state = {
      flight_number: '',
      origin: '',
      destination: '',
      date: '',
      plane: '',
      seat: ''
    }
    this._flightNumber = this._flightNumber.bind(this);
    this._flightOrigin = this._flightOrigin.bind(this);
    this._flightDestination = this._flightDestination.bind(this);
    this._flightDate = this._flightDate.bind(this);
    this._flightPlane = this._flightPlane.bind(this);
    this._flightSeat = this._flightSeat.bind(this);
    this.__handleSubmit = this.__handleSubmit.bind(this);
  }



  _flightNumber(event){
    this.setState({flight_number: event.target.value});
  }

  _flightOrigin(event){
    this.setState({origin: event.target.value});
  }

  _flightDestination(event){
    this.setState({destination: event.target.value});
  }

  _flightDate(event){
    this.setState({date: event.target.value});
  }

  _flightPlane(event){
    this.setState({plane: event.target.value});
  }

  _flightSeat(event){
    this.setState({seat: event.target.value});
  }




  __handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.flight_number, this.state.origin, this.state.destination, this.state.date, this.state.plane, this.state.seat);
    this.setState({flight_number: '', origin: '', destination: '', date: '', plane: '', seat: ''});
  }

  render() {
    return (
      <form onSubmit={ this.__handleSubmit }>
        Flight Number: <input type="integer" required placeholder="Flight No" onChange={ this._flightNumber } value={ this.state.flight_number } />
        Origin: <input type="text" required placeholder="From" onChange={ this._flightOrigin } value={ this.state.origin } />
        Destination: <input type="text" required placeholder="To" onChange={ this._flightDestination } value={ this.state.destination }/>
        Date: <input type="date" required placeholder="Date" onChange={ this._flightDate } value={ this.state.date }/>
        Plane: <input type="text" required placeholder="Plane Name" onChange={ this._flightPlane } value={ this.state.plane }/>
        Seat: <input type="integer" required placeholder="Seat No" onChange={ this._flightSeat } value={ this.state.seat }/>
        <input type="submit" value="Create Flight" />
        <input type="submit" value="Cancle" />
      </form>
    );
  }
}

const FlightList = (props) => {

  return (
    <div>
      <table class="headings">
        <tr>
          <th> Flight Number </th>
          <th> Origin </th>
          <th> Destination </th>
          <th> Date </th>
          <th> Plane </th>
          <th> Seat </th>
       </tr>
     </table>

    { props.flights.map((s) =>

       <table>
        <tr>
          <td> { s.flight_number } </td>
          <td class="table"> { s.origin } </td>
          <td class="table"> { s.destination } </td>
          <td class="table"> { s.date } </td>
          <td class="table"> { s.plane } </td>
          <td class="table"> { s.seat } </td>
        </tr>
      </table>
    )}
    </div>
  )
};

export default Flights;
