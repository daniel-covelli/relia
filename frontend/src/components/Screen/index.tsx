import React from 'react';
import { SafeAreaView, StatusBar, ViewStyle } from 'react-native';

import { colors } from '../../consts';

import styles from './styles';

// set status bar style
StatusBar.setBarStyle('light-content');

interface ScreenProps {
  children: React.ReactNode;
  containerStyle?: ViewStyle[];
}

const Screen: React.FC<ScreenProps> = ({ children, containerStyle }) => {
  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.neutrals['900']} />
      <SafeAreaView style={[styles.default, containerStyle]}>
        {children}
      </SafeAreaView>
    </>
  );
};

export default Screen;
