import {
  Alert,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Allergy} from '../../redux/User/types';
import {ShadowFlex} from 'react-native-neomorph-shadows';
import {useAppDispatch} from '../../redux/hooks';
import {deleteAllergies, updateAllergy} from '../../redux/User/thunks';
import {TextInput} from 'react-native-paper';

const AllergyItem = ({
  allergy,
  isEditModeEnabled,
}: {
  allergy: Allergy;
  isEditModeEnabled: boolean;
}) => {
  const dispatch = useAppDispatch();
  const [allergyString, setAllergyString] = useState<string | null>();

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
      {isEditModeEnabled ? (
        <TextInput
          style={styles.catName}
          placeholder={allergy.allergy_name}
          clearTextOnFocus
          onChangeText={text => setAllergyString(text)}
          value={allergyString ? allergyString : ''}
          onFocus={() => setAllergyString('')}
          onBlur={() => {
            if (allergyString !== undefined && allergyString !== null) {
              dispatch(
                updateAllergy({
                  a_id: allergy.id,
                  u_id: allergy.u_id,
                  a_name: allergyString,
                }),
              );
            } else Alert.alert('you didnt typed nothing');
          }}></TextInput>
      ) : (
        <Text style={styles.catName}>{allergy.allergy_name}</Text>
      )}
      {isEditModeEnabled && (
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => {
            console.log(allergy);
            dispatch(deleteAllergies({a_id: allergy.id, u_id: allergy.u_id}));
          }}>
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
    backgroundColor: 'transparent',
    height: 30,
    width: '90%',
    textAlign: 'left',
  },
});
