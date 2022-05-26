import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RestaurantsParams} from '.';
import {RouteProp} from '@react-navigation/native';
import SignedInBG from '../../../../../../components/background/ImageBackgroundSIN';

type RouteProps = RouteProp<RestaurantsParams, 'RestaurantPage'>;

const SingleRestaurantPage = ({
  route,
}: {
  navigation: RestaurantsParams['RestaurantPage'];
  route: RouteProps;
}) => {
  return (
    <SignedInBG cantGoBack={false}>
      <Text>{JSON.stringify(route.params)}</Text>
    </SignedInBG>
  );
};

export default SingleRestaurantPage;

const styles = StyleSheet.create({});
