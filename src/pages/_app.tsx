import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';

import 'minireset.css';
import '../base.css'

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
    }),
    cache: new InMemoryCache(),
  })
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp;
