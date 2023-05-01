import React from 'react';
import { Text } from 'react-native';

import Config from 'react-native-config';

import { Screen } from '../../components';
import { colors, global, text } from '../../consts';
import { useHealthQuery } from '../../generated/graphql';

const Home: React.FC = () => {
  const { data } = useHealthQuery();

  return (
    <Screen containerStyle={[]}>
      <Text
        style={{
          fontFamily: text.font.plexMonoMedium,
          color: colors.neutrals['50'],
          ...global.margin_h,
        }}>{`Environment ${Config.ENV}`}</Text>
      <Text
        style={{
          fontFamily: text.font.plexSansMedium,
          color: colors.neutrals['50'],
          ...global.margin_h,
        }}>{`Health ${data?.health.status}`}</Text>
    </Screen>
  );
};

export default Home;
