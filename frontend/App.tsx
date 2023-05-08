import React, { useEffect } from 'react';

import { client } from './src/apollo';
import { ApolloProvider } from '@apollo/client';

import SplashScreen from 'react-native-splash-screen';

import Navigation from './Navigation';

const App: React.FC = () => {
  useEffect(() => {
    // wait 50ms and then hide the splash screen
    // we could be smarter about this and wait until after react navigation
    // has rendered the first screen, but 20ms seems to be good
    setTimeout(() => {
      console.log('Hiding splash screen');

      SplashScreen.hide();
    }, 50);
  }, []);

  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
