# React Native Google Sign-In App

This is a simple **React Native** login screen with **Google Sign-In** authentication using Firebase. It allows users to sign in with their email and password or authenticate using Google.

## 🚀 Features

- Email and Password Login
- Google Sign-In Authentication
- Firebase Integration
- Custom Common Input & Button Components

## 🛠 Technologies Used

- **React Native**
- **Firebase Authentication**
- **Google Sign-In**
- **React Navigation**

## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Install Google Sign-In package:**
   ```sh
   npm install @react-native-google-signin/google-signin
   ```

4. **Link dependencies (for older versions of React Native):**
   ```sh
   npx react-native link @react-native-google-signin/google-signin
   ```

5. **Install Firebase package:**
   ```sh
   npm install @react-native-firebase/app @react-native-firebase/auth
   ```

## ⚙️ Setup Firebase & Google Sign-In

1. **Set up Firebase in your project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project and enable Firebase Authentication
   - Add an Android/iOS app and download `google-services.json` (Android) or `GoogleService-Info.plist` (iOS)

2. **Enable Google Sign-In in Firebase:**
   - Navigate to **Authentication → Sign-in method**
   - Enable **Google Sign-In**

3. **Configure Google Sign-In in React Native:**
   - Add your `webClientId` inside `GoogleSignin.configure()` in the `Login.tsx` file.

## 📜 Usage

1. Run the metro bundler:
   ```sh
   npx react-native start
   ```

2. Run the app on Android:
   ```sh
   npx react-native run-android
   ```

3. Run the app on iOS:
   ```sh
   npx react-native run-ios
   ```
