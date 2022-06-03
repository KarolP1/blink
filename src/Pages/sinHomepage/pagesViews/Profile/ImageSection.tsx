import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SectionContainer from './Section';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenProp} from './ProfileStackNavigator';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const ImageSection = () => {
  const navigation = useNavigation<AuthScreenProp>();
  return (
    <SectionContainer.Photo
      title="Document"
      plusAction={() => {
        console.log('first');
        navigation.navigate('Camera');
      }}>
      <Text>ImageSection</Text>
    </SectionContainer.Photo>
  );
};

export default ImageSection;

const styles = StyleSheet.create({});
