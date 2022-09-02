import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SectionContainer from './Section';
import {useAppDispatch, useAppSelector} from '../../../../../redux/hooks';
import {getUserAllergies} from '../../../../../redux/User/thunks';
import AllergyItem from '../../../../../components/Profile/Allergy';

const AllergiessSection = () => {
  const [isEditModeEnabled, setIsEditModeEnabled] = useState<boolean>(false);
  const state = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.uid !== null) {
      dispatch(getUserAllergies({uid: state.uid}));
    }
  }, [state, dispatch]);

  return (
    <SectionContainer.Add
      title={'Allergiess'}
      isEditModeEnabled={isEditModeEnabled}
      editAction={() => setIsEditModeEnabled(!isEditModeEnabled)}>
      {state.allergiess ? (
        state.allergiess?.map(element => (
          <AllergyItem
            allergy={element}
            key={element.id}
            isEditModeEnabled={isEditModeEnabled}
          />
        ))
      ) : (
        <Text>No alergies there. Feel free to add one or two.</Text>
      )}
    </SectionContainer.Add>
  );
};

export default AllergiessSection;

const styles = StyleSheet.create({});
