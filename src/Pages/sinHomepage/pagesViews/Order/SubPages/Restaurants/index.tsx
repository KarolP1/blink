import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import SingleRestaurantPage from './SingleRestaurantPage';
import {CompositeNavigationProp} from '@react-navigation/native';
import RestaurantPages from './RestaurantPages';
import {SingleRestaurantType} from '../../../../../../components/Maps';
import {IDeliveryOptions, ISpecialOfers} from './options/SingleRestaurant';

export type RestaurantsParams = {
  root: undefined;
  RestaurantPage: {
    restaurant: SingleRestaurantType;
    specialOffer: ISpecialOfers;
    deliveryOptions: IDeliveryOptions;
    openHoursConverted: string;
  };
};

export type RestaurantNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<RestaurantsParams, 'root'>,
  any
>;

const Stack = createNativeStackNavigator<RestaurantsParams>();

const RestaurantsRouter = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="root" component={RestaurantPages} />
      <Stack.Screen
        name="RestaurantPage"
        component={SingleRestaurantPage}
        options={{}}
      />
    </Stack.Navigator>
  );
};

export default RestaurantsRouter;

const styles = StyleSheet.create({});
