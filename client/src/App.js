import React, { Component } from 'react';
import './App.css';
import {
  graphql,
  ApolloProvider,
} from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';

const client = new ApolloClient();

const ChannelsList = ({ data: { loading, error, channels }}) => {
  if(loading) {
    return <p>Loading...</p>;
  }
  if(error) {
    return <p>{error.message}</p>;
  }
  return (
    <ul>
      {channels.map((ch) => {
        return <li key={ch.id}>{ch.name}</li>
      })}
    </ul>
  )
}

const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
 `;

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>React App</h1>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <ChannelsListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
