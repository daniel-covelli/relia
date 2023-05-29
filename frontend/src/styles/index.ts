import { StyleSheet } from 'react-native';

import { colors, text } from 'consts';

const appStyles = StyleSheet.create({
  mono_38: {
    fontSize: text.size.xxLarge,
    fontFamily: text.font.plexMonoRegular,
    color: colors.neutrals['50'],
  },

  mono_24: {
    fontSize: text.size.xLarge,
    fontFamily: text.font.plexMonoRegular,
    color: colors.neutrals['50'],
  },

  mono_20: {
    fontSize: text.size.large,
    fontFamily: text.font.plexMonoRegular,
    color: colors.neutrals['50'],
  },

  mono_18: {
    fontSize: text.size.medium,
    fontFamily: text.font.plexMonoRegular,
    color: colors.neutrals['50'],
  },

  mono_16: {
    fontSize: text.size.small,
    fontFamily: text.font.plexMonoRegular,
    color: colors.neutrals['50'],
  },

  mono_14: {
    fontSize: text.size.xSmall,
    fontFamily: text.font.plexMonoRegular,
    color: colors.neutrals['50'],
  },

  sans_38: {
    fontSize: text.size.xxLarge,
    fontFamily: text.font.plexSansRegular,
    color: colors.neutrals['50'],
  },

  sans_24: {
    fontSize: text.size.xLarge,
    fontFamily: text.font.plexSansRegular,
    color: colors.neutrals['50'],
  },

  sans_20: {
    fontSize: text.size.large,
    fontFamily: text.font.plexSansRegular,
    color: colors.neutrals['50'],
  },

  sans_18: {
    fontSize: text.size.medium,
    fontFamily: text.font.plexSansRegular,
    color: colors.neutrals['50'],
  },

  sans_16: {
    fontSize: text.size.small,
    fontFamily: text.font.plexSansRegular,
    color: colors.neutrals['50'],
  },

  sans_14: {
    fontSize: text.size.xSmall,
    fontFamily: text.font.plexSansRegular,
    color: colors.neutrals['50'],
  },

  padding_4: {
    padding: 4,
  },

  padding_8: {
    padding: 8,
  },

  padding: {
    padding: 16,
  },

  padding_24: {
    padding: 24,
  },

  padding_32: {
    padding: 32,
  },

  padding_r_4: {
    paddingRight: 4,
  },

  padding_r_8: {
    paddingRight: 8,
  },

  padding_r_12: {
    paddingRight: 12,
  },

  padding_r: {
    paddingRight: 16,
  },

  padding_r_24: {
    paddingRight: 24,
  },

  padding_r_32: {
    paddingRight: 32,
  },

  padding_l_4: {
    paddingLeft: 4,
  },

  padding_l_8: {
    paddingLeft: 8,
  },

  padding_l_12: {
    paddingLeft: 12,
  },

  padding_l: {
    paddingLeft: 16,
  },

  padding_l_24: {
    paddingLeft: 24,
  },

  padding_l_32: {
    paddingLeft: 32,
  },

  padding_b_4: {
    paddingBottom: 4,
  },

  padding_b_8: {
    paddingBottom: 8,
  },

  padding_b: {
    paddingBottom: 16,
  },

  padding_b_24: {
    paddingBottom: 24,
  },

  padding_b_32: {
    paddingBottom: 32,
  },

  padding_h_4: {
    paddingHorizontal: 4,
  },

  padding_h_8: {
    paddingHorizontal: 8,
  },

  padding_h_12: {
    paddingHorizontal: 12,
  },

  padding_h: {
    paddingHorizontal: 16,
  },

  padding_h_24: {
    paddingHorizontal: 24,
  },

  padding_h_32: {
    paddingHorizontal: 32,
  },

  padding_v_8: {
    paddingVertical: 8,
  },

  padding_v_12: {
    paddingVertical: 12,
  },

  padding_v: {
    paddingVertical: 16,
  },

  padding_v_24: {
    paddingVertical: 24,
  },

  padding_v_32: {
    paddingVertical: 32,
  },

  margin: {
    margin: 16,
  },

  margin_24: {
    margin: 24,
  },

  margin_32: {
    margin: 32,
  },

  margin_b_4: {
    marginBottom: 4,
  },

  margin_b_8: {
    marginBottom: 8,
  },

  margin_b: {
    marginBottom: 16,
  },

  margin_b_24: {
    marginBottom: 24,
  },

  margin_v: {
    marginVertical: 16,
  },

  margin_v_24: {
    marginVertical: 24,
  },

  margin_v_32: {
    marginVertical: 32,
  },

  radius: {
    borderRadius: 8,
  },

  flex_row: {
    flexDirection: 'row',
  },

  flex_one: {
    flex: 1,
  },

  flex_zero: {
    flex: 0,
  },

  flex_grow_one: {
    flexGrow: 1,
  },

  flex_grow_zero: {
    flexGrow: 0,
  },

  shadow_container: {
    elevation: 5,
    shadowColor: colors.other.black,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
});

export default appStyles;
