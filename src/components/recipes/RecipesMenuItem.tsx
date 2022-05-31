import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ShadowFlex} from 'react-native-neomorph-shadows';

const RecipesMenuItem = ({item}: {item: {name: string; icon: string}}) => {
  return (
    <ShadowFlex style={styles.itemContainer}>
      <Image
        style={{height: 40, aspectRatio: 1}}
        source={{
          uri: item.icon,
        }}
      />
      <Text>{item.name}</Text>
    </ShadowFlex>
  );
};

export default RecipesMenuItem;

const styles = StyleSheet.create({
  itemContainer: {
    height: 80,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
