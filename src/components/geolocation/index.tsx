import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GeoLocation from 'react-native-geolocation-service';

const Geolocation = ({
  setLocation,
}: {
  setLocation: React.Dispatch<
    React.SetStateAction<{
      latitude: number;
      longitude: number;
    }>
  >;
}) => {
  GeoLocation.getCurrentPosition(
    position => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};

export default Geolocation;

const styles = StyleSheet.create({});
