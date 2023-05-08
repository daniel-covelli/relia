import React from 'react';
import { View, ViewProps } from 'react-native';

import { Logo } from 'assets/svgs';

import styles from './styles';

const AuthHeader: React.FC<ViewProps> = ({ style, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <Logo />
    </View>
  );
};

export default AuthHeader;
