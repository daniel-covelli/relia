import React from 'react';
import { ScrollView, View } from 'react-native';

import appStyles from 'styles';
import styles from './styles';

interface FlexScrollViewProps {
  children: React.ReactNode;
}

const FlexScrollView: React.FC<FlexScrollViewProps> = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={appStyles.flex_grow_one}>
      <View style={styles.view}>{children}</View>
    </ScrollView>
  );
};

export default FlexScrollView;
