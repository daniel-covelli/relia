import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { AuthHeader, Break, Footer, FormInput, Screen } from 'components';

import { useForm, useKeyboard } from 'utils/hooks';
import { isEmail, isPasswordValid } from 'utils/validation';

import appStyles from 'styles';
import styles from './styles';

const initialFormValues = { email: '', password: '', confirmPassword: '' };

const SignUp: React.FC = () => {
  const isKeyboardShown = useKeyboard();
  const { handleChange, handleSubmit, data, setData, errors, setErrors } =
    useForm({
      initialValues: initialFormValues,
      validations: {
        email: {
          custom: { isValid: isEmail, message: 'Email is invalid' },
        },
        password: {
          custom: {
            isValid: isPasswordValid,
            message:
              'Must be between 8 and 50 characters and containe one number',
          },
        },
        confirmPassword: {
          match: {
            field: 'password',
            message: "Passwords don't match",
          },
        },
      },
      onSubmit: () => console.log('submit'),
    });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={appStyles.flex_one}>
      <Screen style={styles.container}>
        <AuthHeader />
        <ScrollView
          style={appStyles.flex_one}
          contentContainerStyle={appStyles.flex_grow_one}>
          <View
            style={{
              flexGrow: 1,
              // backgroundColor: 'lime',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={appStyles.sans_24}>{'Create an Account'}</Text>
              <Break style={appStyles.margin_v_24} />
              <FormInput
                label="Email"
                placeholder="Enter your email"
                container={{ style: appStyles.padding_b_24 }}
                input={{
                  onChangeText: handleChange('email'),
                }}
              />
              <FormInput
                label="Password"
                placeholder="Enter your password"
                password
                container={{ style: appStyles.padding_b_24 }}
                input={{
                  onChangeText: handleChange('password'),
                }}
              />
              <FormInput
                label="Re-enter password"
                placeholder="Re-enter your password"
                password
                container={{ style: appStyles.padding_b_24 }}
                input={{
                  onChangeText: handleChange('confirmPassword'),
                }}
              />
            </View>
            {!isKeyboardShown && (
              <View
                style={{
                  // flexGrow: 1,
                  flexDirection: 'row',
                  alignItems: 'flex-end',

                  justifyContent: 'flex-end',
                  alignSelf: 'center',
                  // backgroundColor: 'pink',
                }}>
                <Text>{'Already have an account?'}</Text>
              </View>
            )}
          </View>
        </ScrollView>
        <Footer
          title="Sign up"
          button={{ onPress: () => console.log('sign up') }}
        />
      </Screen>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
