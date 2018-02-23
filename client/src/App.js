import React, { Component } from 'react';
import './App.css';
import ChannelsListWithData from './components/ChannelsList';

class App extends Component {
  render() {
    return (
        <div className="App">
          {/* <div className="navbar">React + GraphQL Tutorial</div> */}
          <ChannelsListWithData />
        </div>
    );
  }
}

export default App;
