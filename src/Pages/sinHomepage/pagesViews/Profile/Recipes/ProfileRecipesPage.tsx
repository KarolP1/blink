import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RecipesMenu from '../../../../../components/recipes/RecipesMenu';
import {selectedMenuItem} from './Types';
import Sections from './Sections';
import FixSizeView from '../../../../../components/fixSizeView';
import SmallRecipe from './Components/SmallRecipe';

const ProfileRecipesPage = () => {
  const [Selected, setSelected] = useState<selectedMenuItem>({
    id: 0,
    name: 'Bakeris',
  });

  //#region adding new Recipes
  const [clicked, setClicked] = useState(false);
  const handleClickAdd = () => {
    setClicked(!clicked);
  };

  //#endregion
  return (
    <View>
      <RecipesMenu setSelected={setSelected} Selected={Selected} />

      <Sections.TopRecipes>
        <SmallRecipe
          editable={clicked}
          title="Homemade Cannoli"
          image="https://static.networkmanager.pl/images/recipes/example.png"
          likes={2201}
          shereCount={1802}
          observators={42023}
        />
        <SmallRecipe
          editable={clicked}
          title="Homemade Cannoli"
          image="https://static.networkmanager.pl/images/recipes/example.png"
          likes={2201}
          shereCount={1802}
          observators={42023}
        />
        <SmallRecipe
          editable={clicked}
          title="Homemade Cannoli"
          image="https://static.networkmanager.pl/images/recipes/example.png"
          likes={2201}
          shereCount={1802}
          observators={42023}
        />
        <SmallRecipe
          editable={clicked}
          title="Homemade Cannoli"
          image="https://static.networkmanager.pl/images/recipes/example.png"
          likes={2201}
          shereCount={1802}
          observators={42023}
        />
        <SmallRecipe
          editable={clicked}
          title="Homemade Cannoli"
          image="https://static.networkmanager.pl/images/recipes/example.png"
          likes={2201}
          shereCount={1802}
          observators={42023}
        />
      </Sections.TopRecipes>
      <Sections.AddRecipes onAddAction={handleClickAdd} open={clicked}>
        <SmallRecipe
          editable={clicked}
          title="Homemade Cannoli"
          image="https://static.networkmanager.pl/images/recipes/example.png"
          likes={2201}
          shereCount={1802}
          observators={42023}
        />
        <SmallRecipe
          editable={clicked}
          title="Homemade Cannoli"
          image="https://static.networkmanager.pl/images/recipes/example.png"
          likes={2201}
          shereCount={1802}
          observators={42023}
        />
        <SmallRecipe
          editable={clicked}
          title="Homemade Cannoli"
          image="https://static.networkmanager.pl/images/recipes/example.png"
          likes={2201}
          shereCount={1802}
          observators={42023}
        />
        <SmallRecipe
          editable={clicked}
          title="Homemade Cannoli"
          image="https://static.networkmanager.pl/images/recipes/example.png"
          likes={2201}
          shereCount={1802}
          observators={42023}
        />
        <SmallRecipe
          editable={clicked}
          title="Homemade Cannoli"
          image="https://static.networkmanager.pl/images/recipes/example.png"
          likes={2201}
          shereCount={1802}
          observators={42023}
        />
      </Sections.AddRecipes>
      <FixSizeView />
    </View>
  );
};

export default ProfileRecipesPage;

const styles = StyleSheet.create({});
