import {CompositeNavigationProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Register: {
    id: number;
    name: string;
  };
  Subscription: undefined;
};

export type AuthScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export const StarterPage = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Subscription" component={LoginPage} />
    </Stack.Navigator>
  );
};
