import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = process.env.NODE_ENV === 'development' ? "http://0.0.0.0:3000/graphql" : 'graphiql'

export const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
});
