import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';

interface CommonTextInputType extends TextInputProps {
  inputStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  label: string;
}

const CommonTextInput: React.FC<CommonTextInputType> = ({
  inputStyle,
  containerStyle,
  label,
  ...props
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <Text>{label}</Text>
      <TextInput style={[styles.input, inputStyle]} {...props} />
    </View>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
