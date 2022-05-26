import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SingleRestaurantType} from '../../../../../../components/Maps';
import SingleRestaurant from './options/SingleRestaurant';
import {default as restaurants} from '../../../../../../static/restaurants.json';
import {geoProps} from './RestaurantPages';

const RestaurantsList = (props: {geolocation: geoProps}) => {
  return (
    <View>
      {restaurants.map((restaurant: SingleRestaurantType, key) => (
        <SingleRestaurant
          key={key}
          restaurant={restaurant}
          myLocation={props.geolocation}
        />
      ))}
    </View>
  );
};
export default RestaurantsList;

const styles = StyleSheet.create({});
