import { StyleSheet } from 'react-native';

import { colors } from 'consts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutrals['900'],
    height: 82,
    justifyContent: 'center',
  },

  button: {
    backgroundColor: colors.primary['500'],
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default styles;
