import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  saveUser(user) {
    axios.post('http://localhost:3000/users.json', {name: user.name, email: user.email, password: user.password }).then(response => {
      console.log(response);
    });
  }

  handleSubmit( e ) {
    e.preventDefault();
    console.log( this.state );
    this.saveUser( this.state );
  }

  _handleChange( e ) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }



  render() {
    return (
      <div>
        <h2>Burning Airlines Signup</h2>

        <form onSubmit={ this.handleSubmit } onChange={ this._handleChange }>

          <label> Name:
            <input name='name' type="text" required placeholder='John Smith'/>
          </label>

          <label> Email Address:
            <input name='email' type="email" required placeholder='jsmith@mail.com'/>
          </label>

          <label> Password:
            <input name='password' type="password" required/>
          </label>

          <label> Confirm Password:
            <input name='password_confirm' type="password" required/>
          </label>

          <input type="submit" value='Sign Up'/>

        </form>
      </div>
    );
  }
}

export default Signup;
