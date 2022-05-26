import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';

const ImageBg = ({children}: {children: ReactNode}) => {
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

export default ImageBg;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
  },
  logo: {
    width: '100%',
    height: 80,
    resizeMode: 'center',
  },
  formContainer: {
    paddingVertical: 40,
    marginVertical: 20,
    backgroundColor: 'rgba(77,77,77,.15)',
    padding: 10,
    borderRadius: 10,
  },
});
