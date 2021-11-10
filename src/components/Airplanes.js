import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/airplanes.json';

///// CONNECTION TO RAILS ///
class Airplanes extends Component {
  constructor() {
    console.log(`constructor`);
    super();
    this.state = {
      airplanes: []
    };
    this.savePlane = this.savePlane.bind(this);
  }


  componentDidMount(){
    const fetchPlanes = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({airplanes: response.data});
        setTimeout(fetchPlanes, 5000);
      });
    }
    fetchPlanes();
  }

  savePlane(name, rows, column) {
    axios.post(SERVER_URL, {name: name, rows: rows, column: column}).then((response) => {
      this.setState({airplanes: [...this.state.airplanes, response.data]});
    })

  }


  render() {
    return (
      <div>
        <AirplanesForm onSubmit= {this.savePlane}/>
        <AirplanesList airplanes={ this.state.airplanes }/>
      </div>
    );
  }
}


////////// FORM !!!!! //////////////////
class AirplanesForm extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      rows: '',
      column: ''
    }
      this._planeName = this._planeName.bind(this);
      this._planeRows = this._planeRows.bind(this);
      this._planeCol = this._planeCol.bind(this);
      this.__handleSubmit = this.__handleSubmit.bind(this);
  }

  _planeName(event){
    this.setState({name: event.target.value});
  }

  _planeRows(event){
    this.setState({rows: event.target.value});
  }

  _planeCol(event){
    this.setState({column: event.target.value})
  }

  __handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.rows, this.state.column);
    this.setState({name: '', rows: '', column: ''});
  }

  render() {
    return(
      <form onSubmit={ this.__handleSubmit }>
        Plane name: <input type="text" required placeholder="Plane name and model" onChange={ this._planeName } value={ this.state.name } />
        Rows: <input type="text" required placeholder="Plane Rows" onChange={ this._planeRows } value={ this.state.rows }/>
        Columns: <input type="text" required placeholder="Plane column" onChange={ this._planeCol } value={ this.state.column }/>
        <input type="submit" value="Submit Form" />
      </form>
    );
  }
}


/// FETCH INFORMATION FROM RAILS DATABASE ///////
const AirplanesList = (props) => {
  return(
    <div>
      <h2>Insert a Plane:</h2>
      { props.airplanes.map((s) => <p key={ s.id }> Plane Name: { s.name } Rows: { s.rows } Column: { s.column } </p>) }
      </div>
  )
};




export default Airplanes;
