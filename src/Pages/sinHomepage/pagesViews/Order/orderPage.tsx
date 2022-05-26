import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignedInBG from '../../../../components/background/ImageBackgroundSIN';
import {MenuSelector4} from '../../../../components/Selector4X4';
import {TextInputCuisine} from '../../../../components/text/input';

const OrderPage = () => {
  return (
    <SignedInBG cantGoBack={true}>
      <Text style={styles.Header}>Choose Cuisine</Text>
      <TextInputCuisine />
      <Text style={styles.Header}>Choose Provider Type</Text>
      <MenuSelector4 />
    </SignedInBG>
  );
};

export default OrderPage;

const styles = StyleSheet.create({
  Header: {
    fontSize: 26,
    paddingVertical: 16,
    color: '#fff',
  },
});
