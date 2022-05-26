import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import FoodTrucksPage from './SubPages/FoodTrucksPage';
import LocalCooksPage from './SubPages/LocalCooksPage';
import ShoopsPage from './SubPages/ShoopsPage';
import RestaurantsRouter from './SubPages/Restaurants';

export type SubOrderPagesParamList = {
  Order_Restaurants: undefined;
  Order_FoodTrucks: undefined;
  Order_LocalCooks: undefined;
  Order_Shoops: undefined;
};
export type OrderProps = NativeStackNavigationProp<SubOrderPagesParamList>;

const Stack = createNativeStackNavigator<SubOrderPagesParamList>();

const OrderSubPages = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Order_Restaurants" component={RestaurantsRouter} />
      <Stack.Screen name="Order_FoodTrucks" component={FoodTrucksPage} />
      <Stack.Screen name="Order_LocalCooks" component={LocalCooksPage} />
      <Stack.Screen name="Order_Shoops" component={ShoopsPage} />
    </Stack.Navigator>
  );
};

export default OrderSubPages;

const styles = StyleSheet.create({});
