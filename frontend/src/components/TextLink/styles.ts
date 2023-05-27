import { StyleSheet } from 'react-native';

import { colors } from 'consts';

import appStyles from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  text: { ...appStyles.sans_16, color: colors.neutrals['200'] },

  link: { ...appStyles.mono_16, textDecorationLine: 'underline' },

  linkContainer: { ...appStyles.padding_l_8 },
});

export default styles;
