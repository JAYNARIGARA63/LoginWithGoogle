# React Native Google Login with Firebase

This project demonstrates how to integrate Google Sign-In with Firebase in a React Native application.

## Prerequisites

Before proceeding, ensure you have the following installed:
- Node.js (Latest LTS version)
- React Native CLI or Expo
- Firebase Console Access
- Android Studio (for Android development)
- Xcode (for iOS development on macOS)

## Step 1: Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on `Create a project` and follow the setup steps.
3. Once created, navigate to `Authentication > Sign-in method`.
4. Enable `Google` as a sign-in provider and configure the required fields.

## Step 2: Add Firebase to Your React Native App

### For React Native CLI:
1. Install Firebase dependencies:
   ```sh
   npm install @react-native-firebase/app @react-native-firebase/auth
   ```
2. Link the modules (if required for older versions):
   ```sh
   npx react-native link
   ```
3. Add Google services files:
   - Download `google-services.json` (for Android) from Firebase Console and place it inside `android/app/`.
   - Download `GoogleService-Info.plist` (for iOS) and place it inside `ios/`.

### For Expo (Managed Workflow):
1. Install the required packages:
   ```sh
   npx expo install expo-auth-session expo-random firebase
   ```
2. Update `app.json` or `app.config.js` to include:
   ```json
   "expo": {
     "android": {
       "googleServicesFile": "./google-services.json"
     },
     "ios": {
       "googleServicesFile": "./GoogleService-Info.plist"
     }
   }
   ```

## Step 3: Configure Google Sign-In

### Android Setup:
1. Add SHA-1 and SHA-256 fingerprints in Firebase:
   ```sh
   keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android
   ```
   Copy SHA-1 and add it in Firebase under `Project Settings > Your apps > SHA Certificate fingerprints`.
2. In `android/build.gradle`, ensure:
   ```gradle
   classpath("com.google.gms:google-services:4.3.10")
   ```
3. In `android/app/build.gradle`, add:
   ```gradle
   apply plugin: 'com.google.gms.google-services'
   ```

### iOS Setup:
1. Install CocoaPods dependencies:
   ```sh
   cd ios && pod install && cd ..
   ```
2. Add URL Schemes in `Info.plist`:
   ```xml
   <key>CFBundleURLTypes</key>
   <array>
     <dict>
       <key>CFBundleURLSchemes</key>
       <array>
         <string>com.googleusercontent.apps.YOUR_CLIENT_ID</string>
       </array>
     </dict>
   </array>
   ```

## Step 4: Implement Google Login in React Native

### Code Implementation:
Create a `GoogleLogin.js` component:

```javascript
import React from 'react';
import { View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID',
});

const GoogleLogin = () => {
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      console.log('User signed in!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Sign in with Google" onPress={signInWithGoogle} />
    </View>
  );
};

export default GoogleLogin;
```

## Step 5: Run the Application
For Android:
```sh
npx react-native run-android
```
For iOS:
```sh
npx react-native run-ios
```
For Expo:
```sh
npx expo start
```

## Conclusion
You have successfully integrated Google Sign-In with Firebase in your React Native app! 🎉

