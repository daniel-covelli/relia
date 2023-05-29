import React from 'react';
import { KeyboardAvoidingView, Platform, Text } from 'react-native';

import {
  AuthHeader,
  Break,
  FlexScrollView,
  Footer,
  FormInput,
  Screen,
  TextLink,
} from 'components';
import * as Toast from 'components/Toast';

import { useCreateUserMutation } from 'generated/graphql';

import { useForm, useKeyboard } from 'utils/hooks';
import { navigationRef, reset } from 'utils/navigation';
import { isEmail, isPasswordValid } from 'utils/validation';

import appStyles from 'styles';
import styles from './styles';

const initialFormValues = { email: '', password: '', confirmPassword: '' };

const SignUp: React.FC = () => {
  const isKeyboardShown = useKeyboard();
  const [createUser] = useCreateUserMutation();
  const { handleChange, handleSubmit, errors, setErrors } = useForm({
    initialValues: initialFormValues,
    validations: {
      email: {
        custom: { isValid: isEmail, message: 'Email format invalid' },
      },
      password: {
        custom: {
          isValid: isPasswordValid,
          message: 'Must contain 8 to 50 characters and a number',
        },
      },
      confirmPassword: {
        match: {
          field: 'password',
          message: 'Passwords must match',
        },
      },
    },
    onSubmit: async data => {
      if (!data) return;
      await createUser({
        variables: {
          email: data.email,
          password: data.password,
        },
        onError: error => {
          return Toast.show();
          // if (isInvalidParametersError(error)) {
          //   return setErrors({ email: 'Email already in use' });
          // }
          // return setErrors({ email: 'Something went wrong' });
        },
        onCompleted: () => {
          reset('Home');
        },
      });
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={appStyles.flex_one}>
      <Screen style={styles.container}>
        <AuthHeader />
        <FlexScrollView>
          <Text style={appStyles.sans_24}>{'Create an Account'}</Text>
          <Break style={appStyles.margin_v_24} />
          <FormInput
            label="Email"
            placeholder="Enter your email"
            container={{ style: appStyles.padding_b_24 }}
            input={{
              onChangeText: handleChange('email'),
              keyboardType: 'email-address',
              autoCapitalize: 'none',
            }}
            error={errors.email}
          />
          <FormInput
            label="Password"
            placeholder="Enter your password"
            password
            container={{ style: appStyles.padding_b_24 }}
            input={{
              onChangeText: handleChange('password'),
            }}
            error={errors.password}
          />
          <FormInput
            label="Re-enter password"
            placeholder="Re-enter your password"
            password
            container={{ style: appStyles.padding_b_24 }}
            input={{
              onChangeText: handleChange('confirmPassword'),
            }}
            error={errors.confirmPassword}
          />
        </FlexScrollView>
        {!isKeyboardShown && (
          <TextLink
            text="Already have an account?"
            link="Sign in"
            onPress={() => navigationRef.navigate('Login')}
            container={{
              style: styles.signIn,
            }}
          />
        )}
        <Footer
          title="Sign up"
          // button={{ onPress: handleSubmit }}
          button={{ onPress: () => Toast.show() }}
          container={{ style: appStyles.padding_h_32 }}
        />
      </Screen>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
