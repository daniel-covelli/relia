import { StyleSheet } from 'react-native';

import appStyles from 'styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    ...appStyles.padding_h_32,
    ...appStyles.flex_grow_one,
  },
});

export default styles;
