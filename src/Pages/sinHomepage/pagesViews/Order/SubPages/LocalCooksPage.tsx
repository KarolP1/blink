import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignedInBG from '../../../../../components/background/ImageBackgroundSIN';

const LocalCooksPage = () => {
  return (
    <SignedInBG cantGoBack={false}>
      <Text>LocalCooksPage</Text>
    </SignedInBG>
  );
};

export default LocalCooksPage;

const styles = StyleSheet.create({});
