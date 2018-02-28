import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import TaskForm from './components/CustomerView/TaskForm';
import TaskList from './components/TaskerView/TaskList';
import PaymentForm from './components/PaymentForm';
import AppContentContainer from './components/AppContentContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    // console.log('APP PROPS', this.props);
    return (
      <div className="App">
        <NavBar
          home={Home}
          signIn={SignIn}
          taskForm={TaskForm}
          taskList={TaskList}
        />
        <AppContentContainer>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/task-form' component={TaskForm} />
            <Route path='/task-list' component={TaskList} />
          </div>
        </AppContentContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
