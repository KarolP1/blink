import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SectionContainer from './Section';

const AllergiessSection = () => {
  const [isEditModeEnabled, setIsEditModeEnabled] = useState<boolean>(false);
  return (
    <SectionContainer.Add
      title={'Allergiess'}
      isEditModeEnabled={isEditModeEnabled}
      editAction={() => setIsEditModeEnabled(!isEditModeEnabled)}>
      <Text>AllergiessSection</Text>
    </SectionContainer.Add>
  );
};

export default AllergiessSection;

const styles = StyleSheet.create({});
