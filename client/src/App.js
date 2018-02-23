import React, { Component } from 'react';
import './App.css';
import ChannelsList from './components/ChannelsList';
import AppContentContainer from './components/AppContentContainer';
import TaskForm from './components/TaskForm';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1 className="navbar">Tasker</h1>
          <AppContentContainer>
            <ChannelsList />
          </AppContentContainer>
        </div>
    );
  }
}

export default App;
