import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  //* Endereço do backend
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})