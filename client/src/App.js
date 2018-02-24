import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppContentContainer from './components/AppContentContainer';
import TaskForm from './components/CustomerView/TaskForm';
import TaskTable from './components/TaskerView/TaskTable';
import PaymentForm from './components/PaymentForm';

class App extends Component {
  render() {
    return (
        <div className="App">
          <NavBar />
          <AppContentContainer>
            <TaskForm />
            <Divider />
            <TaskTable />
          </AppContentContainer>
          <Footer />
        </div>
    );
  }
}

export default App;
