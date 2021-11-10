import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  constructor() {
    super();
    this.state={
      users: []
    }
  }

  componentDidMount() {
    const fetchUsers = () => {
      axios('http://localhost:3000/users.json').then(response =>{
        // console.log(response.data)
        this.setState({users: response.data});
      });
    };
    fetchUsers();
  }

  render() {
    return (
      <div>
      {this.state.users.map(user => <p> {user.name} - {user.email}</p>)}
      </div>
    );
  }
}

export default User;
