import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NeomorphFlex, ShadowFlex} from 'react-native-neomorph-shadows';

const RecipesMenuItem = ({
  item,
  selected,
  setSelected,
}: {
  item: {
    name: string;
    icon: string;
    id: number;
  };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
    }>
  >;
  selected: {
    id: number;
    name: string;
  };
}) => {
  const isSelected = selected.id === item.id;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => setSelected({id: item.id, name: item.name})}>
      <ShadowFlex
        inner={isSelected ? true : false} // <- enable inner shadow
        useArt // <- set this prop to use non-native shadow on ios
        style={{
          shadowOffset: {width: 5, height: 5},
          shadowOpacity: 1,
          shadowColor: 'rgba(77,77,77,.7)',
          shadowRadius: 5,
          borderRadius: 5,
          backgroundColor: 'rgba(171,160,145,0.7)',
          width: 90,
          height: 90,
          margin: 2,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 5,
        }}>
        <Image
          style={{height: 40, aspectRatio: 1}}
          source={{
            uri: item.icon,
          }}
        />
        <Text>{item.name}</Text>
      </ShadowFlex>
    </TouchableOpacity>
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
