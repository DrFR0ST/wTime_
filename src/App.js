import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to wTime_ application</h2>
        </div>
        <p className="App-intro">
          This application will be now under development.<br/>
          It will help measure your time at work and organize it properly.
        </p>
      </div>
    );
  }
}

export default App;
