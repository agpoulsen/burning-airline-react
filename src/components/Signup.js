import React, { Component } from 'react';

class Signup extends Component {
  constructor() {
    super();
    this.state = {

    };
    this._handleChange = this._handleChange.bind(this);
  }

  _validateForm( e ) {
    e.preventDefault();
    console.log( 'Submit was clicked' );
  }

  _handleChange( e ) {
    console.log(e.target.value)
    console.log(e.target.name)
  }

  render() {
    return (
      <div>
        <h2>Burning Airlines Signup</h2>

        <form onSubmit={ this._validateForm } onChange={ this._handleChange }>

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
