import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Order from './pagesViews/Order/order';
import Recipes from './pagesViews/recipes';
import BuddyProgram from './pagesViews/BuddyProgram';
import Profile from './pagesViews/Profile/Profile';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import ProfileRoot from './pagesViews/Profile';

export type TabStackParamList = {
  order: undefined;
  recipes: undefined;
  buddyprogram: undefined;
  profile: undefined;
};

export type HomePageProps = BottomTabNavigationProp<TabStackParamList>;

const Tab = createBottomTabNavigator<TabStackParamList>();
const HomePage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          marginHorizontal: 20,
          marginVertical: 10,
          height: 83,
          borderRadius: 25,
          backgroundColor: 'rgba(0,0,0,.65)',
          shadowColor: 'rgba(0,0,0,0.15)',
        },
      }}>
      <Tab.Screen
        name="order"
        component={Order}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: focused ? 'rgba(0,0,0,.45)' : 'transparent',
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={{
                  uri: 'https://static.networkmanager.pl/images/static/mainIcons/order.png',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="recipes"
        component={Recipes}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: focused ? 'rgba(0,0,0,.45)' : 'transparent',
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={{
                  uri: 'https://static.networkmanager.pl/images/static/mainIcons/cook-book.png',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="buddyprogram"
        component={BuddyProgram}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: focused ? 'rgba(0,0,0,.45)' : 'transparent',
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={{
                  uri: 'https://static.networkmanager.pl/images/static/mainIcons/buddy.png',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileRoot}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                backgroundColor: focused ? 'rgba(0,0,0,.45)' : 'transparent',
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={{
                  uri: 'https://static.networkmanager.pl/images/static/mainIcons/profile.png',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePage;
