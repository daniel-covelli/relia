import React from 'react';
import { Text } from 'react-native';

import { Screen } from 'components';

import { useUserQuery } from 'generated/graphql';

import { reset } from 'utils/navigation';

const AppLoader: React.FC = () => {
  useUserQuery({
    onCompleted: () => {
      reset('Home');
    },
    onError: () => {
      reset('Login');
    },
  });
  return (
    <Screen>
      <Text>{'AppLoader'}</Text>
    </Screen>
  );
};

export default AppLoader;
