import React from 'react';
import { StatusBar } from 'react-native';

import { client } from './src/apollo';
import { ApolloProvider } from '@apollo/client';

import Navigation from './Navigation';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
