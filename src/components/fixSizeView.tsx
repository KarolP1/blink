import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FixSizeView = (props: {height?: number}) => {
  return <View style={{height: props.height ? props.height : 100}}></View>;
};

export default FixSizeView;

const styles = StyleSheet.create({});
