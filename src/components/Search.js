import React, { Component, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/flights.json';

class Search extends Component {
  constructor(){
    super();

    this.state = {
      flights: []
    };
  }
  componentDidMount(){
    const fetchFlights = () => {
      axios(SERVER_URL).then((response) => {
        console.log(response.data)
        this.setState({flights: response.data});
        setTimeout(fetchFlights, 5000);
      });
    }
    fetchFlights();
  }

  render() {
    return (
      <div>
      <SearchForm />
        {this.state.flights.map(flight => <p> Flight From: {flight.origin}, To: { flight.destination }</p>)}
      </div>
    )
  }
}



//////// FORM ////////
class SearchForm extends Component {
  constructor(){
    super();

    this.state = {
      origin: '',
      destination: ''
    }

    this._from = this._from.bind(this);
    this._to = this._to.bind(this);

  }


  _from(){
    console.log('from working');
  }

  _to(){
    console.log('too its working')
  }

  render() {
    return(
      <form>
        From: <input type="text" required placeholder="From:"onChange={ this._from } />
        To: <input type="text" required placeholder="To:" onChange={this._to}/>
      </form>
    );
  }
}

export default Search;
