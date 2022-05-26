import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SingleRestaurantType} from '../../../../../../../components/Maps';

const OpenHours = ({
  restaurant,
  setOpenHours,
}: {
  restaurant: SingleRestaurantType;
  setOpenHours: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const splited = restaurant.Open_hours.split(';');
  const today = new Date().getDay();
  const todayWHwithDay = splited[today];
  const todayWH = todayWHwithDay.split(' ').slice(2);
  const joined = mapHoursToState(todayWH);
  return (
    <View style={styles.bg}>
      <Text style={styles.text}>{joined}</Text>
    </View>
  );
};

const mapHoursToState = (props: string[]) => {
  let res = '';
  props.forEach((element: string) => (res = res + element));
  return res;
};

export default OpenHours;

const styles = StyleSheet.create({
  bg: {
    height: 30,
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(196,196,196,.75)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(196,196,196,1)',
    borderRadius: 5,
    padding: 1,
    marginHorizontal: 5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    fontSize: 9,
  },
});
