import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const { API_URL } = process.env;

const httpLink = new HttpLink({
  uri: API_URL,
});

const link = ApolloLink.from([httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({ addTypename: false }),
});

export default client;
