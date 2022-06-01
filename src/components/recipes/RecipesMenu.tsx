import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RecipesMenuItem from './RecipesMenuItem';

import {default as menuIems} from '../../static/recipesMenu.json';

const RecipesMenu = () => {
  const [Selected, setSelected] = useState<{id: number; name: string}>({
    id: 0,
    name: 'Bakeris',
  });
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
