import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomePage, {HomePageProps, TabStackParamList} from './HomePage';
import HugeMenu from './pagesViews/HugeMenu';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type RootStackParamList = {
  First: undefined;
  Home: NavigatorScreenParams<TabStackParamList>;
};

export type StartApp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'First'>,
  HomePageProps
>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const FirstPage = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="First" component={HugeMenu} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

export default FirstPage;
