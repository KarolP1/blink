import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RecipesMenu from '../../../../../components/recipes/RecipesMenu';
import {selectedMenuItem} from './Types';
import Sections from './Sections';
import FixSizeView from '../../../../../components/fixSizeView';

const ProfileRecipesPage = () => {
  const [Selected, setSelected] = useState<selectedMenuItem>({
    id: 0,
    name: 'Bakeris',
  });
  return (
    <View>
      <RecipesMenu setSelected={setSelected} Selected={Selected} />

      <Sections.TopRecipes />
      <FixSizeView />
    </View>
  );
};

export default ProfileRecipesPage;

const styles = StyleSheet.create({});
