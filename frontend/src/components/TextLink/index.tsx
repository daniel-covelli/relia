import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';

import styles from './styles';

interface LinkProps {
  link: string;
  onPress: () => void;
  container?: TouchableOpacityProps;
}

interface TextLinkProps extends LinkProps {
  container?: ViewProps;
  text: string;
}

const Link: React.FC<LinkProps> = ({ onPress, link, container }) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={styles.linkContainer}
      onPress={onPress}
      hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
      {...container}>
      <Text style={styles.link}>{link}</Text>
    </TouchableOpacity>
  );
};

const TextLink: React.FC<TextLinkProps> = ({
  text,
  link,
  onPress,
  container: { style, ...container } = {},
}) => {
  return (
    <View style={[styles.container, style]} {...container}>
      <Text style={styles.text}>{text}</Text>
      <Link link={link} onPress={onPress} />
    </View>
  );
};

export default TextLink;
