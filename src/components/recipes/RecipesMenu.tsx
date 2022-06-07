import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RecipesMenuItem from './RecipesMenuItem';

import {default as menuIems} from '../../static/recipesMenu.json';
import {selectedMenuItem} from '../../Pages/sinHomepage/pagesViews/Profile/Recipes/Types';

const RecipesMenu = ({
  Selected,
  setSelected,
}: {
  setSelected: React.Dispatch<React.SetStateAction<selectedMenuItem>>;
  Selected: selectedMenuItem;
}) => {
  return (
    <ScrollView horizontal={true} style={styles.ContainerMenu}>
      {menuIems.map(element => (
        <RecipesMenuItem
          item={element}
          key={element.id}
          selected={Selected}
          setSelected={setSelected}
        />
      ))}
    </ScrollView>
  );
};

export default RecipesMenu;

const styles = StyleSheet.create({
  ContainerMenu: {
    height: 110,
    overflow: 'hidden',
    direction: 'rtl',
  },
});
