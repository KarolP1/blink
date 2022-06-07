import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import SmallRecipe from './Components/SmallRecipe';

const Section = ({children, title}: {children?: ReactNode; title?: string}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.titleContainer}>
        <Text style={{color: '#fff'}}>{title}</Text>
      </View>
      {children ? children : <Text>hello</Text>}
    </View>
  );
};

const TopSection = () => {
  return (
    <Section title="Your Best Recipes">
      <SmallRecipe
        title="Homemade Cannoli"
        image="https://static.networkmanager.pl/images/recipes/example.png"
        likes={2201}
        shereCount={1802}
        observators={42023}
      />
    </Section>
  );
};

const Sections = {
  TopRecipes: TopSection,
};

export default Sections;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    margin: 10,
  },
  titleContainer: {
    backgroundColor: '#464646',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
});
