import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {client} from './src/apollo';
import {ApolloProvider} from '@apollo/client';

import {useHealthQuery} from './src/generated/graphql';

const Content: React.FC = () => {
  const {data} = useHealthQuery();
  return (
    <SafeAreaView>
      <Text>{`Health ${data?.health.status}`}</Text>
    </SafeAreaView>
  );
};

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Content />
    </ApolloProvider>
  );
};

export default App;
