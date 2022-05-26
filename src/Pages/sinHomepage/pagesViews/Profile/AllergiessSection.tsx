import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SectionContainer from './Section';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {getUserAllergies} from '../../../../redux/User/thunks';

const AllergiessSection = () => {
  const [isEditModeEnabled, setIsEditModeEnabled] = useState<boolean>(false);
  const state = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (state.uid !== null) {
      dispatch(getUserAllergies({uid: state.uid}));
    }
  }, [state.uid]);

  return (
    <SectionContainer.Add
      title={'Allergiess'}
      isEditModeEnabled={isEditModeEnabled}
      editAction={() => setIsEditModeEnabled(!isEditModeEnabled)}>
      <Text>{JSON.stringify(state)}</Text>
    </SectionContainer.Add>
  );
};

export default AllergiessSection;

const styles = StyleSheet.create({});
