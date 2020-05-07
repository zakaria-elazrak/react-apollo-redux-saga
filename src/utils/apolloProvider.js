import React from 'react'
// import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient from "apollo-client";
// Setup the network "links"
import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';

// export const client = new ApolloClient({
//   uri: "https://graphql-on-hasura-test.herokuapp.com/v1/graphql",
//   headers: {
//       'x-hasura-admin-secret': 'supersecret'
//   }
// });

const httpLink = new HttpLink({
  uri: "https://graphql-on-hasura-test.herokuapp.com/v1/graphql", // use https for secure endpoint
  headers: {
          'x-hasura-admin-secret': 'supersecret'
  }
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: "ws://graphql-on-hasura-test.herokuapp.com/v1/graphql", // use wss for a secure endpoint
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': 'supersecret'
      }
    }
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

// Instantiate client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})


const Provider = ({children}) => <ApolloProvider client={client}>{children}</ApolloProvider>

export default Provider;