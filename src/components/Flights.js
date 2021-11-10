import React, { Component } from 'react';
import axios from 'axios';

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      // TODO:replace this via AJAX from the flights server
      flights: [
        {id: 1, flight_number: 12345, origin: "Melbourne", destination: "Sydney", date: 12122021, plane: 45, seat: ""},
        {id: 2, flight_number: 67890, origin: "Paris", destination: "Dubai", date: 24122021, plane: 50, seat: ""},
        {id: 3, flight_number: 11111, origin: "Fiji", destination: "Denmark", date: 10122021, plane: 77, seat: ""}
      ]
    }
  }

  componentDidMount() {
    console.log('Mounted!')
  }

  render() {
    return (
      <div className="container">
        <h1>Flights List </h1>

        <FlightForm />
        <table width="400px"> <tr> <th> Flight Number </th>  <th> Origin </th> <th> Destination </th> <th> Date </th> <th> Plane </th> <th> Seat </th> </tr> </table>
        <FlightList flights={ this.state.flights} />
      </div>
    );
  }
}

class FlightForm extends Component {
  render() {
    return (
      <form>
      coming soon
      </form>
    );
  }
}

const FlightList = (props) => {
console.log(props.flights.map((s) => <p>{ s.flight_number }</p>));
  return (
    <div>
      { props.flights.map((s) =>
        <table width="400px" key={s.id}> <tr> <td> { s.flight_number } </td> <td> { s.origin } </td> <td> { s.destination } </td> <td> { s.date } </td> <td> { s.plane } </td> <td> { s.seat } </td> </tr> </table>  )
      }
    </div>
  )
};

export default Flights;
