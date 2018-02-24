import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import './App.css';
// import ChannelsListWithData from './components/ChannelsList';
import TaskForm from './components/CustomerView/TaskForm';
import TaskTable from './components/TaskerView/TaskTable';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1 className="navbar">Tasker</h1>
          <TaskForm />
          <Divider />
          <TaskTable />
          {/* <ChannelsListWithData /> */}
        </div>
    );
  }
}

export default App;
