import React, { Component } from 'react';
import './App.css';
import ChannelsList from './components/ChannelsList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppContentContainer from './components/AppContentContainer';
import TaskForm from './components/TaskForm';
import PaymentForm from './components/PaymentForm';

class App extends Component {
  render() {
    return (
        <div className="App">
          <NavBar />
          <AppContentContainer>
            {/* <ChannelsList /> */}
            <PaymentForm />
          </AppContentContainer>
          <Footer />
        </div>
    );
  }
}

export default App;
