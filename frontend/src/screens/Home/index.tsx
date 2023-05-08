import React from 'react';
import { Text } from 'react-native';

import Config from 'react-native-config';

import { Screen } from '../../components';
import { colors, global, text } from '../../consts';
import { useHealthQuery, useUserQuery } from '../../generated/graphql';

const Home: React.FC = () => {
  const { data } = useHealthQuery();
  const { data: user } = useUserQuery({
    onError: err => console.log('err', JSON.stringify(err, null, 2)),
  });

  return (
    <Screen>
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
      <Text
        style={{
          fontFamily: text.font.plexSansMedium,
          color: colors.neutrals['50'],
          ...global.margin_h,
        }}>{`Logged in ${user?.user.email}`}</Text>
    </Screen>
  );
};

export default Home;
