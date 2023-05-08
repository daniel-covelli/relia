import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppLoader, Home, SignUp } from './src/screens';

import { navigationRef } from 'utils/navigation';

export type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
  Home: undefined;
  AppLoader: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="AppLoader"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppLoader" component={AppLoader} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={View} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
