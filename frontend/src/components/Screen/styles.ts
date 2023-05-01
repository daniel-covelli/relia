import { StyleSheet } from 'react-native';

import { colors } from '../../consts';

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: colors.neutrals['900'],
  },
  statusBar: { backgroundColor: colors.neutrals['900'] },
});

export default styles;
