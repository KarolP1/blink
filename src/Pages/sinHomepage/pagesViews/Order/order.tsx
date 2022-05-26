import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import OrderPage from './orderPage';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import OrderSubPages, {
  OrderProps,
  SubOrderPagesParamList,
} from './OrderSubPages';

export type RootStackParamList = {
  OrderRoot: undefined;
  OrderSubPages: NavigatorScreenParams<SubOrderPagesParamList>;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export type OrderPages = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'OrderRoot'>,
  OrderProps
>;

const Order = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OrderRoot" component={OrderPage} />
      <Stack.Screen name="OrderSubPages" component={OrderSubPages} />
    </Stack.Navigator>
  );
};

export default Order;
