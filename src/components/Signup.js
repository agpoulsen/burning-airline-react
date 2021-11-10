import React, { Component } from 'react';

class Signup extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  _validateForm( e ) {
    e.preventDefault();
    console.log( 'Submit was clicked' );
  }

  render() {
    return (
      <div>
        <h2>Burning Airlines Signup</h2>

        <form onSubmit={ this._validateForm }>

          <label> Name:
            <input type="text" required placeholder='John Smith'/>
          </label>

          <label> Email Address:
            <input type="email" required placeholder='jsmith@mail.com'/>
          </label>

          <label> Password:
            <input type="password" required/>
          </label>

          <label> Confirm Password:
            <input type="password" required/>
          </label>

          <input type="submit" value='Sign Up'/>

        </form>
      </div>
    );
  }
}

export default Signup;
