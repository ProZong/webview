import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/webviewTestUseSprite'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to WEPLANET</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Introduction/>
      </div>
    );
  }
}

export default App;
