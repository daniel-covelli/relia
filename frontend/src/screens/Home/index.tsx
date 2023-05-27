import React from 'react';
import { Button, Text } from 'react-native';

import { client } from 'apollo';

import Config from 'react-native-config';

import { Screen } from '../../components';
import { colors, global, text } from '../../consts';
import {
  useHealthQuery,
  useLogoutMutation,
  useUserQuery,
} from '../../generated/graphql';

import { reset } from 'utils/navigation';

const Home: React.FC = () => {
  const { data } = useHealthQuery();
  const { data: user } = useUserQuery();
  const [logout] = useLogoutMutation();

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
      <Button
        title="Logout"
        onPress={async () => {
          await logout();
          await client.clearStore();
          reset('Login');
        }}
      />
    </Screen>
  );
};

export default Home;
