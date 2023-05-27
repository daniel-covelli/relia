import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';

import appStyles from 'styles';
import styles from './styles';

interface FooterProps {
  title: string;
  container?: ViewProps;
  button?: TouchableOpacityProps;
}

const Footer: React.FC<FooterProps> = ({
  title,
  container: { style, ...container } = {},
  button,
}) => {
  return (
    <View style={[styles.container, style]} {...container}>
      <TouchableOpacity
        accessibilityRole="button"
        activeOpacity={0.8}
        style={styles.button}
        {...button}>
        <Text style={appStyles.mono_18}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
