import { StyleSheet } from 'react-native';

import appStyles from 'styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    ...appStyles.flex_grow_one,
  },

  signIn: {
    ...appStyles.padding_b_24,
  },
});

export default styles;
