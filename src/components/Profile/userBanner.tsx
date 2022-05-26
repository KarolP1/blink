import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserBanner = (state: {
  profileImage: string;
  bannerImage: string;
  firstName: string;
  lastName: string;
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageBanner} source={{uri: state.bannerImage}} />
      <View>
        <Image style={styles.image} source={{uri: state.profileImage}} />
        <Text style={styles.text}>
          {state.firstName} {state.lastName}
        </Text>
      </View>
    </View>
  );
};

export default UserBanner;

const styles = StyleSheet.create({
  imageBanner: {
    width: '100%',
    aspectRatio: 2,
    position: 'absolute',
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
  },
  container: {
    position: 'relative',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
  },
});
