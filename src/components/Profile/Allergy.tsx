import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Allergy} from '../../redux/User/types';
import {ShadowFlex} from 'react-native-neomorph-shadows';

const AllergyItem = ({
  allergy,
  isEditModeEnabled,
}: {
  allergy: Allergy;
  isEditModeEnabled: boolean;
}) => {
  return (
    <ShadowFlex
      inner
      style={{
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowColor: 'black',
        shadowRadius: 3,
        borderRadius: 3,
        height: 40,
        paddingVertical: 3,
        paddingHorizontal: 6,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={styles.catName}>{allergy.allergy_name}</Text>
      {isEditModeEnabled && (
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Image
            style={{height: 20, aspectRatio: 1}}
            source={require('../../assets/utilityIcons/close.png')}
          />
        </TouchableOpacity>
      )}
    </ShadowFlex>
  );
};

export default AllergyItem;

const styles = StyleSheet.create({
  catName: {
    color: '#fff',
    textAlign: 'center',
  },
});
