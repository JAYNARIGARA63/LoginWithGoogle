import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

interface CommonButtonType {
  label: string;
  iconName: string;
  labelTwo: string;
  isSocial?: boolean;
  isIcon?: boolean;
  handlePress: () => {};
}

const CommonButton: React.FC<CommonButtonType> = ({
  label,
  iconName,
  labelTwo,
  isSocial = false,
  isIcon = false,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={handlePress}>
      {isIcon ? <Icon name={iconName} /> : null}
      <Text>{label}</Text>

      {isSocial ? <Text>{labelTwo}</Text> : null}
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  mainContainer: {
    // width: 100,
    padding: 10,
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5656d6',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 5,
  },
});
