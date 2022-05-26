import {
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SignedInBG from '../../../../../../components/background/ImageBackgroundSIN';
import {TextInputAddress} from '../../../../../../components/text/input';
import SingleRestaurant from './options/SingleRestaurant';
import GoogleMapsApi from '../../../../../../components/Maps';
import RestaurantsList from './RestaurantsList';

export type geoProps = {
  latitude: number;
  longitude: number;
};

export const initialStateGeolocation = {
  latitude: 0,
  longitude: 0,
};

const RestaurantPages = () => {
  const [Address, setAddress] = useState<string>('');
  const [geolocation, setGeolocation] = useState<geoProps>(
    initialStateGeolocation,
  );
  return (
    <SignedInBG cantGoBack={false}>
      <TextInputAddress
        value={Address}
        setValue={setAddress}
        onClickRight={() => console.log('secound')}
        placeholder="Type where are you want to eat"
        setGeolocation={setGeolocation}
        geolocation={geolocation}
      />
      <ScrollView>
        <GoogleMapsApi geolocation={geolocation} />
        <RestaurantsList geolocation={geolocation} />
      </ScrollView>
    </SignedInBG>
  );
};

export default RestaurantPages;

const styles = StyleSheet.create({});
