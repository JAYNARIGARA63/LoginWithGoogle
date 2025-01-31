import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CommonTextInput from '../component/CommonTextInput';
import CommonButton from '../component/CommonButton';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    passeord: '',
  });
  const navigaton = useNavigation<any>();
  const handleTextInput = (key: string, value: string) => {
    setForm({...form, [key]: value});
  };

  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo, 'userInfo-----');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '254526267520-l0csr4t587n62muejoe2o2s25v7c59am.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const Info: any = await GoogleSignin.signIn();
      setUserInfo(Info);
      if (Info.user && Info.user.email) {
        // If email exists, navigate to ToDOList
        navigaton.navigate('ToDOList');
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainContainerText}>Sign In!</Text>
        <CommonTextInput
          onChangeText={text => handleTextInput('email', text)}
          label={'email'}
          placeholder="email"
        />

        <CommonTextInput
          onChangeText={text => handleTextInput('password', text)}
          label={'password'}
          placeholder="password"
        />

        <CommonButton label={'Sign In!'} />

        <CommonButton
          label={'Sign In!'}
          iconName={'google'}
          labelTwo={'With Google'}
          isIcon={true}
          isSocial={true}
          handlePress={() => {
            return signIn();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    padding: 20,
    width: '80%',
    // height: 500,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  mainContainerText: {
    fontSize: 20,
  },
});
