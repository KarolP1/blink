import {
  BackHandler,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import ImageBg from '../../components/background/ImageBackground';
import ShadowContainer from '../../components/shadow';
import {Shadow} from 'react-native-neomorph-shadows';
import {Button} from 'react-native-paper';
import {KeyboardAvodingWrapper} from '../../components/InputForm';

const LoginPage = () => {
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <KeyboardAvodingWrapper>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="enter"></TextInput>
          <TextInput placeholder="ente asdasdr"></TextInput>
        </View>
      </SafeAreaView>
    </KeyboardAvodingWrapper>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faa',
    width: '100%',
  },
  credcontainer: {
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: '#000',
    borderRadius: 10,
  },
  arrow: {
    position: 'absolute',
    backgroundColor: '#000',
    transform: [{rotate: '45deg'}],
  },
  forgot: {
    top: 45,
    right: 30,
    fontSize: 16,
    lineHeight: 19,
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    fontWeight: '400',
    textAlign: 'right',
    color: '#898585',
  },
  credimg: {
    position: 'absolute',
    width: 338,
    bottom: 0,
  },
  account: {
    top: 250,
    fontFamily: 'sans-serif-medium',
    fontSize: 18,
    lineHeight: 21,
    color: '#898585',
  },
  signup: {
    top: 250,
    marginLeft: 5,
    fontSize: 24,
    lineHeight: 24,
    color: '#43A476',
  },
});
