import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignedInBG from '../../../../../components/background/ImageBackgroundSIN';

const FoodTrucksPage = () => {
  return (
    <SignedInBG cantGoBack={false}>
      <Text>FoodTrucksPage</Text>
    </SignedInBG>
  );
};

export default FoodTrucksPage;

const styles = StyleSheet.create({});
