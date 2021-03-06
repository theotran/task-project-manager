import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import './Semantic-UI-master/dist/semantic.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
  graphql,
  ApolloProvider,
} from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';

import { typeDefs } from './schema';

const schema  = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
});

const WrappedApp = (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
)

ReactDOM.render(WrappedApp, document.getElementById('root'));
registerServiceWorker();
