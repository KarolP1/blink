import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignedInBG from '../../../../../components/background/ImageBackgroundSIN';

const ShoopsPage = () => {
  return (
    <SignedInBG cantGoBack={false}>
      <Text>ShoopsPage</Text>
    </SignedInBG>
  );
};

export default ShoopsPage;

const styles = StyleSheet.create({});
