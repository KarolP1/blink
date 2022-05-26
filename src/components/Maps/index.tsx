import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {geoProps} from '../../Pages/sinHomepage/pagesViews/Order/SubPages/Restaurants/RestaurantPages';
import {default as restaurants} from '../../static/restaurants.json';
import SVGpin from '../../Icons/pin';

type Point = {
  x: Number;
  y: Number;
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: 10,
    borderRadius: 15,
  },
  map: {
    height: 200,
    width: '100%',
  },
});

export interface mapsProps {
  geolocation: geoProps;
}
export interface SingleRestaurantType {
  id: number;
  Business_Name: string;
  Cuisine: string;
  Address: string;
  Address1: string;
  City: string;
  State: string;
  Country: string;
  Full_address: string;
  Phone: string;
  Email: string;
  Website: string;
  Meals: string;
  Restaurant_features: string;
  Good_for: string;
  Open_hours: string;
  Description: string;
  latitude: number;
  longitude: number;
}

export default ({geolocation}: mapsProps) => {
  const [isMapReady, setIsMapReady] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      {
        <MapView
          // onMapReady={() => setIsMapReady(!isMapReady)}
          onMapLoaded={() => setIsMapReady(!isMapReady)}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: geolocation.latitude,
            longitude: geolocation.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker coordinate={geolocation} title="home">
            <SVGpin size={45} type="ProfileMan" color="rgba(25,25,25,0.75)" />
          </Marker>
          {restaurants.map((restaurant: SingleRestaurantType, key) => (
            <Marker
              key={key}
              coordinate={{
                latitude: restaurant.latitude,
                longitude: restaurant.longitude,
              }}
              title={restaurant.Business_Name}>
              <SVGpin color="rgb(25,25,25)" size={45} type="Pin" />
            </Marker>
          ))}
        </MapView>
      }
    </View>
  );
};
