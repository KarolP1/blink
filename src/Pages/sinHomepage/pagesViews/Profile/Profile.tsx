import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageBg from '../../../../components/background/ImageBackground';
import SignedInBG from '../../../../components/background/ImageBackgroundSIN';

const Profile = () => {
  return (
    <SignedInBG cantGoBack={true}>
      <Text>Profile</Text>
    </SignedInBG>
  );
};

export default Profile;

const styles = StyleSheet.create({});
