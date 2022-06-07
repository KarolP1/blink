import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignedInBG from '../../../../components/background/ImageBackgroundSIN';

const Recipes = () => {
  return (
    <SignedInBG cantGoBack={true}>
      <Text>Recipes</Text>
    </SignedInBG>
  );
};

export default Recipes;

const styles = StyleSheet.create({});
