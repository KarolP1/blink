import SignedInBG from '../../../../components/background/ImageBackgroundSIN';
import React, {
  Component,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import {ProfileScreenProp} from '../Profile/ProfileStackNavigator';
// import fs from ""

const CameraPage = () => {
  const requestPeritssions = async () => {
    try {
      const newCameraPerimssion = await Camera.requestCameraPermission();
      const newMicrophonePerimission =
        await Camera.requestMicrophonePermission();
      return {newCameraPerimssion, newMicrophonePerimission};
    } catch (error) {
      console.error(error);
    }
  };

  const devices = useCameraDevices();
  const device = devices.back;
  useEffect(() => {
    requestPeritssions();
  }, []);

  const navigation = useNavigation<ProfileScreenProp>();
  const cameraRef = useRef<Camera>(null);
  useLayoutEffect(() => {
    navigation.addListener('focus', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {display: 'none'},
      });
    });
  });

  navigation.getParent()?.setOptions({
    tabBarStyle: {display: 'none'},
  });

  const handlePhoto = () => {
    if (device !== null)
      cameraRef.current
        ?.takePhoto({
          enableAutoStabilization: true,
          qualityPrioritization: 'quality',
          flash: 'auto',
        })
        .then(value => {
          console.log(value);
        })
        .catch(err => console.error(err));
  };

  const renderCamera = () => {
    if (device == null) return <Text>Waiting</Text>;
    else
      return (
        <Camera
          ref={cameraRef}
          style={{height: '100%', width: '100%', backgroundColor: 'red'}}
          device={device}
          isActive={true}
          photo={true}>
          <Text>hello</Text>
        </Camera>
      );
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={{
          width: 40,
          aspectRatio: 1,
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 10,
        }}>
        <Image
          style={{height: 40, aspectRatio: 1}}
          source={require('../../../../assets/utilityIcons/backIcon.png')}
        />
      </TouchableOpacity>
      <>{renderCamera()}</>
      <TouchableOpacity
        onPress={() => handlePhoto()}
        style={{
          width: '20%',
          aspectRatio: 1,
          position: 'absolute',
          bottom: 10,
          left: '40%',
          zIndex: 10,
        }}>
        <View
          style={{
            width: '100%',
            aspectRatio: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 100,
            borderWidth: 5,
            borderColor: '#fff',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({});
