import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {
  CompositeNavigationProp,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RootStackParamList, StarterPage} from './Pages/StarterPage';
import {RootState, store} from './redux/store';
import FirstPage from './Pages/sinHomepage';
import {enableLatestRenderer} from 'react-native-maps';
import SystemNavigationBar from 'react-native-system-navigation-bar';

enableLatestRenderer();

export type LoggedInParamList = {
  Auth: undefined;
  LoggedIn: undefined;
};

const Stack = createNativeStackNavigator();
export type AuthScreenProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Login'>,
  NativeStackNavigationProp<LoggedInParamList, 'LoggedIn'>
>;
const App = () => {
  SystemNavigationBar.setNavigationColor('transparent');
  SystemNavigationBar.stickyImmersive();

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <>
      <NavigationContainer>
        {!isLoggedIn ? (
          <Stack.Navigator screenOptions={{orientation: 'portrait'}}>
            <Stack.Screen
              name="Auth"
              component={StarterPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{orientation: 'portrait'}}>
            <Stack.Screen
              name="LoggedIn"
              component={FirstPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'rgba(0,0,0,0.85)'}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
