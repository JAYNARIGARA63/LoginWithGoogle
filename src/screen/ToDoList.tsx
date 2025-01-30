import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ToDoList = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>ToDoList</Text>
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: 'red',
  },
});
