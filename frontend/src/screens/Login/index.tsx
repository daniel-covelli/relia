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

import { useLoginMutation } from 'generated/graphql';

import { isInvalidCredentialsError } from 'utils/errors';
import { useForm, useKeyboard } from 'utils/hooks';
import { navigationRef, reset } from 'utils/navigation';
import { isEmail, isPasswordValid } from 'utils/validation';

import appStyles from 'styles';
import styles from './styles';

const initialFormValues = { email: '', password: '', confirmPassword: '' };

const Login: React.FC = () => {
  const isKeyboardShown = useKeyboard();
  const [login] = useLoginMutation();
  const { handleChange, handleSubmit, errors, setErrors } = useForm({
    initialValues: initialFormValues,
    validations: {
      email: {
        custom: { isValid: isEmail, message: 'Invalid credentials' },
      },
      password: {
        custom: {
          isValid: isPasswordValid,
          message: 'Invalid credentials',
        },
      },
    },
    onSubmit: async data => {
      if (!data) return;
      await login({
        variables: {
          email: data.email,
          password: data.password,
        },
        onError: err => {
          if (isInvalidCredentialsError(err)) {
            return setErrors({
              email: 'Invalid credentials',
              password: 'Invalid password',
            });
          }
          setErrors({
            email: 'Something went wrong',
            password: 'Something went wrong',
          });
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
          <Text style={appStyles.sans_24}>{'Log In'}</Text>
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
        </FlexScrollView>
        {!isKeyboardShown && (
          <TextLink
            text="Don't have an account?"
            link="Sign Up"
            onPress={() => navigationRef.navigate('SignUp')}
            container={{
              style: styles.signIn,
            }}
          />
        )}
        <Footer
          title="Log in"
          button={{ onPress: handleSubmit }}
          container={{ style: appStyles.padding_h_32 }}
        />
      </Screen>
    </KeyboardAvoidingView>
  );
};

export default Login;
