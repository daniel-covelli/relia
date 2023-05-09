import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';

import { Eye, EyeNo } from 'assets/svgs';

import { colors } from 'consts';

import styles from './styles';

interface FormInputProps {
  label: string;
  placeholder: string;
  password?: boolean;
  container?: ViewProps;
  input?: TextInputProps;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  password,
  container,
  input,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View {...container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <TextInput
          accessibilityLabel="Text input field"
          accessibilityHint={`Enter your ${label}`}
          secureTextEntry={password && !visible}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={colors.neutrals['400']}
          {...input}
        />
        {!!password && (
          <TouchableOpacity
            accessibilityRole="button"
            activeOpacity={0.8}
            onPress={() => setVisible(!visible)}
            hitSlop={{ top: 30, right: 30, bottom: 30, left: 30 }}
            style={styles.touchable}>
            {visible ? <EyeNo /> : <Eye />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormInput;
