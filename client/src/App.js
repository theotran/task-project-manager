import React, { Component } from 'react';
import './App.css';
import ChannelsListWithData from './components/ChannelsList';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>React App</h1>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <ChannelsListWithData />
        </div>
    );
  }
}

export default App;
