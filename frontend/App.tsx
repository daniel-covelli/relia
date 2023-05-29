import React, { useEffect } from 'react';

import { client } from './src/apollo';
import { ApolloProvider } from '@apollo/client';

import { MagicModalPortal } from 'react-native-magic-modal';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import Navigation from './Navigation';

const App: React.FC = () => {
  useEffect(() => {
    // wait 50ms and then hide the splash screen
    // we could be smarter about this and wait until after react navigation
    // has rendered the first screen, but 20ms seems to be good
    setTimeout(() => {
      SplashScreen.hide();
    }, 50);
  }, []);

  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <MagicModalPortal />
        <Navigation />
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default App;
