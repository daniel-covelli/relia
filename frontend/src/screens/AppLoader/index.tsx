import React from 'react';
import { Text } from 'react-native';

import { Screen } from 'components';

import { useUserQuery } from 'generated/graphql';

import { reset } from 'utils/navigation';

const AppLoader: React.FC = () => {
  useUserQuery({
    onCompleted: () => {
      console.log('OnCompleted');

      reset('Home');
    },
    onError: () => {
      console.log('onError');
      reset('SignUp');
    },
  });
  return (
    <Screen>
      <Text>{'AppLoader'}</Text>
    </Screen>
  );
};

export default AppLoader;
