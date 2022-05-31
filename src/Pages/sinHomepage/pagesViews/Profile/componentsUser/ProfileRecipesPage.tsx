import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecipesMenu from '../../../../../components/recipes/RecipesMenu';

const ProfileRecipesPage = () => {
  return (
    <View>
      <RecipesMenu />
      <Text>ProfileRecipesPage</Text>
    </View>
  );
};

export default ProfileRecipesPage;

const styles = StyleSheet.create({});
