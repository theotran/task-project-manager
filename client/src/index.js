import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
  graphql,
  ApolloProvider,
} from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';

const client = new ApolloClient({

});

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)


ReactDOM.render(WrappedApp, document.getElementById('root'));
registerServiceWorker();
