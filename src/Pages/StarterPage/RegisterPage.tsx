import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageBg from '../../components/background/ImageBackground';

const RegisterPage = () => {
  return (
    <ImageBg>
      <View style={styles.Container}>
        <View style={styles.ContainerTinted}>
          <Text>RegisterPage</Text>
        </View>
      </View>
    </ImageBg>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  ContainerTinted: {
    backgroundColor: 'rgba(0,0,0,0.14)',
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
