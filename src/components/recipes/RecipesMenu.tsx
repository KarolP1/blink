import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecipesMenuItem from './RecipesMenuItem';

import {default as menuIems} from '../../static/recipesMenu.json';

const RecipesMenu = () => {
  return (
    <ScrollView horizontal={true} style={styles.ContainerMenu}>
      {menuIems.map(element => (
        <RecipesMenuItem item={element} />
      ))}
    </ScrollView>
  );
};

export default RecipesMenu;

const styles = StyleSheet.create({
  ContainerMenu: {
    height: 100,
    overflow: 'hidden',
    direction: 'rtl',
  },
});
