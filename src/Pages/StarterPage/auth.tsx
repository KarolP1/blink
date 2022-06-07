import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {ReactNode, useState} from 'react';

const Auth = ({children}: {children: ReactNode}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.png')}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/BLINKFIX.png')}
        />
        <View style={styles.formContainer}>{children}</View>
      </View>
    </ImageBackground>
  );
};

export default Auth;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    width: '80%',
  },
  logo: {
    width: '100%',
    height: 40,
    resizeMode: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(77,77,77,.15)',
    borderRadius: 10,
    padding: 10,
  },
});
