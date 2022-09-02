import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';

const Section = ({
  children,
  title,
  SideAction,
  SideIcon,
  SideIcon2,
  open,
  SideIconClose,
}: {
  children?: ReactNode;
  title?: string;
  SideAction?: () => void;
  SideIcon?: ImageSourcePropType;
  SideIcon2?: ImageSourcePropType;
  SideIconClose?: ImageSourcePropType;
  open?: boolean;
}) => {
  return (
    <View style={styles.Container}>
      <View
        style={[
          styles.titleContainer,
          {
            backgroundColor: open ? '#EA3651' : '#464646',
          },
        ]}>
        <Text style={{color: '#fff'}}>{title}</Text>
        {SideIcon && SideIconClose && (
          <View
            style={{
              flexDirection: 'row-reverse',
              flex: 1,
              aspectRatio: 1,
            }}>
            <TouchableOpacity
              onPress={SideAction}
              style={{
                flex: 1,
                aspectRatio: 1,
                padding: 7,
              }}>
              <Image
                style={{flex: 1, aspectRatio: 1}}
                source={open === true ? SideIconClose : SideIcon}
              />
            </TouchableOpacity>
            {SideIcon2 && open && (
              <TouchableOpacity
                style={{
                  flex: 1,
                  aspectRatio: 1,
                  padding: 7,
                }}>
                <Image style={{flex: 1, aspectRatio: 1}} source={SideIcon2} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
      {children ? children : <Text>hello</Text>}
    </View>
  );
};

const TopSection = ({children}: {children?: ReactNode}) => {
  return (
    <Section title="Your Best Recipes">
      <ScrollView horizontal={true} style={{paddingVertical: 10}}>
        {children ? children : <View></View>}
      </ScrollView>
    </Section>
  );
};

const AddRecipeSection = ({
  children,
  onAddAction,
  open,
}: {
  children?: ReactNode;
  onAddAction: () => void;
  open: boolean;
}) => {
  return (
    <Section
      open={open}
      title="Your Recipes"
      SideAction={onAddAction}
      SideIcon={require('../../../../../assets/utilityIcons/edit.png')}
      SideIcon2={require('../../../../../assets/utilityIcons/add.png')}
      SideIconClose={require('../../../../../assets/utilityIcons/close.png')}>
      <ScrollView horizontal={true} style={{paddingVertical: 10}}>
        {children ? children : <View></View>}
      </ScrollView>
    </Section>
  );
};
const Sections = {
  TopRecipes: TopSection,
  AddRecipes: AddRecipeSection,
};

export default Sections;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
  titleContainer: {
    width: '100%',
    backgroundColor: 'red',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
});
