import React, { Component } from 'react';
import HostLogin from './HostLogin.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>

        <h2>Welcome</h2>

        <HostLogin />
      </div>
    );
  }
}