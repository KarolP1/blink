import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignedInBG from '../../../components/background/ImageBackgroundSIN';

const BuddyProgram = () => {
  return (
    <SignedInBG cantGoBack={true}>
      <Text>BuddyProgram</Text>
    </SignedInBG>
  );
};

export default BuddyProgram;

const styles = StyleSheet.create({});
