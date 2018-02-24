import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'
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
            <BrowserRouter>
              <div>
                <ul>
                  <li><Link to='/taskform'>Task Form</Link></li>
                  <li><Link to='/tasktable'>Task Table</Link></li>
                </ul>

                <hr />

                <Route path='/taskform' component={TaskForm} />
                <Route path='/tasktable' component={TaskTable} />
              </div>
            </BrowserRouter>
          </AppContentContainer>
          <Footer />
        </div>
    );
  }
}

export default App;
