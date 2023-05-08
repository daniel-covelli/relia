import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

import { colors } from 'consts';

import appStyles from 'styles';

interface FormInputProps extends TextInputProps {
  label: string;
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  ...props
}) => {
  return (
    <View>
      <Text style={[appStyles.sans_16, appStyles.padding_b_4]}>{label}</Text>
      <TextInput
        accessibilityLabel="Text input field"
        accessibilityHint={`Enter your ${label}`}
        placeholder={placeholder}
        style={[
          {
            backgroundColor: colors.neutrals['500'],
            color: colors.neutrals['50'],
          },
          appStyles.padding_h_12,
          appStyles.padding_v_12,
          appStyles.radius,
        ]}
        placeholderTextColor={colors.neutrals['400']}
        {...props}
      />
    </View>
  );
};

export default FormInput;
