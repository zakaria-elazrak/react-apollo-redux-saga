import React from 'react'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

export const client = new ApolloClient({
    uri: "https://graphql-on-hasura-test.herokuapp.com/v1/graphql",
    headers: {
        'x-hasura-admin-secret': 'supersecret'
    }
  });


const Provider = ({children}) => <ApolloProvider client={client}>{children}</ApolloProvider>

export default Provider;