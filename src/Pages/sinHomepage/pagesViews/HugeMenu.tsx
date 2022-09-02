import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React from 'react';
import ImageBg from '../../../components/background/ImageBackground';
import {useNavigation} from '@react-navigation/native';
import {StartApp} from '..';

const HugeMenu = () => {
  const navigation = useNavigation<StartApp>();
  BackHandler.addEventListener('hardwareBackPress', function () {
    return true;
  });
  return (
    <ImageBg>
      <Text style={styles.Motto}>
        We <Text style={styles.first}>fix</Text> you up in a{' '}
        <Text style={styles.secound}>blink</Text> of the eye.
      </Text>
      <View style={styles.Grid}>
        <TouchableOpacity
          style={styles.SingleMenuContainer}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('Home', {screen: 'order'});
          }}>
          <Image
            style={styles.Icon}
            source={{
              uri: 'https://static.networkmanager.pl/images/static/mainIcons/order.png',
            }}
          />
          <Text>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SingleMenuContainer}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('Home', {screen: 'recipes'});
            navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            });
          }}>
          <Image
            style={styles.Icon}
            source={{
              uri: 'https://static.networkmanager.pl/images/static/mainIcons/cook-book.png',
            }}
          />
          <Text>Recipes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Grid}>
        <TouchableOpacity
          style={styles.SingleMenuContainer}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('Home', {screen: 'buddyprogram'});
            navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            });
          }}>
          <Image
            style={styles.Icon}
            source={{
              uri: 'https://static.networkmanager.pl/images/static/mainIcons/buddy.png',
            }}
          />
          <Text>Buddy Program</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SingleMenuContainer}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('Home', {screen: 'profile'});
            navigation.reset({
              index: 0,
              routes: [{name: 'profile'}],
            });
          }}>
          <Image
            style={styles.Icon}
            source={{
              uri: 'https://static.networkmanager.pl/images/static/mainIcons/profile.png',
            }}
          />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </ImageBg>
  );
};

export default HugeMenu;

const styles = StyleSheet.create({
  Grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SingleMenuContainer: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.01)',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.45)',
    elevation: 3,
  },
  Icon: {
    height: '50%',
    aspectRatio: 1,
  },
  Motto: {
    fontSize: 33,
    fontFamily: 'Handlee-Regular',
    color: '#fff',
    textAlign: 'center',
  },
  first: {
    color: '#EA3651',
  },
  secound: {
    color: '#474641',
  },
});
