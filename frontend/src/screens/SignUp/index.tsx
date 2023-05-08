import React from 'react';
import { Text } from 'react-native';

import { AuthHeader, Break, FormInput, Screen } from 'components';

import appStyles from 'styles';

const SignUp: React.FC = () => {
  return (
    <Screen style={appStyles.padding_h_32}>
      <AuthHeader />
      <Text style={appStyles.sans_24}>{'Signup'}</Text>
      <Break style={appStyles.margin_v_24} />
      <FormInput label="Email" placeholder="Enter your email" />
    </Screen>
  );
};

export default SignUp;
