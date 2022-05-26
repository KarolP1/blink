import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import Geolocation from '../geolocation';
import {
  geoProps,
  initialStateGeolocation,
} from '../../Pages/sinHomepage/pagesViews/Order/SubPages/Restaurants/RestaurantPages';

export const TextInputCuisine = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/utilityIcons/find.png')}
        />
      </TouchableOpacity>
      <TextInput style={styles.input} />
    </View>
  );
};

export const TextInputAddress = ({
  onClickRight,
  setValue,
  value,
  placeholder,
  setGeolocation,
  geolocation,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onClickRight: () => void;
  placeholder: string;
  setGeolocation: React.Dispatch<React.SetStateAction<geoProps>>;
  geolocation: geoProps;
}) => {
  useEffect(() => {
    Geolocation({setLocation: setGeolocation});
  }, []);

  useEffect(() => {
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
      .then(res => {
        if (res === true) {
          console.info('Pemision Granted');
          if (geolocation !== initialStateGeolocation) {
            setValue(`${geolocation.latitude} ,${geolocation.longitude}`); //TODO add to reducer
          }
        } else {
          console.info('Pemision Not Granted');
          PermissionsAndroid.request('android.permission.ACCESS_FINE_LOCATION');
        }
      })

      .catch((e: any) => console.log(e));
  }, [geolocation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          Geolocation({setLocation: setGeolocation});
        }}>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/utilityIcons/Order/pin.png')}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={text => setValue(text)}
        onPressIn={() => setValue('')}
      />
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/utilityIcons/Order/enter.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.15)',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderRadius: 0,
    margin: 0,
    padding: 0,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  iconContainer: {
    width: 50,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
});
