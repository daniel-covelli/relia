import { StyleSheet } from 'react-native';

import { colors } from 'consts';

import appStyles from 'styles';

const styles = StyleSheet.create({
  label: {
    ...appStyles.sans_16,
    ...appStyles.padding_b_4,
  },

  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  errorText: {
    ...appStyles.sans_16,
    color: colors.error['500'],
    textAlign: 'right',
    flex: 1,
  },

  errorBorder: { borderColor: colors.error['500'], borderWidth: 2 },

  row: {
    backgroundColor: colors.neutrals['500'],
    justifyContent: 'space-between',
    alignItems: 'center',
    ...appStyles.flex_row,
    ...appStyles.radius,
  },

  input: {
    ...appStyles.flex_grow_one,
    ...appStyles.sans_14,
    ...appStyles.padding_h_12,
    ...appStyles.padding_v_12,
  },

  touchable: {
    ...appStyles.flex_zero,
    ...appStyles.padding_h_12,
  },
});

export default styles;
