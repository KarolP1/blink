import {StyleSheet, Text, View} from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';
import React, {ReactNode} from 'react';

const ShadowContainer = ({
  children,
  width,
  height,
  backgroundColor,
}: {
  children: ReactNode;
  width: number;
  backgroundColor: string;
  shadowColor: string;
  height: number;
}) => {
  return (
    <Shadow
      useArt
      style={{
        margin: 10,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowColor: 'grey',
        shadowRadius: 10,
        borderRadius: 5,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        // ...include most of View/Layout styles
      }}>
      {children}
    </Shadow>
  );
};

export default ShadowContainer;

const styles = StyleSheet.create({});
