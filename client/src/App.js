import React, { Component } from 'react';
import './App.css';
// import ChannelsListWithData from './components/ChannelsList';
import TaskForm from './components/TaskForm';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1 className="navbar">Tasker</h1>
          <TaskForm />
          {/* <ChannelsListWithData /> */}
        </div>
    );
  }
}

export default App;
