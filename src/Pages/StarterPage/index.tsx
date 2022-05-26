import {CompositeNavigationProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import Login from './Login';
import Register from './Register';
import SubscriptionLVL from './SubscriptionLevel';

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
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Subscription"
        component={SubscriptionLVL}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
