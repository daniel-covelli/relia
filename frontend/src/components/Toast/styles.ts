import { StyleSheet } from 'react-native';

import colors from 'consts/colors';

import appStyles from 'styles';

const styles = StyleSheet.create({
  container: {
    ...appStyles.margin,
    ...appStyles.padding_v_8,
    ...appStyles.padding_h_12,
    ...appStyles.shadow_container,
    borderRadius: 8,
    backgroundColor: colors.neutrals['700'],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...appStyles.sans_16,
    ...appStyles.margin_b_4,
    fontWeight: '500',
  },
  description: {
    ...appStyles.sans_14,
  },
});

export default styles;
