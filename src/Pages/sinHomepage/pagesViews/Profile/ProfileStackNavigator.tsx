import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import ProfilePage from './index';
import CameraPage from '../Camera';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export type ProfileStackParamList = {
  Profile: undefined;
  Camera: undefined;
};

export type ProfileScreenProp = NativeStackNavigationProp<
  ProfileStackParamList,
  'Profile'
>;

export const ProfilePageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarHidden: false,
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Camera"
        component={CameraPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({});
