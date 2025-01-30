import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/Login';
import ToDoList from '../screen/ToDoList';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          //   headerTitle: 'My App', // Custom title for the header
          //   headerStyle: { backgroundColor: '#6200EE' }, // Header background color
          //   headerTintColor: '#fff', // Color of back button and title
          //   headerTitleStyle: { fontSize: 20, fontWeight: 'bold' }, // Styling for header title
          //   headerBackTitle: 'Back', // Text for back button
          //   headerBackTitleVisible: true, // Show or hide back button text
          //   headerTransparent: false, // Transparent header
          //   headerLeft: () => null, // Custom left button
          //   headerRight: () => null, // Custom right button
          //   headerShadowVisible: false, // Hide or show header shadow
          //   headerShown: true, // Show or hide header
          //   headerMode: 'screen', // 'float', 'screen', or 'none'
          //   headerLargeTitle: false, // Large title for iOS
          //   headerTitleAlign: 'center', // Align title ('center' or 'left')
          //   headerBlurEffect: 'light', // Blur effect (iOS only)
          //   gestureEnabled: true, // Enable gestures to go back
          //   gestureDirection: 'horizontal', // Direction for gesture ('horizontal' or 'vertical')
          //   animationEnabled: true, // Enable transition animations
          //   animationTypeForReplace: 'push', // Animation type when replacing screen ('push' or 'pop')
          //   cardStyle: { backgroundColor: '#f5f5f5' }, // Style for screen background
          //   cardOverlayEnabled: true, // Show overlay on card transitions
          //   detachPreviousScreen: false, // Detach previous screen for performance
          //   presentation: 'card', // Modal or card presentation
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
