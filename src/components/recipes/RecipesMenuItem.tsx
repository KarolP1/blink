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
      <NeomorphFlex
        inner={isSelected}
        darkShadowColor="#rgba(0,0,0,0.1)" // <- set this
        lightShadowColor="#rgba(0,0,0,1.1)" // <- this
        style={{
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.1,
          shadowRadius: 3,
          borderRadius: 3,
          backgroundColor: 'rgba(170,154,144,0.55)',
          height: 90,
          aspectRatio: 1,
          margin: 10,
          paddingVertical: 3,
          paddingHorizontal: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 40, aspectRatio: 1}}
          source={{
            uri: item.icon,
          }}
        />
        <Text>{item.name}</Text>
      </NeomorphFlex>
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
