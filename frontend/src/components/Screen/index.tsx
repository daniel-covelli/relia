import React from 'react';
import { SafeAreaView, StatusBar, View, ViewProps } from 'react-native';

import { colors } from '../../consts';

import styles from './styles';

// set status bar style
StatusBar.setBarStyle('light-content');

interface ScreenProps extends ViewProps {
  children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ children, ...props }) => {
  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.neutrals['900']} />
      <SafeAreaView style={[styles.default]}>
        <View {...props}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default Screen;
