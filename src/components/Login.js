import React, { Component } from 'react';

class Login extends Component {

  render() {
    return (
      <form>
        <label> Email:
          <input type="email" required placeholder='Email'/>
        </label>
        <label> Password:
          <input type="password" required/>
        </label>
        <input type="submit" value='Log In'/>
      </form>
    );
  }
}

export default Login;
