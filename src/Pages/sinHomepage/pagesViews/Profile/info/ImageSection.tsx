import {
  Animated,
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useEffect, useRef, useState} from 'react';
import SectionContainer from './Section';
import ImagePicker from 'react-native-image-crop-picker';
import CameraRoll from '@react-native-community/cameraroll';
import FixSizeView from '../../../../../components/fixSizeView';

const ImageSection = () => {
  const [images, setImages] = useState<{
    sideA: string | null;
    sideB: string | null;
  } | null>(null);

  useEffect(() => {
    if (images !== null && images?.sideA !== null && images?.sideB === null) {
      ImagePicker.openCamera({
        freeStyleCropEnabled: true,
        enableRotationGesture: true,

        height: 100,
        cropping: true,
      })
        .then(image => {
          setImages({...images, sideB: image.path});
          savePicture({tag: image.path, album: '', type: 'photo'});
        })
        .catch(e => console.error(e));
    }
  }, [images]);

  useEffect(() => {
    //TODO redux for images and integration with be
    if (images && images.sideA && images.sideB) {
      console.log(images);
    }
  }, [images]);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isFlipped, setIsFlipped] = useState(false);

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });
  const frontOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0],
  });
  const backOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [0, 1],
  });

  const handleFlip = () => {
    Animated.spring(animatedValue, {
      toValue: isFlipped ? 180 : 0,
      useNativeDriver: true,
    }).start(() => setIsFlipped(!isFlipped));
  };

  return (
    <SectionContainer.Photo
      title="Document"
      plusAction={() => {
        ImagePicker.openCamera({
          freeStyleCropEnabled: true,
          enableRotationGesture: true,
          height: 100,
          cropping: true,
        })
          .then(image => {
            setImages({sideA: image.path, sideB: null});
            savePicture({tag: image.path, album: '', type: 'photo'});
          })
          .catch(e => console.error(e));
      }}>
      {images === null && (
        <View
          style={{
            width: '100%',
            height: 250,
            borderRadius: 15,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: 10,
          }}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>
            Place for Your student document
          </Text>
        </View>
      )}
      {images !== null && (
        <>
          {images && images.sideB && (
            <TouchableOpacity
              onPress={handleFlip}
              activeOpacity={1}
              style={{backfaceVisibility: 'hidden'}}>
              <Animated.Image
                style={[
                  {backgroundColor: 'red'},
                  styles.image,
                  [
                    {
                      transform: [{rotateY: frontInterpolate}],
                      opacity: frontOpacity,
                    },
                  ],
                ]}
                source={{uri: images.sideB}}></Animated.Image>
            </TouchableOpacity>
          )}
          {images?.sideA && (
            <TouchableOpacity
              onPress={handleFlip}
              activeOpacity={1}
              style={{backfaceVisibility: 'hidden'}}>
              <Animated.Image
                style={[
                  {backgroundColor: 'grey'},
                  styles.image,
                  [
                    {
                      transform: [{rotateY: backInterpolate}],
                      opacity: backOpacity,
                    },
                  ],
                ]}
                source={{uri: images.sideA}}></Animated.Image>
            </TouchableOpacity>
          )}
        </>
      )}
      {images && <FixSizeView height={200} />}
    </SectionContainer.Photo>
  );
};

export default ImageSection;

const styles = StyleSheet.create({
  animatedFlipper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 5,
    marginTop: 10,
    top: 0,
    left: 0,
    position: 'absolute',
  },
});

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

async function savePicture({tag, album, type}: saveImage) {
  try {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }

    CameraRoll.save(tag, {type, album});
  } catch (error) {
    console.error(error);
  }
}
interface saveImage {
  tag: string;
  type: 'photo' | 'video' | 'auto' | undefined;
  album: string;
}
