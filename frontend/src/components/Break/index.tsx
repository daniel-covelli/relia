import React from 'react';
import { View, ViewProps } from 'react-native';

import styles from './styles';

const Break: React.FC<ViewProps> = ({ style, ...props }) => {
  return <View style={[styles.border, style]} {...props} />;
};

export default Break;
