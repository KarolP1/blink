import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SingleRestaurantType} from '../../../../../../../components/Maps';

const Cuisines = ({restaurant}: {restaurant: SingleRestaurantType}) => {
  const cuisines = restaurant.Cuisine;
  return <View style={styles.bg}></View>;
};

export default Cuisines;

const styles = StyleSheet.create({
  bg: {
    height: 30,
    width: 30,
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(196,196,196,.75)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(196,196,196,1)',
    borderRadius: 5,
    marginBottom: 5,
    marginHorizontal: 5,
  },
});
