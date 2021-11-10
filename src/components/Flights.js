import React, { Component } from 'react';
import axios from 'axios';
import '../index.css'

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
